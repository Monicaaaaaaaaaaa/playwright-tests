import { expect } from '@playwright/test';

export class Dashboard {

    constructor(page) {
        this.page = page;

        this.productsTitle = page.getByText('Products');
        this.sortDropdown = page.getByRole('combobox');
        this.backpackLink = page.getByText('Sauce Labs Backpack');
        this.cartIcon = page.locator('.shopping_cart_link');
        this.addToCartButton = page.getByRole('button', { name: 'Add to cart' }).first();
        this.menuButton = page.getByRole('button', { name: 'Open Menu' });
        this.logoutLink = page.getByText('Logout');
    }

    async checkDashboard() {
        await expect(this.productsTitle).toBeVisible();
    }

    async sortProducts(option) {
        await this.sortDropdown.selectOption(option);
    }

    async openProduct() {
        await this.backpackLink.click();
    }

    async addProduct() {
        await this.addToCartButton.click();
    }

    async openCart() {
        await this.cartIcon.click();
    }

    async logout() {
        await this.menuButton.click();
        await this.logoutLink.click();
    }
}