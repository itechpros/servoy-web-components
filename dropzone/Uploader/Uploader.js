angular.module('dropzoneUploader',['servoy', 'sabloApp']).directive('dropzoneUploader', ['$sabloApplication', function($sabloApplication) {  
    return {
      restrict: 'E',
      scope: {
    	  model: '=svyModel'
      },
      controller: function($scope, $element, $attrs, $window) {
          
          var url = 'resources/upload/' + $sabloApplication.getSessionId() + '/' + $scope.$parent.formname + '/' + $attrs.name + '/file'
          $window.Dropzone.options.dz = {
              dictDefaultMessage : 'yoo',addRemoveLinks:true
          }
          
          var dz = new Dropzone('div#dz', { url: url})
      },
      templateUrl: 'dropzone/Uploader/Uploader.html'
    };
  }])