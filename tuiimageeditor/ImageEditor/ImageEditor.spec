{
    "name": "image-editor",
    "displayName": "TUI Image Editor",
    "version": 1,
    "definition": "tuiimageeditor/ImageEditor/ImageEditor.js",
    "api":{
    	"getImageBytes": {
    		"returns": "string"
    	},
    	"getImageName": {
    		"returns": "string"
    	}
    },
    "model":
    {
        "image": { "type": "image" }
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