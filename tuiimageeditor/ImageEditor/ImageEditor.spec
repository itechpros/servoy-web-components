{
    "name": "image-editor",
    "displayName": "TUI Image Editor",
    "version": 1,
    "definition": "tuiimageeditor/ImageEditor/ImageEditor.js",
    "api":{
    	"getBytes": {
    		"returns": "object"
    	}
    },
    "model":
    {
        "image": { "type": "image" },
        "saveFile": { "type": "function" },
        "preventDownload": { "type": "boolean" }
    },
    "types":
    {
        "image":
         {
             "url": { "type": "string" },
             "name": { "type": "string" }
         }
    }
}