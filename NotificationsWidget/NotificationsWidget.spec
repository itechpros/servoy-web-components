{
	"name": "extracomponents-Notifications-Widget",
	"displayName": "NotificationsWidget",
	"version": 1,
	"definition": "extracomponents/NotificationsWidget/NotificationsWidget.js",
	"libraries": [
		{
			"name": "ntfy.css",
			"version": "1",
			"mimetype": "text/css",
			"url": "extracomponents/NotificationsWidget/lib/ntfy.css"
		},
		{
			"name": "mustache.min.js",
			"version": "1",
			"mimetype": "text/javascript",
			"url": "extracomponents/NotificationsWidget/lib/mustache.min.js"
		},
		{
			"name": "ntfy.js",
			"version": "1",
			"mimetype": "text/javascript",
			"url": "extracomponents/NotificationsWidget/lib/ntfy.js"
		}

	],
	"model":
	{
		"items" : "notifications[]",
		"maxheight":{
			"type":"int"
		},
		"onRemove":"function",
		"size": { "type": "dimension", "default": { "width": 40, "height": 42 } },
		"horizontalAlignment": { "type": "int", "tags": { "scope": "design" }, "values": [{ "LEFT": 0 }, { "RIGHT": 1 }] },
		"verticalAlignment": { "type": "int", "tags": { "scope": "design" }, "values": [{ "TOP": 0 }, { "BOTTOM": 1 }] }
	},
	"types":{
		"notifications": {
			"id": "int",
			"title": "string",
			"date": "string"
		}
	},
	"api":
	{
		"setItems":
		{
			"returns": "boolean",
			"parameters": [
				{
					"name":"items",
					"type":"object[]"
				}
			]
		}
	}
}