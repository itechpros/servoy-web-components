{
	"name": "introjs",
	"displayName": "introjs",
	"version": 1,
 	"definition": "introjs/introjs/introjs.js",
	"libraries": [
		{ 
			"name": "introjs.css",
			"version": "0.0.1",
			"url":"introjs/introjs/lib/introjs.css", 
			"mimetype":"text/css"
		},
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
 	"api":
 	{
 	  "clear": {},
 	  "goToStepNumber": {
         "parameters":
          [
          	{
               "name":"step",
               "type":"int"
            }
         ]
      },
      "hideHint": {
         "parameters":
          [
          	{
               "name":"hint",
               "type":"int"
            }
         ]
      },
	  "hideHints": {},
 	  "setOptions": {
         "parameters":
          [
          	{
               "name":"options",
               "type":"object"
            }
         ]
      },
      "showHint": {
         "parameters":
          [
          	{
               "name":"hint",
               "type":"int"
            }
         ]
      },
      "showHints": {},
	  "start": {},
	  "setTheme": {
         "parameters":
          [
          	{
               "name":"theme",
               "type":"string"
            }
         ]
      }
 	}
}