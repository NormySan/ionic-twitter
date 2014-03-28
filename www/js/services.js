angular.module('bookApp.services', [])

.factory('BooksService', function ($http) {
	return {
		search: function(query) {
			return $http.get('https://www.googleapis.com/books/v1/volumes', {
				params: { q: query }
			}).then(function(data) {
				return data;
			})
		}
	}
});