'use strict';
const { When } = require('cucumber');
const elem = require('../maps/home.page.map.js');
const signIn = require('../maps/login.page.map');
const expect = require('chai').expect;

When(/^I enter the credentials to sign-in$/, function (text) {
    browser.$().setValue();
    browser.$().setValue();
    browser.$().click();
    browser.$();
});

When(/^I go to sign-in page$/, () => {
    var title = 'Amazon Iniciar Sesion';
    browser.$(elem.topMenuSection.lnk.signIn).click();
    title = browser.getTitle();
    expect(browser.getTitle() === title).to.equal(true);
});
