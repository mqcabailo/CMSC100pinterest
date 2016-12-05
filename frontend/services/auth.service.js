'use strict';

(function () {
	var app = angular.module('pinterest');
	app.service('authService', authServiceFunc);

	authServiceFunc.$inject = ['$http', '$location', '$mdToast'];

	function authServiceFunc($http, $location, $mdToast) {

		this.getSession = function () {
			var user = {};

			user.user_id = localStorage.getItem('user_id');
			user.email = localStorage.getItem('email');
			user.username = localStorage.getItem('username');

			return user;
		}

		this.setSession = function (data) {
			localStorage.setItem('user_id', data.user_id);
			localStorage.setItem('username', data.username);
			localStorage.setItem('email', data.email);

		}

		this.destroy = function () {
			localStorage.clear();
		}

		this.auth = function() {
			if (!!localStorage.getItem('email')) {
				if ($location.path() === '/') {
					$location.path('/home');
				}
			}
			else {
				if ($location.path() !== '/') {
					$location.path('/');
				}
			}

		};

	}

})();
