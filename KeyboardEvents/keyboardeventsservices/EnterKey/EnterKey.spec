{
	"name": "keyboardeventsservicesEnterKey",
	"displayName": "EnterKey",
	"version": 1,
 	"definition": "keyboardeventsservices/EnterKey/EnterKey.js",
	"libraries": [],
	"model":
	{
    	"text": "string",
    	"enterKeyHitForSearch":"function"
 	},
 	"api":
 	{
	   	"helloworld": 
	   	{
	    	"parameters":
	    	[
		    	{
					"name":"text",
					"type":"string"
				}
			]
		},
		"addEnterListener":{		
	    	"parameters":
	    	[	    	
	    	]			
		},
		"removeEnterListener":{
	    	"parameters":
	    	[	    	
	    	]			
		}
 	}
}