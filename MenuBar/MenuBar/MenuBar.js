angular.module('menubarMenuBar',['servoy']).directive('menubarMenuBar', function() {  
    return {
      restrict: 'E',
      scope: {
    	  model: '=svyModel'
      },
      controller: function($scope, $element, $attrs) {
      },
      templateUrl: 'menubar/MenuBar/MenuBar.html'
    };
  })