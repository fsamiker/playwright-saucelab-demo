import { Locator, Page } from '@playwright/test';
import { SaucelabBasePage } from './utils/basePage';

export class ProductsPage extends SaucelabBasePage {
    readonly sortDropDown: Locator;
    readonly productsList: Locator;
    readonly prodFilterDropdown: Locator;

    constructor(page: Page) {
        super(page)
        this.sortDropDown = page.locator('select.product_sort_container');
        this.productsList = page.locator('div.inventory_list > div.inventory_item');
        this.prodFilterDropdown = page.locator('select.product_sort_container');
    }

    async goto() {
        await this.page.goto('/inventory.html');
    }
}