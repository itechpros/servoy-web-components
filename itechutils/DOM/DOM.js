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
			  enableTabs: function(selector) {

				  var textareas = document.getElementsByClassName(selector)
				  var count = textareas.length
				  for(var i=0;i<count;i++){
				      textareas[i].onkeydown = function(e){
				          if(e.keyCode==9 || e.which==9){
				              e.preventDefault();
				              var s = this.selectionStart;
				              this.value = this.value.substring(0,this.selectionStart) + "\t" + this.value.substring(this.selectionEnd);
				              this.selectionEnd = s+1 
				          }
				      }
				  }

			  }
	}
})
.run(function($rootScope,$services)
{

})