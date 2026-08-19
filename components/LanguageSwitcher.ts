export class LanguageSwitcher {
  get languageDropdownToggle() {
    return cy.get('[data-test="language-select"]')
  }

  selectLanguage(languageCode: string): void {
    this.languageDropdownToggle.click()
    cy.get(`[data-test="lang-${languageCode}"]`).click()
  }
}

export default new LanguageSwitcher()
