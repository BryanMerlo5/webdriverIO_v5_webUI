const { Given,And,When,Then } = require('cucumber');

Then(/^I wait for element visible$/, function () {
    isDisplayed('//input[@value="Ir"]', false);
});

