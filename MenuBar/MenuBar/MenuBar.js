angular.module('menubarMenuBar',['servoy']).directive('menubarMenuBar', function() {  
  return {
      restrict: 'E',
      scope: {
          api: '=svyApi',
          model: '=svyModel',
          handlers: '=svyHandlers'
      },
      controller: function($scope, $element, $attrs) {
          var container = $('#navigation')

          function getOpt(opt) 
          {
              if ($scope.handlers.onInit)
                  opt.onInit = $scope.handlers.onInit
              if ($scope.handlers.onShowOffCanvas)
                     opt.onShowOffCanvas = $scope.handlers.onShowOffCanvas
              if ($scope.handlers.onHideOffCanvas)
                     opt.onHideOffCanvas = $scope.handlers.onHideOffCanvas
              return opt      
          }
          
          $(document).ready(function()
          {   
              if ($scope.model.menu)
              {
                 container.html($scope.model.menu)
                 container.navigation(getOpt({}))
              }
          })
              
          $scope.api.setMenu = function(menu, options, callbacks)
          {
              container.html(menu)
              container.navigation(getOpt(options || {}))
              menubarCallbacks = callbacks
              return true
          }

          $scope.api.toggleOffCanvas = function()
          {
              container.data('navigation').toggleOffcanvas()
              return true
          }
          
          $scope.api.toggleSearch = function()
          {
              container.data('navigation').toggleSearch()
              return true
          }

      },
      templateUrl: 'menubar/MenuBar/MenuBar.html'
    };
  })
  
var menubarCallbacks

function menubarCallback(func, param){
    param = param || []
    if (menubarCallbacks && menubarCallbacks[func])
    window.executeInlineScript(menubarCallbacks[func].formname,menubarCallbacks[func].script,param)
}