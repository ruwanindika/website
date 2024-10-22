import * as cdk from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import * as CdkInfra from "../lib/cdk-infra-stack";
import * as defaults from "../lib/defaults";

// example test. To run these tests, uncomment this file along with the
// example resource in lib/cdk-infra-stack.ts

// PROD stage testing
const app = new cdk.App();
const stack = new CdkInfra.CdkInfraStack(app, "MyTestStack-PROD", {
  env: defaults.PROD_ENV,
  deploymentStage: "prod",
});

const template = Template.fromStack(stack);



  
test("Web site s3 bucket is private", () => {
  template.hasResourceProperties("AWS::S3::Bucket", {
    AccessControl: "Private",
  });
});

  

