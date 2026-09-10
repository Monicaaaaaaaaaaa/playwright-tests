import { expect } from '@playwright/test';

export class Cart {
    constructor(page) {
        this.page = page;
        this.cartTitle = page.getByText('Your Cart');
        this.checkoutButton = page.getByRole('button', { name: 'Checkout' });
    }
    async confirmCart() {
        await expect(this.cartTitle).toBeVisible();
    }
    async checkout() {
        await this.checkoutButton.click();
    }
}
