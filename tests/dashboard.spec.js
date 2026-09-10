import { test, expect } from '@playwright/test';
import { Dashboard } from './pages/dashboard';

test.describe('Dashboard Tests', () => {

    test('user can access dashboard with saved login session @smoke', async ({ page }) => {
        const dashboard = new Dashboard(page);

        await page.goto('https://www.saucedemo.com/inventory.html');

        await dashboard.checkDashboard();
    });

    test('user can sort products from Z to A', async ({ page }) => {
        const dashboard = new Dashboard(page);

        await page.goto('https://www.saucedemo.com/inventory.html');

        await dashboard.sortProducts('za');

        const products = await page.locator('.inventory_item_name').allTextContents();

        const expectedOrder = [...products].sort().reverse();

        expect(products).toEqual(expectedOrder);
    });

    test('user can open a product details page', async ({ page }) => {
        const dashboard = new Dashboard(page);

        await page.goto('https://www.saucedemo.com/inventory.html');

        await dashboard.openProduct();

        await expect(page).toHaveURL(/inventory-item.html/);
        await expect(page.getByText('Sauce Labs Backpack')).toBeVisible();
    });

});
