const { Given,And,When,Then } = require('cucumber');
const element = require ('../maps/loginPageThirdStructure');
const isDisplayed = require ('../../support/check/isDisplayed');

Then(/^I wait for element visible$/, function () {
    isDisplayed('//input[@value="Ir"]', false);
});

