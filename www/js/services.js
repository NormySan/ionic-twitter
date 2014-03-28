angular.module('bookApp.services', [])

.factory('BooksService', function ($q, $http) {
	return {
		search: function(query) {
			var deffered = $q.defer();
			
			$http.get('https://www.googleapis.com/books/v1/volumes', {
				params: { q: query }
			}).success(function(data, status) {
				deffered.resolve(data);
			}).error(function(data, status) {
				deffered.reject(data);
			});

			return deffered.promise;
		}
	}
});