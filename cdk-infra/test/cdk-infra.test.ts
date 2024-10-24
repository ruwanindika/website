import * as cdk from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import * as CdkInfra from "../lib/cdk-infra-stack";
import * as defaults from "../lib/defaults";

// example test. To run these tests, uncomment this file along with the
// example resource in lib/cdk-infra-stack.ts

// PROD stage testing

// beforeAll(() => {

// });

describe("website cdk testsuite", () => {
  it.each([["prod"], ["beta"]])(
    "Web site s3 bucket is private - deployment stage: %s",
    (stage: string) => {
      const app = new cdk.App({ outdir: "cdk.out" });
      const stack = new CdkInfra.CdkInfraStack(app, "MyTestStack-PROD", {
        env: defaults.getEnvStage(stage),
        deploymentStage: stage,
      });

      const template = Template.fromStack(stack);
      
      template.hasResourceProperties("AWS::S3::Bucket", {
        AccessControl: "Private",
      });
    },
  );
});
