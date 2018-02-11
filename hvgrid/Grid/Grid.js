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
          
    	  var stack=[],
		      count=0,
			  makeTemplate,
			  showRows,
              columns = $scope.model.columns
			  
		  makeTemplate = function(template,container, row) {
			  var a,b
		  	  for(a in template) {
		  		  if(template[a].constructor===Array) {
		  		      for (var c=0;c<template[a].length;c+=1) {
		  		    	   makeTemplate(template[a][c],container,row)
					  }
		  		  }
		  		  else if(typeof template[a]==='string')
		  			  if (a==='html') $(container).html(template[a])
		  			  else if (a==='columnAsName') $(container).html(template[a])
					  else $(container).attr(a,template[a])
		  		  else if(typeof template[a]==='number')
		  			  if (a==='html') $(container).html(template[a])
		  			  else if (a==='columnAsIndex') $(container).html(columns[template[a]].dataprovider[row])
					  else $(container).attr(a,template[a])
		  		  else { //if a===style
		  		      b=document.createElement(a)
		  		      $(container).append(b)
		  			  makeTemplate(template[a],b,row)
		  		  }
		      }
		  }
    	  
		  showRows = function(start, end) {
			  
          var rows = $scope.model.foundset.viewPort.rows,
              container = $('#hvgrid'),
              row, column,
              columnCssClass = $scope.model.columnCssClass || 'col',
			  rowCssClass = $scope.model.rowCssClass || 'row',
			  template = $scope.model.template,
			  onCellClick = $scope.model.onCellClick
		  $(container).empty()
	      end = end > $scope.model.foundset.viewPort.rows.length ? $scope.model.foundset.viewPort.rows.length : end
	    		  console.log(start,end,$scope.model.foundset.viewPort.rows)
          for (var i=start; i<end; i+=1) {
        	  var c = (i - start) % $scope.model.columnsPerRow
        	  if (!c) {
                  row = document.createElement('div')
                  $(row).addClass(rowCssClass)
                  $(container).append(row)
        	  }
              column = document.createElement('div')
              $(column).addClass(columnCssClass)
			  if (onCellClick)
				  $(column).click((
					  function(i) {
						  return function() {
							  $window.executeInlineScript(onCellClick.formName, onCellClick.script, [i])
						  }
					  })(i))//+pk
			  $(row).append(column)
        	  if (template)
				  makeTemplate(template, column, i)
			  else
                  for (var j=0; j<columns.length; j+=1) {
                	  //if (columns[j].showAs === 'html')
                          $(column).html($(column).html() + columns[j].dataprovider[i])
                  }
              
          }
          }
          showRows(0, $scope.model.columnsPerRow * $scope.model.pageSize)
          //$scope.api.init = function(template) {
        	//  $scope.model.template = template
          //}
          
          $scope.hasNext = function() {
              return $scope.model.foundset &&
                     ($scope.model.currentPage < Math.ceil($scope.model.foundset.serverSize / $scope.model.pageSize) || $scope.model.foundset.hasMoreRows)
          }
  		  $scope.hasPagination = function() {
  			  console.log('has pagination')
			  return $scope.model.pageSize && $scope.model.foundset && ($scope.model.foundset.serverSize > ($scope.model.pageSize * $scope.model.columnsPerRow) || $scope.model.foundset.hasMoreRows);
		  }
  		  $scope.modifyPage = function(count) {
  			  //console.log(currentPage)
  			  //if ()
			  $scope.model.currentPage += count
			  var rowsPerPage = $scope.model.columnsPerRow * $scope.model.pageSize
  			  showRows(($scope.model.currentPage - 1) * rowsPerPage, $scope.model.currentPage * rowsPerPage)
  		  }

      },
      templateUrl: 'hvgrid/Grid/Grid.html'
    };
  })