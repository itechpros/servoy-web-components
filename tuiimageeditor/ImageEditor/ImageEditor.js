angular.module('imageEditor',['servoy']).directive('imageEditor', function() {  
  return {
      restrict: 'E',
      scope: {
          api: '=svyApi',
          model: '=svyModel'
      },
      controller: function($scope, $element, $attrs, $window) {
    
        $scope.api.getImageBytes = function() {
        	
    		return document.getElementById('tui').contentWindow.getImageBytes()
    		
    	}

        $scope.api.getImageName = function() {
        	
    		return document.getElementById('tui').contentWindow.getImageName()
    		
    	}
    		  
  		function loadImage() {
  			
  			var imageEditor = document.getElementById('tui').contentWindow.imageEditor
  			var i = $scope.model.image
			
			if (!i)
				
				return
			
			if (!imageEditor)
				
				setTimeout(loadImage, 100)
			
			else
			
				imageEditor.loadImageFromURL(i.url, i.name).then(function() {
		    	    imageEditor.clearUndoStack()
				})
			
  		}
		
		$scope.$watch('model.image', function() {	
				
			loadImage()

		})

	},
    templateUrl: 'tuiimageeditor/ImageEditor/ImageEditor.html'
  }
})
