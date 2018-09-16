angular.module('servoyucomponentsVideoDetailsBottom',['servoy']).directive('servoyucomponentsVideoDetailsBottom', function() {  
    return {
      restrict: 'E',
      scope: {
    	  model: '=svyModel'
      },
      controller: function($scope, $element, $attrs) {
      },
      templateUrl: 'servoyucomponents/VideoDetailsBottom/VideoDetailsBottom.html'
    };
  })