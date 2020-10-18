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
    		lock = false,
			format = 'DD/MM/YYYY'
		
		container.on('focusout', function() {
			
			if (lock) {
				
				lock = false
				return
				
			}
			
			var val = container.val().toUpperCase(),
				len = val.length,
				date = new Date(),
				day = date.getDate().toString(),
				month = (date.getMonth() + 1).toString(),
				year = date.getFullYear().toString().substr(2, 2),
				out = val
			
			if (len === 8)	
				
				out = val.substr(2, 2) + '/' + val.substr(0, 2) + '/' + val.substr(6, 2)
				
			else if (len === 6)
				
				out = val.substr(2, 2) + '/' + val.substr(0, 2) + '/' + val.substr(4, 2) 
				
			else if (len === 4)
				
				out = val.substr(2, 2) + '/' + val.substr(0, 2) + '/' + year
				
			else if (len === 2)
				
				out = val.substr(1, 1) + '/' + val.substr(0, 1) + '/' + year
			
			else if (len === 1) {
				
				out = month + '/' + day + '/' + year
					
				if (val === 'Y')
					
					out = moment(out, format).subtract(1, 'd').format(format)
				
			} else
				
				out = val
			
			out = out && moment(out, format).format($scope.model.format) || ''
			
			$scope.model.date = out
				
			$window.setTimeout(function() {
				
				container.val(out)
				
			}, 1)
			
		})
		

		container.focus(function() {
			
			var val = container.val()
			
			val && container.val(moment(val, $scope.model.format).format(format))
			$scope.model.date = container.val()
			$(this).select()
			
			
		})
    	
		
		$('#datepicker-minus').click(function(e) {
			
			var val = container.val()
			
			val && container.val(moment(val, $scope.model.format).subtract(1, 'd').format($scope.model.format))
			//$scope.model.date = container.val()
			
		})
		
		$('#datepicker-plus').click(function(e) {
			
			var val = container.val()
			
			val && container.val(moment(val, $scope.model.format).add(1, 'd').format($scope.model.format))
			//$scope.model.date = container.val()
			
		})
		
		$('#datepicker-activate').click(function() {

	       $(document).ready(function() {
	    	   
	       		lock = true
			   
	       		container.datepicker({
	       			
	       			onClose: function() {
						
						setTimeout(function(){container.datepicker('destroy')}, 500)
						
       				}
	       		
	       		})

				container.datepicker().on('change', function() {

					var val = moment(container.val(), format).format($scope.model.format)
					console.log(val,container.val(), format,  $scope.model.format)
				//	$scope.model.date = val
					setTimeout(function() {container.val(val)}, 1)

				})

	       		container.datepicker().focus()
				   
	       })

	    })
		
		
        $scope.$watch('model.date', function(date) {
        	
        	container.val(moment(date, format).format($scope.model.format))
			console.log(date)
			//$scope.model.date = container.val()
        	
        })
		        

        $scope.$watch('model.format', function(newformat, oldformat) {
        	
        	var val = container.val()
			console.log(newformat,oldformat)
        	val && container.val(moment(val, oldformat).format($scope.model.format))
			
			//$scope.model.date = container.val()
			
        })

		
    },
    templateUrl: 'dateinput/DateInput/DateInput.html'
  }
})
