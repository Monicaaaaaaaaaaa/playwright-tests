import {test, expect} from '@playwright/test';
async function login(page, username, password) {
    await page.getByPlaceholder('Username').fill(username);
    await page.getByPlaceholder('Password').fill(password);
    await page.getByRole('button', { name: 'Login' }).click();
}
test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
});
test('successful login', async ({ page}) => {
    await login(page, 'standard_user', 'secret_sauce');
    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
    await expect(page.getByText('Products')). toBeVisible();
});

test('Verify user cannot log in with an invalid password.', async ({ page}) => {
    await login(page, 'standard_user', 'wrong_password');
    await expect(page).toHaveURL('https://www.saucedemo.com/');
    await expect(page.getByText('Epic sadface: Username and password do not match any user in this service')).toBeVisible();
    await expect(loginPage.usernameInput).toHaveValue('');
    await expect(loginPage.passwordInput).toHaveValue('');
    await expect(loginPage.loginButton).toBeDisabled();
    
});