'use strict';

describe('GridController', function () {
    var gridCtrl, scope, state, GridService, httpBackend;
    var mockedUsers = [];

    beforeEach(function () {
        module('ui.router');
        module('gradsApp.grid');
        module(function ($provide) {
            $provide.constant('gridPage', '');
        });
    });

    beforeEach(inject(function ($injector, $controller, $state, $rootScope, _GridService_) {
        scope = $rootScope;
        state = $state;
        GridService = _GridService_;
        httpBackend = $injector.get('$httpBackend');

        httpBackend
            .whenGET(/modules\/.*\/templates\//)
            .respond(200, {});

        spyOn(GridService, 'getData').and.callFake(function (credentials) {
            var def = $q.defer();

            def.resolve({});
            return def.promise;

        });

        spyOn(GridService, 'getLocalData').and.callFake(function () {
            return {data: mockedUsers};
        });

    }));

    var instantiateTheController = function ($controller) {
        gridCtrl = $controller('GridController', {GridService: GridService, $state: state});
        scope.$apply();
    };

    it('should initialize controller', inject(function ($controller) {
        //spec body
        instantiateTheController($controller);

        expect(gridCtrl).toBeDefined();
        expect(gridCtrl.users).toBe(mockedUsers);
    }));

    it('should change value', inject(function ($controller) {
        //spec body
        instantiateTheController($controller);

        expect(gridCtrl.value).toEqual(3);

        gridCtrl.changeValue();

        expect(gridCtrl.value).toEqual(10);
    }));

    it('should go to state', inject(function ($controller) {
        //spec body
        spyOn(state, 'go');
        instantiateTheController($controller);

        gridCtrl.goToHome();

        expect(state.go).toHaveBeenCalledWith("home");
    }));


});