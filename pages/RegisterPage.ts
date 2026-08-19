export interface RegistrationData {
  firstName: string
  lastName: string
  dob: string
  street: string
  postalCode: string
  houseNumber: string
  city: string
  state: string
  countryCode: string
  phone: string
  email: string
  password: string
}

export class RegisterPage {
  visit(): void {
    cy.visit('/auth/register')
  }

  get firstNameInput() {
    return cy.get('[data-test="first-name"]')
  }

  get lastNameInput() {
    return cy.get('[data-test="last-name"]')
  }

  get dobInput() {
    return cy.get('[data-test="dob"]')
  }

  get streetInput() {
    return cy.get('[data-test="street"]')
  }

  get postalCodeInput() {
    return cy.get('[data-test="postal_code"]')
  }

  get houseNumberInput() {
    return cy.get('[data-test="house_number"]')
  }

  get cityInput() {
    return cy.get('[data-test="city"]')
  }

  get stateInput() {
    return cy.get('[data-test="state"]')
  }

  get countrySelect() {
    return cy.get('[data-test="country"]')
  }

  get phoneInput() {
    return cy.get('[data-test="phone"]')
  }

  get emailInput() {
    return cy.get('[data-test="email"]')
  }

  get passwordInput() {
    return cy.get('[data-test="password"]')
  }

  get submitButton() {
    return cy.get('[data-test="register-submit"]')
  }

  get errorMessage() {
    return cy.get('[data-test="register-error"]')
  }

  register(data: RegistrationData): void {
    this.firstNameInput.type(data.firstName)
    this.lastNameInput.type(data.lastName)
    this.dobInput.type(data.dob)
    cy.fillPostcodeLookupFields(data.countryCode, data.postalCode, data.houseNumber)
    this.streetInput.clear().type(data.street)
    this.cityInput.clear().type(data.city)
    this.stateInput.clear().type(data.state)
    this.phoneInput.type(data.phone)
    this.emailInput.type(data.email)
    this.passwordInput.type(data.password)
    this.submitButton.click()
  }
}

export default new RegisterPage()
