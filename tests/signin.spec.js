const { test, expect } = require('@playwright/test');
const { SignIn } = require('./pages/signin');
const { SignInData } = require('./data/signin');

test('Verify all elements and valid login', async ({ page }) => {
  const signin = new SignIn(page);
  await signin.goto();
  await signin.verifyallElements();
  await signin.login(SignInData.validUser.email, SignInData.validUser.password);
  await page.waitForTimeout(3000);
});


test.skip('SignIn with invalid password', async ({ page }) => {
  const signin = new SignIn(page);
  await signin.goto();
  await signin.login(SignInData.invalidPasswordUser.email, SignInData.invalidPasswordUser.password);
  await page.waitForTimeout(3000);
});


test.skip('SignIn with unregistered email', async ({ page }) => {
  const signin = new SignIn(page);
  await signin.goto();
  await signin.login(SignInData.invalidEmailUser.email, SignInData.invalidEmailUser.password);
  await page.waitForTimeout(3000);
});