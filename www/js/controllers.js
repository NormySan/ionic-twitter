angular.module('bookApp.controllers', [])

.controller('BaseController', function($scope, BooksService) {
	$scope.books = [];

	$scope.search = function(string) {
		BooksService.search(string).then(function(response) {
			$scope.books = response.items;
		});
	}
});