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
                  } else if (items[i].list && items[i].list.length) {
                	  menu += '<li><a href="#">' + items[i].label + '</a>' +
                	          '<ul class="nav-dropdown"><div class="megamenu-lists">'
                      for (var j = 0, m = items[i].list.length; j < m; j += 1) {
                    	  menu += '<ul class="megamenu-list list-col-' + m + '">' +
                    	          '<li class="megamenu-list-title"><a href="#">List title</a></li>'
                    	  if (items[i].list[j].items && items[i].list[j].items.length) trav(items[i].list[j].items)
                    	  menu += '</ul>'
                      }
                      menu += '</div></ul></li>'
                  } else
                	  menu += '<li><a href="javascript:menubarCallback(\'' +
					          (items[i].id || '').replace(/'/g, "\\'") + 
					          '\',\'' + 
							  (items[i].label || '').replace(/'/g, "\\'") + '\')">' +
							  (items[i].icon ? '<i class="' + items[i].icon + '"></i>' : '') +
							  items[i].label +
							  '</a></li>'
              }
          }
          
          
          $scope.$watch('model.menuItems', function() {
        	  menu = ''
              if ($scope.model.brandText || $scope.model.brandLogo) {
            	  menu += '<div class="nav-header">'
            	  //if ($scope.model.brandText) menu += '<a class="nav-brand" href="#">' + $scope.model.brandText + '</a>'
				  menu +='<div class="nav-toggle"></div>'
				  menu += '</div>'
              }

        	  menu += '<div class="nav-menus-wrapper">'
              //<div class="nav-toggle"></div>
              menu += '<ul class="nav-menu">'
              trav($scope.model.menuItems)
              menu += '</ul>'
              menu += '</div>'
              container.html(menu)
			  console.log(menu)
              container.navigation()//{mobileBreakpoint: 99999})//getOpt({}))
			  container.data("navigation").toggleOffcanvas();
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

