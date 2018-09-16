angular.module('servoyucomponentsDashboard',['servoy']).directive('servoyucomponentsDashboard', function() {  
    return {
      restrict: 'E',
      scope: {
    	  model: '=svyModel',
		  api: "=svyApi",
	      handlers: "=svyHandlers"
      },
      controller: function($scope, $element, $attrs) {

    	  $scope.dashboardStyle = {
    		  "background-color" : "#000000",
    		  "background-image" : "url(" + $scope.model.serverURL + "uploads/img1.jpg)",
    	      "background-repeat" : "no-repeat",
    	      "background-position" : "center top",
    	      "background-size" : "cover",
    	      "padding" : "180px 0"
    	  }
      },
      templateUrl: 'servoyucomponents/Dashboard/Dashboard.html'
    };
  })