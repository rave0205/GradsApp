(function () {
    'use strict';

    angular.module('gradsApp.home').config(homeConfig);

    homeConfig.inject = ['$stateProvider'];

    function homeConfig($stateProvider) {

        $stateProvider

            .state('root', {
                parent: 'app',
                url: '/root',
                views: {
                    'header': {
                        templateUrl: '/modules/home/templates/topnavbar.tpl.html'
                    },
                    'body': {
                        template: '<div ui-view></div>'
                    },
                    'footer': {
                        templateUrl: '/modules/home/templates/footer.tpl.html'
                    }
                }
            })
            .state('home', {
                url: '/home',
                parent: 'root',
                templateUrl: 'modules/home/templates/home.tpl.html',
                controller: 'HomeController'

            })
    }
})();
