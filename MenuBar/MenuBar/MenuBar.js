angular.module('menubarMenuBar',['servoy']).directive('menubarMenuBar', function() {  
  return {
      restrict: 'E',
      scope: {
          api: '=svyApi',
          model: '=svyModel',
          handlers: '=svyHandlers'
      },
      controller: function($scope, $element, $attrs, $window) {
          var container = $('#navigation'),
              menu

          if ($scope.model.callback) $window.menubarCallbackFunction = $scope.model.callback
                       
          function trav(items) {
              for (var i = 0, l = items && items.length || 0; i < l; i += 1) {
                  if (items[i].items && items[i].items.length) {
                      menu += '<li><a href="#">' +
                              (items[i].icon ? '<i class="' + items[i].icon + '"></i>' : '') +
                    		  items[i].label + '</a>' +
                              '<ul class="nav-dropdown' +
					          (items[i].horizontal ? ' nav-dropdown-horizontal' : '') +
					          '">'
                      trav(items[i].items)
                      menu += '</ul>'
                  } else
                	  menu += '<li><a href="javascript:menubarCallback(\'' +
					          (items[i].id || '').replace(/'/g, "\\'") + 
					          '\',\'' + 
							  (items[i].label || '').replace(/'/g, "\\'") + '\')">' +
							  (items[i].icon ? '<i class="' + items[i].icon + '"></i>' : '') +
							  items[i].label +
							  '</a>'
                  menu += '</li>'                  
              }
          }
          
          
          $scope.$watch('model.menuItems', function() {
              menu = '<div class="nav-menus-wrapper">'
              menu += '<ul class="nav-menu">'
              trav($scope.model.menuItems)
              menu += '</ul>'
              menu += '</div>'
              container.html(menu)
              container.navigation()//getOpt({}))
          })

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

var menubarCallbackFunction
  
function menubarCallback(id, label) {
console.log(menubarCallbackFunction)
	if (!menubarCallbackFunction) return
    var o = {}
    if (id) o.id = id
    if (label) o.label = label
    window.executeInlineScript(menubarCallbackFunction.formName, menubarCallbackFunction.script, [o])
}

