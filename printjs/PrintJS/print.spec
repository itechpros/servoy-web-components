{
	"name": "printjs",
	"displayName": "PrintJS",
	"version": 1,
	"icon": "printjs/PrintJS/icon.png",
 	"definition": "printjs/PrintJS/print.js",
	"libraries": [
		{
	      "name": "printjs.min.css",
	      "version": "1",
	      "mimetype": "text/css",
	      "url": "printjs/PrintJS/lib/print.min.css"
	    },
	    {
	      "name": "printjs.min.js",
	      "version": "1",
	      "mimetype": "text/javascript",
	      "url": "printjs/PrintJS/lib/print.min.js"
	    }
	],
 	"api":
 	{
	   	"print": 
	   	{
	    	"parameters":
	    	[
		    	{
					"name":"printable",
					"type":"string"
				},
				{
					"name":"type",
					"type":"string"
				}
			]
		},
		"printJS":
	   	{
	    	"parameters":
	    	[
		    	{
					"name":"json",
					"type":"object"
				}
			]
		}
	}
}