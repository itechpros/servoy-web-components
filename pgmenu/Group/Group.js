angular.module('pgmenuGroup',['servoy']).directive('pgmenuGroup', function() {  
    return {
      restrict: 'E',
      scope: {
          model: '=svyModel',
          svyServoyapi: '='
      },
      controller: function($scope, $element, $attrs, $window) {

          var a = 0,
              items = []
          
          for (; a < $scope.model.items.length; a += 1)
              items.push({
                  label: $scope.model.items[a].label,
                  name: 'pgmnu_item_' + $scope.model.group + '_' + a,
                  priority: a,
                  enable: true,
				  url: '#',
				  data:{a:'b'},
                  module:{
                	      callbacks: {
                    	      cb: $scope.model.items[a].callback ? (function(a, b) {
                    	    	                                        return function(data){
                    	    	                                             $window.executeInlineScript(a, b, [data])
																	    }
                    	    	                                    })($scope.model.items[a].callback.formName,
                    	    			                               $scope.model.items[a].callback.script)
                                                                 : function(){}
                             }
                         },
				  callback: 'cb' 
              })
          
          $(document).ready(function() {
        	  console.log($scope.model.group)
              if ($window.pgMenuCtl) $window.pgMenuCtl.group($scope.model.group,items)
          })
          
          $scope.showEditorHint = function() {
              return $scope.svyServoyapi.isInDesigner()
          }
      },
      templateUrl: 'pgmenu/Group/Group.html'
    };
  })
