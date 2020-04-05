angular.module('notificationswidgetNotificationsWidget',['servoy']).directive('notificationswidgetNotificationsWidget', function() {  
  return {
    restrict: 'E',
      scope: {
        api: "=svyApi",
        model: '=svyModel'
      },
    controller: function($scope, $element, $attrs) {
    	var name = $attrs.name;
    	function svyGetDom(_name){
    		var container = document.getElementsByName(_name)
    		return container && container[0] || null
    	}
    	window[name] = new jsWidget_Notify({
    		dom: svyGetDom(name),
			name: name,
    		model: $scope.model,
    		api: {
    			setItems: function(_items){ window[name].refreshNotifications(_items, new Date())}
    		}
    	})
    	$scope.api = window[name].svy.api
    },
    templateUrl: 'notificationswidget/NotificationsWidget/NotificationsWidget.html'
  }
})