angular.module('bookApp', ['ui.router', 'bookApp.controllers', 'bookApp.services'])

.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider
		.state('base', {
			url: '/base',
			controller: 'BaseController',
			templateUrl: 'templates/books-list.html'
		});

	$urlRouterProvider.otherwise("/base");
})