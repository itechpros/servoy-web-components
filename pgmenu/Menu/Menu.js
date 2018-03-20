angular.module('pgmenuMenu',['servoy']).directive('pgmenuMenu', function() {  
    return {
      restrict: 'E',
      scope: {
    	  model: '=svyModel'
      },
      controller: function($scope, $element, $attrs) {

      
      
          var obj = this,
	        // menu navigation bar
	        navbar = $('#navbar-menu > ul').first(),
	        // Drop down menu for objects
	        $obj_mnu = navbar.find('li#mnu_file > ul.dropdown-menu').first(),
	        $obj_mnu2 = navbar.find('li#mnu_obj > ul.dropdown-menu').first()


	console.log(pgAdmin.Browser)
	var i1=new pgAdmin.Browser.MenuItem({"enable":true,"name":"mnu_preferences","label":"Preferences","priority":999,"module":{callbacks:{show:function(){console.log('SHOW IT')}}},"callback":"show"})
	   ,i2=new pgAdmin.Browser.MenuItem({"enable":true,"name":"mnu_resetlayout","label":"Reset Layout","priority":999,"module":{},"callback":"show"})

	
	        pgAdmin.Browser.MenuCreator(
	          $obj_mnu,
	 {"mnu_preferences":i1,
	  "mnu_resetlayout":i2}
       );


	    
	    
	var create_submenu=        pgAdmin.Browser.MenuGroup(
	{"label":"Import","single":false}
	,[{"name":"import","label":"Import/Export...","priority":10,"module":{"initialized":true},"callback":"callback_import_export","category":"create","node":"table","is_disabled":false,
	$el: $('<li class="menu-item disabled"><a href="#">No object selected</a></li>'),//{"0":{},"length":1},
	"context":{"name":"Import/Export...","disabled":false}},
	{"name":"import","label":"Import/Export...","priority":10,"module":{"initialized":true},"callback":"callback_import_export","category":"create","node":"table","is_disabled":false,
	$el: $('<li class="menu-item disabled"><a href="#">GOGOGbject selected</a></li>'),//{"0":{},"length":1},
	"context":{"name":"Import/Export...","disabled":false}}]
	,false
	)
	//);

	$obj_mnu2.append(create_submenu.$el)


      
      
      
      },
      templateUrl: 'pgmenu/Menu/Menu.html'
    };
  })