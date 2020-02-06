const { Given,And,When,Then } = require('cucumber');
const openWebsite = require ('../../support/action/openWebsite');

Given(/^I open the (url|site) "([^"]*)?"$/, function (type, page) {
    openWebsite(type, page);
});
