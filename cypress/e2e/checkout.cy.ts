import { productOverviewPage, cartPage, checkoutPage, registerPage } from '../../pages'
import { headerComponent } from '../../components'

describe('Checkout', () => {
  it('Complete the checkout process successfully', () => {
    // Given I am logged into the application as a "registered" user
    registerPage.visit()

    const uniqueEmail = `checkout.${Date.now()}@mail.com`
    const uniquePassword = `Password${Date.now()}!`

    registerPage.register({
      firstName: 'Daenerys',
      lastName: 'Targaryen',
      dob: '1990-01-01',
      countryCode: 'IS',
      postalCode: '101',
      houseNumber: '1',
      street: 'Dragonstone',
      city: 'Reykjavik',
      state: 'Capital Region',
      phone: '0000000002',
      email: uniqueEmail,
      password: uniquePassword
    })

    cy.url().should('include', '/auth/login')

    // And I have a product in my shopping cart
    productOverviewPage.visit()
    productOverviewPage.getFirstInStockProductCard().click()
    cy.get('[data-test="add-to-cart"]').click()

    // When I proceed to the checkout page
    headerComponent.cartLink.click()
    cartPage.proceedButton.click()

    // And I sign in
    checkoutPage.signIn(uniqueEmail, uniquePassword)
    checkoutPage.proceedAsRegisteredUserButton.click()

    // And I enter valid shipping details
    checkoutPage.fillAddress({
      countryCode: 'IS',
      postalCode: '101',
      houseNumber: '1',
      street: 'Dragonstone',
      city: 'Reykjavik',
      state: 'Capital Region'
    })

    // And I select a valid payment method
    // And I place the order
    checkoutPage.payWithCreditCard({
      cardHolderName: 'Daenerys Targaryen',
      cardNumber: '4242-4242-4242-4242',
      expirationDate: '12/2030',
      cvv: '123'
    })

    // Then the order confirmation page should be visible
    // And a successful payment message should be visible
    checkoutPage.paymentSuccessMessage.should('be.visible')
  })
})
