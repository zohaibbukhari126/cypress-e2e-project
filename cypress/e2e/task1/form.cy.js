describe('Form Test', () => {

    beforeEach(() => {

        cy.visit('https://www.saucedemo.com')

        cy.login('standard_user', 'secret_sauce')
    })

    it('Fill Checkout Form', () => {

        cy.get('.shopping_cart_link').click()

        cy.get('[data-test="checkout"]').click()

        cy.get('[data-test="firstName"]').type('Ali')

        cy.get('[data-test="lastName"]').type('Khan')

        cy.get('[data-test="postalCode"]').type('54000')

        cy.get('[data-test="continue"]').click()

        cy.contains('Checkout: Overview')
            .should('be.visible')
    })
})
