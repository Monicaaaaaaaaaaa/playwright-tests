import { test, expect } from '@playwright/test';
import {LoginPage} from './pages/loginPage';

test.describe('Authorization Tests', () => {
    test('Verify the standard user is able to log in to SauceDemo website', async ({ page }) => {
        let loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('standard_user', 'secret_sauce');
        await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
        await expect(page.getByText('Products')).toBeVisible();
    });
});
