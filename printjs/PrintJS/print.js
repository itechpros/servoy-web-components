angular.module('printjs',['servoy']).factory('printjs', function( $services ) 
{
	return {
		print: function(printable, type) {
			printJS(printable, type || 'pdf')
		},
		printJS: function(json) {
            printJS(json)
		}
	}
})
.run()