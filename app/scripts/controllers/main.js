'use strict';

/**
 * @ngdoc function
 * @name yoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the yoApp
 */
angular.module('yoApp')
  .controller('MainCtrl',['NestoriaAPI', function (NestoriaAPI) {
  	var main = this;
    main.recentSearch = [];
    main.query = '';

    main.error = '';
    main.location = [];

    main.search = function () {
    	NestoriaAPI.get(main.query)
    	.then(function (res) {
    		// res.data.response.locations;
    		// res.data.response.locations;
    		main.location = res.data.response.locations.map (function (item) {
    			return item.long_title;
    		})
    	})
    	.catch(function () {
    		main.error = 'Error';
    	});
    }
  }]);
