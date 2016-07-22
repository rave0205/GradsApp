(function() {
    'use strict';

    angular.module('gradsApp', [
        //app modules
        'gradsApp.home',
        'gradsApp.grid',

        //external dependencies
        'ui.router'
    ])
        .constant('testConstant' ,'Some content')
        .value('angularVal', '');
})();