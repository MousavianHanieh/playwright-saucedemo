import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.js";

test.describe("Login Tests", () => {
  let loginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test("login with valid credentials", async ({ page }) => {
    await loginPage.login("standard_user", "secret_sauce");
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html");
  });

  test("login with invalid credentials", async ({ page }) => {
    await loginPage.login("wrong_user", "wrong_password");
    await expect(loginPage.errorMessage).toBeVisible();
  });
});
