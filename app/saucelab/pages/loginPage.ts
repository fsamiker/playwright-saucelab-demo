import { Locator, Page } from '@playwright/test';

export class LoginPage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator('input#user-name');
        this.passwordInput = page.locator('input#password');
        this.loginButton = page.locator('input#login-button');
    }

    async goto() {
        await this.page.goto('https://www.saucedemo.com');
    }

    async enterCredentials(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
    }
}