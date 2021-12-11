// playwright.config.ts
import { PlaywrightTestConfig, devices } from '@playwright/test';
import 'dotenv/config';

const config: PlaywrightTestConfig = {
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  globalTimeout: 10 * 60 * 1000, // saucelab login expires in 10 mins
  globalSetup: require.resolve('./tests/global-setup'),
  reporter: [['html', {open: 'never'}]],
  expect: {
    timeout: 3 * 1000,
  },
  use: {
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    baseURL: process.env.BASE_URL? process.env.BASE_URL: 'https://www.saucedemo.com'
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
};
export default config;