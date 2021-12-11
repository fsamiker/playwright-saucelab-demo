import { Locator, Page } from '@playwright/test';
import { SaucelabBasePage } from '../utils/basePage';

export class CheckoutAddrPage extends SaucelabBasePage {
    readonly firstNameTextbox: Locator;
    readonly lastNameTextbox: Locator;
    readonly postcodeTextbox: Locator;
    readonly continueButton: Locator;


    constructor(page: Page) {
        super(page);
        this.firstNameTextbox = page.locator('input#first-name');
        this.lastNameTextbox = page.locator('input#last-name');
        this.postcodeTextbox = page.locator('input#postal-code');
        this.continueButton = page.locator('input#continue');
    }

    async goto() {
        await this.page.goto('/checkout-step-one.html');
    }
}