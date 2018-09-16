angular.module('servoyucomponentsVideoDetailsTop',['servoy']).directive('servoyucomponentsVideoDetailsTop', function() {  
    return {
      restrict: 'E',
      scope: {
    	  model: '=svyModel'
      },
      controller: function($scope, $element, $attrs, $window) {
           $scope.play = function(seq){
              if (!$scope.model.row) return
              if ($scope.model[seq])
                  $window.executeInlineScript
                  (
                      $scope.model[seq].formname,
                      $scope.model[seq].script,
                      []
                  )
          }
      },
      templateUrl: 'servoyucomponents/VideoDetailsTop/VideoDetailsTop.html'
    };
  })