export class ProfilePage {
  visit(): void {
    cy.visit('/account/profile')
  }

  get firstNameInput() {
    return cy.get('[data-test="first-name"]')
  }

  get lastNameInput() {
    return cy.get('[data-test="last-name"]')
  }

  get updateProfileButton() {
    return cy.get('[data-test="update-profile-submit"]')
  }

  updateName(firstName: string, lastName: string): void {
    this.firstNameInput.clear().type(firstName)
    this.lastNameInput.clear().type(lastName)
    this.updateProfileButton.click()
  }
}

export default new ProfilePage()
