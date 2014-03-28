angular.module('twitterApp.controllers', [])

.controller('BaseController', function($http) {

	$http.jsonp('https://api.twitter.com/1.1/statuses/user_timeline.json', {
		params: {
			count: '2',
			screen_name: 'NormySanDeluxe'
		}
	}).success(function(response) {

	});

});