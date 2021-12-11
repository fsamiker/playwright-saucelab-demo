# UI Automation Demo using Playwright

This is a UI test automation demo using [Playwright](https://playwright.dev/docs/intro) typescript library

Demo is done based on a public test automation website maintained by [Saucelabs](https://www.saucedemo.com/)
![Demo site](https://user-images.githubusercontent.com/65810843/145683960-9ea38c8a-07c1-4517-86cd-8e9c5a5061ef.PNG)

Several designs and test methods are demonstrated in this demo such as:

- Feature & Flow tests
- Parametrized tests, Test repeated with multiple different parameters
- Reused login state shared between tests


## Prerequisites

- Node.js
- Demo website to be live, https://www.saucedemo.com/

Note: The demo site was arbitarily chosen and is not maintained by me. The website could change from the time of writing of this repository thus the tests may fail.
At the time of writing however the tests are written to expect to pass.

## Setup
1. Git Clone this repo
2. install dependancies `npm install`
3. Create `.env` file
```
TEST_USER=<username>
TEST_PASSWORD=<password>
BASE_URL=<saucelab demo site>
```

## Running Tests

Ensure cli is in projects root directory

Run all tests
```
npm run test
```

Run test by tag
```
npx playwright test --grep @flow
npx playwright test --grep @feature
npx playwright test --grep @auth
```

Run test by file
```
npx playwright test tests/products.sort.test.ts
npx playwright test tests/login.success.test.ts
```
