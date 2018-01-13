angular.module('menubarMenuBar',['servoy']).directive('menubarMenuBar', function() {  
    return {
      restrict: 'E',
      scope: {
    	  model: '=svyModel'
      },
      controller: function($scope, $element, $attrs) {
    	  var container = $('#navigation')
		  var obj={div:{class:'nav-menus-wrapper',ul:{class:'nav-menu',nodes:[{li:{class:'active',a:{html:'Home',href:'http://google.com'}}},{li:{a:{html:'Away',href:'./'}}}]}}},
		  stack=[],count=0
		      iter=function(_obj,_box){var a,b
		    	  //console.log(_box)//;return
		    	                 for(a in _obj){console.log(_obj,a,(_obj[a].constructor===Array))
		    	                	 if(_obj[a].constructor===Array){
		    	                		 console.log(_obj[a],_obj[a].length);
		    	                		 //return
		    	                	 for (var c=0;c<_obj[a].length;c+=1){
		    	                		 console.log(_obj[a][c]);iter(_obj[a][c],_box)}}
		    	                 else if(typeof _obj[a]==='string') if (a==='html') $(_box).html(_obj[a])
		    	                                                                     else $(_box).attr(a,_obj[a])
		    	                               else {
		    	                            	   b=document.createElement(a)
												   $(_box).append(b)
												   
		    	                            	   iter(_obj[a],b)
		    	                               }   }}
    //	 var d =document.createElement('div')
		// d.style.backgroundColor='red'
    	 //$(d).addClass('nav-menus-wrapper')
		   // 	                               $(container).append(d)
		    	                               iter(obj,container)
		  /*
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
//$(c).attr('html','Home1')
$(c).attr('href','http://ya.ru')
$(b).append(c)
*/

		  
      },
      templateUrl: 'menubar/MenuBar/MenuBar.html'
    };
  })