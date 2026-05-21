describe('Custom Command Test', () => {

    beforeEach(() => {

        cy.visit('https://www.saucedemo.com')
    })

    it('Login using custom command', () => {

        cy.login('standard_user', 'secret_sauce')

        cy.url().should('include', '/inventory.html')
    })
})
