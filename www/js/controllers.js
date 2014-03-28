angular.module('bookApp.controllers', [])

.controller('BaseController', function($scope, BooksService) {
	$scope.books = [];
	$scope.searchTerm = '';

	BooksService.search('monkey').then(function(response) {
		$scope.books.length = 0;
		$scope.books = response.items;

		console.log(response.items);
	});

	$scope.search = function() {
		BooksService.search($scope.searchTerm).then(function(response) {
			$scope.books = response.items;
		});
	}
});