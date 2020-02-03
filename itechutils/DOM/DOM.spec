{
	"name": "itechutils-DOM",
	"displayName": "DOM",
	"version": 1,
 	"definition": "itechutils/DOM/DOM.js",
	"libraries": [],
	"model":
	{
	    "enableTabsSelector":
	    {
      		"type": "string",
      		"tags": {"scope": "private"}
		},
		"enableTabsFn":
	    {
      		"type": "function",
      		"tags": {"scope": "private"}
		}
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
      },
      "enableTabs":
      {
          "parameters":
          [
              {
                 "name":"selector",
                 "type":"string"
              }
          ]
      }
 	}
}