import { test } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import { Dashboard } from '../pages/dashboard';
import { Cart } from '../pages/cart';
import { Checkout } from '../pages/checkout';
import { Overview } from '../pages/overview';
import { CompleteOrder } from '../pages/completeOrder';

test.describe('SauceDemo E2E Test', () => {

    test('user can complete the full purchase flow @e2e', async ({ page }) => {
        const loginPage = new LoginPage(page);
        const dashboard = new Dashboard(page);
        const cart = new Cart(page);
        const checkout = new Checkout(page);
        const overview = new Overview(page);
        const completeOrder = new CompleteOrder(page);

        await loginPage.goto();
        await loginPage.login('standard_user', 'secret_sauce');
        await dashboard.checkDashboard();
        await dashboard.addProduct();
        await dashboard.openCart();
        await cart.confirmCart();
        await cart.checkout();
        await checkout.checkCheckout();
        await checkout.fillInformation(
            'Monica',
            'Oguntona',
            '100001'
        );
        await checkout.continue();
        await overview.overview();
        await overview.finish();
        await completeOrder.orderComplete();
        await completeOrder.backHome();
        await dashboard.checkDashboard();
        await dashboard.logout();
        await loginPage.checkLoginPage();
    });

});
