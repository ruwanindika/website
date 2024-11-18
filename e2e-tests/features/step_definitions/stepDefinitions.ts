import { Given, Then, When } from '@cucumber/cucumber';
import { test, expect } from '@playwright/test';
const { webkit } = require('playwright');
import * as defaults from "../support/hook";

Given('test one exec', async function () {
   // Write code here that turns the phrase above into concrete actions
//   const browser = await webkit.launch();
//   const context = await browser.newContext();
//   const page = await context.newPage();
    const stage = process.env.npm_config_stage || "beta";

  let page = defaults.page;
  
  const url = defaults.getEnvInfo(stage)
  
  await page.goto('https:/'+url);
//   await page.screenshot({ path: 'screenshot.png' });
  const title = await page.title();
  
  expect(title).toBe('Sinhala for kids');
  
//   await expect(page).toHaveTitle(/Sinhala for kids/);
  
 });