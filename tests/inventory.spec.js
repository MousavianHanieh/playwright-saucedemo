import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.js";
import { InventoryPage } from "../pages/InventoryPage.js";

test.describe("Inventory Tests", () => {
  let loginPage;
  let inventoryPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    inventoryPage = new InventoryPage(page);
    await loginPage.goto();
    await loginPage.login("standard_user", "secret_sauce");
  });

  test("inventory page shows 6 products", async ({ page }) => {
    await expect(inventoryPage.inventoryItems).toHaveCount(6);
  });

  test("inventory page title is correct", async ({ page }) => {
    await expect(inventoryPage.pageTitle).toHaveText("Products");
  });
  test("add to cart updates badge", async ({ page }) => {
    await inventoryPage.addToCartButton.click();
    await expect(inventoryPage.cartBadge).toHaveText("1");
  });
});
