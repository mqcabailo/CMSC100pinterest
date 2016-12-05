'use strict';

(function () {
	var app = angular.module('pinterest');
	app.service('navbarService', navbarServiceFunc);

	navbarServiceFunc.$inject = ['$http', '$location', '$mdToast'];

	function navbarServiceFunc($http, $location, $mdToast, authService) {
 	
		
	}

})();
