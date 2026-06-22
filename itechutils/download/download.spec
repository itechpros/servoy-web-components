{
	"name": "itechutils-download",
	"displayName": "download",
	"version": 1,
 	"definition": "itechutils/download/download.js",
    "ng2Config": {
        "packageName": "itechutils",
        "serviceName": "downloadService",
        "entryPoint": "dist"
    },
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