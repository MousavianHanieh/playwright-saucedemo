export class InventoryPage {
  constructor(page) {
    this.page = page;
    this.inventoryItems = page.locator(".inventory_item");
    this.pageTitle = page.locator(".title");
    this.addToCartButton = page.locator(
      '[data-test="add-to-cart-sauce-labs-backpack"]'
    );
    this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
  }
}
