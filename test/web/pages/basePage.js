'use strict';

var BasePage = function () {

    this.landingPageTitle = element(by.id('landingPage'));

    this.get = function () {
        browser.get('');
        browser.waitForAngular();
    };

    this.getPage = function (path) {
        browser.get(path);
        browser.waitForAngular();
    };

};

module.exports = BasePage;