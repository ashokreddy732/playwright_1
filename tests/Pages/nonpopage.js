const { expect } = require('@playwright/test');

exports.nonPoInvoice =
class nonPoInvoice {

  constructor(page) {

    this.page = page;
    this.url = 'https://qa.prokraya.ai/signin';

    // Login
    this.emailInput = 'input-email';
    this.passwordInput = 'input-password';
    this.loginButton = 'button-login';

    // Navigation
    this.navToInvoices = 'nav-invoices';
    this.buttonCreateNonPoInvoice = 'button-create-non-po-invoice';

    // Invoice header
    this.vendorSearch = 'input-vendor-search';
    this.department = 'select-department';
    this.businessEntity = 'select-invoice-business-entity';
    this.invoiceNumber = 'input-invoice-number';
    this.invoiceDate = 'input-invoice-date';
    this.currency = 'select-currency';
    this.paymentTerms = 'select-payment-terms';
    this.description = 'input-description';
    this.reason = 'input-reason';

    // Upload (icon trigger + actual hidden file input)
    this.uploadIcon = '.lucide.lucide-upload';
    this.inputFileUpload = 'input[type="file"]';

    this.budget = 'select-budget';

    // Line item
    this.addLineButton = 'button-add-line';
    this.selectItemButton = 'button-select-item';
    this.lineDeliveryDate = 'input-line-delivery-date';
    this.lineUoms = 'select-line-uom';
    this.lineOrderQty = 'input-line-order-qty';
    this.lineUnitCost = 'input-line-unit-cost';
    this.lineTaxRate = 'select-line-tax-rate';
    this.saveLineButton = 'button-save-line';

    // Submit
    this.termsCheckbox = 'checkbox-terms';
    this.submitButton = 'button-submit-invoice';
  }

  async goto() {
    await this.page.goto(this.url);
  }

  async login(email, password) {
    await this.page.getByTestId(this.emailInput).fill(email);
    await this.page.getByTestId(this.passwordInput).fill(password);
    await this.page.getByTestId(this.loginButton).click();
  }

  async navigateToCreateNonPoInvoice() {
    await this.page.getByTestId(this.navToInvoices).click();
    await this.page.getByTestId(this.buttonCreateNonPoInvoice).click();
  }

  async invoiceHeaderDetails(vendorName,department,businessEntity,invoiceNumber,invoiceDate,currency,paymentTerms,description,reason,budget
  )
   {
await this.page.getByTestId(this.vendorSearch).click();
await this.page.getByTestId(this.vendorSearch).fill(vendorName);
await this.page.waitForTimeout(1000); 
await this.page.getByText(vendorName, { exact: true }).click();

    await this.page.getByTestId(this.department).click();
    await this.page.waitForSelector('[role="option"]', { state: 'visible' });
    await this.page.getByRole('option', { name: new RegExp(department) }).click();

    await this.page.getByTestId(this.businessEntity).click();
    await this.page.waitForSelector('[role="option"]', { state: 'visible' });
    await this.page.getByRole('option', { name: new RegExp(businessEntity) }).click();

    await this.page.getByTestId(this.invoiceNumber).fill(invoiceNumber);
    await this.page.getByTestId(this.invoiceDate).fill(invoiceDate);

    await this.page.getByTestId(this.currency).click();
    await this.page.waitForSelector('[role="option"]', { state: 'visible' });
    await this.page.getByRole('option', { name: new RegExp(currency) }).click();

    await this.page.getByTestId(this.paymentTerms).click();
    await this.page.waitForSelector('[role="option"]', { state: 'visible' });
    await this.page.getByRole('option', { name: new RegExp(paymentTerms) }).click();

    await this.page.getByTestId(this.description).fill(description);
    await this.page.getByTestId(this.reason).fill(reason);

    await this.page.getByTestId(this.budget).click();
    await this.page.waitForSelector('[role="option"]', { state: 'visible' });
    await this.page.getByRole('option', { name: new RegExp(budget) }).click();
  }

  async uploadInvoiceDocument(docFilePath) {
    await this.page.locator(this.inputFileUpload).setInputFiles(docFilePath);
    await this.page.waitForTimeout(2000);
  }

  async addLineItem(itemName,lineDeliveryDate,lineUom,lineOrderQty,lineUnitCost,lineTaxRate) 
  {
    await this.page.getByTestId(this.addLineButton).click();
    await this.page.getByTestId(this.selectItemButton).click();
    await this.page.getByPlaceholder('Search items...').fill(itemName);
    await this.page.waitForTimeout(1000); 
    await this.page.getByRole('option', { name: new RegExp(itemName) }).click();

    await this.page.getByTestId(this.lineDeliveryDate).fill(lineDeliveryDate);

    await this.page.getByTestId(this.lineUoms).click();
    await this.page.waitForSelector('[role="option"]', { state: 'visible' });
    await this.page.getByRole('option', { name: new RegExp(lineUom) }).click();

    await this.page.getByTestId(this.lineOrderQty).fill(lineOrderQty);
    await this.page.getByTestId(this.lineUnitCost).fill(lineUnitCost);

    await this.page.getByTestId(this.lineTaxRate).click();
    await this.page.waitForSelector('[role="option"]', { state: 'visible' });
    await this.page.getByRole('option', { name: new RegExp(lineTaxRate) }).click();

    await this.page.getByTestId(this.saveLineButton).click();
  }

  async submitInvoice() {
    await this.page.getByTestId(this.termsCheckbox).check();
    await this.page.getByTestId(this.submitButton).click();
  }
};