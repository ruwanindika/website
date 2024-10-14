import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import { Bucket, BucketAccessControl } from "aws-cdk-lib/aws-s3";
import { BucketDeployment, Source } from "aws-cdk-lib/aws-s3-deployment";
import { Key, KeySpec, KeyUsage } from "aws-cdk-lib/aws-kms";
import { HostedZone } from "aws-cdk-lib/aws-route53";
import {
  OriginAccessIdentity,
  CloudFrontWebDistribution,
} from "aws-cdk-lib/aws-cloudfront";
import * as defaults from "./defaults";
import * as path from "path";

export interface myStackProps extends cdk.StackProps {
  deploymentStage: string;
}

export class CdkInfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: myStackProps) {
    super(scope, id, props);

    const stage = props?.deploymentStage;

    if (stage == "prod") {
      const kmsKey = new Key(this, "KmsCMK", {
        keySpec: KeySpec.ECC_NIST_P256,
        keyUsage: KeyUsage.SIGN_VERIFY,
      });

      const hostedZone = new HostedZone(this, "HostedZone", {
        zoneName: "sinhalaforkids.com",
      });
      // Enable DNSSEC signing for the zone
      // hostedZone.enableDnssec({ kmsKey });
      
      
    }

    const bucket = new Bucket(this, "Bucket", {
      accessControl: BucketAccessControl.PRIVATE,
    });

    const originAccessIdentity = new OriginAccessIdentity(
      this,
      "OriginAccessIdentity",
    );
    bucket.grantRead(originAccessIdentity);

    const distribution = new CloudFrontWebDistribution(
      this,
      "sinhalaforkidswebsite",
      {
        originConfigs: [
          {
            s3OriginSource: {
              s3BucketSource: bucket,
              originAccessIdentity: originAccessIdentity,
            },
            behaviors: [{ isDefaultBehavior: true }],
          },
        ],
        viewerCertificate: {
          aliases: defaults.getEnvInfo(stage),
          props: {
            acmCertificateArn:
              "arn:aws:acm:us-east-1:161580273020:certificate/426b4617-2a77-4fc5-85b5-454daff6bd5e",
            sslSupportMethod: "sni-only",
            minimumProtocolVersion: "TLSv1.2_2021",
          },
        },
      },
    );

    new BucketDeployment(this, "BucketDeployment", {
      destinationBucket: bucket,
      // sources: [Source.asset("/builds/personal1741534/website/dist")],
      sources: [Source.asset(path.resolve(__dirname, "../../dist"))],
      distribution,
      distributionPaths: ["/*"],
    });
  }
}
