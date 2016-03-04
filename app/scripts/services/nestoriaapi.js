'use strict';

/**
 * @ngdoc service
 * @name yoApp.NestoriaAPI
 * @description
 * # NestoriaAPI
 * Factory in the yoApp.
 */
angular.module('yoApp')
  .factory('NestoriaAPI', ['$http','$log', '$q', function ($http, $log, $q) {
    // Service logic
    // ...

    var url = 'http://api.nestoria.co.uk/api?country=uk&pretty=1&action=search_listings&encoding=json&listing_type=buy&page=1&place_name=';

    // Public API here
    return {
      get: function (placeName) {
        var deferred = $q.defer();
        $log.debug("Get" + placeName);
       $http.jsonp(url + placeName + '&callback=JSON_CALLBACK').then(function (result) {
        $log.debug(result);
        deferred.resolve(result);
       }).catch(function (error) {
        $log.error(error);
        deferred.reject(error);
       });

       return deferred.promise;
      }
    };
  }]);
