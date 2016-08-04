(function () {
    'use strict';

    angular.module('gradsApp.grid').controller('GridController', GridController);

    GridController.inject = ['GridService', '$state'];

    function GridController(GridService, $state) {

        var gridCtrl = this;
        gridCtrl.value = 3;
        gridCtrl.defaultVal = "Default value";

        gridCtrl.users = GridService.getLocalData().data;
        GridService.getData().then(function(response){
            gridCtrl.usersFromExternal = response.data.data;
        });

        gridCtrl.goToHome = function () {
            $state.go("home");
        };

        gridCtrl.changeValue = function () {
            gridCtrl.value = 10;
        };

    }
})();