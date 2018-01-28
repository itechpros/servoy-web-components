{
    "name": "wowzaplayer-Wowza",
    "displayName": "Wowza",
    "version": 1,
    "definition": "wowzaplayer/Wowza/Wowza.js",
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
        "sourceURL" : {"type": "string", "default":""}
    },
    "api":
    {
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
           }
    }
}