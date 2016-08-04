(function () {
    'use strict';

    angular.module('gradsApp.grid')
        .directive('gridDisplay', GridDisplay);

    function GridDisplay() {
        return {
            restrict: "EA",

            template: '<div class="default-value-text"">' +
            '{{value ? value : defaultValue }}' +
            '</div>',
            scope: {
                value: '@',
                defaultValue: '@default'
            }
        }
    }
})();