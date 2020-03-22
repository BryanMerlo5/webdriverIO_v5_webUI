'use strict';
const { Given } = require('cucumber');
const elem = require('../maps/home.page.map.js');

Given(/^I open a website$/, () => {
  const seconds = 5;
  let wait = seconds * 1000;
  browser.pause(wait);
  browser.url('https://www.jetblue.com/');
  browser.pause(wait);
  //browser.$(elem.txt.info).setValue('jalo');
  browser.$(elem.topMenuSection.lnk.book).waitForExist(10000, true, 'Element is not displayed');
  browser.$('.mega-link-item:nth-child(3) > .main-nav-link').waitForExist(10000, true, 'Element is not exist');
  //mapObject.txt.info.setValue('jalo');
  //myMap.txt.info.setValue('jalo');
  //browser.$('//*[@id="tsf"]/div[2]/div[1]/div[1]/div/div[2]/input').setValue('asjhakjsdhakjhsdajhsdkhasd');
});