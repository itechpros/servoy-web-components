angular.module('servoyucomponentsFooter',['servoy']).directive('servoyucomponentsFooter', function() {  
    return {
      restrict: 'E',
      scope: {
    	  model: "=svyModel",
	      api: "=svyApi",
	      handlers: "=svyHandlers",
	      svyServoyapi: "="
      },
      controller: function($scope, $element, $attrs) {
      },
      templateUrl: 'servoyucomponents/Footer/Footer.html'
    };
  })