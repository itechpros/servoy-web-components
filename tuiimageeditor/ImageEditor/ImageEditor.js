angular.module('imageEditor',['servoy']).directive('imageEditor', function() {  
  return {
      restrict: 'E',
      scope: {
          api: '=svyApi',
          model: '=svyModel'
      },
      controller: function($scope, $element, $attrs, $window, $timeout) {

    	var tui = document.getElementById('tui'),
    		template = $scope.model.template.split('.')
		
    	tui.src = 'tuiimageeditor/ImageEditor/lib/' + template[0] + '.html' + (template[1] ? '?' + template[1] : '')
		
		
		var ie = function() {
			
			return tui.contentWindow && tui.contentWindow.imageEditor
			
		}		
		
        $scope.api.getImageBytes = function() {
        		
    		return tui.contentWindow.getImageBytes()
    		
    	}

    		$scope.api.addIcon = function(type, options, callback) {
    		  ie().addIcon(type, options)
    		   .then(function(objectProps) {
    		    callback && $window.executeInlineScript(callback.formname, callback.script, [objectProps])
    		   })
    		}
    		$scope.api.addImageObject = function(imgUrl, callback) {
    		  ie().addImageObject(imgUrl)
    		   .then(function(objectProps) {
    		    callback && $window.executeInlineScript(callback.formname, callback.script, [objectProps])
    		   })
    		}
    		$scope.api.addShape = function(type, options, callback) {
    		  ie().addShape(type, options)
    		   .then(function(objectProps) {
    		    callback && $window.executeInlineScript(callback.formname, callback.script, [objectProps])
    		   })
    		}
    		$scope.api.addText = function(text, options, callback) {
    		  ie().addText(text, options)
    		   .then(function(objectProps) {
    		    callback && $window.executeInlineScript(callback.formname, callback.script, [objectProps])
    		   })
    		}
    		$scope.api.applyFilter = function(type, options, isSilent, callback) {
    		  ie().applyFilter(type, options, isSilent)
    		   .then(function(objectProps) {
    		    callback && $window.executeInlineScript(callback.formname, callback.script, [objectProps])
    		   })
    		}
    		$scope.api.changeCursor = function(cursorType, callback) {
    		  ie().changeCursor(cursorType)
    		}
    		$scope.api.changeIconColor = function(id, color, callback) {
    		  ie().changeIconColor(id, color)
    		   .then(function(objectProps) {
    		    callback && $window.executeInlineScript(callback.formname, callback.script, [objectProps])
    		   })
    		}
    		$scope.api.changeSelectableAll = function(selectable, callback) {
    		  ie().changeSelectableAll(selectable)
    		   .then(function(objectProps) {
    		    callback && $window.executeInlineScript(callback.formname, callback.script, [objectProps])
    		   })
    		}
    		$scope.api.changeShape = function(id, options, isSilent, callback) {
    		  ie().changeShape(id, options, isSilent)
    		   .then(function(objectProps) {
    		    callback && $window.executeInlineScript(callback.formname, callback.script, [objectProps])
    		   })
    		}
    		$scope.api.changeText = function(id, text, callback) {
    		  ie().changeText(id, text)
    		   .then(function(objectProps) {
    		    callback && $window.executeInlineScript(callback.formname, callback.script, [objectProps])
    		   })
    		}
    		$scope.api.changeTextStyle = function(id, styleObj, isSilent, callback) {
    		  ie().changeTextStyle(id, styleObj, isSilent)
    		   .then(function(objectProps) {
    		    callback && $window.executeInlineScript(callback.formname, callback.script, [objectProps])
    		   })
    		}
    		$scope.api.clearObjects = function(callback) {
    		  ie().clearObjects()
    		   .then(function(objectProps) {
    		    callback && $window.executeInlineScript(callback.formname, callback.script, [objectProps])
    		   })
    		}
    		$scope.api.clearRedoStack = function(callback) {
    		  ie().clearRedoStack()
    		}
    		$scope.api.clearUndoStack = function(callback) {
    		  ie().clearUndoStack()
    		}
    		$scope.api.crop = function(rect, callback) {
    		  ie().crop(rect)
    		   .then(function(objectProps) {
    		    callback && $window.executeInlineScript(callback.formname, callback.script, [objectProps])
    		   })
    		}
    		$scope.api.deactivateAll = function(callback) {
    		  ie().deactivateAll()
    		}
    		$scope.api.destroy = function(callback) {
    		  ie().destroy()
    		}
    		$scope.api.discardSelection = function(callback) {
    		  ie().discardSelection()
    		}
    		$scope.api.flipX = function(callback) {
    		  ie().flipX()
    		}
    		$scope.api.flipY = function(callback) {
    		  ie().flipY()
    		}
    		$scope.api.getCanvasSize = function() {
    		  return ie().getCanvasSize()
    		}
    		$scope.api.getCropzoneRect = function() {
    		  return ie().getCropzoneRect()
    		}
    		$scope.api.getDrawingMode = function() {
    		  return ie().getDrawingMode()
    		}
    		$scope.api.getImageName = function() {
    		  return ie().getImageName()
    		}
    		$scope.api.getObjectPosition = function(id, originX, originY) {
    		  return ie().getObjectPosition(id, originX, originY)
    		}
    		$scope.api.getObjectProperties = function(id, keys) {
    		  return ie().getObjectProperties(id, keys)
    		}
    		$scope.api.hasFilter = function(type) {
    		  return ie().hasFilter(type)
    		}
    		$scope.api.isEmptyRedoStack = function() {
    		  return ie().isEmptyRedoStack()
    		}
    		$scope.api.isEmptyUndoStack = function() {
    		  return ie().isEmptyUndoStack()
    		}
    		$scope.api.loadImageFromURL = function(url, imageName, callback) {
    		  loadImage(url, imageName, callback)
    		}
    		$scope.api.redo = function(callback) {
    		  ie().redo()
    		   .then(function(objectProps) {
    		    callback && $window.executeInlineScript(callback.formname, callback.script, [objectProps])
    		   })
    		}
    		$scope.api.registerIcons = function(infos, callback) {
    		  ie().registerIcons(infos)
    		}
    		$scope.api.removeActiveObject = function(callback) {
    		  ie().removeActiveObject()
    		}
    		$scope.api.removeFilter = function(type, callback) {
    		  ie().removeFilter(type)
    		   .then(function(objectProps) {
    		    callback && $window.executeInlineScript(callback.formname, callback.script, [objectProps])
    		   })
    		}
    		$scope.api.removeObject = function(id, callback) {
    		  ie().removeObject(id)
    		   .then(function(objectProps) {
    		    callback && $window.executeInlineScript(callback.formname, callback.script, [objectProps])
    		   })
    		}
    		$scope.api.resetFlip = function(callback) {
    		  ie().resetFlip()
    		   .then(function(objectProps) {
    		    callback && $window.executeInlineScript(callback.formname, callback.script, [objectProps])
    		   })
    		}
    		$scope.api.resizeCanvasDimension = function(dimension, callback) {
    		  ie().resizeCanvasDimension(dimension)
    		   .then(function(objectProps) {
    		    callback && $window.executeInlineScript(callback.formname, callback.script, [objectProps])
    		   })
    		}
    		$scope.api.rotate = function(angle, isSilent, callback) {
    		  ie().rotate(angle, isSilent)
    		   .then(function(objectProps) {
    		    callback && $window.executeInlineScript(callback.formname, callback.script, [objectProps])
    		   })
    		}
    		$scope.api.setAngle = function(angle, isSilent, callback) {
    		  ie().setAngle(angle, isSilent)
    		   .then(function(objectProps) {
    		    callback && $window.executeInlineScript(callback.formname, callback.script, [objectProps])
    		   })
    		}
    		$scope.api.setBrush = function(option, callback) {
    		  ie().setBrush(option)
    		}
    		$scope.api.setCropzoneRect = function(mode, callback) {
    		  ie().setCropzoneRect(mode)
    		}
    		$scope.api.setDrawingShape = function(type, options, callback) {
    		  ie().setDrawingShape(type, options)
    		}
    		$scope.api.setObjectPosition = function(id, posInfo, callback) {
    		  ie().setObjectPosition(id, posInfo)
    		   .then(function(objectProps) {
    		    callback && $window.executeInlineScript(callback.formname, callback.script, [objectProps])
    		   })
    		}
    		$scope.api.setObjectProperties = function(id, keyValue, callback) {
    		  ie().setObjectProperties(id, keyValue)
    		   .then(function(objectProps) {
    		    callback && $window.executeInlineScript(callback.formname, callback.script, [objectProps])
    		   })
    		}
    		$scope.api.setObjectPropertiesQuietly = function(id, keyValue, callback) {
    		  ie().setObjectPropertiesQuietly(id, keyValue)
    		}
    		$scope.api.startDrawingMode = function(mode, option) {
    		  return ie().startDrawingMode(mode, option)
    		}
    		$scope.api.stopDrawingMode = function(callback) {
    		  ie().stopDrawingMode()
    		}
    		$scope.api.toDataURL = function(options) {
    		  return ie().toDataURL(options)
    		}
    		$scope.api.undo = function(callback) {
    		  ie().undo()
    		   .then(function(objectProps) {
    		    callback && $window.executeInlineScript(callback.formname, callback.script, [objectProps])
    		   })
    		}
    	
    	var attemptCount = 0
		
  		function loadImage(url, imageName, callback) {

  			var tui = document.getElementById('tui')
  			var imageEditor = tui.contentWindow && tui.contentWindow.imageEditor

  			attemptCount += 1
			
			if (attemptCount > 20)
				
				return
			
			if (!imageEditor)
				
				$timeout(function(){loadImage(url, imageName, callback)}, 200)
			
			else
				
				imageEditor.loadImageFromURL(url, imageName).then(function() {
					callback && $window.executeInlineScript(callback.formname, callback.script, [objectProps])
				})

  		}
		
	},
    templateUrl: 'tuiimageeditor/ImageEditor/ImageEditor.html'
  }
})
