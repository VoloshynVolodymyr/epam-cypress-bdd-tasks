export class CartPage {
  visit(): void {
    cy.visit('/checkout')
  }

  get productTitles() {
    return cy.get('[data-test="product-title"]')
  }

  get productQuantityInput() {
    return cy.get('[data-test="product-quantity"]')
  }

  get cartTotal() {
    return cy.get('[data-test="cart-total"]')
  }

  get proceedButton() {
    return cy.get('[data-test="proceed-1"]')
  }
}

export default new CartPage()
