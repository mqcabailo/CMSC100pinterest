'use strict';

(function (){
	var app = angular.module('pinterest');
	app.controller('homeCtrl', homeCtrlFunc);

	homeCtrlFunc.$inject = ['$scope', '$http', '$filter', '$location'];

	function homeCtrlFunc($scope, $http, $filter, $location){

		$http({
			method: 'GET',
			url: 'http://localhost:3000/get-posts'
		}).then(success, error);

		function success (response) {
			$scope.posts = response.data;
			console.log(response.data[0]);
		};

		function error (response) {
			console.log(response);

		};
	

	};
})();