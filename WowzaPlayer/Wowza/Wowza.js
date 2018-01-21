angular.module('wowzaplayerWowza',['servoy']).directive('wowzaplayerWowza', function() {  
    return {
      restrict: 'E',
      scope: {
          api: '=svyApi',
          model: '=svyModel',handlers: "=svyHandlers"
      },
      controller: function($scope, $element, $attrs) {

          var wp =  WowzaPlayer.create('wowzaplayer', {
              'license': $scope.model.license,
              'sourceURL': $scope.model.sourceURL
          })
                    
          $scope.api.finish = function(){
              wp.finish()
              return true
          }
          $scope.api.mute = function(isMuted) {
              wp.mute(isMuted)
              return true
          }
          $scope.api.pause = function() {
              wp.pause()
              return true              
          }
          $scope.api.play = function() {
              wp.play()
              return true              
          }
          $scope.api.seek = function(newTimeMS) {
              wp.seek(newTimeMS)
              return true              
          }
          $scope.api.setVolume = function(newVolume) {
              wp.setVolume(newVolume)
              return true              
          }
          
          wp.onPlay($scope.handlers.onPlay(event))
          
      },
      templateUrl: 'wowzaplayer/Wowza/Wowza.html'
    };
  })