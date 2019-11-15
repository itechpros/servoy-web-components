{
	"name": "itechutils-onReady",
	"displayName": "onReady",
	"version": 1,
 	"definition": "itechutils/onReady/onReady.js",
	"libraries": [],
	"model":
	{
    	"onReadyCallback": { "type": "function"}
 	},
 	"api":
 	{
	   	"onReady": 
	   	{
	    	"parameters":
	    	[
		    	{
					"name":"elementSelector",
					"type":"string",
					"optional": true
				}
			]
		}
 	}
}