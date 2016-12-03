'use strict';

(function () {
	var app = angular.module('pinterest', ['ngRoute', 'ngMaterial', 'ngAnimate']);
	app.config(configFunc);

	configFunc.$inject=['$routeProvider'];

	function configFunc($routeProvider) {
		$routeProvider
			.when('/',{
				'templateUrl'	: './components/landing/landing.view.html',
				'controller'	: 'landingCtrl'
			})

			.when('/profile', {
				'templateUrl'	: './components/profile/profile.view.html',
				'controller' 	: 'profileCtrl'
			})

			.when('/home',{
				'templateUrl'	: './components/home/home.view.html',
				'controller'	: 'homeCtrl'
			})

			.otherwise({'redirectTo': '/'})
	}
	
})();

