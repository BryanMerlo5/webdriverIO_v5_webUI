'use strict';
const { When } = require('cucumber');
const elem = require('../maps/home.page.map.js');
const signIn = require('../maps/login.page.map');
const expect = require('chai').expect;
const data = require('../../test/data/Logins');
const joiner = require('../maps/joiner.js');
const pt = require('jsonpath');
const _ = require('lodash');

When(/^I go to sign-in page$/, () => {
    var title = 'Sample Website for Galen Framework';
    browser.$(joiner.map_home.topMenuSection.btn.login_test).click();
    browser.pause(5000);
    title = browser.getTitle();
    expect(browser.getTitle() === title).to.equal(true);
});

When(/^I enter the credentials to sign-in$/, function () {
    //Code to use jsonpath get the value given json path
    /* const obj = pt.query(joiner, "$.map_login.containers.login.btn.add_note");
    var myJSON = obj.toString();
    console.log('The value is a:', myJSON);*/
    const user = "testuser@example.com";
    const pass = "test123";
    browser.$(joiner.map_login.containers.login.txt.email).setValue(user);
    browser.$(joiner.map_login.containers.login.txt.password).setValue(pass);
    browser.$(joiner.map_login.containers.login.btn.login_test).click();
    browser.pause(20000);
    let newExample = _.get(joiner, 'map_login.containers.login.btn.add_note');
    //newExample = JSON.stringify(newExamplenewExample);
    // console.log('This is the data', );
    // console.log(typeof newExample);
    browser.$(newExample).isDisplayed();
    browser.$(myJSON).isDisplayed();    
});
