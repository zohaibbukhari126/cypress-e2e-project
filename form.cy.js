// ============================================================
// FILE: cypress/e2e/task1/form.cy.js
// SITE: https://www.saucedemo.com
// TASK: Task 1 — Form Test (Checkout Form)
// ============================================================

describe('Form Test — Checkout Form on saucedemo.com', () => {

  beforeEach(() => {
    // Login first
    cy.visit('https://www.saucedemo.com')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.url().should('include', '/inventory')
  })

  // ----------------------------------------------------------
  // FORM TEST 1: Fill checkout form and assert confirmation
  // ----------------------------------------------------------
  it('Form Test 1: Complete checkout form and assert order confirmation', () => {
    // Step 1: Add first product to cart
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()

    // Assert item was added — cart badge shows 1
    cy.get('.shopping_cart_badge')
      .should('be.visible')
      .and('have.text', '1')

    // Step 2: Go to Cart
    cy.get('.shopping_cart_link').click()
    cy.url().should('include', '/cart')

    // Step 3: Click Checkout
    cy.get('[data-test="checkout"]').should('be.visible').click()
    cy.url().should('include', '/checkout-step-one')

    // Step 4: Fill in the checkout form
    cy.get('[data-test="firstName"]')
      .should('be.visible')
      .type('Ali')

    cy.get('[data-test="lastName"]')
      .should('be.visible')
      .type('Hassan')

    cy.get('[data-test="postalCode"]')
      .should('be.visible')
      .type('54000')

    // Step 5: Click Continue
    cy.get('[data-test="continue"]').click()
    cy.url().should('include', '/checkout-step-two')

    // Step 6: Click Finish to submit order
    cy.get('[data-test="finish"]').click()
    cy.url().should('include', '/checkout-complete')

    // Assert: Success confirmation message is shown
    cy.get('.complete-header')
      .should('be.visible')
      .and('have.text', 'Thank you for your order!')

    // Assert: Confirmation sub-text is visible
    cy.get('.complete-text')
      .should('be.visible')
      .and('contain.text', 'Your order has been dispatched')
  })

})
