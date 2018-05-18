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