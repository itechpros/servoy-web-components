angular.module('menubarMenuBar',['servoy']).directive('menubarMenuBar', function() {  
    return {
      restrict: 'E',
      scope: {
    	  model: '=svyModel'
      },
      controller: function($scope, $element, $attrs) {
    	  
    	  var container = $('#navigation')
		  
		  console.log(container)
		  
		  var a,b,c,d = document.createElement('div')

		  $(d).addClass('nav-menus-wrapper')
$(container).append(d)
a=document.createElement('ul')
$(a).addClass('nav-menu')
$(d).append(a)
b=document.createElement('li')
//$(b).addClass('active')
$(b).attr('class','active')
$(a).append(b)

c=document.createElement('a')
$(c).html('Home')
// ! no - $(c).attr('html','Home')
$(c).attr('href','http://ya.ru')
$(b).append(c)


		  
      },
      templateUrl: 'menubar/MenuBar/MenuBar.html'
    };
  })