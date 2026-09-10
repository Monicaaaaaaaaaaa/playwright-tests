import { test } from '@playwright/test';
import { LoginPage } from './pages/loginPage.js';

test('Global Login', async ({ page }) => {

    const loginPage = new LoginPage(page);

    await test.step('Navigate to SauceDemo website', async () => {
        await loginPage.goto();
    });

    await test.step('Login with valid credentials', async () => {
        await loginPage.login('standard_user', 'secret_sauce');
    });

    await test.step('Save login session', async () => {
        await page.context().storageState({
            path: 'storageState.json'
        });
    });

});