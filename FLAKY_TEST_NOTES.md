# Flaky test scenario and fix

`cypress/e2e/dashboard/flaky-load.cy.js` deliberately delays the intercepted product-list response by 500 ms. The flaky version checked the number of product rows immediately after opening the dashboard. That check could execute while the request was still in flight, before React rendered the returned rows.

The test seeds only the demo authentication state in local storage before installing the delayed route. This isolates the product-load request from the separate login/session setup request. It then opens the dashboard, waits for the `@slowProducts` network alias, checks the response status is 200, and uses Cypress retryable `.should()` assertions for the loaded status and three product rows. Cypress retries those assertions until the UI reflects the response or the command timeout is reached. The fix synchronizes on the network event and resulting UI state instead of relying on an arbitrary sleep.
