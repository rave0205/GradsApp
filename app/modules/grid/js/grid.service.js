(function () {
    'use strict';

    angular.module('gradsApp.grid')
        .factory('GridService', GridService);

    GridService.inject = ['$http', '$q'];

    function GridService($http, $q) {

        return {
            getData: getData,
            doSmth: doSmth,
            getLocalData: getLocalData
        };

        function isJson(data) {
            try {
                JSON.parse(data);
            } catch (e) {
                return false;
            }
            return true;
        }

        function getLocalData (){
            var data = {
                "data": [
                    {
                        "name": "Jack",
                        "company": "IBM",
                        "email": "jack@alfa.co",
                        "enabled": true,
                        "added": "20 Nov 2013"
                    },
                    {
                        "name": "Randy",
                        "company": "Endava",
                        "email": "randy@endava.com",
                        "enabled": false,
                        "added": "25 Nov 2003"
                    },
                    {
                        "name": "Jim",
                        "company": "IBM",
                        "email": "jack@alfa.co",
                        "enabled": false,
                        "added": "20 Nov 2013"
                    },
                    {
                        "name": "Bob",
                        "company": "Endava",
                        "email": "bob@endava.com",
                        "enabled": true,
                        "added": "02 Dec 2013"
                    },
                    {
                        "name": "jim",
                        "company": "Endava",
                        "email": "jiim@endava.com",
                        "enabled": true,
                        "added": "14 Mar 2009"
                    }
                ]
            };
            return angular.fromJson(data);
        }

        function doSmth (value) {
            if(value){
                return true;
            }
        }

        function getData() {
           return $http.get("https://api.myjson.com/bins/58giz");
        }


    }
})();
