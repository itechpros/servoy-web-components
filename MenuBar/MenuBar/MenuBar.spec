{
    "name": "menubar-Menu-Bar",
    "displayName": "MenuBar",
    "version": 1,
    "definition": "menubar/MenuBar/MenuBar.js",
    "libraries": [
        {
            "name": "navigation.css",
            "version": "1",
            "mimetype": "text/css",
            "url": "menubar/MenuBar/lib/css/navigation.css"
        },
        {
            "name": "ionicons.min.css",
            "version": "1",
            "mimetype": "text/css",
            "url": "menubar/MenuBar/ionicons-2.0.1/css/ionicons.min.css"
        },
        {
            "name": "navigation.js",
            "version": "1",
            "mimetype": "text/javascript",
            "url": "menubar/MenuBar/lib/js/navigation.js"
        }
    ],
    "model":
    {
        "callback": { "type": "function" },
        "menuItems": { "type": "item[]" },
        "brandText": { "type": "string" },
        "brandLogo": { "type": "string" }
    },
    "types":
    {
        "item":
         {
             "label": { "type": "string" },
             "id": { "type": "string" },
             "href": { "type": "string" },
             "right": { "type": "boolean" },
             "horizontal": { "type": "boolean" },
             "icon": { "type": "string" },
             "items": { "type": "item[]" },
             "panel": { "type": "string",
                        "values": [ {"off": ""},
                                    {"Full": "megamenu-panel"},
                                    {"Half": "megamenu-panel megamenu-panel-half"},
                                    {"Quarter": "megamenu-panel megamenu-panel-quarter"}
                                  ]
                      },
             "grid": { "type": "item[]" },
             "list": { "type": "listitem[]" }
         },
         "listitem": 
         {
             "title": { "type": "string" },
             "items": { "type": "item[]" }
         }
    },
    "api":
    {
        "setMenu": 
        {
            "returns": "boolean",
            "parameters":
                [
                    {
                        "name": "menu",
                        "type": "string"
                    },
                    {
                        "name":"options",
                        "type":"object",
                        "optional": true
                    }
                ]
        },
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
           "onShowOffCanvas": "function",
           "onHideOffCanvas": "function"
       }
}