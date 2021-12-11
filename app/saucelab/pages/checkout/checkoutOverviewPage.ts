import { Locator, Page } from '@playwright/test';
import { SaucelabBasePage } from '../utils/basePage';

export class CheckoutOverviewPage extends SaucelabBasePage {
    readonly cartItemsList: Locator;
    readonly finishButton: Locator;
    readonly cartTotalSummary: Locator;


    constructor(page: Page) {
        super(page);
        this.cartItemsList = page.locator('div.cart_list >> div.cart_item');
        this.finishButton = page.locator('button#finish');
        this.cartTotalSummary = page.locator('div.summary_total_label');
    }

    async goto() {
        await this.page.goto('/checkout-step-two.html');
    }
}