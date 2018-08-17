angular.module('video-player')


  .controller('test', function () {
    this.test = () => { console.log(this.video)};
  })

  .component('videoListEntry', {
    controller: 'test',
    bindings: {
      video: '<'
    },
    templateUrl: 'src/templates/videoListEntry.html'
  });
