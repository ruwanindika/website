import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import {Bucket, BucketAccessControl} from "aws-cdk-lib/aws-s3";
import {BucketDeployment, Source} from "aws-cdk-lib/aws-s3-deployment";
import * as path from "path";
import {Distribution, OriginAccessIdentity, SecurityPolicyProtocol,SSLMethod,ViewerCertificate,CloudFrontWebDistribution} from "aws-cdk-lib/aws-cloudfront";
import {S3Origin} from "aws-cdk-lib/aws-cloudfront-origins";

export class CdkInfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const bucket = new Bucket(this, 'Bucket', {
      accessControl: BucketAccessControl.PRIVATE,
    })

    new BucketDeployment(this, 'BucketDeployment', { 
      destinationBucket: bucket,
      sources: [Source.asset(path.resolve(__dirname, '../../dist'))]
    })
    
    const originAccessIdentity = new OriginAccessIdentity(this, 'OriginAccessIdentity');
    bucket.grantRead(originAccessIdentity);
    
    // new Distribution(this, 'Distribution', 
    //   {
    //   defaultRootObject: 'index.html',
    //   defaultBehavior: {
    //     origin: new S3Origin(bucket, {originAccessIdentity}),
    //   },
    // })


    const distribution = new CloudFrontWebDistribution(this, 'sinhalaforkidswebsite', {
      originConfigs: [{
        s3OriginSource: { s3BucketSource: bucket ,originAccessIdentity:originAccessIdentity},
        behaviors: [{ isDefaultBehavior: true }],
      }],
      viewerCertificate: {
        aliases: ['sinhalaforkids.com','www.sinhalaforkids.com'],
        props: {
          acmCertificateArn: 'arn:aws:acm:us-east-1:161580273020:certificate/cc7331bc-50a6-4183-b87b-44f568eae2b7',
          // sslSupportMethod: 'sni-only',
          // minimumProtocolVersion: 'TLSv1.1_2016',
        }
      },
    });

  }
}
