describe('Login Tests', () => {

    beforeEach(() => {

        cy.visit('https://www.saucedemo.com')
    })

    it('Login Test 1 - Valid Login', () => {

        cy.get('[data-test="username"]').type('standard_user')

        cy.get('[data-test="password"]').type('secret_sauce')

        cy.get('[data-test="login-button"]').click()

        cy.url().should('include', '/inventory.html')
    })

    it('Login Test 2 - Invalid Password', () => {

        cy.get('[data-test="username"]').type('standard_user')

        cy.get('[data-test="password"]').type('wrongpass')

        cy.get('[data-test="login-button"]').click()

        cy.get('[data-test="error"]')
            .should('be.visible')
    })

    it('Login Test 3 - Empty Fields', () => {

        cy.get('[data-test="login-button"]').click()

        cy.get('[data-test="error"]')
            .should('contain', 'Username is required')
    })
})
