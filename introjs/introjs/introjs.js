angular.module('introjs',['servoy', 'angular-intro'])
.factory('introjs',function($services, $window, ngIntroService) 
{
	
	return {
		
		clear: function() {
			
			ngIntroService.clear()
			
		},
		goToStepNumber: function(step) {

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
			
				if (!doc)
					
					return null
					
				var element = null
				
				var traverse = function(doc) {

					for (var i = 0, ix = doc.children.length; i < ix; i += 1)

						if (!element)

							if (doc.children[i].getAttribute('name') === name) {

								element = doc.children[i]
								i = ix
								
							} else if (doc.children[i].nodeName !== 'DATA-SERVOYDEFAULT-TABPANEL')
								
								traverse(doc.children[i], name)

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
					
					var e = options[typ][i] && options[typ][i].element.split('.') || [],
						body = document.getElementsByTagName('BODY')[0],
						element = null,
						idx = 0,
						len = e.length

					element = trav(body, e[idx++])
					
					while (idx < len - 1) {
												
						element && (element = element.children[0])
						element && (element = element.children[0])
						element && (element = element.children[0])
						element && (element = element.children[element.children.length - 1])
						element && (element = element.children[Number(e[idx++])])
						
						element = trav(element, e[idx++])

					}
										
					if (element) {
						
						opt[typ].push(options[typ][i])
						opt[typ][opt[typ].length - 1].element = element
						
					}
					
				}
				
				
			})
			
			ngIntroService.setOptions(opt)
			
		},
		setTheme: function(theme) {
			
			var src = 'introjs/introjs/lib/themes/introjs-' + theme + '.css',
				link = document.createElement( 'link' )
				
			link.href = src
			link.type = 'text/css'
			link.rel = 'stylesheet'
			link.media = 'screen,print'

			document.getElementsByTagName( 'head' )[0].appendChild( link )
			
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