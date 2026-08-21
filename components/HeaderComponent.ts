export class HeaderComponent {
  get homeLink() {
    return cy.get('[data-test="nav-home"]')
  }

  get categoriesDropdown() {
    return cy.get('[data-test="nav-categories"]')
  }

  get powerToolsLink() {
    return cy.get('[data-test="nav-power-tools"]')
  }

  get accountMenuToggle() {
    return cy.get('[data-test="nav-menu"]')
  }

  get myProfileLink() {
    return cy.get('[data-test="nav-my-profile"]')
  }

  get signOutLink() {
    return cy.get('[data-test="nav-sign-out"]')
  }

  get cartQuantityBadge() {
    return cy.get('[data-test="cart-quantity"]')
  }

  get cartLink() {
    return cy.get('[data-test="nav-cart"]')
  }

  openCategory(categoryLinkSelector: string): void {
    this.categoriesDropdown.trigger('mouseover')
    this.categoriesDropdown.click()
    cy.get(categoryLinkSelector).click()
  }

  openAccountMenu(): void {
    this.accountMenuToggle.click()
  }
}

export default new HeaderComponent()
