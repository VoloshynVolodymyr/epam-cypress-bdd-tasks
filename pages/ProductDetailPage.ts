export class ProductDetailPage {
  get productName() {
    return cy.get('[data-test="product-name"]')
  }

  get increaseQuantityButton() {
    return cy.get('[data-test="increase-quantity"]')
  }

  get addToCartButton() {
    return cy.get('[data-test="add-to-cart"]')
  }

  increaseQuantityBy(times: number): void {
    for (let i = 0; i < times; i += 1) {
      this.increaseQuantityButton.click()
    }
  }

  addToCart(): void {
    this.addToCartButton.click()
  }
}

export default new ProductDetailPage()
