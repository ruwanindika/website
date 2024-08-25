import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import {Bucket, BucketAccessControl} from "aws-cdk-lib/aws-s3";

// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class CdkInfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here

    // example resource
    // const queue = new sqs.Queue(this, 'CdkInfraQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });

    const bucket = new Bucket(this, 'Bucket', {
      accessControl: BucketAccessControl.PRIVATE,
    })
    
  }
}
