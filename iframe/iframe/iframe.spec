{
	"name": "iframe-iframe",
	"displayName": "iframe",
	"version": 1,
	"definition": "iframe/iframe/iframe.js",
	"libraries": [],
	"model":
	{
		"url": {"type": "string"},
        "frameBorder": {
            "type": "boolean",
            "default": false
        },
        "scrolling": {
            "type": "string",
            "default": "auto",
            "values": [
                "yes",
                "no",
                "auto"
            ]
        }
	}
}