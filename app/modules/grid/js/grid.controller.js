(function () {
    'use strict';

    angular.module('gradsApp.grid').controller('GridController', GridController);

    GridController.inject = ['GridService', '$state'];

    function GridController(GridService, $state) {

        var gridCtrl = this;

        gridCtrl.users = GridService.getLocalData().data;

        gridCtrl.goToHome = function () {

        };


    }
})();