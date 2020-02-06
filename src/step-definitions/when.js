const { Given,And,When,Then } = require('cucumber');

When(/^I type a test "([^"]*)"$/, function (text) {
    const em = $('//input[@value="Ir"]');
    browser.pause(5000);
    browser.setValue(text);
});