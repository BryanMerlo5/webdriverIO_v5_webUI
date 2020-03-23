'use strict';
const { Given } = require('cucumber');
const elem = require('../maps/home.page.map.js');

Given(/^I open a site$/, () => {
  const site = "https://www.amazon.com.mx/";
  browser.pause(10000);
  browser.url(site);
  browser.pause(10000);
});