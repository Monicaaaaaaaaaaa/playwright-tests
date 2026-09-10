import { test } from '@playwright/test';
import { Dashboard } from './pages/dashboard';
import { Cart } from './pages/cart';
import { Checkout } from './pages/checkout';

test('user can fill checkout information', async ({ page }) => {
    const dashboard = new Dashboard(page);
    const cart = new Cart(page);
    const checkout = new Checkout(page);

    await page.goto('https://www.saucedemo.com/inventory.html', {
        waitUntil: 'domcontentloaded',
        timeout: 60000
    });

    await dashboard.checkDashboard();
    await dashboard.addProduct();
    await dashboard.openCart();
    await cart.checkout();
    await checkout.checkCheckout();
    await checkout.fillInformation(
        'Monica',
        'Oguntona',
        '100001'
    );
    await checkout.continue();
});