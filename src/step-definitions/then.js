const { Then } = require('cucumber');

Then(
    /^I expect that the title is( not)* "([^"]*)?"$/,
    checkTitle
);