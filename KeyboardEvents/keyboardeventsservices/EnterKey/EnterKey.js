angular.module('keyboardeventsservicesEnterKey',['servoy'])
.factory("keyboardeventsservicesEnterKey",function( $services, $window ) 
{
	var scope = $services.getServiceScope('keyboardeventsservicesEnterKey');
	
	return {
		helloworld: function(text) {
			alert("helloworld: " + scope.model.text + text);
		},
		addEnterListener:function(){
			//add only when entering Find mode (on appropriate forms)
			$(document).bind( "keyup.enterKeyHit", function( event )
			{
				if( event.keyCode==13 )	//forward to Servoy method only if Enter is pressed	 
				{
					console.log( 'keyup event: '+event.keyCode );
					var svyArgs = []
					$window.executeInlineScript( scope.model.enterKeyHitForSearch.formname, scope.model.enterKeyHitForSearch.script, svyArgs );
				}						
			});
		},
		removeEnterListener:function(){
			//remove listener onSearch
			$(document).unbind( "keyup.enterKeyHit" );
		}
	}
})
.run(function($rootScope,$services,$window)
{
	var scope = $services.getServiceScope('keyboardeventsservicesEnterKey')
	scope.$watch('model', function(newvalue,oldvalue) {
	// handle state changes
//		console.log(newvalue)
	}, true); 	
})