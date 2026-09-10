import { expect } from '@playwright/test';

export class Checkout {

    constructor(page) {
        this.page = page;
        this.checkoutTitle = page.getByText('Checkout: Your Information');
        this.firstNameInput = page.getByPlaceholder('First Name');
        this.lastNameInput = page.getByPlaceholder('Last Name');
        this.postalCodeInput = page.getByPlaceholder('Zip/Postal Code');
        this.continueButton = page.getByRole('button', { name: 'Continue' });
    }

    async checkCheckout() {
        await expect(this.checkoutTitle).toBeVisible();
    }
    async fillInformation(firstName, lastName, postalCode) {
        await this.firstNameInput.fill(firstName);
        await this.lastNameInput.fill(lastName);
        await this.postalCodeInput.fill(postalCode);
    }
    async continue() {
        await this.continueButton.click();
    }
}
