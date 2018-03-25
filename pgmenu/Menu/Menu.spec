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
    	}
	
	],
	"model":
	{
		"groups": { "type":"group[]", "droppable":true},
		"menuItems": { "type": "item[]" }
	},
	"types":
	{
		"group": { "label":{"type":"string"} },
		"item":
		 {
		     "label": { "type": "string"},
		     "callback": { "type": "function" },
		     "items": { "type": "item[]" }
		 }
	},
	"api":
	{
	    "initMenu": { "returns": "boolean", "parameters": [ {"name": "items", "type": "item[]"} ] }
	}
}