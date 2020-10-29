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

		var container = $element.children().eq(1).children().first(),
			lock = false,
			formats = {
				
			
				'DD/MM/YY': {
					
					drop: 'd/m/yy',
					input: 'DD/MM/YY',
					store: 'DD/MM/YYYY'
				
				},
				
				'DD/MM/YYYY': {
					
					drop: 'd/m/yy',
					input: 'DD/MM/YYYY',
					store: 'DD/MM/YYYY'
				
				},
				
				'MM/DD/YY': {
					
					drop: 'm/d/yy',
					input: 'MM/DD/YY',
					store: 'MM/DD/YYYY'
				
				},
				
				'MM/DD/YYYY': {
					
					drop: 'm/d/yy',
					input: 'MM/DD/YYYY',
					store: 'MM/DD/YYYY'
				
				}
				
			},
			format = formats[$scope.model.inputFormat],
			show = false,
			date,
			day,
			month,
			year
			
			
		var inputs = { 
			
			8: function(val) {	
				
				return val.substr(0, 2) + '/' + val.substr(2, 2) + '/' + val.substr(4, 4)
				
			},
			
			6: function(val) {
				
				var inp = Number(val.substr(4, 2)),
					yr = $scope.model.cutoffNextYear && inp > Number(year.substr(2, 2)) + 1 ? '19' : '20'
	
				return val.substr(0, 2) + '/' + val.substr(2, 2) + '/' + yr + val.substr(4, 2)
				
			},
			
			4: function(val) {
				
				return val.substr(0, 2) + '/' + val.substr(2, 2) + '/' + year
				
			},
			
			2: function(val) {
				
				return ($scope.model.inputFormat.split('/')[0] === 'DD' ? val + '/' + month : month + '/' + val) + '/' + year
				
			},
			
			1: function(val) {
				
				var out
				
				if (isNaN(val)) {
					
					out = ($scope.model.inputFormat.split('/')[0] === 'DD' ? day + '/' + month : month + '/' + day) + '/' + year
						
					if (val === 'Y')
						
						out = moment(out, format.input).subtract(1, 'd').format(format.input)
						
				} else
					
					out = ($scope.model.inputFormat.split('/')[0] === 'DD' ? val + '/' + month : month + '/' + val) + '/' + year
					
				return out
				
			}
			
		}
			
		container.keydown(function(e) {
			
			if (e.keyCode === 40)
				
				plusMinus('subtract')
				
			else if (e.keyCode === 38)
				
				plusMinus('add')
				
			else if (e.key === 'Enter')
				
				container.blur()
				
				
			
		})
		
		
		container.on('focusout', function() {
			
			if (show) {
				
				show = false
				return
				
			}
			
			var val = container.val().toUpperCase().trim(),
				len = val.length,
				out = val
				
			date = new Date()
			day = date.getDate().toString()
			month = (date.getMonth() + 1).toString()
			year = date.getFullYear().toString()

			if ((!isNaN(val) || (len === 1)) && inputs[len])
			
				out = inputs[len](val)
				
			else {
				
				out = val.replace(/\.|\-/g, '/').split('/')
				
				if (out.length === 3 && out[2].length === 2)
					
					out[2] = ($scope.model.cutoffNextYear && Number(out[2]) > Number(year.substr(2, 2)) + 1 ? '19' : '20') + out[2]  

				out = out.join('/')
				
			}
			
			lock = true
			$scope.model.dataProviderID = out
			$scope.svyServoyapi.apply('dataProviderID')
			
			$window.setTimeout(function() {
	
				$scope.model.dataProviderID && container.val(moment($scope.model.dataProviderID, format.store).format($scope.model.displayFormat)) || container.val('')
				
			}, 1)
			

			
		})
		

		container.focus(function() {
			
			var val = $scope.model.dataProviderID
			
			val && container.val(moment(val, format.store).format(format.input))
			$(this).select()
			lock = true
			
		})
		
		
		function plusMinus(dir) {
			
			var val = container.val()
			
			if (val) {
				
				container.val(moment(val, format.input)[dir](1, 'd').format(format.input))
				lock = true
				$scope.model.dataProviderID = moment(container.val(), format.input).format(format.input)
				$scope.svyServoyapi.apply('dataProviderID')
				
			}
			
		}

		
		$('#datepicker-activate').click(function() {

		   $(document).ready(function() {
			   
		   		lock = true
			   
		   		container.datepicker({
		   			
		   			dateFormat: format.drop,
					beforeShow : function() {

						show = true
						
					},
					onClose: function() {
					
						var val = moment(container.val(), format.input).format($scope.model.displayFormat)
	
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

					var val = moment(container.val(), format.input).format($scope.model.displayFormat)

					lock = true
					$scope.model.dataProviderID = moment(container.val(), format.input).format(format.store)
					$scope.svyServoyapi.apply('dataProviderID')

					$window.setTimeout(function() {
							
							container.val(val)
							
					}, 1)
						
				})

		   		container.datepicker().focus()
				   
		   })

		})
		
		
		$scope.$watch('model.displayFormat', function(newformat, oldformat) {
			
			$scope.model.dataProviderID && container.val(moment($scope.model.dataProviderID, format.store).format($scope.model.displayFormat))
			
		})

		$scope.$watch('model.inputFormat', function(newformat, oldformat) {
			
			format = formats[$scope.model.inputFormat]
			
			if ($scope.model.dataProviderID) {
				
				lock = true
				$scope.model.dataProviderID = moment($scope.model.dataProviderID, formats[oldformat].store).format(format.store)
				$scope.svyServoyapi.apply('dataProviderID')
				container.val(moment($scope.model.dataProviderID, format.store).format($scope.model.displayFormat))
				
			}
			
		})

		
		$scope.$watch('model.dataProviderID', function() {
			
			if (lock) {
				
				lock = false
				return
				
			}
			
			if ($scope.model.dataProviderID) {
				
			
				lock = true
				$scope.model.dataProviderID = moment($scope.model.dataProviderID, format.store).format(format.store)
				$scope.svyServoyapi.apply('dataProviderID')
				$scope.model.dataProviderID && container.val(moment($scope.model.dataProviderID, format.store).format($scope.model.displayFormat))
				
			}
			
		})
		
		
		$scope.$watch('model.border', function() {

			for (var a in $scope.model.border.borderStyle) {
				
				$element.children().eq(1).css(a, $scope.model.border.borderStyle[a])
			
			}
			
		})
		
		
		$scope.$watch('model.background', function() {
				
			container.css('backgroundColor', $scope.model.background)
			
		})
		
		
		$scope.$watch('model.foreground', function() {
				
			container.css('color', $scope.model.foreground)
			
		})
		
		$scope.$watch('model.backgroundPicker', function() {

			$element.children().eq(1).children().last().children().first().css('backgroundColor', $scope.model.backgroundPicker)
			
		})
		
		$scope.$watch('model.foregroundPicker', function() {
				console.log($scope.model.foregroundPicker)
			$element.children().eq(1).children().last().children().first().css('color', $scope.model.foregroundPicker)
			
		})		
			
	
		
	},
	templateUrl: 'dateinput/DateInput/DateInput.html'
  }
})