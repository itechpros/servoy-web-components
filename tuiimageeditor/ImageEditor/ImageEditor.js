angular.module('imageEditor',['servoy']).directive('imageEditor', function() {  
  return {
      restrict: 'E',
      scope: {
          api: '=svyApi',
          model: '=svyModel',
          handlers: '=svyHandlers'
      },
      controller: function($scope, $element, $attrs, $window) {
    
    	
		
		function saveFile(file, name, type) {

			$scope.model.saveFile && $window.executeInlineScript($scope.model.saveFile.formname, $scope.model.saveFile.script, [file, name, type])
			
		}
		
		$window.ieSaver.register(saveFile, $scope.model.preventDownload)
    	  
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
		
		$scope.$watch('model.preventDownload', function() {	
			
			ieSaver.preventDownload = $scope.model.preventDownload

		})	

	},
    templateUrl: 'tuiimageeditor/ImageEditor/ImageEditor.html'
  }
})



function IESaver(){}

IESaver.prototype.register = function(fn, preventDownload){

	this.fn = fn
	this.preventDownload = preventDownload
	
}


IESaver.prototype.save = function(file, name, type) {

	this.fn(file, name, type)
	
}

var ieSaver = new IESaver()
