import * as cdk from "aws-cdk-lib";
import { Match, Template } from "aws-cdk-lib/assertions";
import * as CdkInfra from "../lib/cdk-infra-stack";
import * as defaults from "../lib/defaults";

// example test. To run these tests, uncomment this file along with the
// example resource in lib/cdk-infra-stack.ts

let template: Template;
const stageArg = process.argv.filter((x) => x.startsWith("-stage="))[0];
const stage = stageArg ? stageArg.split("=")[1] : "prod"; // default

beforeAll(() => {
  const app = new cdk.App({ outdir: "cdk.out" });
  const stack = new CdkInfra.CdkInfraStack(app, "MyTestStack-PROD", {
    env: defaults.getEnvStage(stage),
    deploymentStage: stage,
  });

  template = Template.fromStack(stack);
});

describe("website cdk testsuite - deployment stage:" + stage, () => {
  test("Web site s3 bucket is private", () => {
    template.hasResourceProperties("AWS::S3::Bucket", {
      AccessControl: "Private",
    });
  });

  test("cloudfron URL is " + defaults.getStageURL(stage), () => {
    template.hasResourceProperties(
      "AWS::CloudFront::Distribution",
      Match.objectLike({
        DistributionConfig: { Aliases: [defaults.getStageURL(stage)] },
      }),
    );
  });
});
