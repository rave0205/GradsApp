(function () {
    'use strict';

    angular.module('gradsApp.home').controller('GridController', GridController);

    GridController.inject = ['GridService'];

    function GridController(GridService) {

        var gridCtrl = this;

        gridCtrl.users = GridService.getLocalData().data;

        


    }
})();