import { expect } from '@playwright/test';

export class CompleteOrder {
    constructor(page) {
        this.page = page;
        this.completeMessage = page.getByText('Thank you for your order!');
        this.backHomeButton = page.getByRole('button', { name: 'Back Home' });
    }

    async orderComplete() {
        await expect(this.completeMessage).toBeVisible();
    }
    async backHome() {
        await this.backHomeButton.click();
    }
}