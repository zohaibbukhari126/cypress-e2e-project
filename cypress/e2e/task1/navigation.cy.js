describe('Navigation Tests', () => {

    beforeEach(() => {

        cy.visit('https://www.saucedemo.com')

        cy.login('standard_user', 'secret_sauce')
    })

    it('Navigation Test 1', () => {

        cy.get('.shopping_cart_link').click()

        cy.url().should('include', 'cart.html')
    })

    it('Navigation Test 2', () => {

        cy.get('#react-burger-menu-btn').click()

        cy.contains('About').click()

        cy.url().should('include', 'saucelabs')
    })
})
