angular.module('bookApp.controllers', [])

.controller('BaseController', function($scope, BooksService) {
	$scope.books =  BooksService.search('Computers');
});