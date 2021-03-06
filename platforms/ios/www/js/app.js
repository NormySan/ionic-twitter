angular.module('twitterApp', ['twitterApp.controllers', 'twitterApp.services'])

.config(function($stateProvider, $urlRouterProvider) {

	$stateProvider
		.state('base', {
			url: '/base',
			controller: 'BaseController',
			template: 'templates/test.html'
		});

	$urlRouterProvider.otherwise("/base");
})