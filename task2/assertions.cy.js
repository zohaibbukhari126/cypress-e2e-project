// ============================================================
// FILE: cypress/e2e/task2/assertions.cy.js
// SITE: https://www.saucedemo.com
// TASK: Task 2 — Assertion Practice, Negative Assertions,
//               Aliases, and beforeEach Hook
// ============================================================

describe('Task 2 — Assertions, Aliases & beforeEach Hook', () => {

  // ----------------------------------------------------------
  // beforeEach HOOK — runs cy.visit() before EVERY test below
  // so it is not repeated manually in each test
  // ----------------------------------------------------------
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com')
  })

  // ----------------------------------------------------------
  // EXERCISE 1: Three different assertion types
  // be.visible | have.text | have.attr
  // ----------------------------------------------------------
  it('Assertion Practice: be.visible — login button is visible', () => {
    // Assertion type 1: cy.should('be.visible')
    cy.get('[data-test="login-button"]')
      .should('be.visible')
  })

  it('Assertion Practice: have.text — login button has correct label', () => {
    // Assertion type 2: cy.should('have.value', '...') for input buttons
    cy.get('[data-test="login-button"]')
      .should('have.value', 'Login')
  })

  it('Assertion Practice: have.attr — password field has type password', () => {
    // Assertion type 3: cy.should('have.attr', '...')
    // Checks that the password input has type="password" attribute
    cy.get('[data-test="password"]')
      .should('have.attr', 'type', 'password')

    // Also check username field has correct placeholder attribute
    cy.get('[data-test="username"]')
      .should('have.attr', 'placeholder', 'Username')
  })

  // ----------------------------------------------------------
  // EXERCISE 2: Negative Assertion — element does NOT exist
  // ----------------------------------------------------------
  it('Negative Assertion: Error message does NOT exist on page load', () => {
    // Before attempting any login, the error container should not be visible
    // This asserts that the error does NOT exist when the page first loads
    cy.get('[data-test="error"]').should('not.exist')
  })

  // ----------------------------------------------------------
  // EXERCISE 3: Alias Practice — save element, reuse with @
  // ----------------------------------------------------------
  it('Alias Practice: Save username field as alias and type into it', () => {
    // Save the username input element as an alias called 'usernameField'
    cy.get('[data-test="username"]').as('usernameField')

    // Save the login button as alias
    cy.get('[data-test="login-button"]').as('loginBtn')

    // --- Later in the test, reuse them with @ syntax ---

    // Use @usernameField alias to type into the saved element
    cy.get('@usernameField')
      .should('be.visible')
      .type('standard_user')

    // Type password separately
    cy.get('[data-test="password"]').type('secret_sauce')

    // Use @loginBtn alias to click login
    cy.get('@loginBtn').click()

    // Assert successful login
    cy.url().should('include', '/inventory')
    cy.get('.title').should('have.text', 'Products')
  })

})
