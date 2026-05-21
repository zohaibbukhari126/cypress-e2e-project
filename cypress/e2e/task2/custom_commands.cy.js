// ============================================================
// FILE: cypress/e2e/task2/custom_commands.cy.js
// TASK: Task 2 — Custom Command Usage
// Uses the cy.login() command defined in cypress/support/commands.js
// ============================================================

describe('Task 2 — Custom Commands', () => {

  // ----------------------------------------------------------
  // beforeEach HOOK — visit login page before each test
  // ----------------------------------------------------------
  beforeEach(() => {
    // Clear browser state to prevent session state from interfering between tests
    cy.clearCookies()
    cy.clearLocalStorage()
    cy.visit('https://www.saucedemo.com')
  })

  // ----------------------------------------------------------
  // TEST 1: Use custom cy.login() command with valid credentials
  // ----------------------------------------------------------
  it('Custom Command: cy.login() logs in successfully with valid credentials', () => {
    // Instead of repeating 3 lines of get/type/click,
    // we call our single custom command defined in commands.js
    cy.login('standard_user', 'secret_sauce')

    // Assert: Should now be on inventory/dashboard page
    cy.url().should('include', '/inventory')
    cy.get('.title').should('be.visible').and('have.text', 'Products')
  })

  // ----------------------------------------------------------
  // TEST 2: Use custom cy.login() with locked-out user
  // ----------------------------------------------------------
  it('Custom Command: cy.login() with locked-out user shows error', () => {
    // 'locked_out_user' is a valid username on saucedemo but is blocked
    cy.login('locked_out_user', 'secret_sauce')

    // Assert: Error message is shown
    cy.get('[data-test="error"]')
      .should('be.visible')
      .and('contain.text', 'Sorry, this user has been locked out')
  })

  // ----------------------------------------------------------
  // TEST 3: Use custom cy.addToCart() command
  // ----------------------------------------------------------
  it('Custom Command: cy.addItemToCart() adds product to cart', () => {
    // Login first using custom command
    cy.login('standard_user', 'secret_sauce')

    // Use custom command to add the backpack to cart
    cy.addItemToCart('sauce-labs-backpack')

    // Assert: Cart badge shows 1 item
    cy.get('.shopping_cart_badge')
      .should('be.visible')
      .and('have.text', '1')
  })

  // ----------------------------------------------------------
  // TEST 4: Use custom cy.logout() command
  // ----------------------------------------------------------
  it('Custom Command: cy.logout() returns user to login page', () => {
    // Login first
    cy.login('standard_user', 'secret_sauce')
    cy.url().should('include', '/inventory')

    // Use custom logout command
    cy.logout()

    // Assert: Back on the login page
    cy.url().should('eq', 'https://www.saucedemo.com/')
    cy.get('[data-test="login-button"]').should('be.visible')
  })

})
