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
    		
    		  var containers = document.getElementsByName(_name)
    		  console.log(_name,containers.length)
    		  for (var a = 0; a< containers.length;a++)console.dir(containers[a])
    		  //if (containers.length > 1) container = null
    		  //else container = containers[0]
    		  return containers[0]
    		}

    		
    	window[name] = new jsWidget_Notify({
    		dom: svyGetDom(name),
			name: name,
    		model: $scope.model,
    		api: {
    			setItems: function(_items){ window[name].refreshNotifications(_items, new Date())}
    		}
    	})
    	//console.log(document.getElementsByName(name).count)
    	//console.dir(svyGetDom(name))
    	$scope.api = window[name].svy.api
    },
    templateUrl: 'notificationswidget/NotificationsWidget/NotificationsWidget.html'
  }
})