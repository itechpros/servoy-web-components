angular.module('introjs',['servoy', 'angular-intro'])
.factory("introjs",function($services, $window, ngIntroService) 
{

	return {
		
		setOptions: function(options){
			
			var opt = {}
			
			for (var o in options)
				
				opt[o] = options[o]
			
			!(['hints','steps']).forEach(function(typ) {
			
				for (var i = 0, ix = (opt[typ] || []).length; i < ix; i += 1)
					
					opt[typ][i].element = document.getElementsByName(opt[typ][i].element)[0]
				
			})
			
			ngIntroService.clear()
			ngIntroService.setOptions(opt)
			
		},
		showHints: function() {
			
			ngIntroService.showHints()
			
		},
		start : function() {
			
		      ngIntroService.start()
	    }
		
	}
	
	
	
})
.run(function($rootScope,$services,ngIntroService)
{
})