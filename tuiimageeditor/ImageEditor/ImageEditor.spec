{
    "name": "image-editor",
    "displayName": "TUI Image Editor",
    "version": 1,
    "definition": "tuiimageeditor/ImageEditor/ImageEditor.js",
    "libraries": [],
	"handlers": {
		"saveFileH": {
			"parameters": [
				{
					"name": "file",
					"type": "string"
				}
			]
		}
	},
    "model":
    {
        "image": { "type": "image" },
        "saveFile": { "type": "function" }
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