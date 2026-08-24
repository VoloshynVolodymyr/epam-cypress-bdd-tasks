import { defineConfig } from 'cypress'

export default defineConfig({
  allowCypressEnv: false,
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports/mochawesome',
    overwrite: false,
    html: false,
    json: true
  },
  e2e: {
    baseUrl: 'https://practicesoftwaretesting.com',
    setupNodeEvents() {}
  }
})
