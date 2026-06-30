exports.SignIn =
class SignIn {
 
  constructor(page) {
 
    this.page = page;
    this.url = 'https://qa.prokraya.ai/signin';
    this.loginTitleText = 'text-login-title';
    this.loginSubtitleText = 'text-login-subtitle';
    this.domainNameText = 'text-domain-name';
    this.domainSuffixText = 'text-domain-suffix';
    this.emailLabel = 'Email';
    this.emailInput = 'input-email';
    this.passwordLabel = 'Password';
    this.passwordInput = 'input-password';
    this.passwordToggle = 'button-toggle-password';
    this.forgotPassword = 'Forgot Password?';
    this.otherSigninOptions = 'Or sign in with';
    this.otpLoginButton = 'button-otp-login';
    this.newSupplier = 'New Supplier?';
    this.registerCompany = 'Register Company';
    this.registerVendor = 'Register Vendor';
    this.loginButton = 'button-login';
  }
 
    async goto() {
    await this.page.goto(this.url);
 
    }
    async verifyallElements() {
    await this.page.getByTestId(this.loginTitleText).isVisible();
    await this.page.getByTestId(this.loginSubtitleText).isVisible();
    await this.page.getByTestId(this.domainNameText).isVisible();
    await this.page.getByTestId(this.domainSuffixText).isVisible();
    await this.page.getByLabel(this.emailLabel).isVisible();
    await this.page.getByTestId(this.emailInput).isVisible();
    await this.page.getByLabel(this.passwordLabel).isVisible();
    await this.page.getByTestId(this.passwordInput).isVisible();
    await this.page.getByTestId(this.passwordToggle).isVisible();
    await this.page.getByText(this.forgotPassword).isVisible();
    await this.page.getByText(this.otherSigninOptions).isVisible();
    await this.page.getByTestId(this.otpLoginButton).isVisible();
    await this.page.getByText(this.newSupplier).isVisible();
    await this.page.getByText(this.registerCompany).isVisible();
    await this.page.getByText(this.registerVendor).isVisible();
    await this.page.getByTestId(this.loginButton).isVisible();
  }
    async login(email, password)
    {
    await this.page.getByTestId(this.emailInput).fill(email);
    await this.page.getByTestId(this.passwordInput).fill(password);
    await this.page.getByTestId(this.loginButton).click();
 
  }
}