/// <reference types='cypress' />

// Import Cucumber prefix
import { Given, When, Then} from 'cypress-cucumber-preprocessor/steps';
// Import additional layer for reusing command
import Common from '../Common';

// Keyword need to be called by Feature files
Given('go to Hoga Bank site', () => {
    Common.goToLoginPage();
});

When('click {string} button', (text: string) => {
    cy.contains(text).click()
});

When('fill username with {string}', (username: string) => {
    Common.fillUsername(username)
});

When('fill generated username with {string} prefix', (prefix: string) => {
    let random_number = Math.round(Math.random()*100000)
    Common.fillUsername(prefix +'_' +random_number)
});

When('fill password with {string}', (password: string) => {
    Common.fillPassword(password)
});

Then('warning {string} displayed', (text: string) => {
    Common.warningDisplayed(text)
});

Then('warning do not displayed', (text: string) => {
    Common.warningNotDisplayed()
});

Then('And username {string} displayed in transaction table', (username: string) => {
    Common.usernameDisplayed(username)
});

