'use strict';

describe('home page', function () {
    var HomePage = require('./../pages/homePage.js');
    var homePage;

    var navigateToHome = function () {
        homePage.get('');
        expect(browser.getLocationAbsUrl()).toMatch('/root/home');
    };

    beforeEach(function () {
        browser.clearMockModules();
        homePage = new HomePage();
    });

    it('should show elements on page', function () {

        navigateToHome();
        expect(browser.getLocationAbsUrl()).toContain('/home');

        expect(homePage.saveBtn.isPresent()).toBeTruthy();
        expect(homePage.saveBtn.isEnabled()).toBeTruthy();

        expect(homePage.cancelBtn.isPresent()).toBeTruthy();
        expect(homePage.cancelBtn.isEnabled()).toBeFalsy();

        expect(homePage.divWithNgShow.isPresent()).toBeTruthy();
        expect(homePage.divWithNgIf.isPresent()).toBeTruthy();
        expect(homePage.divWithNgHide.isPresent()).toBeTruthy();

        homePage.showHideBtn.click();

        expect(homePage.divWithNgShow.isPresent()).toBeTruthy();
        expect(homePage.divWithNgShow.isDisplayed()).toBeFalsy();
        expect(homePage.divWithNgIf.isPresent()).toBeFalsy();
        expect(homePage.divWithNgHide.isPresent()).toBeTruthy();
        expect(homePage.divWithNgHide.isDisplayed()).toBeFalsy();

        homePage.nameInput.sendKeys("afasfa");

        // when data in form cancel button enabled
        expect(homePage.cancelBtn.isPresent()).toBeTruthy();
        expect(homePage.cancelBtn.isEnabled()).toBeTruthy();


        // homePage.ca.click();
        // expect(browser.getLocationAbsUrl()).toContain('/statements');

    });

    afterEach(function () {
    });


});
