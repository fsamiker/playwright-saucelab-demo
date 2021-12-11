import { Locator, Page } from '@playwright/test';

export class ProductsPage {
    readonly page: Page;
    readonly cartButton: Locator;
    readonly sortDropDown: Locator;
    readonly menuHamburgerButton: Locator;
    readonly productsList: Locator;
    readonly prodFilterDropdown: Locator;

    constructor(page: Page) {
        this.page = page;
        this.cartButton = page.locator('div#shopping_cart_container a');
        this.sortDropDown = page.locator('select.product_sort_container');
        this.menuHamburgerButton = page.locator('button#react-burger-menu-btn');
        this.productsList = page.locator('div.inventory_list > div.inventory_item');
        this.prodFilterDropdown = page.locator('select.product_sort_container');
    }

    async goto() {
        await this.page.goto('/inventory.html');
    }

    async clickCart() {
        await this.cartButton.click();
    }

    async expandMenu() {
        await this.menuHamburgerButton.click();
    }
}