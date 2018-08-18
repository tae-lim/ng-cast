angular.module('video-player')
.service('youTube', function($http){
  this.search = (param, callback) => {
    return $http({
      method: 'GET',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: param,
    }).then(function successCallback(response) {
        callback(response.data.items);
    }, function errorCallback(response) {
        console.log('fail')
    });
  }
});
