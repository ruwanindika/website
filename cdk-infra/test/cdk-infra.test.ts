import * as cdk from "aws-cdk-lib";
import { Template } from "aws-cdk-lib/assertions";
import * as CdkInfra from "../lib/cdk-infra-stack";
import * as defaults from "../lib/defaults";

// example test. To run these tests, uncomment this file along with the
// example resource in lib/cdk-infra-stack.ts

// PROD stage testing

let template: Template;

beforeAll(() => {
  const app = new cdk.App({ outdir: "cdk.out" });
  const stack = new CdkInfra.CdkInfraStack(app, "MyTestStack-PROD", {
    env: defaults.PROD_ENV,
    deploymentStage: "prod",
  });

  template = Template.fromStack(stack);
});



describe("website cdk testsuite", () => {
  test("Web site s3 bucket is private", () => {
    template.hasResourceProperties("AWS::S3::Bucket", {
      AccessControl: "Private",
    });
  });
});
