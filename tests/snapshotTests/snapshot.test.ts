import { test, expect } from '@playwright/test';
import { LoginPage } from '../../app/saucelab/pages/loginPage';
import { ProductsPage } from '../../app/saucelab/pages/productPage';

// Use global signed-in storage
test.use({ storageState: 'storageState.json' });

test.describe('Snapshots tests @snapshots', ()=> {
    // Use global signed-in storage
    test.use({ storageState: 'storageState.json' });

    test('Login Page', async ({ page }) => {
        const loginPage = new LoginPage(page);
        await loginPage.goto();
        expect(await page.screenshot({fullPage: true})).toMatchSnapshot('login.png');
    });

    test('Products Page', async ({ page }) => {
        const productsPage = new ProductsPage(page);
        await productsPage.goto();
        expect(await page.screenshot({fullPage: true})).toMatchSnapshot('products.png');
    });
});