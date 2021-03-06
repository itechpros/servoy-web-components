{
    "name": "pgmenu-Menu",
    "displayName": "Menu",
    "version": 1,
    "definition": "pgmenu/Menu/Menu.js",
    "libraries": [
        {
            "name": "style.css",
            "version": "1",
            "mimetype": "text/css",
            "url": "pgmenu/Menu/lib/style.css"
        },
        {
            "name": "browser.css",
            "version": "1",
            "mimetype": "text/css",
            "url": "pgmenu/Menu/lib/browser.css"
        },
        {
            "name": "pgadmin.css",
            "version": "1",
            "mimetype": "text/css",
            "url": "pgmenu/Menu/lib/pgadmin.css"
        },
        {
            "name": "underscore.js",
            "version": "1",
            "mimetype": "text/javascript",
            "url": "pgmenu/Menu/lib/underscore.js"
        },
        {
            "name": "underscore.string.js",
            "version": "1",
            "mimetype": "text/javascript",
            "url": "pgmenu/Menu/lib/underscore.string.js"
        },
        {
            "name": "pgadmin.js",
            "version": "1",
            "mimetype": "text/javascript",
            "url": "pgmenu/Menu/lib/pgadmin.js"
        },
        {
            "name": "pgmenu.js",
            "version": "1",
            "mimetype": "text/javascript",
            "url": "pgmenu/Menu/lib/pgmenu.js"
        },
        {
            "name": "error.js",
            "version": "1",
            "mimetype": "text/javascript",
            "url": "pgmenu/Menu/lib/error.js"
        },
        {
            "name": "hotkeys.min.js",
            "version": "1",
            "mimetype": "text/javascript",
            "url": "pgmenu/Menu/lib/hotkeys.min.js"
        }
    ],
    "model":
    {
        "callback": { "type": "function" },
        "menuItems": { "type": "item[]" }
    },
    "types":
    {
        "item":
         {
             "label": { "type": "string" },
             "id": { "type": "string" },
             "icon": { "type": "string" },
             "items": { "type": "item[]" },
             "combo": { "type": "string" }
         }
    }
}