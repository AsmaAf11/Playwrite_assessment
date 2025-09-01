// checkout.spec.js
const { test, expect } = require('@playwright/test');

function getRandomIndexes(total, count) {
    const indexes = [];
    while (indexes.length < count) {
      const rand = Math.floor(Math.random() * total);
      if (!indexes.includes(rand)) {
        indexes.push(rand);
      }
    }
    return indexes;
  }

test('Successful checkout flow with 3 random items', async ({ page }) => {
  // Login
  await page.goto('/');
  await page.fill('[data-test="username"]', 'standard_user');
  await page.fill('[data-test="password"]', 'secret_sauce');
  await page.click('[data-test="login-button"]');
  await expect(page).toHaveURL(/inventory.html/);

  // Select 3 random items
  const items = await page.$$('.inventory_item');
  const randomIndexes = getRandomIndexes(items.length, 3);

  for (const index of randomIndexes) {
    const addButton = await items[index].$('button');
    await addButton.click();
  }

  // Assert 3 items in cart
  const cartBadge = page.locator('.shopping_cart_badge');
  await expect(cartBadge).toHaveText('3');

  //  Go to cart
  await page.click('.shopping_cart_link');
  await expect(page).toHaveURL(/cart.html/);
  await expect(page.locator('.cart_item')).toHaveCount(3);

  // Checkout
  await page.click('[data-test="checkout"]');
  await page.fill('[data-test="firstName"]', 'Asma');
  await page.fill('[data-test="lastName"]', 'Ali');
  await page.fill('[data-test="postalCode"]', '12345');
  await page.click('[data-test="continue"]');

  // Assert overview page
  await expect(page.locator('.summary_total_label')).toBeVisible();

  //  Finish order
  await page.click('[data-test="finish"]');
  await expect(page.locator('.complete-header')).toHaveText('Thank you for your order!');
});