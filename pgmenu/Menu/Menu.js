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

          function menuMainGroup(id, label, single) {  
              navbar.html(navbar.html() + 
                  '<li id="pgmnu_' + id + '" ' + (single ? '' : 'class="dropdown"') + '>'+
                  '<a onclick="clicker" href="#" ' + (single ? 'class="menu-item"' : 'class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"') + '>' + label +
                  (single ? '' : '<span class="caret"></span>') +
                  '</a>' +
                  (single ? '' : '<ul class="dropdown-menu navbar-inverse" role="menu"></ul>') +
                  '</li>')
          }
          
          function initGroups(){  
             // var a = 0,
               //   items = []
              for (var a = 0; a < $scope.model.groups.length; a += 1) {
            	  menuMainGroup(a, $scope.model.groups[a].label)
      //            navbar.html(navbar.html() + 
        //              '<li id="pgmnu_' + a + '" class="dropdown" id="testitem">'+
          //            '<a href="#" accesskey="f" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">' + $scope.model.groups[a].label + '<span class="caret"></span></a>'+
            //          '<ul class="dropdown-menu navbar-inverse" role="menu"></ul>'+
              //        '</li>')
              }
          }
              
          function genMenu(grp, data){
              var a = 0,
                  $g = navbar.find('li#pgmnu_' + grp + ' > ul.dropdown-menu').first(),
                  o = {}
              for(; a < data.length; a += 1) {
                  o[data[a].name] = new pgAdmin.Browser.MenuItem(data[a])
                  pgAdmin.Browser.MenuCreator($g, o)
                  o = {}
              }
          }

          function initMenu(){
              var a,b,c,$g,el,grp,itm,submenu
              for (a = 0; a < $scope.model.menuItems.length; a += 1) {
                  if (!$scope.model.menuItems[a].items){
                      menuMainGroup(a, $scope.model.menuItems[a].label, true)
                      if ($scope.model.menuItems[a].callback)
                          $(document).on(
                              'click',
                              '#pgmnu_' + a,
                              (function(a, b, c) {
                                   return function(data){ $window.executeInlineScript(a, b, [c]) }
                              })($scope.model.menuItems[a].callback.formName,
                                 $scope.model.menuItems[a].callback.script,
                                 {label: $scope.model.menuItems[a].label})
                          )
                  }
                  else {
                      menuMainGroup(a, $scope.model.menuItems[a].label)
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
                                                                                              return function(data){ $window.executeInlineScript(a, b, [data]) }
                                                                                          })($scope.model.menuItems[a].items[b].callback.formName,
                                                                                             $scope.model.menuItems[a].items[b].callback.script)
                                                                                        : function(){}
                                    }
                                },
                               callback: 'cb' 
                              }
                              grp = {}
                              grp[grp.name] = new pgAdmin.Browser.MenuItem(itm)
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
          
          if (!$scope.model.menuItems) {
              initMenu()
          }
          else {
              $window.pgMenuCtl = new PGMenuCtl(genMenu)
              initGroups()
          }
          
          $scope.showEditorHint = function() {
              return $scope.svyServoyapi.isInDesigner()
          }

          $scope.api.initMenu = function(items) {
              $scope.model.menuItems = items
              initMenu()
          }
      
      },
      templateUrl: 'pgmenu/Menu/Menu.html'
    };
  })
  
var PGMenuCtl = function(fn){
    this.fn=fn
}

PGMenuCtl.prototype.group = function(grp, data){
    this.fn(grp, data)
}


function clicker(){console.log('clicker');alert('go')}