{
	"name": "notificationswidget-Notifications-Widget",
	"displayName": "NotificationsWidget",
	"version": 1,
	"definition": "notificationswidget/NotificationsWidget/NotificationsWidget.js",
	"libraries": [
		{
			"name": "ntfy.css",
			"version": "1",
			"mimetype": "text/css",
			"url": "notificationswidget/NotificationsWidget/lib/ntfy.css"
		},
		{
			"name": "mustache.min.js",
			"version": "1",
			"mimetype": "text/javascript",
			"url": "notificationswidget/NotificationsWidget/lib/mustache.min.js"
		},
		{
			"name": "ntfy.js",
			"version": "1",
			"mimetype": "text/javascript",
			"url": "notificationswidget/NotificationsWidget/lib/ntfy.js"
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
		"horizontalAlignment": { "type": "string", "tags": { "scope": "design" }, "values": [{ "LEFT": "left" }, { "RIGHT": "right" }], "default": "left"},
		"verticalAlignment": { "type": "string", "tags": { "scope": "design" }, "values": [{ "TOP": "top" }, { "BOTTOM": "bottom" }], "default": "top"},
		"fixedPosition": {"type":"boolean" }
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