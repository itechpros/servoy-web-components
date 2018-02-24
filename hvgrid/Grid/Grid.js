angular.module('hvgridGrid',['servoy']).directive('hvgridGrid', function() {  
    return {
      restrict: 'E',
      scope: {
          model: '=svyModel'
      },
      controller: function($scope, $element, $attrs, $window) {
          
          var fsRows = $scope.model.columnsPerRow * $scope.model.rowsPerPage
          
          $scope.model.fsLoadSize = $scope.model.fsLoadSize > fsRows ? $scope.model.fsLoadSize : fsRows
            
          var attrVal = function(attr, row) {
              if (typeof attr === 'number')
                  return $scope.model.columns[attr].dataprovider[row]
              else return attr
          }
          
          var makeTemplate = function(template, container, row) {
              var a,b,c
              for(a in template) {
                  if(template[a].constructor===Array) {
                      for (c=0; c<template[a].length; c+=1) {
                           makeTemplate(template[a][c],container,row)
                    }
                  }
                  else if (a === 'html')
                      $(container).html(attrVal(template[a], row))
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
                  else $(container).attr(a,attrVal(template[a], row))
              }
          }

          var showRows = function(start, end) {
              var container = $('#hvgrid'),
                  row, column, cell, i, j
              $(container).empty()
              end = end > $scope.model.foundset.viewPort.rows.length ? $scope.model.foundset.viewPort.rows.length : end
              for (i=start; i<end; i+=1) {
                  if (!((i - start) % $scope.model.columnsPerRow)) {
                      row = document.createElement('div')
                      $(row).addClass($scope.model.rowCssClass)
                      $(container).append(row)
                  }
                  column = document.createElement('div')
                  $(column).addClass($scope.model.columnCssClass)
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
                          $(column).append(cell)
                      }
              }
          }
                    
          $scope.hasNext = function() {
              return $scope.model.foundset &&
                     ($scope.model.currentPage < Math.ceil($scope.model.foundset.serverSize / ($scope.model.rowsPerPage * $scope.model.columnsPerRow)) || $scope.model.foundset.hasMoreRows)
          }

          $scope.hasPagination = function() {
              return $scope.model.rowsPerPage && $scope.model.foundset && ($scope.model.foundset.serverSize > ($scope.model.rowsPerPage * $scope.model.columnsPerRow) || $scope.model.foundset.hasMoreRows);
          }

          $scope.modifyPage = function(count) {       
              if ($scope.model.currentPage + count < 1 || (!$scope.hasNext() && count > 0))
                  return
              $scope.model.currentPage += count
              var loadSize = (count === -1 ? -1 : 1) * $scope.model.fsLoadSize,
                  keepRows = $scope.model.fsLoadSize * 1
              if (!$scope.model.foundset.viewPort.rows.length
                  || fsRows * ($scope.model.currentPage + 1) > ($scope.model.foundset.viewPort.startIndex + $scope.model.foundset.viewPort.size)
                  || $scope.model.foundset.viewPort.startIndex > ($scope.model.currentPage - 1) * fsRows) {
                 var promise = $scope.model.foundset.loadExtraRecordsAsync(loadSize, false)
                 promise.then(function() {
                     var start = ($scope.model.currentPage - 1) * fsRows,
                         pStart = start - $scope.model.foundset.viewPort.startIndex,
                         pEnd = $scope.model.currentPage * fsRows - $scope.model.foundset.viewPort.startIndex,
                         vpEndRow = $scope.model.foundset.viewPort.startIndex + $scope.model.foundset.viewPort.size
                     showRows(pStart, pEnd)
                     if ((pStart > keepRows && count === 1)
                         || (vpEndRow > start + keepRows && count === -1))
                         $scope.model.foundset.loadLessRecordsAsync(loadSize)

                 })
              }
              else showRows(($scope.model.currentPage - 1) * fsRows - $scope.model.foundset.viewPort.startIndex, $scope.model.currentPage * fsRows- $scope.model.foundset.viewPort.startIndex)
          }

          $scope.modifyPage(0)

      },
      templateUrl: 'hvgrid/Grid/Grid.html'
    };
  })