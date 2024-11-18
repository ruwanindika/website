import { After, AfterAll, BeforeAll, Status, World } from "@cucumber/cucumber";
import { chromium, Browser, Page } from "playwright";

export let browser: Browser;
export let page: Page;

BeforeAll({ timeout: 10 * 1000 }, async function (this: World) {
  browser = await chromium.launch({
    headless: true,
  });
  page = await browser.newPage();
  return page;
});

AfterAll(async function (this: World) {
  return browser.close();
});

After(async function (scenario) {
  if (scenario.result?.status === Status.FAILED) {
    const attach = this.attach;
    const screenshot = await page.screenshot();

    return attach(screenshot, "image/png");
  }
  await browser.close();
});

export const PROD_URL = "sinhalaforkids.com";
export const BETA_URL = "beta.sinhalaforkids.com";

export function getEnvInfo(deploymentStage: any) {
  let returnValue: string;

  if (deploymentStage == "prod") {
    returnValue = PROD_URL;
  } else if (deploymentStage == "beta") {
    returnValue = BETA_URL;
  } else {
    console.log("Stage not found : " + deploymentStage);
  }

  return returnValue;
}
