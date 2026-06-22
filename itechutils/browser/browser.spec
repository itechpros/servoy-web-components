{
	"name": "itechutils-browser",
	"displayName": "browser",
	"version": 1,
 	"definition": "itechutils/browser/browser.js",
    "ng2Config": {
        "packageName": "itechutils",
        "serviceName": "browserService",
        "entryPoint": "dist"
    },
	"libraries": [
		{
			"name":"UAParser", 
			"version":"0.7.20",
			"url":"itechutils/lib/ua-parser.min.js", 
			"mimetype":"text/javascript"
		}
	],
	"model":
	{
    	
 	},
 	"api":
 	{
	   	"getBrowser": 
	   	{
	    	"parameters": []
		},
		"getDevice": 
	   	{
	    	"parameters": []
		},
		"getEngine": 
	   	{
	    	"parameters": []
		},
		"getOS": 
	   	{
	    	"parameters": []
		},
		"getCPU": 
	   	{
	    	"parameters": []
		},
		"getResult": 
	   	{
	    	"parameters": []
		},
		"getUA": 
	   	{
	    	"parameters": []
		},
		"setUA": 
	   	{
	    	"parameters": [{
               "name":"uastring",
               "type":"string"
            }]
		}
 	}
}