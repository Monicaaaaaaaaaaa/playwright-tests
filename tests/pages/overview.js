import { expect } from '@playwright/test';

export class Overview {
    constructor(page) {
        this.page = page;
        this.overviewTitle = page.getByText('Checkout: Overview');
        this.finishButton = page.getByRole('button', { name: 'Finish' });
    }

    async overview() {
        await expect(this.overviewTitle).toBeVisible();
    }

    async finish() {
        await this.finishButton.click();
    }
}