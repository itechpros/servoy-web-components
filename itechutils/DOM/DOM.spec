{
	"name": "itechutils-DOM",
	"displayName": "DOM",
	"version": 1,
 	"definition": "itechutils/DOM/DOM.js",
	"libraries": [],
	"model":
	{
 	},
 	"api":
 	{
	    "setViewport":
      {
         "parameters":
          [
             {
               "name":"content",
               "type":"string"
            }
         ]
      },
      "autoSetViewport":
      {
         "parameters":
          [
         ]
      },
       "setVisibility":
      {
         "parameters":
          [
          	{
               "name":"elementSelector",
               "type":"string"
            },
            {
               "name":"visible",
               "type":"boolean"
            }
         ]
      },
       "togglClass":
      {
         "parameters":
          [
          	{
               "name":"elementSelector",
               "type":"string"
            },
            {
               "name":"className",
               "type":"string"
            }
         ]
      },
      "getOuterHeight": {},
      "setTitle":
      {
         "parameters":
          [
          	{
               "name":"title",
               "type":"string"
            }
         ]
      }
 	}
}