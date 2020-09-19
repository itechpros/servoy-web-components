{
	"name": "introjs",
	"displayName": "introjs",
	"version": 1,
 	"definition": "introjs/introjs/introjs.js",
	"libraries": [
		{ 
			"name": "intro.min.js",
			"version": "0.0.1",
			"url":"introjs/introjs/lib/intro.min.js", 
			"mimetype":"text/javascript"
		},
		{ 
			"name": "ng-intro.component.js",
			"version": "0.0.1",
			"url":"introjs/introjs/lib/ng-intro.component.js", 
			"mimetype":"text/javascript"
		}
	],
	"model":
	{
 	},
 	"api":
 	{
	   	"downloadFile":
      {
         "parameters":
          [
          	{
               "name":"URL",
               "type":"string"
            }
         ]
      }
 	}
}