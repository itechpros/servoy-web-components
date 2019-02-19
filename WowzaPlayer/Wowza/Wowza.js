angular.module('wowzaplayerWowza',['servoy']).directive('wowzaplayerWowza', function() {  
    return {
      restrict: 'E',
      scope: {
          api: '=svyApi',
          model: '=svyModel',
          handlers: '=svyHandlers'
      },
      controller: function($scope, $element, $attrs) {
          'use strict'
		var wp = null,
			latch = false,
			prevURL = ''

		function destroywp() {

//			try{
//console.log('CHLD:',$('#wowzawrapper').children().length)
	if($('#wowzawrapper').children().length){
//wp&&wp.removeOnCompleted()
			wp && wp.finish()
			wp && wp.destroy()
//wp=null
			$('#wowzawrapper').find('div').remove()
	}//else console.log('none')
//}catch(e){console.log(e)}
		}
		
		window.addEventListener('unload', function(event) {
console.log('unload')
			destroywp()
			$scope.model.sourceURL=null
		})
		
          $scope.api.destroy = function(){
              destroywp()
              return true
          }
          $scope.api.finish = function(){
              wp && wp.finish()
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
          
          function assignHandlers(){
          
	          var handlers = [
	              ['onLoad', 'removeOnLoad'],
	              ['onReady', 'removeOnReady'],
	              ['onBitrateChanged', 'removeOnBitrateChanged'],
	              ['onStats', 'removeOnStats'],
	              ['onPlayheadTime', 'removeOnPlayheadTime'],
	              ['onError', 'removeOnError'],
	              ['onStateChanged', 'removeOnStateChanged'],
	              ['onVolume', 'removeOnVolume'],
	              ['onMetadata', 'removeOnMetaData'],
	              ['onPlay', 'removeOnPlay'],
	              ['onPause', 'removeOnPause'],
	              ['onResume', 'removeOnResume'],
	              ['onStop', 'removeOnStop'],
	              ['onCompleted', 'removeOnCompleted'],
	              ['onSeek', 'removeOnSeek']],
	              fn = {}
	              
	          for (var i=0; i<handlers.length; i+=1) {
	
	              fn[handlers[i][0]] = (
	                  function(h) {                  
	                      return function(e) {
	                          $scope.handlers[h]()
	                      }
	                  })(handlers[i][0])
	              
	              $scope.api[handlers[i][1]] = (
	                  function(h, m) { 
	                      return function() {
	                          wp[m](fn[h])
	                          return true
	                      }
	                  })(handlers[i][0],handlers[i][1])
	              
	              if ($scope.handlers[handlers[i][0]])
	                  wp[handlers[i][0]](fn[handlers[i][0]])
	
	          }
          }
		function startWP(preventAutoplay){
//if($('#ytbeid').length)return
//console.log($scope.model.sourceURL,$('#ytbeid').length)
			destroywp()
			latch = true
			setTimeout(function() {
				latch = false
				if (prevURL !== $scope.model.sourceURL && $scope.model.sourceURL/* && $('#wowzawrapper').children().length*/)
					startWP()
			}, 500)
			setTimeout(function() {
console.log('restart 1500',wp)
				!wp /*&& $('#wowzawrapper').children().length*/ && startWP()
			}, 5500)
			//if(!$('#wowzawrapper').children().length)
				$('<div>', {id:'wowzaplayer'}).appendTo($('#wowzawrapper'))
//try{
			wp = WowzaPlayer.create('wowzaplayer', {
				'license': $scope.model.license,
				'sourceURL': $scope.model.sourceURL,
				'autoPlay': !preventAutoplay && true || false,
				'debugLevel':'OFF' 
			})
			assignHandlers()
//}catch(e){console.log('WP',e)
//destroywp()
//}
			if (~navigator.userAgent.toLowerCase().indexOf('firefox'))
				wp.onCompleted(function() {
					if (~navigator.userAgent.toLowerCase().indexOf('firefox') && wp.getCurrentState() === 4)

						startWP(true)
				})
			prevURL = $scope.model.sourceURL
		}

		$scope.$watch('model.sourceURL', function() {
			!latch && $scope.model.sourceURL && startWP()
		})

          $scope.$on('$destroy', function() {
              destroywp()
          })
      },
      templateUrl: 'wowzaplayer/Wowza/Wowza.html'
    };
  })