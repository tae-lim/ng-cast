angular.module('video-player')
  .controller('videoController', function ($sce, youTube) {
    this.url = $sce.trustAsResourceUrl("https://www.youtube.com/embed/");

    this.videoList;

    this.searchResults = (query) => {
      this.param = {
        key: window.YOUTUBE_API_KEY,
        maxResults: "5",
        part: 'snippet',
        q: query,
        type: 'video',
        videoEmbeddable: 'true'
      };
      youTube.search(this.param, (data) => {
        this.videoList = data;
        this.selectedVideo = data[0];
      });

    }
    this.searchResults('yugiOh');

    this.selectVideo = (video) => {

      this.selectedVideo = video;
    }






  })

  .component('videoBody', {
    controller: 'videoController',
    templateUrl: 'src/templates/app.html'
  });




// angular.module('video-player')
//  controller: function () {
//     this.videoList = window.exampleVideoData;
//  }
// .component('app', {
//   templateUrl: 'src/templates/app.html'
// });

