'use strict';

describe('GridService', function () {
    var GridService;

    //load modules
    beforeEach(function () {
        module('gradsApp.grid');
        module(function ($provide) {
            $provide.constant('gridPage', '');
        });
    });


    beforeEach(inject(function (_GridService_) {
        GridService = _GridService_;
    }));

    it('should return data', inject(function () {
        //spec body

        expect(GridService.getLocalData).not.toBeNull();
    }));


});