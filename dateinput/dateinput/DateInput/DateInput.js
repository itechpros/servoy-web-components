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
					entry: '__/__/__',
					input: 'DD/MM/YY',
					store: 'DD/MM/YYYY'
				
				},
				
				'DD/MM/YYYY': {
					
					drop: 'd/m/yy',
					entry: '__/__/____',
					input: 'DD/MM/YYYY',
					store: 'DD/MM/YYYY'
				
				},
				
				'MM/DD/YY': {
					
					drop: 'm/d/yy',
					entry: '__/__/__',
					input: 'MM/DD/YY',
					store: 'MM/DD/YYYY'
				
				},
				
				'MM/DD/YYYY': {
					
					drop: 'm/d/yy',
					entry: '__/__/____',
					input: 'MM/DD/YYYY',
					store: 'MM/DD/YYYY'
				
				}
				
			},
			format = formats[$scope.model.inputFormat],
			show = false,
			focus = false,
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
					out = moment(out, format.input).format(format.input)

					if (val === 'Y')
						
						out = moment(out, format.input).subtract(1, 'd').format(format.input)
						
				} else {
			
					val = '0' + val
					out = ($scope.model.inputFormat.split('/')[0] === 'DD' ? val + '/' + month : month + '/' + val) + '/' + year
					
				}
				
				return out
				
			}
			
		}

		
		var keyCodes = {
			
			
			40: function(e){
				
				plusMinus('subtract')
				
			},
			
			38: function(e){
				
				plusMinus('add')
				
			},
				
			13: function(e) {
							
				container.blur()
				
			},
				
			37: function(e) {
		
				var start = $(this)[0].selectionStart,
					val = container.val()
					
					
				if (start && val.charAt(start - 1) === '/')
					
					$(this)[0].setSelectionRange(start - 1, start - 1)
				
			
			},
			
			39: function(e) {
		
				var start = $(this)[0].selectionStart,
					val = container.val()
					
				if (start && start < val.length && val.charAt(start + 1) === '/') {
				
					if (val.charAt(start) === '_' && val.charAt(start - 1) !== '_') {
						
						val = val.slice(0, start - 1) + '0' + val.charAt(start - 1) + val.slice(start + 1)
						container.val(val)
					}
					
					$(this)[0].setSelectionRange(start + 1, start + 1)
				
				}
			
			},
			
			84: function(e) {
				
				getCurrent()
				container.val(inputs[1](e.key.toUpperCase()))
				container.blur()
				
			},
			
			89: function(e){
				
				keyCodes[84].call(this, e)
				
			},
			
			8: function(e) {
				
				if (!$scope.model.entryTemplate)
					
					return
				
				e.preventDefault()
				
				var start = $(this)[0].selectionStart,
					val = container.val()

				if (!start) {
					
					if (start !== $(this)[0].selectionEnd) {
						
						container.val(format.entry)
						$(this)[0].setSelectionRange(0, 0)
						
					}
					
					if (e.keyCode === 8)
						
						return
					
				}

				if (!(start > 1 && val.charAt(start - 1) === '/'))
						
					if (e.keyCode === 8)
						
						val = (~start && val.slice(0, start - 1) + '_' || '') + val.slice(start)
						
					else
						
						val = val.slice(0, start) + '_' + val.slice(start + 1)
			

				var idx = start
				
				while (idx < val.length && val.charAt(idx) !== '/') {
					
					val = val.slice(0, idx) + '_' + val.slice(idx + 1)					
					idx += 1
					
				}

				if (e.keyCode === 8)
					
					start -= 1
					
				container.val(val)				
				$(this)[0].setSelectionRange(start, start)
				
			},
			
			46: function(e){
				
				keyCodes[8].call(this, e)
				
			},
			
			189:function(e) {
				
				e.preventDefault()

				var start = $(this)[0].selectionStart,
					val = container.val()
					
				if (val.charAt(start) === '_' && val.charAt(start + 1) === '/') {
				
					val = val.slice(0, start - 1) + '0' + val.charAt(start - 1) + val.slice(start + 1)
					container.val(val)
					$(this)[0].setSelectionRange(start + 2, start + 2)
					
				}
					
					
			},
			
			190: function(e) {
				
				keyCodes[189].call(this, e)
				
			},
			
			191: function(e) {
				
				keyCodes[189].call(this, e)
				
			},
			
		}
		
		
		function getCurrent() {
			
			date = new Date()
			day = date.getDate().toString()
			month = (date.getMonth() + 1).toString()
			year = date.getFullYear().toString()
			
		}

		
		container.keydown(function(e) {
			
			if ($scope.model.entryTemplate) {
			
				if (keyCodes[e.keyCode])
					
					keyCodes[e.keyCode].call(this, e)
					
				else if (!isNaN(e.key)) {
					
					e.preventDefault()
	
				} else if (isNaN(e.key) && e.keyCode >= 48 && !e.ctrlKey)
					
					e.preventDefault()
					
			} else if (keyCodes[e.keyCode])
				
				keyCodes[e.keyCode].call(this, e)
				
			
			
		})
		
		container.blur(function(e) {
			
			lock = false
			
		})
		
		container.keyup(function(e) {

			var key = e.key
			
			if (!$scope.model.entryTemplate)
				
				return
			
			if (!container.val() && $scope.model.entryTemplate) {
				
				container.val(format.entry)
				$(this)[0].setSelectionRange(0, 0)
				
			}
			
			if (isNaN(key) || e.keyCode === 32)
				
				return
			
			var val = container.val(),
				idx = val.indexOf('_') + 1,
				start = $(this)[0].selectionStart

			
			if ((isNaN(val.charAt(start - 1)) || isNaN(val.charAt(start+1))) && val.charAt(start) !== '_' && isNaN(val.charAt(start))) {
				
				val = val.slice(0, start) + key + val.slice(start)
				container.val(val)
				
				start += 1
				
				if (val.charAt(start) === '/')
					
					start += 1
				
				$(this)[0].setSelectionRange(start, start)
				
			} else if (idx && idx <= start + 1) {
				
				val = val.replace(/_/, key)
				
				if (val.charAt(idx) === '/')
					
					idx += 1
				
				container.val(val)
				$(this)[0].setSelectionRange(idx, idx)
				
			} else {

				if (!isNaN(val.charAt(start)))
						
					val = val.slice(0, start) + key + val.slice(start + 1)
				
				else
					
					val = val.slice(0, start) + key + val.slice(start)
				

				if (val.charAt(start + 1) === '/' && (val.charAt(start - 1) && !isNaN(val.charAt(start - 1))))
					
					start += 1
					
				start += 1
				
				
				if (val.length <= format.entry.length) {
				
					container.val(val)
					$(this)[0].setSelectionRange(start, start)
						
				}
				
			}
			
			
		})
		
		
		container.on('focusout', function() {
			
			if (show) {
				
				show = false
				return
				
			}
			
			var val = container.val().replace(/_|\//g, '').toUpperCase().trim(),
				len = val.length,
				out = val

			getCurrent()

			if ((!isNaN(val) || (len === 1)) && inputs[len])
			
				out = inputs[len](val)
				
			else {
				
				out = val.replace(/\.|\-/g, '/').split('/')
				
				if (out.length === 3)
					
					if (out[2].length === 2)
						
						out[2] = ($scope.model.cutoffNextYear && Number(out[2]) > Number(year.substr(2, 2)) + 1 ? '19' : '20') + out[2]
						
					else if (out[2].length === 0)
					
						out[2] = year

				if (out[0].length === 1)
					
					out[0] = '0' + out[0]
				
				if (out[1] && out[1].length === 1)
					
					out[1] = '0' + out[1]
				
				out = out.join('/')
				
			}

			lock = true
			$scope.model.dataProviderID = moment(out, format.store, true).isValid() ? out : ''
			$scope.svyServoyapi.apply('dataProviderID')
			
			$window.setTimeout(function() {
	
				$scope.model.dataProviderID && container.val(moment($scope.model.dataProviderID, format.store).format($scope.model.displayFormat)) || container.val('')
				
			}, 1)
			
			focus = false
			
		})
		

		container.on('focus click', function() {
			
			if (focus)
				
				return
			
			focus = true
			
			if (moment($scope.model.dataProviderID, format.store, true).isValid()) {
				
				container.val(moment($scope.model.dataProviderID, format.store).format(format.input))
				$(this).select()
			
			} else if ($scope.model.entryTemplate) {

				var element = $(this)[0]
				
				container.val(format.entry)
				
				$window.setTimeout(function() {
					
					element.setSelectionRange(0, 0)
					
				}, 1)
			
			} else
				
				container.val('')
			
				
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
				
				$scope.model.dataProviderID = moment($scope.model.dataProviderID, format.store).format(format.store)
				$scope.svyServoyapi.apply('dataProviderID') 
				container.val(moment($scope.model.dataProviderID, format.store).format($scope.model.displayFormat))
				
			} else 
			
				container.val('')
		})
		
		
		$scope.$watch('model.border', function() {

			for (var a in $scope.model.border && $scope.model.border.borderStyle || {}) {
				
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

			$element.children().eq(1).children().last().children().first().css('color', $scope.model.foregroundPicker)
			
		})		
			
	
		
	},
	templateUrl: 'dateinput/DateInput/DateInput.html'
  }
})