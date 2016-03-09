angular.module('draft.common').factory('dataService', [
    '$q', '$http',
    function ($q, $http) {

        function getData(jSonName){
            var deferred = $q.defer();

            $http.get('./data/'+jSonName+'.json').success(function (data) {
                deferred.resolve(data);
            }).error(function (response) {
                deferred.reject();
            });

            return deferred.promise;
        }


        // ======================================
        // PUBLIC RETURNS
        // ======================================

        return {
            getData: getData
        };

    }]);