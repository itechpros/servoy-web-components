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
                  return 'javascript:menubarCallback(\'' + (item.id || '').replace(/'/g, "\\'") + '\')'  
              
          }
          function trav(items) {
              for (var i = 0, l = items && items.length || 0; i < l; i += 1) {
                  if ((!items[i].type || items[i].type === 'item') && items[i].items) {
                      menu += '<li><a href="#">' +
                              (items[i].icon ? '<i class="' + items[i].icon + '"></i>' : '') +
                              items[i].value + '</a>' +
                              '<ul class="nav-dropdown' +
                              (items[i].horizontal ? ' nav-dropdown-horizontal' : '') +
                              '">'
                      trav(items[i].items||[])
                      menu += '</ul></li>'
                  } else if (items[i].type === 'list') {
                      menu += '<li><a href="#">' + items[i].value + '</a>' +
                              '<ul class="nav-dropdown"><div class="megamenu-lists">'
                      for (var j = 0, m = (items[i].items||[]).length; j < m; j += 1) {
                          if (items[i].items[j].items && items[i].items[j].items.length) {
                              menu += '<ul class="megamenu-list list-col-' + m + '">' +
                                       '<li class="megamenu-list-title"><a href="#">' + items[i].items[j].items[0].value + '</a></li>'
                              items[i].items[j].items.shift()
                              trav(items[i].items[j].items)
							  menu += '</ul>'
                          }
                      }
                      menu += '</div></ul></li>'
                  } else if (~['panel','panelHalf','panelQuarter'].indexOf(items[i].type)) {
                      menu += '<li><a href="#">' + items[i].value + '</a>' +
                              '<div class="' + {panel       : 'megamenu-panel',
                            	                panelHalf   : 'megamenu-panel megamenu-panel-half',
												panelQuarter: 'megamenu-panel megamenu-panel-quarter'}[items[i].type] + '">' +
                              (items[i].items && items[i].items[0] && items[i].items[0].value || '') +                      
                              '</div></li>'
                  } else if (items[i].type === 'grid') {
                      menu += '<li><a href="#">' + items[i].value + '</a>' +
                              '<div class="megamenu-panel">'
                      for (var j = 0, m = (items[i].items||[]).length; j < m; j += 1) {
                          menu += '<div class="megamenu-panel-row">'
                          for (var k = 0, n = (items[i].items[j].items||[]).length; k < n; k += 1)
                        	  menu += '<div class="col' + ((12/n) % 1 ? '' : '-' + (12/n) ) + '">' +
                        	          items[i].items[j].items[k].value +
							          '</div>'
                          menu += '</div>'
                      }
                      menu += '</div></li>'
                  } else if (items[i].type === 'tabs') {
                      menu += '<li><a href="#">' + items[i].value + '</a>' +
					          '<div class="megamenu-panel">' +
                              '<div class="megamenu-tabs">' +
                              '<ul class="megamenu-tabs-nav">'
                      for (var j = 0, m = (items[i].items||[]).length; j < m; j += 1)
                          menu += '<li><a href="#"' + (j ? '' : ' class="active"') + '>' +
                        	      (items[i].items[j].items && items[i].items[j].items[0] && items[i].items[j].items[0].value || '') +
							      '</a></li>'
                      menu += '</ul>'
                      for (var j = 0, m = (items[i].items||[]).length; j < m; j += 1)
                    	  menu += '<div class="megamenu-tabs-pane' + (j ? '' : ' active') + '">' +
                    	          (items[i].items[j].items && items[i].items[j].items[1] && items[i].items[j].items[1].value || '') +
						          '</div>'
                      menu += '</div></div></li>'
                  } else if (items[i].type === 'button') {
                      menu += '<a href="' + href(items[i]) + '" class="nav-button">' + items[i].value + '</a>'
                  } else if (items[i].type === 'text') {
                      menu += '<span class="nav-text">' + items[i].value + '</span>'
                  } else
                      menu += '<li><a href="' + href(items[i]) + '">' +
                              (items[i].icon ? '<i class="' + items[i].icon + '"></i>' : '') +
                              items[i].value +
                              '</a></li>'
              }
          }
          
          $scope.$watch('model.menuItems', function() {
              var align,
                  header = false
              
              menu = ''
                  
              for (var i = 0, l = $scope.model.menuItems.length; i < l; i += 1) {  
                  if (!header && ~['brand','logotype'].indexOf($scope.model.menuItems[i].type)) {
                      menu += '<div class="nav-header">'
                      for (var j = i; j < l; j += 1)
                          if ($scope.model.menuItems[j].type === 'brand')
                              menu += '<a class="nav-brand" href="' + href($scope.model.menuItems[j]) + '">' +
                                      $scope.model.menuItems[j].value + '</a>'
                          else if ($scope.model.menuItems[j].type === 'logotype')
                                menu += '<a class="nav-logo" href="' + href($scope.model.menuItems[j]) + '">' +
                                      '<img src="' + $scope.model.menuItems[j].value + '">'
                      menu += '<div class="nav-toggle"></div>'
                      menu += '</div>'
                      header = true
                  } else {
                      align = $scope.model.menuItems[i].align
                      menu += '<div class="nav-menus-wrapper">' +
                              '<ul class="nav-menu' + (align ? ' ' + align : '') + '">'
                      while (i < l && !~['brand','logotype'].indexOf($scope.model.menuItems[i].type)) {
                          if ($scope.model.menuItems[i].align && align !== $scope.model.menuItems[i].align) {
                              align = $scope.model.menuItems[i].align
                              menu += '</ul><ul class="nav-menu' + (align ? ' ' + align : '') + '">'
                          }
                          trav([$scope.model.menuItems[i]])
                          i += 1
                      }
                      if ($scope.model.menuItems[i] && ~['brand','logotype'].indexOf($scope.model.menuItems[i].type))
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
  
function menubarCallback(id) {
    if (!menubarCallbackFunction) return
    window.executeInlineScript(menubarCallbackFunction.formName, menubarCallbackFunction.script, [id])
}

