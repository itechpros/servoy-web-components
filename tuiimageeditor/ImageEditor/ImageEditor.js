angular.module('imageEditor',['servoy']).directive('imageEditor', function() {  
  return {
      restrict: 'E',
      scope: {
          api: '=svyApi',
          model: '=svyModel',
          handlers: '=svyHandlers'
      },
      controller: function($scope, $element, $attrs, $window) {
    
    	
		
		function downloadImage(blob,u){
			console.log('BLOB')
			console.log(blob)
			
            $scope.handlers.saveFileH(blob)

			
		}
		
		imageEditorDownload.register(downloadImage)
    	  
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



function ImageEditorDownload(){}

ImageEditorDownload.prototype.register = function(fn){

	this.fn = fn
	
}


ImageEditorDownload.prototype.download = function(blob){

	this.fn(blob)
	
}

var imageEditorDownload = new ImageEditorDownload()
