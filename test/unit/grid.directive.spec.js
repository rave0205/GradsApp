'use strict';

describe('GridDirective', function () {
    var GridService;

    //load modules
    beforeEach(function () {
        module('gradsApp.grid');
        module(function ($provide) {
            $provide.constant('gridPage', '');
        });
    });


    beforeEach(inject(function ($rootScope) {
    }));

    it('should show default value', inject(function ($rootScope, $compile) {
        var element = $compile('<grid-display value="" default="Test value"></grid-display>')($rootScope);
        $rootScope.$digest();

        // var scope = element.data('$scope');
        // scope.$apply();

        expect(element.text()).toEqual('Test value');

        expect(jQuery(element).find('button.ui-grid-ellipsis-button').css('display')).toEqual('none');
        expect(jQuery(element).find('div.overflow-ellipsis').css('margin-right')).toEqual('0px');


    }));

});













