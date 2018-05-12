angular.module('pgmenuMenu',['servoy','cfp.hotkeys']).directive('pgmenuMenu', function() {  
    return {
      restrict: 'E',
      scope: {
          model: '=svyModel',
          api: '=svyApi',
          svyServoyapi: '='
      },
      controller: function($scope, $element, $attrs, $window, hotkeys) {
                
          var navbar = $('#navbar-menu > ul').first(),
              submenus = [],
              keys = {}

          function getCallback(id) {
              if (!$scope.model.callback)
                  return function(){}
              return function(){ $window.executeInlineScript($scope.model.callback.formName, $scope.model.callback.script, [id]) }
          }
          
          function menuMainGroup(id, item) {
              var el,
                  label,
                  key = item.combo && item.combo.substring(item.combo.lastIndexOf('+') + 1)
              id = 'pgmnu_' + id
              label = item.combo ? item.label.replace(key, '<u>' + key + '</u>') : item.label
              if (item.items && item.items.length)
                  el = $('<li id="' + id + '" class="dropdown">'+
                         '<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">' +
                         (item.icon ? '<i class="' + item.icon + '"></i>  ' : '') +
                         label +
                         '<span class="caret"></span>' +
                         '</a>' +
                         '<ul class="dropdown-menu navbar-inverse" role="menu"></ul>' +
                         '</li>')
              else {
                  el = $('<li id="' + id + '">' +
                         '<a href="#" class="menu-item">' +
                         (item.icon ? '<i class="' + item.icon + '"></i>  ' : '') +
                         label +
                         '</a>' +
                         '</li>')
                  if ($scope.model.callback)
                      $(document).on('click', '#' + id, getCallback(item.id) )
              }
              navbar.append(el)
              item.combo && (keys[item.combo.toLowerCase()] = keys[item.combo.toLowerCase()] || []).push(id)
          }

          function initMenu() {
              if (!$scope.model.menuItems || !$scope.model.menuItems.length) return
              var a,
                  b,
                  c,
                  $g,
                  grp,
                  id,
                  itm,
                  label,
                  submenu,
                  z
              for (a = 0; a < $scope.model.menuItems.length; a += 1) {
                  menuMainGroup(a, $scope.model.menuItems[a])
                  if ($scope.model.menuItems[a].items) {
                      for (b = 0; b < $scope.model.menuItems[a].items.length; b += 1) {
                          $g = navbar.find('li#pgmnu_' + a + ' > ul.dropdown-menu').first()
                          z = $scope.model.menuItems[a].items[b]
                          if (!z.items) {
                              id = 'pgmnu_item_' + a + '_' + b
                              itm = {
                                label: z.label,
                                combo: z.combo,
                                name: id,
                                priority: b,
                                enable: true,
                                url: '#',
                                module:{
                                    callbacks: {
                                        cb: getCallback(z.id)
                                    }
                                },
                                callback: 'cb',
                                icon: z.icon 
                              }
                              z.combo && (keys[z.combo.toLowerCase()] = keys[z.combo.toLowerCase()] || []).push(id)
                              grp = {}
                              grp[itm.name] = new pgAdmin.Browser.MenuItem(itm)
                              pgAdmin.Browser.MenuCreator($g, grp)
                          } 
                          else {
                              submenu=[]
                              for (c = 0; c < $scope.model.menuItems[a].items[b].items.length; c += 1) {
                                  z = $scope.model.menuItems[a].items[b].items[c]
                                  id = 'pgmnu_item_' + a + '_' + b + '_' + c
                                  submenus.push(id)
                                  if ($scope.model.callback)
                                      $(document).on(
                                          'click',
                                          '#' + id,
                                          getCallback(z.id)
                                      )
                                  label = z.label
                                  if (z.combo)
                                      if (!~z.combo.indexOf('+') && ~z.label.indexOf(z.combo))
                                          label = label.replace(z.combo, '<u>' + z.combo + '</u>')
                                      else
                                          label += '  ' + z.combo

                                  submenu.push({
                                     label: z.label,
                                     priority: c,
                                     $el: $('<li id="' + id + '" class="menu-item"><a href="#">' +
                                            (z.icon ? '<i class="' + z.icon + '"></i>' : '') +
                                            '  ' + label +
                                            '</a></li>'),
                                     is_disabled: false
                                  })
                                  z.combo && (keys[z.combo.toLowerCase()] = keys[z.combo.toLowerCase()] || []).push(id)
                              }
                              z = $scope.model.menuItems[a].items[b]
                              id = 'pgsbmnu_' + a + '_' + b
                              z.combo && (keys[z.combo.toLowerCase()] = keys[z.combo.toLowerCase()] || []).push(id)
                              $g.append(pgAdmin.Browser.MenuGroup({
                                                                    combo: z.combo,
                                                                    name: id, 
                                                                    label: z.label,
                                                                    below:true,
                                                                    icon: z.icon
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
              for (var k in keys) hotkeys.del(k);
              keys = {}
              $(document).off('click.pg.menu.data-api', '[data-toggle^="pg-menu"]')              
              submenus.map( function(i){ $(document).off('click', '#' + i) } )              
              submenus = []
              $.makeArray( navbar.children('li') ).map( function(i){ $(document).off('click', '#' + i.id) } )
              navbar.empty()
              pgAdminDefine()
              pgMenuDefine()
              initMenu()
              for (var h in keys)
                  hotkeys.add({
                      combo: h,
                      callback: function(e, combo) {
                          e = e || window.event
                          e.preventDefault()
                          var k = combo.combo[0].toLowerCase(),
                              clk = -1
                          for (var i = 0, l = keys[k].length; i < l; i += 1) {
                              if ($('#' + keys[k][i]).is(':visible')) {
                                  switch ((keys[k][i].match(/_/g).length)) {
                                      case 1:
                                          $('#' + keys[k][i] + ' a:first').dropdown('toggle')
                                          i = l
                                          break
                                      case 2:
                                          $('#' + keys[k][i]+' ul:first').show()
                                          i = l
                                          break
                                      case 3:
                                          clk = i
                                          break
                                      case 4:
                                          $('#' + keys[k][i] + ' a:first').trigger('click')
                                          clk = -1
                                          i = l
                                          break
                                  }
                              }
                          }
                          if (~clk) $('#' + keys[k][clk]).trigger('click')
                      }                        
                  })
          })          
      },
      templateUrl: 'pgmenu/Menu/Menu.html'
    };
  })
