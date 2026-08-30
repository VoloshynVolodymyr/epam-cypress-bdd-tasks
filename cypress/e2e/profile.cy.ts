import { registerPage, loginPage, profilePage } from '../../pages'
import { headerComponent } from '../../components'

// Feature: User profile
// Scenario: Update user profile information
describe('User profile', () => {
  it('Update user profile information', () => {
    // Given I am logged into the application as a "registered" user
    cy.visitAndLog('/auth/register')

    const uniqueEmail = `John.${Date.now()}@mail.com`
    const uniquePassword = `John.${Date.now()}!`

    registerPage.register({
      firstName: 'John',
      lastName: 'Snow',
      dob: '1990-01-01',
      countryCode: 'IS',
      postalCode: '101',
      houseNumber: '1',
      street: 'Castle Black',
      city: "Mole's Town",
      state: 'Behind the Wall',
      phone: '0000000001',
      email: uniqueEmail,
      password: uniquePassword
    })

    cy.url().should('include', '/auth/login')
    loginPage.login(uniqueEmail, uniquePassword)

    // And I am on my profile page
    headerComponent.openAccountMenu()
    headerComponent.myProfileLink.click()

    profilePage.firstNameInput.should('have.value', 'John')
    profilePage.lastNameInput.should('have.value', 'Snow')
    // When I update my first name to "Aegon" and last name to "Targaryen"
    // And I save the profile settings
    profilePage.updateName('Aegon', 'Targaryen')

    // Then a profile update confirmation should be visible
    cy.get('form .alert-success').should('be.visible')

    // And the profile form should display "Aegon" as first name and "Targaryen" as last name
    profilePage.firstNameInput.should('have.value', 'Aegon')
    profilePage.lastNameInput.should('have.value', 'Targaryen')
  })
})
