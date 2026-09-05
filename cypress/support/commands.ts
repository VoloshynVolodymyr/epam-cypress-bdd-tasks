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

Cypress.Commands.add('visitAndLog', (path: string) => {
  let requestHeaders: Record<string, string | string[]> = {}
  let responseStatus: number | undefined
  let responseHeaders: Record<string, string | string[]> = {}

  cy.intercept('GET', path, req => {
    requestHeaders = req.headers
    req.on('response', res => {
      responseStatus = res.statusCode
      responseHeaders = res.headers
    })
  }).as('pageLoad')

  cy.visit(path)
  cy.wait('@pageLoad')

  cy.then(() => {
    cy.task('log', `[DEBUG] Visiting "${path}"`)
    cy.task('log', `[DEBUG] Request headers: ${JSON.stringify(requestHeaders)}`)
    cy.task('log', `[DEBUG] Response status: ${responseStatus}`)
    cy.task('log', `[DEBUG] Response headers: ${JSON.stringify(responseHeaders)}`)
  })
})
