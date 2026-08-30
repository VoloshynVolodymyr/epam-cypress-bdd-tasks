import { languageSwitcher, headerComponent, footerComponent } from '../../components'

// Feature: Localization
// Scenario: Change application interface language
describe('Localization', () => {
  it('Change application interface language', () => {
    // Given I am logged into the application as an "anonymous" user
    cy.visitAndLog('/')

    // When I open the language selection dropdown
    // And I select the "German" language option
    languageSwitcher.selectLanguage('de')

    // Then the navigation menu should be displayed in "German"
    headerComponent.categoriesDropdown.should('contain.text', 'Kategorien')

    // And the page footer text should be displayed in "German"
    footerComponent.root.should('contain.text', 'Das ist eine Demo Applikation')
  })
})
