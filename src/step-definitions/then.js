const { Given,And,When,Then } = require('cucumber');

Then(/^I wait for element visible$/, function () {
    isDisplayed('//input[@value="Ir"]', false);

    let first = _.map(object, (item) => {
    //change logic for maybe 
    if(item) {
        return item.b.c
    }
    })
});