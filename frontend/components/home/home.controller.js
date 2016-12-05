'use strict';

(function (){
	var app = angular.module('pinterest');
	app.controller('homeCtrl', homeCtrlFunc);

	homeCtrlFunc.$inject = ['$scope', '$http', '$filter', '$location', 'authService', 'navbarService'];

	function homeCtrlFunc($scope, $http, $filter, $location, authService, navbarService){
		authService.auth();
		$scope.nav = navbarService.nav();
		$scope.user = {
			"user_id": authService.getSession().user_id,
			"username": authService.getSession().username,
			"email": authService.getSession().email
		}

		$http({
			method: 'POST',
			url: 'http://localhost:3000/getFeed',
			data: $scope.user,
			withCredentials: true
		}).then(success, error);

		function success (response) {
			$scope.posts = response.data;
			console.log(response.data);
		};

		function error (response) {
			console.log(response);

		};
	

	};
})();