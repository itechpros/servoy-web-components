angular.module('imageEditor',['servoy']).directive('imageEditor', function() {  
  return {
      restrict: 'E',
      scope: {
          api: '=svyApi',
          model: '=svyModel'
      },
      controller: function($scope, $element, $attrs, $window) {

    	var tui = document.getElementById('tui'),
    		template = $scope.model.template.split('.')
		
    	tui.src = 'tuiimageeditor/ImageEditor/lib/' + template[0] + '.html' + (template[1] ? '?' + template[1] : '')
    	  
        $scope.api.getImageBytes = function() {
        	
    		return tui.contentWindow.getImageBytes()
    		
    	}

        $scope.api.getImageName = function() {
        	
    		return tui.contentWindow.getImageName()
    		
    	}
        
    	$scope.api.crop = function(rect) {
    		
    		var imageEditor = tui.contentWindow.imageEditor
			
			imageEditor.crop(rect)
    		
    	}
    	
    		  
  		function loadImage() {
  			
  			var imageEditor = tui.contentWindow.imageEditor
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
