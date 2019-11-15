angular.module('itechutilsOnReady',['servoy'])
.factory("itechutilsOnReady",function($services) 
{
	var scope = $services.getServiceScope('sitservicesOnReady');
	return {
		onReady: function(elementSelector) {
			var element;
			if(elementSelector)
				element = $(elementSelector);
			else
				element = document;
			angular.element(element).ready(function () {
	      		  if(scope.model.onReadyCallback)
	      			$window.executeInlineScript(scope.model.onReadyCallback.formname, scope.model.onReadyCallback.script, []);
	      	  });
		}
	}
})
.run(function($rootScope,$services)
{

})