(function () {
    'use strict';

    angular.module('gradsApp')
        .config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {

            $urlRouterProvider.otherwise('/root/home');

            $stateProvider
                .state('app', {
                    abstract: true,
                    templateUrl: 'templates/root.tpl.html'
                })

        }])

})();