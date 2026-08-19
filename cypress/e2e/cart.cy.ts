import { productOverviewPage, productDetailPage, cartPage } from '../../pages'
import { headerComponent } from '../../components'

// Feature: Shopping Cart
// Scenario: Add a specific product to the shopping cart
describe('Shopping Cart', () => {
  it('Add a specific product to the shopping cart', () => {
    // Given I am on the product details page of a specific product
    productOverviewPage.visit()
    productOverviewPage.getFirstInStockProductCard().click()

    let productName: string
    productDetailPage.productName.invoke('text').then((text) => {
      productName = text.trim()
    })

    // When I set the quantity to "2"
    productDetailPage.increaseQuantityBy(1)

    // And I add the product to the cart
    productDetailPage.addToCart()

    // Then the card icon badge should display "2"
    headerComponent.cartQuantityBadge.should('have.text', '2')

    // And the card preview should show the product with quantity "2"
    headerComponent.cartLink.click()

    cy.then(() => {
      cartPage.productTitles.should('contain.text', productName)
    })
    cartPage.productQuantityInput.should('have.value', '2')
  })
})
