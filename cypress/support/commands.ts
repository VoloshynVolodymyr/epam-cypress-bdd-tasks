Cypress.Commands.add(
  'fillPostcodeLookupFields',
  (countryCode: string, postalCode: string, houseNumber: string) => {
    cy.intercept('GET', '**/postcode-lookup**').as('postcodeLookup')
    cy.get('[data-test="country"]').select(countryCode)
    cy.get('[data-test="postal_code"]').type(postalCode)
    cy.get('[data-test="house_number"]').type(houseNumber)
    cy.wait('@postcodeLookup')
  }
)
