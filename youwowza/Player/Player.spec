{
    "name": "youwowza-Player",
    "displayName": "Player",
    "version": 1,
    "definition": "youwowza/Player/Player.js",
    "libraries": [
       {
            "name": "wowzaplayer.min.js",
            "version": "1",
            "mimetype": "text/javascript",
            "url": "http://player.wowza.com/player/latest/wowzaplayer.min.js"
        }
    ],
    "model":
    {
        "license" : {"type": "string", "default":""},
        "sourceURL" : {"type": "string", "default":""},
        "visible": "visible"
    },
    "api":
    {
       "destroy":
           {
               "returns":"boolean"
           },
       "finish":
           {
               "returns":"boolean"
           },
        "mute":
           {
               "returns":"boolean",
               "parameters":
               [
                   {
                       "name": "isMuted",
                       "type": "boolean"
                   }
               ]
           },
        "pause":
           {
               "returns":"boolean"
           },
        "play":
           {
               "returns":"boolean"
           },
        "seek":
           {
               "returns":"boolean",
               "parameters":
               [
                   {
                       "name": "newTimeMs",
                       "type": "int"
                   }
               ]
           },
        "setVolume":
           {
               "returns":"boolean",
               "parameters":
               [
                   {
                       "name": "newVolume",
                       "type": "int"
                   }
               ]
           },
        "getCurrentState":
           {
               "returns":"int"
           },
        "getCurrentTime":
           {
               "returns":"int"
           },
        "getDuration":
           {
               "returns":"int"
           },
        "getVolume":
           {
               "returns":"int"
           },
        "isLive":
           {
               "returns":"boolean"
           },
        "isMuted":
           {
               "returns":"boolean"
           },
        "isPlaying":
           {
               "returns":"boolean"
           },           
        "removeOnLoad":
           {
               "returns":"boolean"
           },
        "removeOnReady":
           {
               "returns":"boolean"
           },
        "removeOnBitrateChanged":
           {
               "returns":"boolean"
           },
        "removeOnStats":
           {
               "returns":"boolean"
           },
        "removeOnPlayheadTime":
           {
               "returns":"boolean"
           },
        "removeOnError":
           {
               "returns":"boolean"
           },
        "removeOnStateChanged":
           {
               "returns":"boolean"
           },
        "removeOnVolume":
           {
               "returns":"boolean"
           },
        "removeOnMetaData":
           {
               "returns":"boolean"
           },
        "removeOnPlay":
           {
               "returns":"boolean"
           },
        "removeOnPause":
           {
               "returns":"boolean"
           },
        "removeOnResume":
           {
               "returns":"boolean"
           },
        "removeOnStop":
           {
               "returns":"boolean"
           },
        "removeOnCompleted":
           {
               "returns":"boolean"
           },
        "removeOnSeek":
           {
               "returns":"boolean"
           }
    },
    "handlers":
    {
        "onLoad": "function",
        "onReady": "function",
        "onBitrateChanged": "function",
        "onStats": "function",
        "onPlayheadTime": "function",
        "onError": "function",
        "onStateChanged": "function",
        "onVolume": "function",
        "onMetadata": "function",
        "onPlay": "function",
        "onPause": "function",
        "onResume": "function",
        "onStop": "function",
        "onCompleted": "function",
        "onSeek": "function"
    }    
}