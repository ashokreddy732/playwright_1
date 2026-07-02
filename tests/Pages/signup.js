exports.signUp =
class signUp {
    constructor(page) {
        this.page = page;
        this.url = 'https://qa.prokraya.ai/register';
        this.signinLink = 'Already a member? Sign In';
        this.SignUptext = 'text-register-title';
        this.organizationnameLabel = 'Organization Name *';
        this.hoverorganizationnameLabel = 'Organization Name as per your Trade License';
        this.organizationNameInput = 'input-company-name';
        this.contactNameLabel = 'Contact Name *';
        this.contactNameInput = 'input-contact-name';
        this.emailIdLabel = 'Email Id *';
        this.emailhovertext = 'div:nth-child(3) > .font-medium > .lucide';
        this.emailimage = '.lucide.lucide-mail';
        this.emailInput = 'input-email';
        this.mobileNumberLabel = 'Mobile Number *';
        this.mobileNumbercountry = 'input-phone-country';
        this.mobileNumberInput = 'input-phone';
        this.countryLabel = 'Country *';
        this.countrySearchInput = 'input-phone-search';
        this.countryInput = 'select-country';
        this.designationLabel = 'Designation *';
        this.designationInput = 'input-designation';
        this.departmentLabel = 'Department *';
        this.departmentInput = 'input-department';
        this.passwordLabel = 'Password *';
        this.passwordInput = 'input-password';
        this.confirmPasswordLabel = 'Confirm Password *';
        this.confirmPasswordInput = 'input-confirm-password';
        this.captchaLabel = 'Captcha *';
        this.refreshCaptchaButton = 'button-refresh-captcha';
        this.captchalabel = 'Enter Captcha Value *';
        this.captchaInput = 'input-captcha';
        this.termsCheckbox = 'checkbox-terms';
        this.termsText = 'I accept Terms & Conditions';
        this.signupButton = 'button-signup';
    }

    async goto() {
        await this.page.goto(this.url);
    }

    async verifyallElements() {
        await this.page.getByText(this.signinLink).isVisible();
        await this.page.getByTestId(this.SignUptext).isVisible();
        await this.page.getByLabel(this.organizationnameLabel).isVisible();
        await this.page.getByRole('tooltip', { name: this.hoverorganizationnameLabel }).isVisible();
        await this.page.getByTestId(this.organizationNameInput).isVisible();
        await this.page.getByLabel(this.contactNameLabel).isVisible();
        await this.page.getByTestId(this.contactNameInput).isVisible();
        await this.page.getByLabel(this.emailIdLabel).isVisible();
        await this.page.getByTestId(this.emailInput).isVisible();
        await this.page.getByLabel(this.mobileNumberLabel).isVisible();
        await this.page.getByTestId(this.mobileNumbercountry).isVisible();
        await this.page.getByTestId(this.mobileNumberInput).isVisible();
        await this.page.getByLabel(this.countryLabel).isVisible();
        await this.page.getByTestId(this.countryInput).isVisible();
        await this.page.getByLabel(this.designationLabel).isVisible();
        await this.page.getByTestId(this.designationInput).isVisible();
        await this.page.getByLabel(this.departmentLabel).isVisible();
        await this.page.getByTestId(this.departmentInput).isVisible();
        await this.page.getByText('Password *', { exact: true }).isVisible();
        await this.page.getByTestId(this.passwordInput).isVisible();
        await this.page.getByLabel(this.confirmPasswordLabel).isVisible();
        await this.page.getByTestId(this.confirmPasswordInput).isVisible();
        await this.page.getByTestId(this.refreshCaptchaButton).isVisible();
        await this.page.getByTestId(this.captchaInput).isVisible();
        await this.page.getByTestId(this.termsCheckbox).isVisible();
        await this.page.getByTestId(this.signupButton).isVisible();
    }

    async signup(organizationName, contactName, emailId, mobileCountry, mobileNumber, country, designation, department, password, confirmPassword) {
        await this.page.getByTestId(this.organizationNameInput).fill(organizationName);
        await this.page.getByTestId(this.contactNameInput).fill(contactName);
        await this.page.getByTestId(this.emailInput).fill(emailId);
        await this.page.getByTestId(this.mobileNumbercountry).click();
        await this.page.getByPlaceholder('Search country...').fill(mobileCountry);
        await this.page.getByRole('option', { name: new RegExp(mobileCountry) }).click();
        await this.page.getByTestId(this.mobileNumberInput).fill(mobileNumber);       
        await this.page.getByTestId(this.countryInput).click();
        await this.page.waitForSelector('[role="option"]', { state: 'visible' });
        await this.page.getByRole('option', { name: new RegExp(country) }).click();
        await this.page.getByTestId(this.designationInput).fill(designation);
        await this.page.getByTestId(this.departmentInput).fill(department);
        await this.page.getByTestId(this.passwordInput).fill(password);
        await this.page.getByTestId(this.confirmPasswordInput).fill(confirmPassword);
        await this.page.waitForTimeout(10000);
        await this.page.getByTestId(this.termsCheckbox).check();
        await this.page.getByTestId(this.signupButton).click();
    }
}