'use strict';

(function () {
	var app = angular.module('pinterest');
	app.service('navbarService', navbarServiceFunc);

	navbarServiceFunc.$inject = ['$http', '$location', '$mdToast', 'authService'];

	function navbarServiceFunc($http, $location, $mdToast, authService) {
 		this.nav = function(){
 			var nav = {
 				logout: logoutFunc
 			};

 			function logoutFunc(){
				authService.destroy();
 				$location.path('/'); 				
 			};

 			return nav;
 		}
		
	}

})();
