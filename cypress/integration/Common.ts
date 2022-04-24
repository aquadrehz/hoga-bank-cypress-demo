/// <reference types="cypress" />

// Loogin and Signup page
const USERNAME_INPUT_BOX = '#root input:nth-child(1)'
const PASSWORD_INPUT_BOX = '#root input[type=password]'
const WARNING_MSG = '#root span[color]'
const USERNAME_IN_TRANSACTION_TABLE = '#root th'

const SIGNUP_BUTTON_NAME = "SIGNUP"
const LOGIN_BUTTON_NAME = "LOGIN"

const BALANCE = 'div>.t>tbody>tr:nth-child(1)>td:nth-child(2)'
const TRANSACTION_FEE_LIST = '.t .t>tbody>tr>td:nth-child(2)'
const FIRST_TRANSACTION_FEE = '.t .t>tbody>tr:nth-child(1)>td:nth-child(2)'

// Deposit and Withdraw page
const AMOUNT_INPUT_BOX = '#root input'
const CALCULATE_FEE = '#root div>span:nth-child(5)'
const FINAL_AMOUNT = '#root div>span:nth-child(8)'

class Common {

    // Function need to be called by Step definition files
    static goToLoginPage() {
        cy.visit("/");
    }

    static fillUsername(username: string) {
        cy.get(USERNAME_INPUT_BOX).type(username)
    }

    static fillUsernameWithGenerated(prefix: string) {
        let random_number = Math.round(Math.random()*1000000)
        let username = prefix +'_' +random_number
        this.fillUsername(username)
        return username
    }

    static fillPassword(password: string) {
        cy.get(PASSWORD_INPUT_BOX).type(password)
        return password
    }

    static fillAmount(amount: string) {
        cy.get(AMOUNT_INPUT_BOX).type(amount)
    }

    static warningDisplayed(text: string) {
        cy.get(WARNING_MSG).contains(text).should('be.visible')
    }

    static warningNotDisplayed() {
        cy.get(WARNING_MSG).should('not.exist')
    }

    static usernameDisplayed(username: string) {
        cy.get(USERNAME_IN_TRANSACTION_TABLE).contains(username).should('be.visible')
    }

    static loginWithNewAccount(prefix: string) {
        // These steps (001, 002) should bypass used login via API request
        // 001 Signup for new account
        this.goToLoginPage()
        cy.contains(SIGNUP_BUTTON_NAME).click()
        let username = this.fillUsernameWithGenerated(prefix)
        let password = this.fillPassword("Correct_1234")
        cy.contains(SIGNUP_BUTTON_NAME).click()
        // 002 Ensure login success
        this.usernameDisplayed(username)
    }

    static calculatedFeeDisplayed(fee: string) {
        cy.get(CALCULATE_FEE).should((actual) => {
            expect(actual.text()).to.equal(fee)
        })
    }

    static finalAmountDisplayed(amount: string) {
        cy.get(FINAL_AMOUNT).should((actual) => {
            expect(actual.text()).to.equal(amount)
        })
    }

    static transactionFeeDisplayedOnTop(amount: string) {
        cy.get(FIRST_TRANSACTION_FEE).should((actual) => {
            expect(actual.text()).to.equal(amount)
        })
    }

    static transactionItemCountIs(amount: number) {
        cy.get(TRANSACTION_FEE_LIST).should('have.length', amount)
    }

    static balanceDisplayedWithinInterval(amount: string, interval: number) {
        let interval_ms = interval*1000
        cy.get(BALANCE, {timeout: interval_ms}).should('have.text', amount)
    }

}
// Export as Module for re-usability
export default Common