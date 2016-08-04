'use strict';

var BasePage = require('./basePage.js');

var HomePage = function () {
    this.goToGridLink = element(by.id('goToGridLink'));

    this.nameInput = element(by.id('nameInput'));
    this.emailInput = element(by.id('emailInput'));
    this.cancelBtn = element(by.id("cancelBtn"));
    this.saveBtn = element(by.id("saveBtn"));

    this.divWithNgHide = element(by.id("divWithNgHide"));
    this.divWithNgIf = element(by.id("divWithNgIf"));
    this.divWithNgShow = element(by.id("divWithNgShow"));
    this.showHideBtn = element(by.id("showHideBtn"));

    this.inputSearchCriteria = function (category, searchInput) {
        expect(this.searchCategory.isEnabled()).toBeTruthy();
        element(by.cssContainingText('option', category)).click();
        expect(this.searchInput.isEnabled()).toBeTruthy();
        this.searchInput.sendKeys(searchInput);
    };
};

HomePage.prototype = new BasePage();
module.exports = HomePage;