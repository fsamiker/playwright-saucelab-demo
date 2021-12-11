import { Locator, Page } from '@playwright/test';
import { SaucelabBasePage } from '../utils/basePage';

export class CheckoutCompletePage extends SaucelabBasePage {
    readonly completeTitle: Locator;
    readonly completeMessage: Locator;
    readonly backHomeButton: Locator;


    constructor(page: Page) {
        super(page);
        this.completeTitle = page.locator('h2.complete-header');
        this.completeMessage = page.locator('div.complete-text');
        this.backHomeButton = page.locator('button#back-to-products');
    }

    async goto() {
        await this.page.goto('/cart.html');
    }
}