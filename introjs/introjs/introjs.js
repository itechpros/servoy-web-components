angular.module('introjs',['servoy', 'angular-intro'])
.factory("introjs",function($services, $window, ngIntroService) 
{

	//console.log(document.getElementsByName('tab_button_1')[0].getAttribute('name'),document.getElementsByName('tab_button_1')[0].tagName,document.getElementsByName('tab_button_1')[0].className)
	return {
		
		clear: function() {
			
			ngIntroService.clear()
			
		},
		goToStepNumber: function(step) {
			console.log(step)
			ngIntroService.goToStepNumber(step)
			
		},
		hideHint: function(hint) {
			
			ngIntroService.hideHint(hint)
			
		},
		hideHints: function() {
			
			ngIntroService.hideHints()
			
		},
		setOptions: function(options){
			
			
			var trav = function(doc, name) {
			
				var element = null
				
				var traverse = function(doc) {
					
					for (var i = 0, ix = doc.children.length; i < ix; i += 1){
						
						if (doc.children[i].getAttribute('name') === name) {
							
							element = doc.children[i]
							i = ix
							
						} else
							
							traverse(doc.children[i], name)
					}
				}
				
				traverse(doc)
				
				return element
				
			} 
			
			var opt = {}
				
			for (var o in options)
				
				opt[o] = options[o]
				
			!(['hints','steps']).forEach(function(typ) {
				
				opt[typ] = []
				
				for (var i = 0, ix = (options[typ] || []).length; i < ix; i += 1) {
					
					var e = options[typ][i].element.split('.'),
						element = null
					
					if (!(e.length % 3)) {
						
						var tab = document.getElementsByName(e[0])[0]
						
						tab && (tab = tab.children[0])
						tab && (tab = tab.children[0])
						tab && (tab = tab.children[0])
						tab && (tab = tab.children[tab.children.length - 1])
						tab && (tab = tab.children[Number(e[1])])
						
						element = tab && trav(tab, e[2]) || null
					
					}
						
					else
						
						element = document.getElementsByName(e[0])[0]
						
					if (element) {
						
						opt[typ].push(options[typ][i])
						opt[typ][opt[typ].length - 1].element = element
						
					}
					
				}
				
				
			})
			
			ngIntroService.setOptions(opt)
			
		},
		showHint: function(hint) {
			
			ngIntroService.showHint(hint)
			
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