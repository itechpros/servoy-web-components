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
          function href(item) {
        	  if (item.href)
        		  return item.href
        	  else
        		  return 'javascript:menubarCallback(\'' +
	                     (item.id || '').replace(/'/g, "\\'") + 
	                     '\',\'' + 
			             (item.label || '').replace(/'/g, "\\'") + '\')'  
        	  
          }
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
                	  menu += '<li><a href="' + href(items[i]) + '">' +
							  (items[i].icon ? '<i class="' + items[i].icon + '"></i>' : '') +
							  items[i].label +
							  '</a></li>'
              }
          }
          
          
          $scope.$watch('model.menuItems', function() {
        	  var align,
			      header = false
			  
        	  menu = ''
        		  
        	  for (var i = 0, l = $scope.model.menuItems.length; i < l; i += 1) {  
        		  if ($scope.model.menuItems[i].brand) {
                	  menu += '<div class="nav-header">'
                	  if ($scope.model.menuItems[i].label)
                		  menu += '<a class="nav-brand" href="' + href($scope.model.menuItems[i]) + '">' +
                	              $scope.model.menuItems[i].label + '</a>'
                  	  if ($scope.model.menuItems[i].icon)
                  		  menu += '<a class="nav-logo" href="' + href($scope.model.menuItems[i]) + '">' +
					              '<img src="' + $scope.model.menuItems[i].icon + '" alt="' + ($scope.model.menuItems[i].label || 'Logo').replace(/'/g, "\\'") + '">'
    				  menu += '<div class="nav-toggle"></div>'
    				  menu += '</div>'
    				  header = true
                  } else {
                	  align = $scope.model.menuItems[i].align
                   	  menu += '<div class="nav-menus-wrapper">' +
                              '<ul class="nav-menu' + (align ? ' ' + align : '') + '">'
                      while (i < l && !$scope.model.menuItems[i].brand) {
                    	  if ($scope.model.menuItems[i].align && align !== $scope.model.menuItems[i].align) {
                    		  align = $scope.model.menuItems[i].align
                    		  menu += '</ul><ul class="nav-menu' + (align ? ' ' + align : '') + '">'
                    	  }
                          trav([$scope.model.menuItems[i]])
	    				  i += 1
                      }
                      if ($scope.model.menuItems[i] && $scope.model.menuItems[i].brand)
                    	  i -= 1
                      menu += '</ul></div>'
                  }
        	  }
        	  
        	  if (!header) menu = '<div class="nav-header"><div class="nav-toggle"></div></div>' + menu
              container.html(menu)
			  console.log(menu)
              container.navigation()//{mobileBreakpoint: 99999})//getOpt({}))
			 // container.data("navigation").toggleOffcanvas();
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

