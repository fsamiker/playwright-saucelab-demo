import { test, expect } from '@playwright/test';
import { LoginPage } from '../app/saucelab/pages/loginPage';

test('Successful Login @auth', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.enterCredentials('standard_user', 'secret_sauce');
  await loginPage.loginButton.click();
  expect(page.url()).toEqual('https://www.saucedemo.com/inventory.html');
});
