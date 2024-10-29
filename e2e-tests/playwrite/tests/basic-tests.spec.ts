import { test, expect } from "@playwright/test";

const deploymentStage = process.env.STAGE || "beta";

let URL: string;

if (deploymentStage == "beta") {
  URL = "https://beta.sinhalaforkids.com/";
} else {
  URL = "https://sinhalaforkids.com/";
}

test.beforeEach(async ({ page }) => {
  await page.goto(URL);
});

test("has title", async ({ page }) => {
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Sinhala for kids/);
});

test("has image", async ({ page }) => {
  // Expect a page "to contain" an image.
  await expect(page.locator("id=book-img")).toBeVisible();
});

// test("get started link", async ({ page }) => {
//   await page.goto("https://playwright.dev/");

//   // Click the get started link.
//   await page.getByRole("link", { name: " Next page" }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(
//     page.getByRole("heading", { name: "Installation" }),
//   ).toBeVisible();
// });
