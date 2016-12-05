'use strict';

(function (){
	var app = angular.module('pinterest');
	app.controller('profileCtrl', profileCtrlFunc);

	profileCtrlFunc.$inject = ['$scope', '$http', '$filter', '$location', 'authService', 'navbarService'];

	function profileCtrlFunc($scope, $http, $filter, $location, authService, navbarService){
		authService.auth();

		$scope.nav = navbarService.nav();

		$scope.boards = {};
		$scope.user = {};
		$scope.fboards = {};
		$scope.fposts = {};

		$http({
			method: 'GET',
			url: 'http://localhost:3000/profile/' + authService.getSession().user_id
		}).then(success, error);

		function success (response) {
			$scope.user = response.data[0];
		};

		function error (response) {
			console.log(response);
		};

		$scope.getBoards = function(){
			$http({
				method: 'GET',
				url: 'http://localhost:3000/profile/' + authService.getSession().user_id + '/getBoards'
			}).then(success, error);

			function success (response) {
				$scope.boards = response.data;
			};

			function error (response) {
				console.log(response);
			};
		}

		$scope.getFollowedBoards = function(){
			$http({
				method: 'GET',
				url: 'http://localhost:3000/profile/' + authService.getSession().user_id + '/getFollowedBoards'
			}).then(success, error);

			function success (response) {
				$scope.fboards = response.data;
				console.log(response.data);
			};

			function error (response) {
				console.log(response);
			}
		}


		$scope.getFollowedPosts = function(){
			$http({
				method: 'GET',
				url: 'http://localhost:3000/profile/' + authService.getSession().user_id + '/getFollowedPosts'
			}).then(success, error);

			function success (response) {
				$scope.fposts = response.data;
				console.log(response.data);
			};

			function error (response) {
				console.log(response);
			}
		}
	

	};
})();