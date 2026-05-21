describe('Assertions Practice', () => {

    beforeEach(() => {

        cy.visit('https://www.saucedemo.com')
    })

    it('Visibility Assertion', () => {

        cy.get('.login_logo')
            .should('be.visible')
    })

    it('Text Assertion', () => {

        cy.get('.login_logo')
            .should('have.text', 'Swag Labs')
    })

    it('Attribute Assertion', () => {

        cy.get('[data-test="login-button"]')
            .should('have.attr', 'type', 'submit')
    })

    it('Negative Assertion', () => {

        cy.contains('Epic sadface')
            .should('not.exist')
    })
})
