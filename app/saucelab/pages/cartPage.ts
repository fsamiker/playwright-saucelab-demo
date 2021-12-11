import { Locator, Page } from '@playwright/test';

export class CartPage {
    readonly page: Page;
    readonly cartItemsList: Locator;
    readonly checkoutButton: Locator;


    constructor(page: Page) {
        this.page = page;
        this.cartItemsList = page.locator('div.cart_list >> div.cart_item');
        this.checkoutButton = page.locator('button#checkout');
    }

    async goto() {
        await this.page.goto('/cart.html');
    }
}