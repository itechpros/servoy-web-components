{
	"name": "NgClientUtils",
	"displayName": "NgClientUtils",
	"version": 1,
 	"definition": "ngclientutils/NgClientUtils/NgClientUtils.js",
	"libraries": [],
	"api":
	{
		"executeClientSideJS": {
			"parameters": [
				{"name": "jsToExecute", "type": "string"},
				{"name": "callback", "type": "function", "optional": true},
				{"name": "callbackParameters", "type": "string[]", "optional": true}
			]
		},
		"addCssReference": {
			"parameters": [
				{"name": "cssFilePath", "type": "string"}
			]
		},
		"addJsReference": {
			"parameters": [
				{"name": "jsFilePath", "type": "string"}
			]
		},
		"generateCallbackScript": {
			"parameters": [
				{"name": "callback", "type": "function"},
				{"name": "callbackParameters", "type": "string[]"}
			],
			"returns": "string"
		},
		"addCallback": {
			"parameters": [
				{"name": "callback", "type": "function"},
				{"name": "callbackParameters", "type": "string[]", "optional": true}
			],
			"returns": "string"
		},
		"getElementMarkupId": {
			"parameters": [
				{"name": "element", "type": "runtimecomponent"}
			],
			"returns": "string"
		},
		"removeJsReference": {
			"parameters": [
				{"name": "jsFilePath", "type": "string"}
			]
		},
		"setRendered": {
			"parameters": [
				{"name": "element", "type": "runtimecomponent"}
			],
			"returns": "string"
		},
		"setExtraCssClass": {
			"parameters": [
				{"name": "element", "type": "runtimecomponent"},
				{"name": "classAttribute", "type": "string"}
			]
		},
		"removeExtraCssClass": {
			"parameters": [
				{"name": "element", "type": "runtimecomponent"}
			]
		}
 	}
 }