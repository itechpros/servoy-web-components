angular.module('wysiwygTinyMCE',['servoy']).directive('wysiwygTinyMCE', function($timeout) {

	return {
		restrict: 'E',
		scope: {
			api: "=svyApi",
			model: '=svyModel'
		},
	      
		controller: function($scope, $element, $attrs, $window) {

			tinymce.baseURL = '/wysiwyg/TinyMCE/lib/tinymce'

			var ln = $scope.model.custom_buttons ? $scope.model.custom_buttons.length : 0,
				custom_button_names = !ln ? '' :
					(function(){
						
						var i = 0,
							names = ' |'
							for (; i < ln; i += 1) names += ' ' + $scope.model.custom_buttons[i].name
						return names
						
					})(),
				editorOptions = {}
 
			editorOptions = {
				
                min_height: $scope.$parent.layout[$attrs.name].height.replace('px', ''),
				min_width: $scope.$parent.layout[$attrs.name].width.replace('px', ''),
				height: '100%',
				width: '100%',
    			plugins: $scope.model.plugins,
    			toolbar: $scope.model.toolbar + custom_button_names,
    			paste_data_images: $scope.model.paste_data_images,
    			setup : function ( editor ) {
    	    	
    				editor.settings.readonly = $scope.model.readonly
				
    				var i = 0
				  
    				for (; i < ln; i += 1)
			  
    					editor.addButton($scope.model.custom_buttons[i].name, {
            	  
    						text : $scope.model.custom_buttons[i].text,
    						tooltip: $scope.model.custom_buttons[i].tooltip,
    						image: $scope.model.custom_buttons[i].image,
    						icon: false,
    						onclick : (function(_i){
	    							return function () {
	    								$window.executeInlineScript(
    									$scope.model.custom_buttons[_i].callback.formname,
    									$scope.model.custom_buttons[_i].callback.script,
    									[])
    								}
    							})(i)
    						})
    				}
    			}
			
			var j=0,
				lnOpt = $scope.model.options ? $scope.model.options.length : 0
			for (; j < lnOpt; j += 1)
				editorOptions[$scope.model.options[j].name] = $scope.model.options[j].value
				$scope.tinymceOptions = editorOptions,
    	  
    	  
			$scope.api.getContent = function(){
					return $scope.tinymceModel
				},
				
			$scope.api.insertContent = function(data){
				tinymce.activeEditor.insertContent(data)
				return true
			},
			
			$scope.api.setContent = function(data){
				$scope.tinymceModel = data
				return true
			
			}
    	  
		},
		templateUrl: 'wysiwyg/TinyMCE/TinyMCE.html'
    }
})

