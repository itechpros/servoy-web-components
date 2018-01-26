angular.module('wowzaplayerWowza',['servoy']).directive('wowzaplayerWowza', function() {  
    return {
      restrict: 'E',
      scope: {
          api: '=svyApi',
          model: '=svyModel'
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
          $scope.api.getCurrentState = function() {
              return wp.getCurrentState()
          }
          $scope.api.getCurrentTime = function() {
              return wp.getCurrentTime()
          }
          $scope.api.getDuration = function() {
              return wp.getDuration()
          }
          $scope.api.getVolume = function() {
              return wp.getVolume()
          }
          $scope.api.isLive = function() {
              return wp.isLive()
          }
          $scope.api.isMuted = function() {
              return wp.isMuted()
          }
          $scope.api.isPlaying = function() {
              return wp.isPlaying()
          }
      },
      templateUrl: 'wowzaplayer/Wowza/Wowza.html'
    };
  })