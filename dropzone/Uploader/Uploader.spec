{
	"name": "dropzone-Uploader",
	"displayName": "Uploader",
	"version": 1,
	"definition": "dropzone/Uploader/Uploader.js",
	"libraries": [
		{
			"name": "dropzone.js",
			"version": "1",
			"mimetype": "text/javascript",
			"url": "dropzone/Uploader/lib/dropzone.js"
		},
		{
			"name": "dropzone.css",
			"version": "1",
			"mimetype": "text/css",
			"url": "dropzone/Uploader/lib/dropzone.css"
		}
	],
	"model": {
		"options": "object",
		"file": {
		    "type": "dataprovider",
		    "pushToServer": "allow",
		    "ondatachange": { "onchange": "onDataChangeMethodID", "callback": "onDataChangeCallback" }
		}
	},
	"handlers": {
		"onDataChangeMethodID" : {
		    "returns": "boolean", 
		    "parameters": [
		        {
		            "name":"oldValue",
		            "type":"${dataproviderType}"
		        },
		        {
		            "name":"newValue",
		            "type":"${dataproviderType}"
		        },
		        {
		            "name":"event",
		            "type":"JSEvent"
		        }
		    ]
		}
	}	
}