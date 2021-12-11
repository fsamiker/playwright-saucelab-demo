// global-setup.ts
import { chromium, FullConfig } from '@playwright/test';
import { LoginPage } from '../app/saucelab/pages/loginPage';
import 'dotenv/config';

async function globalSetup(config: FullConfig) {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.enterCredentials(process.env.TEST_USER, process.env.TEST_PASSWORD);
  await loginPage.loginButton.click();
  // Save signed-in state to 'storageState.json'.
  await page.context().storageState({ path: 'storageState.json' });
  await browser.close();
}

export default globalSetup;