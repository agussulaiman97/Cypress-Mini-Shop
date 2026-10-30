const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL || 'http://127.0.0.1:4173',
    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: 'cypress/support/e2e.js',
    setupNodeEvents(on, config) {
      return config;
    }
  },
  env: {
    testEmail: process.env.CYPRESS_TEST_EMAIL || 'sam@example.test',
    testPassword: process.env.CYPRESS_TEST_PASSWORD || 'MiniShop!2026'
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports/raw',
    reportFilename: '[name]',
    overwrite: false,
    html: false,
    json: true,
    quiet: true
  },
  video: false,
  screenshotOnRunFailure: true
});
