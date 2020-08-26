angular.module('imageEditor',['servoy']).directive('imageEditor', function() {  
  return {
      restrict: 'E',
      scope: {
          api: '=svyApi',
          model: '=svyModel',
          handlers: '=svyHandlers'
      },
      controller: function($scope, $element, $attrs, $window) {

  		var i = $scope.model.image
	  
		var imageEditor = new tui.ImageEditor('#tui-image-editor-container', {
		    includeUI: {
		        loadImage: {
		            path: i && i.url || 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7',
		            name: i && i.name || 'blank'
		        },
		        menu: ['crop', 'flip', 'rotate', 'draw', 'shape', 'icon', 'text', 'mask', 'filter'],
		        theme:  $scope.model.skin === 'white' ? whiteTheme : blackTheme,
		        initMenu: 'filter',
		        menuBarPosition: $scope.model.menuBar
		    },
		    //cssMaxWidth: 700,
		    //cssMaxHeight: 500,
		    
		    usageStatistics: false
		})
		
		window.onresize = function() {
		    imageEditor.ui.resizeEditor();
		}
		
		$scope.$watch('model.image', function() {
			
			var i = $scope.model.image 
			
			i && imageEditor.loadImageFromURL(i.url, i.name)
			
		})
			

	},
      templateUrl: 'tuiimageeditor/ImageEditor/ImageEditor.html'
    }
})

