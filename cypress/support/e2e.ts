declare global {
  namespace Cypress {
    interface Chainable {
      fillPostcodeLookupFields(
        countryCode: string,
        postalCode: string,
        houseNumber: string
      ): Chainable<void>
      visitAndLog(path: string): Chainable<void>
    }
  }
}

import './commands'
