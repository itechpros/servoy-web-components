angular.module('iframeIframe',['servoy']).directive('iframeIframe', function() {  
    return {
      restrict: 'E',
      scope: {
    	  model: '=svyModel'
      },
      controller: function($scope, $element, $attrs) {
      },
      templateUrl: 'iframe/iframe/iframe.html'
    };
  }).config(function ($sceProvider) {
	 $sceProvider.enabled(false); 
  });