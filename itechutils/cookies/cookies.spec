{
	"name": "itechutils-cookies",
	"displayName": "cookies",
	"version": 1,
 	"definition": "itechutils/cookies/cookies.js",
	"libraries": [
		{
			"name":"js-cookie", 
			"version":"2.1.2", 
			"url":"itechutils/lib/js-cookie.js", 
			"mimetype":"text/javascript"
		}
	],
	"model":
	{
 	},
 	"api":
 	{
	   	 "setCookie":
      {
         "parameters":
          [
          	{
               "name":"name",
               "type":"string"
            },
            {
               "name":"value",
               "type":"object"
            },
            {
            	"optional":true,
            	"name":"expireInDays",
                "type":"int"
            }
         ]
      },
      "getCookie":
      {
      	"returns" : "object",
         "parameters":
          [
          	{
               "name":"name",
               "type":"string"
            }
         ]
      }
 	}
}