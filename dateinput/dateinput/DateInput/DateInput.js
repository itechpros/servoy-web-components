angular.module('dateinput',['servoy']).directive('dateinput', function() {  
  return {
      restrict: 'E',
      scope: {
          api: '=svyApi',
          model: '=svyModel'
      },
    controller: function($scope, $element, $attrs, $window, $timeout) {

    	var container = $('#datepicker-value')
		
    	container.datepicker({})
		
		$('#datepicker-activate').click(function(e){

	       $(document).ready(function() {

	       		container.datepicker().focus()
				   
	       })

	    })

    	
		
    },
    templateUrl: 'dateinput/DateInput/DateInput.html'
  }
})
