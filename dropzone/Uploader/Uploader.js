angular.module('dropzoneUploader',['servoy']).directive('dropzoneUploader', function() {  
    return {
      restrict: 'E',
      scope: {
    	  model: '=svyModel'
      },
      controller: function($scope, $element, $attrs, $window) {
          $window.Dropzone.options.dz = {
              dictDefaultMessage : 'yoo'
          }
          
          var dz = new Dropzone("div#dz", { url: "/file/post"})//, dictDefaultMessage : 'abc'});//
          //$("div#dz").dropzone({ url: "/file/post", dictDefaultMessage : 'ab'})
          
      },
      templateUrl: 'dropzone/Uploader/Uploader.html'
    };
  })