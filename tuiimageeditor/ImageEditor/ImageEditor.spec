{
    "name": "image-editor",
    "displayName": "TUI Image Editor",
    "version": 1,
    "definition": "tuiimageeditor/ImageEditor/ImageEditor.js",
    "api":{
    	"getImageBytes": {
    		"returns": "string"
    	},
 
"addIcon": {
  "parameters": [
    {"name": "type", "type": "string" },
    {"name": "options", "type": "object" },
    {"name": "callback", "type": "function", "optional": true}
  ]
},
"addImageObject": {
  "parameters": [
    {"name": "imgUrl", "type": "string" },
    {"name": "callback", "type": "function", "optional": true}
  ]
},
"addShape": {
  "parameters": [
    {"name": "type", "type": "string" },
    {"name": "options", "type": "object" },
    {"name": "callback", "type": "function", "optional": true}
  ]
},
"addText": {
  "parameters": [
    {"name": "text", "type": "string" },
    {"name": "options", "type": "object" },
    {"name": "callback", "type": "function", "optional": true}
  ]
},
"applyFilter": {
  "parameters": [
    {"name": "type", "type": "string" },
    {"name": "options", "type": "object" },
    {"name": "isSilent", "type": "boolean" },
    {"name": "callback", "type": "function", "optional": true}
  ]
},
"changeCursor": {
  "parameters": [
    {"name": "cursorType", "type": "string" }
  ]
},
"changeIconColor": {
  "parameters": [
    {"name": "id", "type": "int" },
    {"name": "color", "type": "string" },
    {"name": "callback", "type": "function", "optional": true}
  ]
},
"changeSelectableAll": {
  "parameters": [
    {"name": "selectable", "type": "boolean" },
    {"name": "callback", "type": "function", "optional": true}
  ]
},
"changeShape": {
  "parameters": [
    {"name": "id", "type": "int" },
    {"name": "options", "type": "object" },
    {"name": "isSilent", "type": "boolean" },
    {"name": "callback", "type": "function", "optional": true}
  ]
},
"changeText": {
  "parameters": [
    {"name": "id", "type": "int" },
    {"name": "text", "type": "string" },
    {"name": "callback", "type": "function", "optional": true}
  ]
},
"changeTextStyle": {
  "parameters": [
    {"name": "id", "type": "int" },
    {"name": "styleObj", "type": "object" },
    {"name": "isSilent", "type": "boolean" },
    {"name": "callback", "type": "function", "optional": true}
  ]
},
"clearObjects": {
  "parameters": [
    {"name": "callback", "type": "function", "optional": true}
  ]
},
"clearRedoStack": {},
"clearUndoStack": {},
"crop": {
  "parameters": [
    {"name": "rect", "type": "object" },
    {"name": "callback", "type": "function", "optional": true}
  ]
},
"deactivateAll": {},
"destroy": {},
"discardSelection": {},
"flipX": {},
"flipY": {},
"getCanvasSize": {
  "returns": "object"
},
"getCropzoneRect": {
  "returns": "object"
},
"getDrawingMode": {
  "returns": "string"
},
"getImageName": {
  "returns": "string"
},
"getObjectPosition": {
  "parameters": [
    {"name": "id", "type": "int" },
    {"name": "originX", "type": "string" },
    {"name": "originY", "type": "string" }
  ],
  "returns": "object"
},
"getObjectProperties": {
  "parameters": [
    {"name": "id", "type": "int" },
    {"name": "keys", "type": "string[]" }
  ],
  "returns": "object"
},
"hasFilter": {
  "parameters": [
    {"name": "type", "type": "string" }
  ],
  "returns": "boolean"
},
"isEmptyRedoStack": {
  "returns": "boolean"
},
"isEmptyUndoStack": {
  "returns": "boolean"
},
"loadImageFromURL": {
  "parameters": [
    {"name": "url", "type": "string" },
    {"name": "imageName", "type": "string" },
    {"name": "callback", "type": "function", "optional": true}
  ]
},
"redo": {
  "parameters": [
    {"name": "callback", "type": "function", "optional": true}
  ]
},
"registerIcons": {
  "parameters": [
    {"name": "infos", "type": "undefined" }
  ]
},
"removeActiveObject": {},
"removeFilter": {
  "parameters": [
    {"name": "type", "type": "string" },
    {"name": "callback", "type": "function", "optional": true}
  ]
},
"removeObject": {
  "parameters": [
    {"name": "id", "type": "int" },
    {"name": "callback", "type": "function", "optional": true}
  ]
},
"resetFlip": {
  "parameters": [
    {"name": "callback", "type": "function", "optional": true}
  ]
},
"resizeCanvasDimension": {
  "parameters": [
    {"name": "dimension", "type": "object" },
    {"name": "callback", "type": "function", "optional": true}
  ]
},
"rotate": {
  "parameters": [
    {"name": "angle", "type": "int" },
    {"name": "isSilent", "type": "boolean" },
    {"name": "callback", "type": "function", "optional": true}
  ]
},
"setAngle": {
  "parameters": [
    {"name": "angle", "type": "int" },
    {"name": "isSilent", "type": "boolean" },
    {"name": "callback", "type": "function", "optional": true}
  ]
},
"setBrush": {
  "parameters": [
    {"name": "option", "type": "object" }
  ]
},
"setCropzoneRect": {
  "parameters": [
    {"name": "mode", "type": "double" }
  ]
},
"setDrawingShape": {
  "parameters": [
    {"name": "type", "type": "string" },
    {"name": "options", "type": "object" }
  ]
},
"setObjectPosition": {
  "parameters": [
    {"name": "id", "type": "int" },
    {"name": "posInfo", "type": "object" },
    {"name": "callback", "type": "function", "optional": true}
  ]
},
"setObjectProperties": {
  "parameters": [
    {"name": "id", "type": "int" },
    {"name": "keyValue", "type": "object" },
    {"name": "callback", "type": "function", "optional": true}
  ]
},
"setObjectPropertiesQuietly": {
  "parameters": [
    {"name": "id", "type": "int" },
    {"name": "keyValue", "type": "object" }
  ]
},
"startDrawingMode": {
  "parameters": [
    {"name": "mode", "type": "string" },
    {"name": "option", "type": "object" }
  ],
  "returns": "boolean"
},
"stopDrawingMode": {},
"toDataURL": {
  "parameters": [
    {"name": "options", "type": "object" }
  ],
  "returns": "string"
},
"undo": {
  "parameters": [
    {"name": "callback", "type": "function", "optional": true}
  ]
}

    },
    "model": {
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