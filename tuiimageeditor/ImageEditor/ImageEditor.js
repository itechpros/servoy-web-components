angular.module('imageEditor',['servoy']).directive('imageEditor', function() {  
  return {
      restrict: 'E',
      scope: {
          api: '=svyApi',
          model: '=svyModel',
          handlers: '=svyHandlers'
      },
      controller: function($scope, $element, $attrs, $window) {
    
    	
    	
		
		function saveFile(file, name) {

		//	$scope.model.saveFile && $window.executeInlineScript($scope.model.saveFile.formname, $scope.model.saveFile.script, [file, name, type])
			
		}
		
        $scope.api.getBytes = function() {
    		
    		return document.getElementById('tui').contentWindow.getBytes()
    		
    	}
		
		function getBytes(blob, name) {
			console.log(blob)
			//$scope.model.getBytes && $window.executeInlineScript($scope.model.getBytes.formname, $scope.model.getBytes.script, [blob, name])
			
		}
		
		$window.ieSaver.register(getBytes, $scope.model.preventDownload)
    	  
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

IESaver.prototype.getBytes = function(file, name) {

	this.fn(file, name)
	
}

var ieSaver = new IESaver()
