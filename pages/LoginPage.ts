export class LoginPage {
  visit(): void {
    cy.visit('/auth/login')
  }

  get emailInput() {
    return cy.get('[data-test="email"]')
  }

  get passwordInput() {
    return cy.get('[data-test="password"]')
  }

  get submitButton() {
    return cy.get('[data-test="login-submit"]')
  }

  login(email: string, password: string): void {
    this.emailInput.type(email)
    this.passwordInput.type(password)
    this.submitButton.click()
  }
}

export default new LoginPage()
