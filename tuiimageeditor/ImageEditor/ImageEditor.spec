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
    	},
    	"crop": {
    		"parameters": [
    			{
    				"name": "rect",
    				"type": "object"
				}
    		],
    		"returns": "string"
    	}
    },
    "model":
    {
        "image": { "type": "image" },
        "template": {
        	"type": "string",
        	"tags": { "scope": "design" },
        	"values": [{ "Default Black": "default" }, { "Default White": "default.white" }, { "Basic": "basic" }, { "Mobile": "mobile" }],
        	"default": "default"
        }
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