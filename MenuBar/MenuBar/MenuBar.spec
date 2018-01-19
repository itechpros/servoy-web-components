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
		"menu": "string"
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
                    }
                ]
        }
		
	}
	
	
}