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
                  label:$scope.model.items[a].label,
                  name:'pgmnu_item_' + a,
                  priority: a,
                  enable:true,
                  module:{}
              })
          
          $(document).ready(function() {
              $window.pgMenuCtl.group($scope.model.group,items)
          })
          
          $scope.showEditorHint = function() {
              return $scope.svyServoyapi.isInDesigner()
          }
      },
      templateUrl: 'pgmenu/Group/Group.html'
    };
  })
