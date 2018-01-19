angular.module('menubarMenuBar',['servoy']).directive('menubarMenuBar', function() {  
  return {
      restrict: 'E',
      scope: {
          api: '=svyApi',
          model: '=svyModel'
      },
      controller: function($scope, $element, $attrs) {
          var container = $('#navigation')
          
          $(document).ready(function()
          {  
              if ($scope.model.menu)
              {
                 container.html($scope.model.menu)
                 container.navigation()
		      }
          })
              
          $scope.api.setMenu = function(menu)
          {
              container.html(menu)
              container.navigation()
              return true
          }

      },
      templateUrl: 'menubar/MenuBar/MenuBar.html'
    };
  })