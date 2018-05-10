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
              id = 'pgmnu_' + id
              if (item.items && item.items.length)
                  el = $('<li id="' + id + '" class="dropdown">'+
                         '<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">' +
                         (item.icon ? '<i class="' + item.icon + '"></i>  ' : '') +
                         item.label +
                         '<span class="caret"></span>' +
                         '</a>' +
                         '<ul class="dropdown-menu navbar-inverse" role="menu"></ul>' +
                         '</li>')
              else {
                  el = $('<li id="' + id + '">' +
                         '<a href="#" class="menu-item">' +
                         (item.icon ? '<i class="' + item.icon + '"></i>  ' : '') +
                         item.label +
                         '</a>' +
                         '</li>')
                  if ($scope.model.callback)
                      $(document).on('click', '#' + id, getCallback(item.label, item.id) )
              }
              navbar.append(el)
              item.combo && (keys[item.combo]=keys[item.combo]||[]).push(id)
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
                                name: id,
                                priority: b,
                                enable: true,
                                url: '#',
                                module:{
                                    callbacks: {
                                        cb: getCallback(z.label, z.id)
                                    }
                                },
                               callback: 'cb',
                               icon: z.icon 
                              }
                              z.combo && (keys[z.combo] = keys[z.combo] || []).push(id)
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
                                          getCallback(z.label, z.id)
                                      )
                                  submenu.push({
                                     label: z.label,
                                     above:true,
                                     priority: c,
                                     $el: $('<li id="' + id + '" class="menu-item"><a href="#">' +
                                            (z.icon ? '<i class="' + z.icon + '"></i>' : '') +
                                            '  ' + z.label +
                                            '</a></li>'),
                                     is_disabled: false
                                  })
                                  z.combo && (keys[z.combo] = keys[z.combo]||[]).push(id)
                              }
                              z = $scope.model.menuItems[a].items[b]
                              id = 'pgmnu_sbmnu_' + a + '_' + b
                              z.combo && (keys[z.combo] = keys[z.combo]||[]).push(id)
                              $g.append(pgAdmin.Browser.MenuGroup({
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
                          var h = combo.combo[0]
                          for (var i = 0, l = keys[h].length; i < l; i += 1){
                              if ($('#' + keys[h][i]).is(':visible')) {
                                  $('#' + keys[h][i]+' ul:first').show()//.trigger('mouseenter')
                                 
                                  //$('#' + keys[h][i] + ' a:first').dropdown('toggle')                                  
                                 // $('#' + keys[h][i] + ' a:first').trigger( (~keys[h][i].search('pgmnu_sbmnu') ? 'mouseenter' : 'click'))
                              console.log(keys[h][i],h,(~keys[h][i].search('pgmnu_sbmnu') ? 'mouseover' : 'click'))}}
                      }                        
                  })
                  console.log(keys)
          })          
      },
      templateUrl: 'pgmenu/Menu/Menu.html'
    };
  })
  
//angular.module('pgmenuMenu', ['cfp.hotkeys'])