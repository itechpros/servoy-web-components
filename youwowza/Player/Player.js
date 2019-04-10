angular.module('youwowzaPlayer',['servoy']).directive('youwowzaPlayer', function($sce) {
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
			prevURL = '',
			isFF = ~navigator.userAgent.toLowerCase().indexOf('firefox')

		function destroyPlayer() {
			if ($('#videoplayer').children().length) {
				isFF && wp && wp.removeOnCompleted()
				wp && wp.finish()
				wp && wp.destroy()
				$('#videoplayer').find('div').remove()
				$('#videoplayer').find('iframe').remove()
			}
		}
		
		$scope.api.destroy = function(){
			destroyPlayer()
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
			setTimeout(function() {
				!wp && !isYoutube() && startPlayer()
			}, 2500)
			$('<div>', {id:'wowzaplayer'}).appendTo($('#videoplayer'))
			wp = WowzaPlayer.create('wowzaplayer', {
				'license': $scope.model.license,
				'sourceURL': $scope.model.sourceURL,
				'autoPlay': !preventAutoplay && true || false,
				'debugLevel':'OFF' 
			})
			assignHandlers()
			isFF && wp.onCompleted(function() {
				if (wp.getCurrentState() === 4)
					startWP(true)
			})
		}
		
		function startYoutube() {
			$('<iframe>',{
				frameborder:0,
				allowfullscreen:true,
				src:$sce.trustAsResourceUrl($scope.model.sourceURL)
			}).appendTo($('#videoplayer'))
		}

		function isYoutube() {
			return ~$scope.model.sourceURL.indexOf('youtube.com')
		}

		function startPlayer() {
			destroyPlayer()
			prevURL = $scope.model.sourceURL
			if (isYoutube()) startYoutube()
			else startWP()
		}
		
		$scope.$watch('model.sourceURL', function() {
			if (!latch) {
				latch = true
				$scope.model.sourceURL && startPlayer()
				setTimeout(function() {
					latch = false
					if (prevURL !== $scope.model.sourceURL && $scope.model.sourceURL)
						startPlayer()
				}, 500)
			}
		})

		$scope.$on('$destroy', function() {
			destroyPlayer()
		})
	},
	templateUrl: 'youwowza/Player/Player.html'
	};
})