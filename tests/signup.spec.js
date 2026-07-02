const { test, expect } = require('@playwright/test');
const { signUp } = require('./pages/signup');
const { signUpData } = require('./data/signup');

test('Verify all elements and valid signup', async ({ page }) => {
  
  
  const signUpPage = new signUp(page);
  await signUpPage.goto();
  await signUpPage.verifyallElements();
  await signUpPage.signup(
    signUpData.validUser.organizationName,
    signUpData.validUser.contactName,
    signUpData.validUser.emailId,
    signUpData.validUser.mobileCountry,
    signUpData.validUser.mobileNumber,
    signUpData.validUser.country,
    signUpData.validUser.designation,
    signUpData.validUser.department,
    signUpData.validUser.password,
    signUpData.validUser.confirmPassword
  );
  await page.waitForTimeout(5000);
});
