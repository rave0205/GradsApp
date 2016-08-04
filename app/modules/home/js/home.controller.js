(function () {
    'use strict';

    angular.module('gradsApp.home').controller('HomeController', HomeController);

    HomeController.inject = ['$scope',
        '$state'];

    function HomeController($scope, $state ) {

        $scope.home = {};
        var thisScope = $scope.home;

        thisScope.name = "";
        thisScope.email = "";

        thisScope.goToGrid = function() {
            $state.go('grid');
            // $location.url('/root/grid')
        };

        thisScope.resetInputs = function () {
            thisScope.name = null;
            thisScope.email = null;
        }


    }
})();