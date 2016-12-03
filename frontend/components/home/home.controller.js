'use strict';

(function (){
	var app = angular.module('pinterest');
	app.controller('homeCtrl', homeCtrlFunc);

	homeCtrlFunc.$inject = ['$scope', '$http', '$filter', '$location'];

	function homeCtrlFunc($scope, $http, $filter, $location){
		$scope.posts = [
			{
				"title"		: 		"Title",
				"content"	: 		"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."	
			},
			{
				"title"		: 		"Title",
				"content"	: 		"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. "	
			},
			{
				"title"		: 		"Title",
				"content"	: 		"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."	
			},
			{
				"title"		: 		"Title",
				"content"	: 		"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."	
			},
			{
				"title"		: 		"Title",
				"content"	: 		"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
			},
			{
				"title"		: 		"Title",
				"content"	: 		"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."	
			},	
			{
				"title"		: 		"Title",
				"content"	: 		"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."	
			},
			{
				"title"		: 		"Title",
				"content"	: 		"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."	
			},
			{
				"title"		: 		"Title",
				"content"	: 		"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."	
			},
			{
				"title"		: 		"Title",
				"content"	: 		"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."	
			}
		];

	};
})();