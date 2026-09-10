import { test } from '@playwright/test';
import { Dashboard } from './pages/dashboard';
import { Cart } from './pages/cart';

test.describe('Cart Tests', () => {

    test('user can add a product to cart', async ({ page }) => {
        const dashboard = new Dashboard(page);
        const cart = new Cart(page);
        await page.goto('https://www.saucedemo.com/inventory.html');
        await dashboard.addProduct();
        await dashboard.openCart();
        await cart.confirmCart();
    });

});