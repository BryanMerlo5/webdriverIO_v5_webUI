'use strict';
const { Given } = require('cucumber');
const elem = require('../maps/home.page.map.js');
const joiner = require('../maps/joiner.js');
const ui = require('lodash');

Given(/^I open a site "([^\"]*)\"$/, (url) => {
  const site = url;
  console.log(url);
  browser.pause(10000);
  browser.url(site);
  browser.pause(10000);
  //const newYork = "joiner.map_home.topMenuSection.img.log";
  //const elem = ui(joiner, newYork);
  //browser.$(elem).isDisplayed();
});