import { test, expect } from '@playwright/test';
import { LoginPage } from '../app/saucelab/pages/loginPage';
import { ProductsPage } from '../app/saucelab/pages/productPage';


test.describe('Products Sorting', () => {

    const testParams: string[][] = [
        ['Name (A to Z)', 'Sauce Labs Backpack'],
        ['Name (Z to A)', 'Test.allTheThings() T-Shirt (Red)'],
        ['Price (low to high)', 'Sauce Labs Onesie'],
        ['Price (high to low)', 'Sauce Labs Fleece Jacket']
    ];

    for (const params of testParams) {
        test(`Sort by ${params[0]}`, async ({ page }) => {
            const loginPage = new LoginPage(page);
            await loginPage.goto();
            await loginPage.enterCredentials('standard_user', 'secret_sauce');
            await loginPage.loginButton.click();
            expect(page.url()).toEqual('https://www.saucedemo.com/inventory.html');
    
            const prodPage = new ProductsPage(page);
            await prodPage.prodFilterDropdown.selectOption({ label: params[0] });
            page.pause();
            await expect(prodPage.productsList.first().locator('div.inventory_item_name')).toContainText(params[1]);
        });
    };
});
