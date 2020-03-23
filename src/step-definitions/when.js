'use strict';
const { When } = require('cucumber');
const elem = require('../maps/home.page.map.js');
const signIn = require('../maps/login.page.map');
const expect = require('chai').expect;
const data = require('../../test/data/Logins');

When(/^I enter the credentials to sign-in$/, function (text) {
    browser.$(signIn.txt.email).setValue(data.user.name);
    browser.$(signIn.btn.signIn).click();
    browser.pause(5000);
    expect(signIn.lbl.signIn.getText() === data.user.name).to.equal(true);
    browser.$(signIn.txt.password).setValue(data.user.password);
    browser.$(signIn.btn.signIn).click();
});

When(/^I go to sign-in page$/, () => {
    var title = 'Amazon Iniciar Sesion';
    browser.$(elem.topMenuSection.lnk.signIn).click();
    title = browser.getTitle();
    expect(browser.getTitle() === title).to.equal(true);
});
