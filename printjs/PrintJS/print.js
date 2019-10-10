angular.module('printjs',['servoy'])
.factory("printjs",function( $services ) 
{
	return {
		printJS: function(printable, type) {
			printJS(printable, type || 'pdf')
		}
	}
})
.run()