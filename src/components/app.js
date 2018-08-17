angular.module('video-player')
.controller('videoController', function () {
  this.videoList = window.exampleVideoData;
})

.component('videoBody', {
  controller: 'videoController',
  templateUrl: 'src/templates/app.html'
})




// angular.module('video-player')
//  controller: function () {
//     this.videoList = window.exampleVideoData;
//  }
// .component('app', {
//   templateUrl: 'src/templates/app.html'
// });

