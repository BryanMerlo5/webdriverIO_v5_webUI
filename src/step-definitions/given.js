'use strict';

const { Given } = require('cucumber');
const elem = require('../maps/mapping_One');
const getObject = require('../../helpers/pupito');

var mapObject = function (ui, elem) {
  return eval(elem);
};

Given(/^I open a website$/, () => {
  const newMap = getObject.objMap(ui, elem);
  const seconds = 5;
  let wait = seconds * 1000;
  browser.pause(wait);
  browser.url('https://www.google.com');
  browser.pause(wait);
  //browser.$(elem.txt.info).setValue('jalo');
  mapObject.txt.info.setValue('jalo');
  //myMap.txt.info.setValue('jalo');
  //browser.$('//*[@id="tsf"]/div[2]/div[1]/div[1]/div/div[2]/input').setValue('asjhakjsdhakjhsdajhsdkhasd');
});