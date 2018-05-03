angular.module('pgmenuMenu',['servoy']).directive('pgmenuMenu', function() {  
    return {
      restrict: 'E',
      scope: {
          model: '=svyModel',
          api: '=svyApi',
          svyServoyapi: '='
      },
      controller: function($scope, $element, $attrs, $window) {
      
          var navbar = $('#navbar-menu > ul').first(),
              submenus = []

          function getCallback(a, b) {
              if (!$scope.model.callback)
                  return function(){}                  
              var o = {}
              if (a) o.label = a
              if (b) o.id = b
              return function(){ $window.executeInlineScript($scope.model.callback.formName, $scope.model.callback.script, [o]) }
          }
          
          function menuMainGroup(id, item) {
              var el
              if (item.items && item.items.length)
                  el = $('<li id="pgmnu_' + id + '" class="dropdown">'+
                         '<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">' +
                         (item.icon ? '<i class="' + item.icon + '"></i>  ' : '') +
                         item.label +
                         '<span class="caret"></span>' +
                         '</a>' +
                         '<ul class="dropdown-menu navbar-inverse" role="menu"></ul>' +
                         '</li>')
              else {
                  el = $('<li id="pgmnu_' + id + '">' +
                         '<a href="#" class="menu-item">' +
                         (item.icon ? '<i class="' + item.icon + '"></i>  ' : '') +
                         item.label +
                         '</a>' +
                         '</li>')
                  if ($scope.model.callback)
                      $(document).on('click', '#pgmnu_' + id, getCallback(item.label, item.id) )
              }
              navbar.append(el)
          }

          function initMenu() {
              if (!$scope.model.menuItems || !$scope.model.menuItems.length) return
              var a,
                  b,
                  c,
                  $g,
                  grp,
                  itm,
                  submenu
              for (a = 0; a < $scope.model.menuItems.length; a += 1) {
                  menuMainGroup(a, $scope.model.menuItems[a])
                  if ($scope.model.menuItems[a].items) {
                      for (b = 0; b < $scope.model.menuItems[a].items.length; b += 1) {
                          $g = navbar.find('li#pgmnu_' + a + ' > ul.dropdown-menu').first()
                          if (!$scope.model.menuItems[a].items[b].items) {
                              itm = {
                                label: $scope.model.menuItems[a].items[b].label,
                                name: 'pgmnu_item_' + a + '_' + b,
                                priority: b,
                                enable: true,
                                url: '#',
                                module:{
                                    callbacks: {
                                        cb: getCallback($scope.model.menuItems[a].items[b].label, $scope.model.menuItems[a].items[b].id)
                                    }
                                },
                               callback: 'cb',
                               icon: $scope.model.menuItems[a].items[b].icon 
                              }
                              grp = {}
                              grp[itm.name] = new pgAdmin.Browser.MenuItem(itm)
                              pgAdmin.Browser.MenuCreator($g, grp)
                          } 
                          else {
                              submenu=[]
                              for (c = 0; c < $scope.model.menuItems[a].items[b].items.length; c += 1) {
                                  itm = 'pgmnu_item_' + a + '_' + b + '_' + c
                                  submenus.push(itm)
                                  if ($scope.model.callback)
                                      $(document).on(
                                          'click',
                                          '#' + itm,
                                          getCallback($scope.model.menuItems[a].items[b].items[c].label, $scope.model.menuItems[a].items[b].items[c].id)
                                      )
                                  submenu.push({
                                     label: $scope.model.menuItems[a].items[b].items[c].label,
                                     //icon: $scope.model.menuItems[a].items[b].items[c].icon,
                                     above:true,
                                     priority: c,
                                     $el: $('<li id="' + itm + '" class="menu-item"><a href="#">' +
                                            ($scope.model.menuItems[a].items[b].items[c].icon ? '<i class="' + $scope.model.menuItems[a].items[b].items[c].icon + '"></i>' : '') +
                                            '  ' + $scope.model.menuItems[a].items[b].items[c].label +
                                            '</a></li>'),
                                     is_disabled: false
                                  })
                              }
                              $g.append(pgAdmin.Browser.MenuGroup({ 
                                                                    label: $scope.model.menuItems[a].items[b].label,
                                                                    below:true,
                                                                    icon: $scope.model.menuItems[a].items[b].icon
                                                                  },
                                                                  submenu).$el)
                          }
                      }
                  }
              }
          }
          
          $scope.showEditorHint = function() {
              return $scope.svyServoyapi.isInDesigner()
          }
          
          $scope.$watch('model.menuItems', function() {
              $(document).off('click.pg.menu.data-api', '[data-toggle^="pg-menu"]')              
              submenus.map( function(i){ $(document).off('click', '#' + i) } )              
              submenus = []
              $.makeArray( navbar.children('li') ).map( function(i){ $(document).off('click', '#' + i.id) } )
              navbar.empty()
              pgAdminDefine()
              pgMenuDefine()
              initMenu()
          })
          
      },
      templateUrl: 'pgmenu/Menu/Menu.html'
    };
  })
