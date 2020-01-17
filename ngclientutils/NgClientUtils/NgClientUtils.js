angular.module('NgClientUtils',['servoy'])
.factory("NgClientUtils",function($services) 
{
	var Elements = {}
	var scope = $services.getServiceScope('NgClientUtils');
	return {
		executeClientSideJS: function (jsToExecute, callback, callbackParameters) {
			(function() {
				eval.call(window, jsToExecute);
				if (callback !== null && callback !== undefined) {
					if (callbackParameters === null || callbackParameters === undefined || callbackParameters.length == 0) {
						$window.executeInlineScript(callback.formname, callback.script, []);
					} else {
						var evaulatedParameters = [];
						for (var callbackParameterIndex = 0; callbackParameterIndex < callbackParameters.length; callbackParameterIndex++) {
							evaulatedParameters.push(eval(callbackParameters[callbackParameterIndex]));
						}
						$window.executeInlineScript(callback.formname, callback.script, evaulatedParameters);
					}
				}
			}());
		},
		addCssReference: function (cssFilePath) {
			var linkElement = $("<link>", {
				rel: "stylesheet",
				type: "text/css",
				href: cssFilePath
			});
			linkElement.appendTo("head");
		},
		addJsReference: function (jsFilePath) {
			var scriptElement = $("<script>", {
				src: jsFilePath
			});
			scriptElement.appendTo("head");
		},
		generateCallbackScript: function (callback, callbackParameters) {
			var callbackFormName;
			if (callback.formname === null)
				callbackFormName = "null";
			else if (callback.formname === undefined)
				callbackFormName = "undefined";
			else
				callbackFormName = "'" + callback.formname + "'";
			return "$window.executeInlineScript(" + callbackFormName + ", '" + callback.script + "', [" + callbackParameters.join(",") + "]);";
		},
		addCallback: function (callback, callbackParameters) {	
			var callbackFormName;
			if (callback.formname === null)
				callbackFormName = "null";
			else if (callback.formname === undefined)
				callbackFormName = "undefined";
			else
				callbackFormName = callback.formname
			return 'window.executeInlineScript(\'' + callbackFormName + '\', \'' + callback.script + '\', [' + (callbackParameters || []).join(',') + '])'
		},
		getElementMarkupId: function (element) {
			return element
		},
		removeJsReference: function (jsFilePath) {
			var scripts = document.getElementsByTagName('script')
			for (var a = 0, an = scripts.length; a < an; a += 1)
				scripts[a] &&
				scripts[a].getAttribute('src') &&
				~scripts[a].getAttribute('src').indexOf(jsFilePath) &&
				scripts[a].parentNode.removeChild(scripts[a])
		},
		setRendered: function (element) {
			return null
		},
		setExtraCssClass: function (element, classAttribute) {
			var classes = document.getElementById(element).className || ''
			document.getElementById(element).className = classes + (classes && ' ' || '') + classAttribute
			if (!(element in Elements))
				Elements[element] = classes
				
		},
		removeExtraCssClass: function (element) {
			Elements[element] && (document.getElementById(element).className = Elements[element])		
		}

	}
})