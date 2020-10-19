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
			format = 'DD/MM/YYYY',
			show = false
		
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
				
				out = val.substr(0, 2) + '/' + val.substr(2, 2) + '/' + val.substr(6, 2)
				
			else if (len === 6)
				
				out = val.substr(0, 2) + '/' + val.substr(2, 2) + '/' + val.substr(4, 2) 
				
			else if (len === 4)
				
				out = val.substr(0, 2) + '/' + val.substr(2, 2) + '/' + year
				
			else if (len === 2)
				
				out = val.substr(0, 1) + '/' + val.substr(1, 1) + '/' + year
			
			else if (len === 1) {
				
				out = day + '/' + month + '/' + year
					
				if (val === 'Y')
					
					out = moment(out, format).subtract(1, 'd').format(format)
				
			} else
				
				out = val
			//console.log(out)
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
    	
		
		$('#datepicker-minus').click(function() {
			
			plusMinus('subtract')
			
		})
		
		
		$('#datepicker-plus').click(function() {

			plusMinus('add')
			
		})
		
		function plusMinus(dir) {
			
			if (show)
				
				return
			
			var val = container.val()
			
			val && container.val(moment(val, $scope.model.format)[dir](1, 'd').format($scope.model.format))
			$scope.model.date = container.val()
			
		}
		
		
		$('#datepicker-activate').click(function() {

	       $(document).ready(function() {
	    	   
	       		lock = true
			   
	       		container.datepicker({
	       			
	       			dateFormat: 'd/m/y',
					beforeShow : function() {

				        show = true
						
				    },
				    onClose: function() {
					
						var val = moment(container.val(), format).format($scope.model.format)
	
						$scope.model.date = val
						$window.setTimeout(function() {container.val(val)}, 1)
				        $window.setTimeout(function() {show = false}, 50)
						$window.setTimeout(function(){container.datepicker('destroy')}, 500)
						
				    }
	       		
	       		})

				container.datepicker().on('change', function() {

					var val = moment(container.val(), format).format($scope.model.format)

					$scope.model.date = val
					$window.setTimeout(function() {container.val(val)}, 1)

				})

	       		container.datepicker().focus()
				   
	       })

	    })
		
		
		$scope.api.getDate = function() {
			
			return moment(container.val(), $scope.model.format).format(format)
			
		}

		
		$scope.api.setDate = function(date) {
			
			date && container.val(moment(date, format).format($scope.model.format))
			
		}
		
        
		$scope.$watch('model.format', function(newformat, oldformat) {
        	
        	var val = container.val()
			
        	val && container.val(moment(val, oldformat).format($scope.model.format))
			
        })

		
    },
    templateUrl: 'dateinput/DateInput/DateInput.html'
  }
})
