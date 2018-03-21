angular.module('pgmenuMenu',['servoy']).directive('pgmenuMenu', function() {  
    return {
      restrict: 'E',
      scope: {
          model: '=svyModel',
          svyServoyapi: '='
      },
      controller: function($scope, $element, $attrs, $window) {
      
          var navbar = $('#navbar-menu > ul').first()

          function init(){  
              var a = 0,
                  items = []
              for (; a < $scope.model.groups.length; a += 1) {
                  navbar.html(navbar.html() + 
                      '<li id="pgmnu_' + a + '" class="dropdown" id="testitem">'+
                      '<a href="#" accesskey="f" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">' + $scope.model.groups[a].label + '<span class="caret"></span></a>'+
                      '<ul class="dropdown-menu navbar-inverse" role="menu"></ul>'+
                      '</li>')
              }
          }

          init()

          $window.pgMenuCtl = new PGMenuCtl(genMenu)
              
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

          $scope.showEditorHint = function() {
              return $scope.svyServoyapi.isInDesigner()
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