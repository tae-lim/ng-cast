angular.module('video-player')
// .controller('test', function () {
//   this.test = () => { console.log(this)};
// })

  .component('list', {
    // controller: 'test',
    bindings: {
      videos: '<',
      select: '<'
    },

    templateUrl: 'src/templates/videoList.html'
  });
