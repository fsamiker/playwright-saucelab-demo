import { Locator, Page } from '@playwright/test';
import { SaucelabBasePage } from './utils/basePage';

export class CartPage extends SaucelabBasePage {
    readonly cartItemsList: Locator;
    readonly checkoutButton: Locator;


    constructor(page: Page) {
        super(page);
        this.cartItemsList = page.locator('div.cart_list >> div.cart_item');
        this.checkoutButton = page.locator('button#checkout');
    }

    async goto() {
        await this.page.goto('/cart.html');
    }
}