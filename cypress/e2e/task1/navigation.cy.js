// ============================================================
// FILE: cypress/e2e/task1/navigation.cy.js
// SITE: https://www.saucedemo.com
// TASK: Task 1 — Navigation Test Cases (Nav Test 1, 2)
// ============================================================

describe('Navigation Tests — saucedemo.com', () => {

  // Log in before each test so we have access to the app
  beforeEach(() => {
    cy.visit('https://www.saucedemo.com')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    // Confirm we are on the inventory page before proceeding
    cy.url().should('include', '/inventory')
  })

  // ----------------------------------------------------------
  // NAVIGATION TEST 1: Click menu link → correct page opens
  // ----------------------------------------------------------
  it('Navigation Test 1: About link opens correct external page', () => {
    // Open the burger/hamburger menu
    cy.get('#react-burger-menu-btn').should('be.visible').click()

    // Wait for the menu to slide open
    cy.get('.bm-menu').should('be.visible')

    // Assert the "About" menu item is visible with correct text
    cy.get('#about_sidebar_link')
      .should('be.visible')
      .and('have.text', 'About')
      .and('have.attr', 'href', 'https://saucelabs.com/')
  })

  // ----------------------------------------------------------
  // NAVIGATION TEST 2: Visit 2 pages and assert headings
  // ----------------------------------------------------------
  it('Navigation Test 2: Products page and Cart page have correct headings', () => {
    // --- Page 1: Products / Inventory ---
    cy.url().should('include', '/inventory')
    cy.get('.title')
      .should('be.visible')
      .and('have.text', 'Products')

    // Navigate to Cart page by clicking the cart icon
    cy.get('.shopping_cart_link').click()

    // --- Page 2: Cart ---
    cy.url().should('include', '/cart')
    cy.get('.title')
      .should('be.visible')
      .and('have.text', 'Your Cart')
  })

})
