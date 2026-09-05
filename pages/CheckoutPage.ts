export interface AddressData {
  countryCode: string
  postalCode: string
  houseNumber: string
  street: string
  city: string
  state: string
}

export interface CreditCardData {
  cardHolderName: string
  cardNumber: string
  expirationDate: string
  cvv: string
}

export class CheckoutPage {
  get proceedAsRegisteredUserButton() {
    return cy.get('[data-test="proceed-2"]')
  }

  get countrySelect() {
    return cy.get('[data-test="country"]')
  }

  get postalCodeInput() {
    return cy.get('[data-test="postal_code"]')
  }

  get houseNumberInput() {
    return cy.get('[data-test="house_number"]')
  }

  get streetInput() {
    return cy.get('[data-test="street"]')
  }

  get cityInput() {
    return cy.get('[data-test="city"]')
  }

  get stateInput() {
    return cy.get('[data-test="state"]')
  }

  get proceedToPaymentButton() {
    return cy.get('[data-test="proceed-3"]')
  }

  fillAddress(data: AddressData): void {
    this.postalCodeInput.should('not.have.value', '')
    cy.fillPostcodeLookupFields(data.countryCode, data.postalCode, data.houseNumber)

    this.streetInput.clear().type(data.street)
    this.cityInput.clear().type(data.city)
    this.stateInput.clear().type(data.state)
    this.proceedToPaymentButton.click()
  }

  get paymentMethodSelect() {
    return cy.get('[data-test="payment-method"]')
  }

  get cardHolderNameInput() {
    return cy.get('[data-test="card_holder_name"]')
  }

  get cardNumberInput() {
    return cy.get('[data-test="credit_card_number"]')
  }

  get expirationDateInput() {
    return cy.get('[data-test="expiration_date"]')
  }

  get cvvInput() {
    return cy.get('[data-test="cvv"]')
  }

  get finishButton() {
    return cy.get('[data-test="finish"]')
  }

  get paymentSuccessMessage() {
    return cy.get('[data-test="payment-success-message"]')
  }

  get checkoutEmailInput() {
    return cy.get('[data-test="email"]')
  }

  get checkoutPasswordInput() {
    return cy.get('[data-test="password"]')
  }

  get checkoutLoginSubmitButton() {
    return cy.get('[data-test="login-submit"]')
  }

  signIn(email: string, password: string): void {
    this.checkoutEmailInput.type(email)
    this.checkoutPasswordInput.type(password)
    this.checkoutLoginSubmitButton.click()
  }

  payWithCreditCard(data: CreditCardData): void {
    this.paymentMethodSelect.select('credit-card')
    this.cardHolderNameInput.type(data.cardHolderName)
    this.cardNumberInput.type(data.cardNumber)
    this.expirationDateInput.type(data.expirationDate)
    this.cvvInput.type(data.cvv)
    this.finishButton.click()
  }
}

export default new CheckoutPage()
