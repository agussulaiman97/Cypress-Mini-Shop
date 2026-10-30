# Final submission checklist

- [x] Modular specs under `cypress/e2e/auth/` and `cypress/e2e/dashboard/`.
- [x] Reusable `cy.login()` and `cy.addProduct()` commands in `cypress/support/commands.js`; both commands are exercised in at least two spec files.
- [x] Fixture-based login and product tests using `cypress/fixtures/user.json`, `products.json`, and `newProduct.json`.
- [x] Separate environment-credential test uses `Cypress.env('testEmail')` and `Cypress.env('testPassword')`, configured in `cypress.config.js`.
- [x] UI authentication uses `cy.session()` to cache the demo session.
- [x] Product list and create requests use `cy.intercept()` with assertions on returned UI and request data.
- [x] Delayed-load flakiness is documented in `FLAKY_TEST_NOTES.md` and fixed with an intercept alias and retryable `.should()` assertions.
- [x] Mochawesome HTML report generated at `cypress/reports/mochawesome-report.html`.
- [x] A 150-250 word project reflection is in `PROJECT_REFLECTION.txt`.
- [x] Cypress specs run in parallel, two runners at a time, with `npm run test:parallel`; use `npm run test:submission` to run and merge the report.

Latest execution totals are in `run-summary.txt`.
