


Cypress.Commands.add('login', (username, password) => {
  // Get the username input and type the provided username
  cy.get('[data-test="username"]')
    .should('be.visible')
    .clear()
    .type(username)

  // Get the password input and type the provided password
  cy.get('[data-test="password"]')
    .should('be.visible')
    .clear()
    .type(password)

  // Click the login button to submit
  cy.get('[data-test="login-button"]').click()
})


Cypress.Commands.add('logout', () => {
  // Open the hamburger menu
  cy.get('#react-burger-menu-btn').click()

  // Wait for menu to open, then click logout
  cy.get('#logout_sidebar_link')
    .should('be.visible')
    .click()
})



Cypress.Commands.add('addItemToCart', (productSlug) => {
  cy.get(`[data-test="add-to-cart-${productSlug}"]`)
    .should('be.visible')
    .click()
})
