import { Locator, Page } from '@playwright/test';

export class SaucelabBasePage {
    readonly page: Page;
    readonly cartButton: Locator;
    readonly menuHamburgerButton: Locator;
    readonly logoutButton: Locator;
    readonly resetAppStateButton: Locator;
    readonly closeHamburgerMenuButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartButton = page.locator('div#shopping_cart_container a');
        this.menuHamburgerButton = page.locator('button#react-burger-menu-btn');
        this.logoutButton = page.locator('a#logout_sidebar_link');
        this.resetAppStateButton = page.locator('reset_sidebar_link');
        this.closeHamburgerMenuButton = page.locator('button#react-burger-cross-btn');
    }

    async logout() {
        await this.menuHamburgerButton.click();
        await this.logoutButton.click();
    }

    async resetAppState() {
        await this.menuHamburgerButton.click();
        await this.resetAppStateButton.click();
    }
}