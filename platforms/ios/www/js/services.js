angular.module('twitterApp.services', ['ui.router', 'ngResource'])

.factory('TwitterService', function ($resource, $http) {
    var consumerKey = encodeURIComponent('ZKMuDGX4pJ6JNElQinrjAw')
    var consumerSecret = encodeURIComponent('OFdfJZZjVFVQXg3cuDa1MHzw4yS2wktIo4zMPAXXd8U')
    var credentials = btoa(consumerKey + ':' + consumerSecret)

    // Twitters OAuth service endpoint
    var twitterOauthEndpoint = $http.post('https://api.twitter.com/oauth2/token', {
    	method: 'POST',
    	data: 'grant_type=client_credentials',
      	headers: {
        	'Authorization': 'Basic ' + credentials,
        	'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      	}
    })

    twitterOauthEndpoint.success(function (response) {
        // a successful response will return
        // the "bearer" token which is registered
        // to the $httpProvider
        //$httpProvider.defaults.headers.common['Authorization'] = "Bearer " + response.access_token
        console.log(response);
    }).error(function (response) {
      // error handling to some meaningful extent
    })

    /*
    var response = $resource('https://api.twitter.com/1.1/search/:action',
        {
          action: 'tweets.json',
          count: 10,
        },
        {
          paginate: {method: 'GET'}
        })

    return response;
    */
});