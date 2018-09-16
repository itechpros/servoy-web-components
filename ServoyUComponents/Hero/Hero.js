angular.module('servoyucomponentsHero',['servoy']).directive('servoyucomponentsHero', function() {  
    return {
      restrict: 'E',
      scope: {
    	  model: '=svyModel'
      },
      controller: function($scope, $element, $attrs) {
      },
      templateUrl: 'servoyucomponents/Hero/Hero.html'
    };
  })