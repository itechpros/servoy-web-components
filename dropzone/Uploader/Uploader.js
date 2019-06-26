angular.module('dropzoneUploader',['servoy', 'sabloApp']).directive('dropzoneUploader', ['$sabloApplication', function($sabloApplication) {  
    return {
      restrict: 'E',
      scope: {
          handlers: '=svyHandlers',
    	  model: '=svyModel',
    	  handlers: '=svyHandlers'
      },
      controller: function($scope, $element, $attrs) {
          
          $scope.model.options = null
          
          var url = 'resources/upload/' + $sabloApplication.getSessionId() + '/' + $scope.$parent.formname + '/' + $attrs.name + '/file',
              dz

          function createDZ() {
              dz && dz.destroy()
              $('#dz_container').find('div').remove()
              $('<div>', {'class':'dropzone',id:'dz'}).appendTo($('#dz_container'))
              var opt = {
                    addRemoveLinks: true
                  }
              for (var a in $scope.model.options)
                  opt[a] = $scope.model.options[a]
              Dropzone.options.dz = opt
              dz = new Dropzone('div#dz', { url: url})
              $scope.handlers.onFileRemove && dz.on('removedfile', function(f) {
                  $scope.handlers.onFileRemove(f.name)
              })
          }
          
          createDZ()
          
          $scope.$watch('model.options', function() {
              createDZ()
          })
          
      },
      templateUrl: 'dropzone/Uploader/Uploader.html'
   }
}])