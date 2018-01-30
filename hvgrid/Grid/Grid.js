angular.module('hvgridGrid',['servoy']).directive('hvgridGrid', function() {  
    return {
      restrict: 'E',
      scope: {
    	  model: '=svyModel',
		  svyServoyapi: "=",
		  api: "=svyApi",
		  handlers: "=svyHandlers"
      },
      controller: function($scope, $element, $attrs) {
    	  
    	  
    	  var rows = $scope.model.foundset.viewPort.rows,
		  columns = $scope.model.columns
		  
		  for (var i=1; i<rows.length; i+=1)
			  for (j=0; j<columns.length; j+=1)
				  console.log(columns[j].dataprovider[i])
      },
      templateUrl: 'hvgrid/Grid/Grid.html'
    };
  })