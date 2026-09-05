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
    userAgent:
      'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36',
    setupNodeEvents(on) {
      on('task', {
        log(message) {
          console.log(message)
          return null
        }
      })
    }
  }
})
