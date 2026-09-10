import {test, expect} from '@playwright/test';

test('open bing homepage', async ({page}) => {
    await page.goto('https://www.bing.com/');

    await expect(page).toHaveTitle(/Bing/);
}); 