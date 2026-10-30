# Cypress Mini Shop

A self-contained React storefront used to demonstrate reliable Cypress end-to-end testing without a backend. Product requests are intercepted in tests and the app also has local demo data so it remains usable in a browser.

The course checklist specifically requests `Cypress.env()`, so this project pins Cypress 15.21.1, which retains that API. Cypress 16 removed `Cypress.env()`.

## Included

- Custom commands: `cy.login()` uses `cy.session()` and `cy.addProduct()` fills the product form.
- Modular specs: `cypress/e2e/auth/` and `cypress/e2e/dashboard/`.
- Fixtures for a demo user, product catalog, and a new product.
- A dedicated environment-variable test reads `CYPRESS_TEST_EMAIL` and `CYPRESS_TEST_PASSWORD` with `Cypress.env()` as specified by the HOL checklist.
- `cy.intercept()` for catalog responses, product creation, and an intentionally delayed response.
- A flaky-load example with the race fixed by waiting on the network alias and Cypress retryable assertions.
- Merged, self-contained Mochawesome HTML report at `cypress/reports/mochawesome-report.html`.
- Explicit requirement checklist in `SUBMISSION_CHECKLIST.md` and flaky-test explanation in `FLAKY_TEST_NOTES.md`.

## Run it

Requires Node.js 20.19+ or 22.12+ (Node 24 is fine).

```bash
npm install
npm run build
npm run dev
```

In another terminal, run all four spec files in parallel (two Cypress runners at a time) and merge their reports:

```bash
npm run test:submission
```

The app runs at `http://127.0.0.1:4173`. The Cypress config supplies safe demo credentials by default. To override them, copy `.env.example` values into your shell as `CYPRESS_TEST_EMAIL` and `CYPRESS_TEST_PASSWORD` before the test run. The Cypress launcher removes `ELECTRON_RUN_AS_NODE` from the runner environment to support shells that set that Electron variable globally.

## Test results

The submitted run summary is in `run-summary.txt`; the detailed browser report is in `cypress/reports/mochawesome-report.html`. The report is generated from the Cypress JSON output by `scripts/generate-report.cjs`.

## Project reflection

See `PROJECT_REFLECTION.txt` for the 150-250 word reflection included with this submission.
