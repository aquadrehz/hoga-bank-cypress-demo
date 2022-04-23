/// <reference types="cypress" />

const USERNAME_INPUT_BOX = '#root input:nth-child(1)'
const PASSWORD_INPUT_BOX = '#root input[type=password]'
const WARNING_MSG = '#root span[color]'
const USERNAME_IN_TRANSACTION_TABLE = '#root th'

class Common {

    // Function need to be called by Step definition files
    static goToLoginPage() {
        cy.visit("/");
    }

    static fillUsername(username: string) {
        cy.get(USERNAME_INPUT_BOX).type(username)
    }

    static fillPassword(password: string) {
        cy.get(PASSWORD_INPUT_BOX).type(password)
    }

    static warningDisplayed(text: string) {
        cy.get(WARNING_MSG).contains(text)
    }

    static warningNotDisplayed() {
        cy.get(WARNING_MSG).should('not.exist')
    }

    static usernameDisplayed(username: string) {
        cy.get(USERNAME_IN_TRANSACTION_TABLE).contains(username)
    }

}
// Export as Module for re-usability
export default Common