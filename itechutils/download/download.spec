{
	"name": "itechutils-download",
	"displayName": "download",
	"version": 1,
 	"definition": "itechutils/download/download.js",
	"libraries": [
		{
			"name":"DownloadJS", 
			"version":"0.5.2",
			"url":"itechutils/lib/download.min.js", 
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