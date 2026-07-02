const { test }    = require('@playwright/test');
const { BssPage } = require('./pages/bsspage');
const { bssData } = require('./data/bssdata');

test('Signup with random data', async ({ page }) => {
    const bss = new BssPage(page);

    // console.log('========= Signup Data =========');
    // console.log('Org Name   :', bssData.signUp.organizationName);
    // console.log('Name       :', bssData.signUp.contactName);
    // console.log('Email      :', bssData.signUp.emailId);
    // console.log('Mob Country:', bssData.signUp.mobileCountry);
    // console.log('Mobile     :', bssData.signUp.mobileNumber);
    // console.log('Country    :', bssData.signUp.country);
    // console.log('Designation:', bssData.signUp.designation);
    // console.log('Department :', bssData.signUp.department);
    // console.log('===============================');

    await bss.gotoSignUp();
    await bss.signup(
        bssData.signUp.organizationName,
        bssData.signUp.contactName,
        bssData.signUp.emailId,
        bssData.signUp.mobileCountry,
        bssData.signUp.mobileNumber,
        bssData.signUp.country,
        bssData.signUp.designation,
        bssData.signUp.department,
        bssData.signUp.password,
        bssData.signUp.confirmPassword
    );
    await page.waitForTimeout(5000);
});


test('Signin with generated credentials', async ({ page }) => {
    const bss = new BssPage(page);

    console.log('========= Signin Data =========');
    console.log('Email   :', bssData.signIn.emailId);
    console.log('Password:', bssData.signIn.password);
    console.log('===============================');

    await bss.gotoSignIn();
    await bss.signin(
        bssData.signIn.emailId,
        bssData.signIn.password
    );
    await page.waitForTimeout(5000);
});