angular.module('pgmenuMenu',['servoy']).directive('pgmenuMenu', function() {  
    return {
      restrict: 'E',
      scope: {
          model: '=svyModel',
          api: '=svyApi',
          svyServoyapi: '='
      },
      controller: function($scope, $element, $attrs, $window) {
      
          var navbar = $('#navbar-menu > ul').first()

          function menuMainGroup(id, item) {
              var el,
                  single = item.items && item.items.length ? false : true
              el = $('<li id="pgmnu_' + id + '" ' + (single ? '' : 'class="dropdown"') + '>'+
                     '<a onclick="clicker" href="' + (item.href ? item.href : '#') + '" ' +
                     (single ? 'class="menu-item"' : 'class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"') +
                     '>' + item.label +
                     (single ? '' : '<span class="caret"></span>') +
                     '</a>' +
                     (single ? '' : '<ul class="dropdown-menu navbar-inverse" role="menu"></ul>') +
                     '</li>')          
              if (item.callback) {
            	  //console.log(item,id)
                  $(document).on(
                      'click',
                      '#pgmnu_' + id,
                      (function(a, b, c) {
                    
                           return function(data){ $window.executeInlineScript(a, b, [c]) }
                      })(item.callback.formName,
                         item.callback.script,
                         {label: item.label})
                  )}
              navbar.append(el)
          }

          function initMenu(){
              console.log('ini')
              var a,b,c,$g,el,grp,itm,submenu
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
                                data: { label: $scope.model.menuItems[a].items[b].label },
                                module:{
                                    callbacks: {
                                        cb: $scope.model.menuItems[a].items[b].callback ? (function(a, b) {
                                     //       console.log(a,b)
                                                                                              return function(data){ console.log(a,b,data);$window.executeInlineScript(a, b, [data]) }
                                                                                          })($scope.model.menuItems[a].items[b].callback.formName,
                                                                                             $scope.model.menuItems[a].items[b].callback.script)
                                                                                        : function(){}
                                    }
                                },
                               callback: 'cb' 
                              }
                              console.log(itm)
                              grp = {}
                              grp[itm.name] = new pgAdmin.Browser.MenuItem(itm)
                              pgAdmin.Browser.MenuCreator($g, grp)
                          } 
                          else {
                              submenu=[]
                              for (c = 0; c < $scope.model.menuItems[a].items[b].items.length; c += 1) {
                                   el = $('<li id="pgmu_item_'+a+'_'+b+'_'+c+'" class="menu-item"><a href="#">' + $scope.model.menuItems[a].items[b].items[c].label + '</a></li>')
                                   $(document).on(
                                       'click',
                                       '#pgmu_item_'+a+'_'+b+'_'+c,
                                       (function(a, b, c) {
                                            return function(){ $window.executeInlineScript(a, b, [c]) }
                                       })($scope.model.menuItems[a].items[b].items[c].callback.formName,
                                          $scope.model.menuItems[a].items[b].items[c].callback.script,
                                          {label:$scope.model.menuItems[a].items[b].items[c].label})
                                   )
                                   submenu.push({
                                     priority: c,
                                     $el: el,
                                     is_disabled: false
                                   })
                              }
                              $g.append(pgAdmin.Browser.MenuGroup({ label: $scope.model.menuItems[a].items[b].label }, submenu).$el)
                          }
                      }
                  }
                  
              }
          }
        //  $scope.model.menuItems=[]
  //        if (!$scope.model.menuItems) {
//              initMenu()
    //      }
          
          $scope.showEditorHint = function() {
              return $scope.svyServoyapi.isInDesigner()
          }

          $scope.api.initMenu = function(items) {
              $scope.model.menuItems = items
              initMenu()
          }
          
          $scope.$watch('model.menuItems', function() {

        	  $(document)
			    .off('click.pg.menu.data-api', '[data-toggle^="pg-menu"]')
				
              //pgAdmin = {}
              pgAdminDefine()
              pgMenuDefine()
        
			  $(document).off('click', '.menu-item')
  		 $.makeArray(navbar.children('li')).map(function(i){$(document).off('click', '#' + i.id)})
			 console.log(navbar.children('li > ul'))//.map(function(i){console.log(i)})
			 
			  //$(document).off('click.myevent', '.form-template-name');
			  
    //          while(navbar.hasChildNodes())navbar.removeChild(navbar.lastChild)
              navbar.empty()
              initMenu()
              
              
          })
          
      
      },
      templateUrl: 'pgmenu/Menu/Menu.html'
    };
  })

  function clicker(){console.log('click')}