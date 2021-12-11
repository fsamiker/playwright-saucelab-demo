import { test, expect } from '@playwright/test';
import { CartPage } from '../app/saucelab/pages/cartPage';
import { CheckoutAddrPage } from '../app/saucelab/pages/checkout/checkoutAddressPage';
import { CheckoutCompletePage } from '../app/saucelab/pages/checkout/checkoutCompletePage';
import { CheckoutOverviewPage } from '../app/saucelab/pages/checkout/checkoutOverviewPage';
import { ProductsPage } from '../app/saucelab/pages/productPage';


test.describe('Item checkout', () => {

    // Use global signed-in storage
    test.use({ storageState: 'storageState.json' });

    test('Successful checkout @flow', async ({ page }) => {
        // Add item to cart
        const prodPage = new ProductsPage(page);
        await prodPage.goto();
        await prodPage.productsList.first().locator('div.pricebar >> text=Add to cart').click();
        await prodPage.cartButton.click();

        const cartPage = new CartPage(page);
        await expect(cartPage.cartItemsList.first().locator('div.inventory_item_name')).toContainText('Sauce Labs Backpack');
        await cartPage.checkoutButton.click();

        // Checkout
        const checkoutAddr = new CheckoutAddrPage(page);
        await checkoutAddr.firstNameTextbox.fill('Tony');
        await checkoutAddr.lastNameTextbox.fill('Stark');
        await checkoutAddr.postcodeTextbox.fill('12345');
        await checkoutAddr.continueButton.click();

        const checkoutOverview = new CheckoutOverviewPage(page);
        await expect(checkoutOverview.cartItemsList.first().locator('div.inventory_item_name')).toContainText('Sauce Labs Backpack');
        await expect(checkoutOverview.cartTotalSummary).toContainText('Total: $32.39');
        await checkoutOverview.finishButton.click();

        // Confirmation order
        const checkoutConfirm = new CheckoutCompletePage(page);
        await expect(checkoutConfirm.completeTitle).toContainText('THANK YOU FOR YOUR ORDER');
        await expect(checkoutConfirm.completeMessage).toContainText('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
        await checkoutConfirm.backHomeButton.click();
        await page.waitForURL('/inventory.html');

    });
});
