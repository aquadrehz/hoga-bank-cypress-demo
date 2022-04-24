/// <reference types='cypress' />

// Import Cucumber prefix
import { Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
// Import additional layer for reusing command
import Common from '../Common';

// Keyword need to be called by Feature files
Given('access Hoga Bank site with new account and {string} prefix', (prefix: string) => {
    Common.loginWithNewAccount(prefix)
});

Given('click {string} to go to {string} page', (link_name: string, page_name: string) => {
    cy.contains(link_name).click()
});

When('fill amount with {string}', (amount: string) => {
    Common.fillAmount(amount)
});

When('click {string} button', (text: string) => {
    cy.contains(text).click()
});

Then('warning {string} displayed', (text: string) => {
    Common.warningDisplayed(text)
});

Then('calculated fee {string} displayed', (text: string) => {
    Common.calculatedFeeDisplayed(text)
});

Then('final amount {string} displayed', (text: string) => {
    Common.finalAmountDisplayed(text)
});

Then('final amount {string} displayed as top transaction', (amount: string) => {
    Common.transactionFeeDisplayedOnTop(amount)
    Common.transactionItemCountIs(2)
});

Then('balance {string} updated within {string} seconds', (amount: string, interval: number) => {
    Common.balanceDisplayedWithinInterval(amount, interval)
});