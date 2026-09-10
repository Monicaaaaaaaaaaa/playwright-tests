import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/loginPage';

test.describe('Login Page Tests', () => {
    test('Successful login', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('standard_user', 'secret_sauce');
        await expect(page).toHaveURL(/inventory.html/);
        await expect(page.getByText('Products')).toBeVisible();
    });
});

    test('locked out user cannot login @negative', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('locked_out_user', 'secret_sauce');
        await expect(loginPage.errorMessage).toContainText(
            'Sorry, this user has been locked out.'
        );
    });

    test('user cannot login with empty credentials @negative', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        await loginPage.login('', '');
        await expect(loginPage.errorMessage).toContainText(
            'Epic sadface: Username is required'
        );
    });

