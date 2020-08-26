{
    "name": "image-editor",
    "displayName": "TUI Image Editor",
    "version": 1,
    "definition": "tuiimageeditor/ImageEditor/ImageEditor.js",
    "libraries": [
    	{
            "name": "tui-color-picker.css",
            "version": "1",
            "mimetype": "text/css",
            "url": "tuiimageeditor/ImageEditor/lib/resources/tui-color-picker.css"
        },
        {
            "name": "tui-image-editor.css",
            "version": "1",
            "mimetype": "text/css",
            "url": "tuiimageeditor/ImageEditor/lib/tui-image-editor.css"
        },
        {
            "name": "fabric.js",
            "version": "1",
            "mimetype": "text/javascript",
            "url": "tuiimageeditor/ImageEditor/lib/resources/fabric.js"
        },
        {
            "name": "tui-code-snippet.min.js",
            "version": "1",
            "mimetype": "text/javascript",
            "url": "tuiimageeditor/ImageEditor/lib/resources/tui-code-snippet.min.js"
        },
        {
            "name": "tui-color-picker.js",
            "version": "1",
            "mimetype": "text/javascript",
            "url": "tuiimageeditor/ImageEditor/lib/resources/tui-color-picker.js"
        },
        {
            "name": "FileSaver.min.js",
            "version": "1",
            "mimetype": "text/javascript",
            "url": "tuiimageeditor/ImageEditor/lib/resources/FileSaver.min.js"
        },
        {
            "name": "tui-image-editor.js",
            "version": "1",
            "mimetype": "text/javascript",
            "url": "tuiimageeditor/ImageEditor/lib/tui-image-editor.js"
        },
        {
            "name": "white-theme.js",
            "version": "1",
            "mimetype": "text/javascript",
            "url": "tuiimageeditor/ImageEditor/lib/js/theme/white-theme.js"
        },
        {
            "name": "black-theme.js",
            "version": "1",
            "mimetype": "text/javascript",
            "url": "tuiimageeditor/ImageEditor/lib/js/theme/black-theme.js"
        }
    ],
    "model":
    {
        "image": { "type": "image" },
        "skin": {
        	"type": "string",
        	"tags": { "scope": "design" },
        	"values": [
        		{ "white": "white" },
        		{ "black": "black" }
    		],
    		"default": "white"},
        "menuBar": {
        	"type": "string",
        	"tags": { "scope": "design" },
        	"values": [
        		{ "top": "top" },
        		{ "left": "left" },
        		{ "bottom": "bottom" },
        		{ "right": "right" }
    		],
    		"default": "bottom"
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