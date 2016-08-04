'use strict';

var BasePage = require('./basePage.js');

var GridPage = function () {
    var secondCat = element(by.repeater('cat in pets').row(1));

    this.table = element(by.id('table'));
    this.searchField = element(by.id('searchField'));
    this.rows = element.all(by.repeater('user in gridController.usersFromExternal'));

};

GridPage.prototype = new BasePage();
module.exports = GridPage;