import { Given, Then, When } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import * as defaults from "../support/hook";

Given("user navigate to the homepage", async function () {
  const stage = process.env.npm_config_stage || "beta";

  const url = defaults.getEnvInfo(stage);

  await defaults.page.goto("https://" + url);
});

Then(
  "home page has the {string} {string}",
  async function (locationString, textString) {
    if (locationString == "header") {
      const title = await defaults.page.title();
      expect(title).toBe(textString);
    } else if (locationString == "footer") {
      const locator = defaults.page.locator(".footer");
      await expect(locator).toContainText(textString);
    } else if (locationString == "button") {
      const locator = defaults.page.locator(".next-button");
      await expect(locator).toContainText(textString);
    } else if (locationString == "image") {
      const image = defaults.page.locator("img");
      const src = await image.getAttribute("src");

      expect(src).toBe(textString);
    }
  },
);

Then("home page contains the text", async function (docString) {
  // Write code here that turns the phrase above into concrete actions

  const locator = defaults.page.locator(".main article");
  const innerText = await locator.allInnerTexts();

  expect(innerText[0]).toBe(docString);
});

Given("view the image with  class {string}", async function (string) {
  // Write code here that turns the phrase above into concrete actions
  const image = defaults.page.locator("img");
  this.srcPreviousImage = await image.getAttribute("src");
});

When(
  "user click the button with class {string}",
  async function (buttonLocator) {
    // Write code here that turns the phrase above into concrete actions
    // await defaults.page.screenshot({ path: "screenshot.png" });
    const nextButton = await defaults.page.$("text='Next page'");
    //scroll until the button is visible
    await nextButton.scrollIntoViewIfNeeded();
    await nextButton.click();
  },
);

Then("image on the homepage will change", async function () {
  // Write code here that turns the phrase above into concrete actions
  const image = defaults.page.locator("img");
  this.srcNewImage = await image.getAttribute("src");

  expect(this.srcPreviousImage).not.toBe(this.srcNewImage);
  // await defaults.page.waitForTimeout(3000);
});
