angular.module('notificationswidgetNotificationsWidget',['servoy']).directive('notificationswidgetNotificationsWidget', function() {  
  return {
    restrict: 'E',
      scope: {
        api: "=svyApi",
        model: '=svyModel'
      },
    controller: function($scope, $element, $attrs) {
      window[$attrs.name] = new jsWidget_Notify({
        dom: svyGetDom($attrs.name),
        model: $scope.model,
        api: {
          setItems: function(_items){window[$attrs.name].refreshNotifications(_items, new Date())}
        }
      })
      $scope.api=window[$attrs.name].svy.api
    },
    templateUrl: 'notificationswidget/NotificationsWidget/NotificationsWidget.html'
  }
})