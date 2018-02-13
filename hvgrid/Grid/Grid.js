angular.module('hvgridGrid',['servoy']).directive('hvgridGrid', function() {  
    return {
      restrict: 'E',
      scope: {
          model: '=svyModel',
          svyServoyapi: "=",
          api: "=svyApi",
          handlers: "=svyHandlers"
      },
      controller: function($scope, $element, $attrs, $window) {
          
          var makeTemplate,
              fetchRows,
              showRows,
			  loadRecordsBatch = 100
              
          makeTemplate = function(template, container, row) {
              var a,b,c
                for(a in template) {
                    if(template[a].constructor===Array) {
                        for (c=0; c<template[a].length; c+=1) {
                             makeTemplate(template[a][c],container,row)
                      }
                    }
                    else if (a==='html') $(container).html(template[a])
                    else if (a==='columnAsName') $(container).html(template[a])
                  //  else if(typeof template[a]==='number')
                    //    if (a==='html') $(container).html(template[a])
                    else if (a==='columnAsIndex') $(container).html($scope.model.columns[template[a]].dataprovider[row])
                    //else $(container).attr(a,template[a])
                    else if (typeof template[a] === 'object') {
                    	if (a==='style')
                    		for (c in template[a])
                    			$(container).css(c, template[a][c])
                    	else {
                            b=document.createElement(a)
                            $(container).append(b)
                            makeTemplate(template[a],b,row)
                    	}
                    }
                    else $(container).attr(a,template[a])
              }
          }
          
          showRows = function(start, end) {
              
              var container = $('#hvgrid'),
                  row, column, cell, i, j,
                  columnCss = $scope.model.columnCssClass || 'col',
                  rowCss = $scope.model.rowCssClass || 'row',
                  template = $scope.model.template

              $(container).empty()
              end = end > $scope.model.foundset.viewPort.rows.length ? $scope.model.foundset.viewPort.rows.length : end
       
              for (i=start; i<end; i+=1) {
                  if (!((i - start) % $scope.model.columnsPerRow)) {
                      row = document.createElement('div')
                      $(row).addClass(rowCss)
                      $(container).append(row)
                  }
                  column = document.createElement('div')
                  $(column).addClass(columnCss)
                  if ($scope.model.onCellClick)
                      $(column).click((
                	        function(r) {
                	            return function() {
                	                $window.executeInlineScript($scope.model.onCellClick.formName,
                	                	                        $scope.model.onCellClick.script,
																[$scope.model.foundset.viewPort.rows[r]])
                                }
                            })(i))
                  $(row).append(column)
                  if ($scope.model.template)
                      makeTemplate($scope.model.template, column, i)
                  else
                      for (j=0; j<$scope.model.columns.length; j+=1) {
                    	  cell = document.createElement('div')
						  $(cell).html($scope.model.columns[j].dataprovider[i])
                    	   $(column).append(cell) //$(column).html($(column).html() + '<div>' + $scope.model.columns[j].dataprovider[i] + '</div>')
				      }
              }
          }
          
          fetchRows = function() {
              if ($scope.model.columnsPerRow * $scope.model.pageSize * ($scope.model.currentPage + 1) > ($scope.model.foundset.viewPort.startIndex + $scope.model.foundset.viewPort.size))
              {
            	  console.log('call')
              var p=$scope.model.foundset.loadExtraRecordsAsync(loadRecordsBatch, false)
              p.then(console.log('prom'))
			  console.log('end')}
          }
          
          $scope.hasNext = function() {
              return $scope.model.foundset &&
                     ($scope.model.currentPage < Math.ceil($scope.model.foundset.serverSize / ($scope.model.pageSize * $scope.model.columnsPerRow)) || $scope.model.foundset.hasMoreRows)
          }

          $scope.hasPagination = function() {
              return $scope.model.pageSize && $scope.model.foundset && ($scope.model.foundset.serverSize > ($scope.model.pageSize * $scope.model.columnsPerRow) || $scope.model.foundset.hasMoreRows);
          }

          $scope.modifyPage = function(count) {
        	  
              if ($scope.model.currentPage + count < 1 || (!$scope.hasNext() && count > 0))
            	  return
              $scope.model.currentPage += count
              var rowsPerPage = $scope.model.columnsPerRow * $scope.model.pageSize
              showRows(($scope.model.currentPage - 1) * rowsPerPage, $scope.model.currentPage * rowsPerPage)
              fetchRows()
//                console.log($scope.model.foundset.serverSize,$scope.model.foundset.viewPort.startIndex,$scope.model.foundset.viewPort.size)

          }

          $scope.modifyPage(0)

      },
      templateUrl: 'hvgrid/Grid/Grid.html'
    };
  })