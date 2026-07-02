const { expect } = require('@playwright/test');

exports.SignIn =
class SignIn {

  constructor(page) {

    
    this.page = page;
    this.url = 'https://qa.prokraya.ai/signin';
    this.loginTitleText = 'text-login-title';
    this.loginSubtitleText = 'Sign in to your account to continue';
    this.domainNameText = 'Domain Name';
    this.domainSuffixText = '.prokraya.ai';
    this.emailLabel = 'Email';
    this.emailInput = 'input-email';
    this.passwordLabel = 'Password';
    this.passwordInput = 'input-password';
    this.passwordToggle = 'button-toggle-password';
    this.forgotPassword = 'Forgot Password?';
    this.otherSigninOptions = 'Other Signin Options';
    this.otpLoginButton = 'button-otp-login';
    this.newSupplier = 'New Supplier?';
    this.registerCompany = 'Register your Company to';
    this.registerVendor = 'link-register-vendor';
    this.loginButton = 'button-login';
  }

  async goto() {
    await this.page.goto(this.url);
  }

  async verifyallElements() {
    await expect(this.page.getByTestId(this.loginTitleText)).toBeVisible();
    await expect(this.page.getByText(this.loginSubtitleText)).toBeVisible();
    await expect(this.page.getByText(this.domainNameText)).toBeVisible();
    await expect(this.page.getByText(this.domainSuffixText)).toBeVisible();
    await expect(this.page.getByText(this.emailLabel)).toBeVisible();
    await expect(this.page.getByTestId(this.emailInput)).toBeVisible();
    await expect(this.page.getByText('Password', { exact: true })).toBeVisible();
    await expect(this.page.getByTestId(this.passwordInput)).toBeVisible();
    await expect(this.page.getByTestId(this.passwordToggle)).toBeVisible();
    await expect(this.page.getByRole('link', { name: this.forgotPassword })).toBeVisible();
    await expect(this.page.getByText(this.otherSigninOptions)).toBeVisible();
    await expect(this.page.getByTestId(this.otpLoginButton)).toBeVisible();
    await expect(this.page.getByText(this.newSupplier)).toBeVisible();
    await expect(this.page.getByText(this.registerCompany)).toBeVisible();
    await expect(this.page.getByTestId(this.registerVendor)).toBeVisible();
    await expect(this.page.getByTestId(this.loginButton)).toBeVisible();
  }

  async login(email, password) {
    await this.page.getByTestId(this.emailInput).fill(email);
    await this.page.getByTestId(this.passwordInput).fill(password);
    await this.page.getByTestId(this.loginButton).click();
  }
}
