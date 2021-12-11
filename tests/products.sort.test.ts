import { test, expect } from '@playwright/test';
import { ProductsPage } from '../app/saucelab/pages/productPage';


test.describe('Products Sorting', () => {

    test.use({ storageState: 'storageState.json' });

    const testParams: string[][] = [
        ['Name (A to Z)', 'Sauce Labs Backpack'],
        ['Name (Z to A)', 'Test.allTheThings() T-Shirt (Red)'],
        ['Price (low to high)', 'Sauce Labs Onesie'],
        ['Price (high to low)', 'Sauce Labs Fleece Jacket']
    ];

    for (const params of testParams) {
        test(`Sort by ${params[0]}`, async ({ page }) => {
            const prodPage = new ProductsPage(page);
            await prodPage.goto();
            await prodPage.prodFilterDropdown.selectOption({ label: params[0] });
            page.pause();
            await expect(prodPage.productsList.first().locator('div.inventory_item_name')).toContainText(params[1]);
        });
    };
});
