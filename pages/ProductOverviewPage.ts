export class ProductOverviewPage {
  visit(): void {
    cy.visit('/')
  }

  get searchInput() {
    return cy.get('[data-test="search-query"]')
  }

  get searchSubmitButton() {
    return cy.get('[data-test="search-submit"]')
  }

  searchForProduct(query: string): void {
    this.searchInput.type(query)
    this.searchSubmitButton.click()
  }

  getProductCardByName(productName: string) {
    return cy.contains('a.card', productName)
  }

  getFirstInStockProductCard() {
    return cy.get('a.card').not(':has([data-test="out-of-stock"])').first()
  }
}

export default new ProductOverviewPage()
