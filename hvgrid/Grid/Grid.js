angular.module('hvgridGrid',['servoy']).directive('hvgridGrid', function() {  
    return {
      restrict: 'E',
      scope: {
          model: '=svyModel',
          api: '=svyApi',
          svyServoyapi: '='
      },
      controller: function($scope, $element, $attrs, $window) {
          
          var container = $('#hvgrid'),
              fsRows = $scope.model.columnsPerRow * $scope.model.rowsPerPage,
              promise
            
          var attrVal = function(attr, row) {
              if (typeof attr === 'number')
                  return $scope.model.columns[attr].dataprovider[row]
              return attr
          }
          
          var getTemplate = function(template, row) {
              var a,
                  b,
                  c,
                  el
			  for (a in template) break
			  el = document.createElement(a)
              for (b in template[a])
                  if (template[a][b].constructor === Array)
                      for (c=0; c<template[a][b].length; c+=1)
                           el.appendChild(getTemplate(template[a][b][c],row))
                  else if(typeof template[a][b] === 'object')
                      for (c in template[a][b])
                          el.style[c] = template[a][b][c]
                  else
                	  el[b] = attrVal(template[a][b], row)  
              return el
          }

          var showRows = function(start, end) {
              var row,
                  column,
                  cell,
                  i,
                  j
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
                                                                [r+1])
                                }
                            })(i))
                  $(row).append(column)
                  if ($scope.model.template)
                      column.appendChild(getTemplate($scope.model.template, i))
                  else
                      for (j=0; j<$scope.model.columns.length; j+=1) {
                          cell = document.createElement('div')
                          $(cell).html($scope.model.columns[j].dataprovider[i])
                          $(column).append(cell)
                      }
              }
              $(container).find('#hvgrid-spinner').hide()
          }
                    
          $scope.hasNext = function() {
              return $scope.model.foundset &&
                     ($scope.model.currentPage < Math.ceil($scope.model.foundset.serverSize / ($scope.model.rowsPerPage * $scope.model.columnsPerRow)) || $scope.model.foundset.hasMoreRows)
          }

          $scope.hasPagination = function() {
              return $scope.model.rowsPerPage && $scope.model.foundset && ($scope.model.foundset.serverSize > ($scope.model.rowsPerPage * $scope.model.columnsPerRow) || $scope.model.foundset.hasMoreRows);
          }

          $scope.modifyPage = function(count) {

              if (promise || ($scope.model.currentPage === 1 && count === -1) || (!$scope.hasNext() && count === 1))
                  return

              $(container).find('*').not('#hvgrid-spinner').find('*').remove()
              $(container).find('#hvgrid-spinner').show()

              $scope.model.fsLoadSize = $scope.model.fsLoadSize > fsRows ? $scope.model.fsLoadSize : fsRows
                      
              if (count === 0)
                  $scope.model.currentPage = 1
              $scope.model.currentPage += count
              var loadSize = (count === -1 ? -1 : 1) * $scope.model.fsLoadSize,
                  keepRows = $scope.model.fsLoadSize * 1
              if (!$scope.model.foundset.viewPort.rows.length
                  || fsRows * ($scope.model.currentPage + 1) > ($scope.model.foundset.viewPort.startIndex + $scope.model.foundset.viewPort.size)
                  || $scope.model.foundset.viewPort.startIndex > ($scope.model.currentPage - 1) * fsRows) {
                 promise = $scope.model.foundset.loadExtraRecordsAsync(loadSize, false)
                 promise.then(function() {
                     promise = null
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

          $scope.showEditorHint = function() {
              return $scope.svyServoyapi && $scope.svyServoyapi.isInDesigner()
          }


          $scope.api.refresh = function(){
              $scope.modifyPage(0)
          }
          
          if ($scope.model.columns && $scope.model.columns.length)
              $scope.modifyPage(0)

      },
      templateUrl: 'hvgrid/Grid/Grid.html'
    };
  })