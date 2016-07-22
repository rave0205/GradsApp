(function () {
    'use strict';

    angular.module('gradsApp.home').config(gridConfig);

    gridConfig.inject = ['$stateProvider'];

    function gridConfig($stateProvider) {

        $stateProvider
            .state('grid', {
                parent:'root',
                url: '/grid',
                templateUrl: 'modules/grid/templates/view1.tpl.html',
                controller: 'GridController',
                controllerAs: 'gridController'
            })
    }
})();
