'use strict';

module.exports = {
    injectGrid: function (mockedGridData, constantValue) {

        angular.module('gridMockModule', ['gradsApp', 'ngMockE2E'])
            .run(function ($httpBackend) {

                $httpBackend.whenGET(/https:\/\/api\.myjson\.com\/bins\/.*/).respond(function () {
                    return [200, mockedGridData];
                });

                $httpBackend.whenGET(/.*/).passThrough();

            }).constant('gridPage', constantValue);
    }
};