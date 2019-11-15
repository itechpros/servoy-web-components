angular.module('itechutilsDOM',['servoy'])
.factory("itechutilsDOM",function($services) 
{
	var scope = $services.getServiceScope('itechutilsDOM');
	return {
		setClass: function(elementSelector, className, removeCurrent){
			  if(removeCurrent){
				  $(elementSelector).removeClass();
			  }
			  
			  $(elementSelector).addClass(className);
		  },
		  
		  toggleClass: function(elementSelector, className){
			  $(elementSelector).toggleClass(className);
		  },
		  
		  setVisibility: function(elementSelector, visible){
			  if(visible){
				  $(elementSelector).removeClass("hidden");
			  }
			  else{
				  $(elementSelector).addClass("hidden");
			  }
		  },
		  
		  getOuterHeight: function(elementSelector){
				return  $(elementSelector).outerHeight()
			},
			
		  setTitle: function(title){
			  document.title = title;
		   },
		  
		  setViewport: function(content) {
		         var meta = document.createElement('meta');
		         meta.content = content;
		         meta.name = "viewport"
		         document.getElementsByTagName('head')[0].appendChild(meta);
		      },
			  autoSetViewport : function() {
				 var minWidth = 420;
				 var width = screen.width;
				 var scale = 1.0;
				 if(width < minWidth){
					 width = minWidth;
					 scale = 0.9;
				 }
				 else{
					 width = 'device-width'
				 }
				 var content = "width=" + width + ", initial-scale=" + scale + ", maximum-scale=" + scale + ", user-scalable=no"
				 
				 var meta = document.getElementById('rtViewport');
				 if(!meta){
					 //then add it
				 	meta = document.createElement('meta');
				 	meta.content = content
				 	meta.name = "viewport"
				 	meta.id = "rtViewport"
				 	document.getElementsByTagName('head')[0].appendChild(meta);
				 }
				 else{
					 //then update it
					 meta.setAttribute('content',content);
				 }
		         
		         
		      },
	}
})
.run(function($rootScope,$services)
{

})