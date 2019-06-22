angular.module('dropzoneUploader',['servoy', 'sabloApp']).directive('dropzoneUploader', ['$sabloApplication', function($sabloApplication) {  
    return {
      restrict: 'E',
      scope: {
    	  model: '=svyModel'
      },
      controller: function($scope, $element, $attrs) {
          
          $scope.model.options = null
          
          var url = 'resources/upload/' + $sabloApplication.getSessionId() + '/' + $scope.$parent.formname + '/' + $attrs.name + '/file',
              dz

          function createDZ() {
              dz && dz.destroy()
              $('#dz_container').find('div').remove()
              $('<div>', {'class':'dropzone',id:'dz'}).appendTo($('#dz_container'))
              if ($scope.model.options) 
                  Dropzone.options.dz = $scope.model.options
              dz = new Dropzone('div#dz', { url: url})
          }
          
          createDZ()
          
          $scope.$watch('model.options', function() {
              createDZ()
          })
          
      },
      templateUrl: 'dropzone/Uploader/Uploader.html'
    };
  }])