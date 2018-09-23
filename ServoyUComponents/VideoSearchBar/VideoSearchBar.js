angular.module('servoyucomponentsVideoSearchBar',['servoy']).directive('servoyucomponentsVideoSearchBar', function() {  
    return {
      restrict: 'E',
      scope: {
    	  model: '=svyModel'
      },
      controller: function($scope, $element, $attrs, $window) {
          
          var getFilterValue = function(){
                  return {
                      text: '%' + $('#video_text_search').val() + '%',
                      category: $('.selection1').children().eq(2).find(":selected").val() / 1,
                      series: $('.selection1').children().eq(1).find(":selected").val() / 1
                  }
              },
              filter = getFilterValue()
          
          $scope.filter = function() {
              var flt = getFilterValue(),
                  f
              for (f in filter)
                  if (filter[f] === flt[f])
                      delete flt[f]
                  else
                      filter[f] = flt[f]
              if ($scope.model.filter && Object.keys(flt).length)
                  $window.executeInlineScript
                  (
                      $scope.model.filter.formname,
                      $scope.model.filter.script,
                      [flt]
                  )
          }
          
          function popSelect(s){
              var sel = {
                  category: 2,
                  series: 1
              }
              $('.selection1').children().eq(sel[s]).find("option:gt(0)").remove()
              $.each($scope.model[s], function (i, item) {
                  $('.selection1').children().eq(sel[s]).append($('<option>', item))
              })
          }
          
          $scope.$watch('model.category', function() {
              popSelect('category')
          })
          $scope.$watch('model.series', function() {
              popSelect('series')
          })
          
        $(document).ready(function () {
        
            
            // Iterate over each select element
            $('select').each(function () {
        
                // Cache the number of options
                var $this = $(this),
                        numberOfOptions = $(this).children('option').length;
        
                // Hides the select element
                $this.addClass('s-hidden');
        
                // Wrap the select element in a div
                $this.wrap('<div class="select"></div>');
        
                // Insert a styled div to sit over the top of the hidden select element
                $this.after('<div class="styledSelect"></div>');
        
                // Cache the styled div
                var $styledSelect = $this.next('div.styledSelect');
        
                // Show the first select option in the styled div
                $styledSelect.text($this.children('option').eq(0).text());
        
                // Insert an unordered list after the styled div and also cache the list
                var $list = $('<ul />', {
                    'class': 'options'
                }).insertAfter($styledSelect);
        
                // Insert a list item into the unordered list for each select option
                for (var i = 0; i < numberOfOptions; i++) {
                    $('<li />', {
                        text: $this.children('option').eq(i).text(),
                        rel: $this.children('option').eq(i).val()
                    }).appendTo($list);
                }
        
                // Cache the list items
                var $listItems = $list.children('li');
        
                // Show the unordered list when the styled div is clicked (also hides it if the div is clicked again)
                $styledSelect.click(function (e) {
                    e.stopPropagation();
                    $('div.styledSelect.active').each(function () {
                        $(this).removeClass('active').next('ul.options').hide();
                    });
                    $(this).toggleClass('active').next('ul.options').toggle();
                });
        
                // Hides the unordered list when a list item is clicked and updates the styled div to show the selected list item
                // Updates the select element to have the value of the equivalent option
                $listItems.click(function (e) {
                    e.stopPropagation();
                    $styledSelect.text($(this).text()).removeClass('active');
                    $this.val($(this).attr('rel'));
                    $list.hide();
                    $scope.filter()
                    /* alert($this.val()); Uncomment this for demonstration! */
                });
        
                // Hides the unordered list when clicking outside of it
                $(document).click(function () {
                    $styledSelect.removeClass('active');
                    $list.hide();
                });
        
            });
        });
      },
      templateUrl: 'servoyucomponents/VideoSearchBar/VideoSearchBar.html'
    };
  })