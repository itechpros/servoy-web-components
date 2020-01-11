{
	"name": "ngclientutils-NgClientUtils",
	"displayName": "NgClientUtils",
	"version": 1,
 	"definition": "ngclientutils/NgClientUtils/NgClientUtils.js",
	"libraries": [],
	"api":
	{
 		"getBrowserWidth": {
 			"parameters": [],
 			"returns": "int"
		},
		"getBrowserHeight": {
			"parameters": [],
			"returns": "int"
		},
		"setClipboardContents": {
			"parameters": [
				{"name": "elementName", "type": "string"}
			]
		},
		"trackCaretPosition": {
			"delayUntilFormLoads": true,
			"parameters": [
				{"name": "textboxSelector", "type": "string"}
			]
		},
		"getStoredCaretPosition": {
			"parameters": [
				{"name": "textboxSelector", "type": "string"}
			],
			"returns": "int"
		},
		"bindClientSideEvent": {
			"parameters": [
				{"name": "jQuerySelector", "type": "string"},
				{"name": "eventType", "type": "string"},
				{"name": "serverSideFunction", "type": "function"},
				{"name": "serverSideFunctionArgs", "type": "[]object"},
				{"name": "clearExistingListeners", "type": "boolean"}
			]
		},
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
		}
 	}
 }