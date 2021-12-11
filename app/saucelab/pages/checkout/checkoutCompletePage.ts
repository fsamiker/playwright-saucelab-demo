import { Locator, Page } from '@playwright/test';

export class CheckoutCompletePage {
    readonly page: Page;
    readonly completeTitle: Locator;
    readonly completeMessage: Locator;
    readonly backHomeButton: Locator;


    constructor(page: Page) {
        this.page = page;
        this.completeTitle = page.locator('div.complete-header');
        this.completeMessage = page.locator('div.complete-text');
        this.backHomeButton = page.locator('button#back-to-products');
    }

    async goto() {
        await this.page.goto('/cart.html');
    }
}