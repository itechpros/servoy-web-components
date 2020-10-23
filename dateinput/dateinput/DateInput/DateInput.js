angular.module('dateinput',['servoy']).directive('dateinput', function() {  
  return {
	  restrict: 'E',
	  scope: {
		  api: '=svyApi',
		  model: '=svyModel',
		  handlers: "=svyHandlers",
		  svyServoyapi : "="
	  },
	controller: function($scope, $element, $attrs, $window, $timeout) {

		'use strict'

		var container = $('#datepicker-value'),
			provider = $('#data-provider'),
			lock = false,
			format = 'DD/MM/YYYY',
			show = false
			
			
		container.keydown(function(e) {
			
			if (e.keyCode === 40)
				
				plusMinus('subtract')
				
			else if (e.keyCode === 38)
				
				plusMinus('add')
			
		})
		
		
		container.on('focusout', function() {
			
			if (show) {
				
				show = false
				return
				
			}
			
			var val = container.val().toUpperCase(),
				len = val.length,
				date = new Date(),
				day = date.getDate().toString(),
				month = (date.getMonth() + 1).toString(),
				year = date.getFullYear().toString(),
				out = val
			
			if (len === 8)	
				
				out = val.substr(0, 2) + '/' + val.substr(2, 2) + '/' + val.substr(4, 4)
				
			else if (len === 6) {
				
				var inp = Number(val.substr(4, 2)),
					yr = $scope.model.cutoffNextYear && inp > Number(year.substr(2, 2)) + 1 ? 19 : 20

				out = val.substr(0, 2) + '/' + val.substr(2, 2) + '/' + yr.toString() + inp.toString()
				
			} else if (len === 4)
				
				out = val.substr(0, 2) + '/' + val.substr(2, 2) + '/' + year
				
			else if (len === 2)
				
				out = val + '/' + month + '/' + year
			
			else if (len === 1)
				
				if (isNaN(val)) {
					
					out = day + '/' + month + '/' + year
						
					if (val === 'Y')
						
						out = moment(out, format).subtract(1, 'd').format(format)
						
				} else
					
					out = val + '/' + month + '/' + year
				
			else
				
				out = val

			lock = true
			$scope.model.dataProviderID = out
			$scope.svyServoyapi.apply('dataProviderID')
			
			$window.setTimeout(function() {
	
				container.val(moment($scope.model.dataProviderID, format).format($scope.model.format))
				
			}, 1)
			

			
		})
		

		container.focus(function() {
			
			var val = $scope.model.dataProviderID
			
			val && container.val(val)
			$(this).select()
			lock = true
			
		})
		
		
		function plusMinus(dir) {
			
			var val = container.val()
			
			if (val) {
				
				container.val(moment(val, format)[dir](1, 'd').format(format))
				lock = true
				$scope.model.dataProviderID = moment(container.val(), format).format(format)
				$scope.svyServoyapi.apply('dataProviderID')
				
			}
			
		}

		
		$('#datepicker-activate').click(function() {

		   $(document).ready(function() {
			   
		   		lock = true
			   
		   		container.datepicker({
		   			
		   			dateFormat: 'd/m/yy',
					beforeShow : function() {

						show = true
						
					},
					onClose: function() {
					
						var val = moment(container.val(), format).format($scope.model.format)
	
						show = false
						
						$window.setTimeout(function() {
							
							if (lock) {
								
								lock = false
								return
								
							}
							
							container.val(val)
							
						}, 1)
						
						$window.setTimeout(function() {
							
							container.datepicker('destroy')
							
						}, 500)
						
					}
		   		
		   		})

				container.datepicker().on('change', function() {

					var val = moment(container.val(), format).format($scope.model.format)

					lock = true
					$scope.model.dataProviderID = container.val()
					$scope.svyServoyapi.apply('dataProviderID')

					$window.setTimeout(function() {
							
							container.val(val)
							
					}, 1)
						
				})

		   		container.datepicker().focus()
				   
		   })

		})
		
		
		$scope.$watch('model.format', function(newformat, oldformat) {
			
			var val = container.val()
			
			val && container.val(moment(val, oldformat).format($scope.model.format))
			
		})

		
		$scope.$watch('model.dataProviderID', function() {
		//	console.log('mod', lock, $scope.model.dataProviderID)
			if (lock) {
				
				lock = false
				return
				
			}
			
			$scope.model.dataProviderID && container.val(moment($scope.model.dataProviderID, format).format($scope.model.format))
			
		})
		
			
	
		
	},
	templateUrl: 'dateinput/DateInput/DateInput.html'
  }
})