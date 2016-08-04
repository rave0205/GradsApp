'use strict';

describe('grid page', function () {
    var GridPage = require('./../pages/gridPage.js');
    var HomePage = require('./../pages/homePage.js');
    var mockInjector = require('./mocks/injectors/gridInjector.js');
    var gridMocks = require('./mocks/data/gridMocks.js');
    var gridPage, homePage;


    var navigateToGrid = function () {
        homePage.get('');
        expect(browser.getLocationAbsUrl()).toMatch('/root/home');
        homePage.goToGridLink.click();
        expect(browser.getLocationAbsUrl()).toMatch('/root/grid');
    };

    beforeEach(function () {
        browser.clearMockModules();
        gridPage = new GridPage();
        homePage = new HomePage();
    });

    it('should show elements on page', function () {

        browser.addMockModule('gridMockModule', mockInjector.injectGrid,
            gridMocks.gridData,
            gridMocks.constantValue
            );

        navigateToGrid();
        expect(browser.getLocationAbsUrl()).toContain('/grid');

        expect(gridPage.table.isPresent()).toBeTruthy();

    });

    afterEach(function () {
    });


});
