// ============================================================
// FILE: cypress/e2e/task1/login.cy.js
// SITE: https://www.saucedemo.com
// TASK: Task 1 — Login Test Cases (Login Test 1, 2, 3)
// ============================================================

describe('Login Tests — saucedemo.com', () => {

  beforeEach(() => {
    // Clear browser state to prevent session state from interfering between tests
    cy.clearCookies()
    cy.clearLocalStorage()
    // Visit the login page before every test
    cy.visit('https://www.saucedemo.com')
  })

  // ----------------------------------------------------------
  // LOGIN TEST 1: Valid credentials → should reach dashboard
  // ----------------------------------------------------------
  it('Login Test 1: Valid credentials redirect to inventory page', () => {
    // Type valid username
    cy.get('[data-test="username"]')
      .should('be.visible')
      .type('standard_user')

    // Type valid password
    cy.get('[data-test="password"]')
      .should('be.visible')
      .type('secret_sauce')

    // Click login button
    cy.get('[data-test="login-button"]').click()

    // Assert: URL should now contain /inventory (dashboard page)
    cy.url().should('include', '/inventory')

    // Assert: The page heading "Products" should be visible
    cy.get('.title').should('be.visible').and('have.text', 'Products')
  })

  // ----------------------------------------------------------
  // LOGIN TEST 2: Wrong password → error message appears
  // ----------------------------------------------------------
  it('Login Test 2: Invalid password shows error message', () => {
    // Type valid username
    cy.get('[data-test="username"]').type('standard_user')

    // Type WRONG password
    cy.get('[data-test="password"]').type('wrong_password_123')

    // Click login
    cy.get('[data-test="login-button"]').click()

    // Assert: Error container is visible
    cy.get('[data-test="error"]').should('be.visible')

    // Assert: Error message contains expected text
    cy.get('[data-test="error"]')
      .should('contain.text', 'Username and password do not match')

    // Assert: We should NOT be redirected (still on login page)
    cy.url().should('not.include', '/inventory')
  })

  // ----------------------------------------------------------
  // LOGIN TEST 3: Empty fields → validation message shown
  // ----------------------------------------------------------
  it('Login Test 3: Empty fields show validation message', () => {
    // Do NOT type anything — leave both fields empty

    // Click the login button directly
    cy.get('[data-test="login-button"]').click()

    // Assert: Error message is visible
    cy.get('[data-test="error"]').should('be.visible')

    // Assert: Error message mentions username is required
    cy.get('[data-test="error"]')
      .should('contain.text', 'Username is required')

    // Assert: Page title still shows (still on login page)
    cy.get('.login_logo').should('be.visible')
  })

})
