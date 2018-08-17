angular.module('video-player')
  .component('list', {
    bindings: {
      videos: '<'
    },

  templateUrl: 'src/templates/videoList.html'
});
