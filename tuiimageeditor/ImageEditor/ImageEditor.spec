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
        "callback": { "type": "function" },
        "menuItems": { "type": "item[]" },
        "options": { "type": "object" },
        "skin": { "type": "string" }
    },
    "types":
    {
        "item":
         {
             "align": { "type": "string" },
             "horizontal": { "type": "boolean" },
             "href": { "type": "string" },
             "icon": { "type": "string" },
             "id": { "type": "string" },
             "items": { "type": "item[]" },
             "type": { "type": "string",
                       "default": "item",
                       "values": [
                                   {"item":"item"},
                                   {"brand":"brand"},
                                   {"logotype":"logotype"},
                                   {"grid":"grid"},
                                   {"list":"list"},
                                   {"panel":"panel"},
                                   {"panelHalf":"panelHalf"},
                                   {"panelQuarter":"panelQuarter"},
                                   {"text":"text"},
                                   {"button":"button"},
                                   {"search":"search"}                                   
                                 ]
                     },
             "value": { "type": "string" }
         }
    },
    "api":
    {
        "toggleOffCanvas":
        {
            "returns": "boolean"
        },
        "toggleSearch":
        {
            "returns": "boolean"
        }
    },
    "handlers":
       {
           "onInit": "function",
           "onLandscape": "function",
           "onPortrait": "function",
           "onShowOffCanvas": "function",
           "onHideOffCanvas": "function",
           "onSearch": "function"
       }
}