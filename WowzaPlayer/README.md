# Wowza
## Web Component for Wowza Player


Website of component library:  
https://www.wowza.com/docs/wowza-player-javascript-api-overview#onload


Component Properties:
- license: license string
- sourceURL: location of media file

API:
- finish()
- mute(boolean)
- pause()
- play()
- seek(int)
- setVolume(0-100)
- getCurrentState()
- getCurrentTime()
- getDuration()
- getVolume()
- isLive()
- isMuted()
- isPlaying()

Event handlers and respective "remove" methods:
- onLoad, removeOnLoad
- onReady, removeOnReady
- onBitrateChanged, removeOnBitrateChanged
- onStats, removeOnStats
- onPlayheadTime, removeOnPlayheadTime
- onError, removeOnError
- onStateChanged, removeOnStateChanged
- onVolume, removeOnVolume
- onMetadata, removeOnMetaData
- onPlay, removeOnPlay
- onPause, removeOnPause
- onResume, removeOnResume
- onStop, removeOnStop
- onCompleted, removeOnCompleted
- onSeek, removeOnSeek


## License

All source code in the repository is licensed under a dual license.  To use these components and services in your commercial or corporate internal projects, please contact sales@itechpros.com for licensing costs and information.

 * For non-commercial and open public uses: Open Software License 3.0 (https://opensource.org/licenses/OSL-3.0)
 * For commercial or non-public / in-house uses: contact sales@itechpros.com for licensing costs and information

&copy; iTech Professionals, Inc. 
http://itechpros.com
