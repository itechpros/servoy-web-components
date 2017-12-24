angular.module('advancedsearchboxAdvancedSearchbox',['servoy', 'angular-advanced-searchbox']).directive('advancedsearchboxAdvancedSearchbox', function() {  
	return {
		restrict: 'E',
		scope: {
			api: "=svyApi",
			model: '=svyModel'
		},
		controller: function($scope, $element, $attrs, $window) {

			$scope.parametersLabel = $scope.model.parametersLabel
			
			$scope.searchBoxPlaceholder = $scope.model.placeholder
			
			$scope.availableSearchParams = $scope.model.availableSearchParams

			$scope.api.getSearchParams = function(){
				
				return $scope.searchParams
			}
						
			$scope.api.setSearchParams = function(availableSearchParams){

				$scope.availableSearchParams = availableSearchParams
	             
			}
			
			$scope.api.clearAllSearchParameters = function(){

				setTimeout(function() {
					angular.element(
						document.getElementsByClassName("remove-all-icon glyphicon glyphicon-trash")[0].parentNode
					).triggerHandler('click')
					},
				0)

				return true
			}

			$scope.api.clearAvailableSearchParameters = function(){

				$scope.availableSearchParams = []
				return true
			}

			
			var enterEditMode = false
			$scope.$on('advanced-searchbox:enteredEditMode', function (event, searchParameter) {
				enterEditMode = true})
			$scope.$on('advanced-searchbox:leavedEditMode', function (event, searchParameter) {
				setTimeout(
					function(){enterEditMode = false},
					500)})
			$window.searchBoxKeyUp = function(e){
				
				if ($scope.model.crlfAction && e.keyCode == 13 && !enterEditMode) {
					
					$window.executeInlineScript(
    					$scope.model.crlfAction.formname,
    					$scope.model.crlfAction.script,
    					[])
				}
			}

			
      },
      templateUrl: 'advancedsearchbox/AdvancedSearchbox/AdvancedSearchbox.html'
	};
})