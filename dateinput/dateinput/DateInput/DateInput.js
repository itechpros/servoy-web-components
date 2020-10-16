angular.module('dateinput',['servoy']).directive('dateinput', function() {  
  return {
      restrict: 'E',
      scope: {
          api: '=svyApi',
          model: '=svyModel'
      },
    controller: function($scope, $element, $attrs, $window, $timeout) {

    	'use strict'
    	
    	var container = $('#datepicker-value'),
    		lock = false
		
		container.on('focusout', function() {
			
			if (lock) {
				
				lock = false
				return
				
			}
			
			var val = container.val(),
				len = val.length,
				date = new Date(),
				month = date.getMonth() + 1,
				year = date.getFullYear(),
				out = val
			
			if (len === 6) {
				
				out = val.substr(2, 2) + '/' + val.substr(0, 2) + '/' + val.substr(4, 2) 
				
			} else
				
				out = val
			
			out && setTimeout(function() {
				
				container.val(moment(out, 'MM/DD/YYYY').format($scope.model.format))
				
			}, 1)
			
			console.log('foc',len, out)
			
		})
		

		container.focus(function() {

			console.log('focus')
			var val = container.val()
			
			val && container.val(moment(val, $scope.model.format).format('MM/DD/YYYY'))
			$(this).select()
			
		} )
    	
		
		$('#datepicker-minus').click(function(e) {
			
			var val = container.val()
			val && container.val(moment(val, $scope.model.format).subtract(1, 'd').format($scope.model.format))
			
		})
		
		$('#datepicker-plus').click(function(e) {
			
			var val = container.val()
			val && container.val(moment(val, $scope.model.format).add(1, 'd').format($scope.model.format))
			
		})
		
		$('#datepicker-activate').click(function() {

	       $(document).ready(function() {
	    	   
	       		lock = true
			   
	       		container.datepicker({
	       			
	       			onClose: function() {
	       				console.log('destroy')
						
							setTimeout(function(){container.datepicker('destroy')}, 500)
						
       				}
	       		
	       		})

				container.datepicker().on('change', function() {

					var val = moment(container.val(), 'MM/DD/YYYY').format($scope.model.format)
					setTimeout(function() {container.val(val)}, 1)

				})

	       		container.datepicker().focus()
				   
	       })

	    })

    	
		
    },
    templateUrl: 'dateinput/DateInput/DateInput.html'
  }
})
