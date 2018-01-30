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
              columns = $scope.model.columns,
              container = $('#hvgrid'),
              row, column
          
          for (var i=0; i<rows.length; i+=1) {
              row = document.createElement('div')
              $(row).addClass('row')
              $(container).append(row)
              for (j=0; j<columns.length; j+=1) {
                  column = document.createElement('div')
                  $(column).addClass('col')
                  $(column).html(columns[j].dataprovider[i])
                  $(row).append(column)
              }
          }
          
          $scope.hasNext = function() {
              return $scope.model.foundset &&
                     ($scope.model.currentPage < Math.ceil($scope.model.foundset.serverSize / $scope.model.pageSize) || $scope.model.foundset.hasMoreRows)
          }
  		  $scope.hasPagination = function() {
  			  console.log('has pagination')
			  return $scope.model.pageSize && $scope.model.foundset && ($scope.model.foundset.serverSize > $scope.model.pageSize || $scope.model.foundset.hasMoreRows);
		  }

      },
      templateUrl: 'hvgrid/Grid/Grid.html'
    };
  })