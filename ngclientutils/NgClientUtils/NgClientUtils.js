angular.module('NgClientUtils',['servoy'])
.factory("NgClientUtils",function($services) 
{
	var scope = $services.getServiceScope('NgClientUtils');
	return {
		getBrowserWidth: function() {
			return $(window).width();
		},
		getBrowserHeight: function() {
			return $(window).height();
		},
		setClipboardContents: function(elementName) {
			var copyText = document.querySelector("[name='" + elementName + "']");
			copyText.select();
			document.execCommand("copy");
		},
		trackCaretPosition: function (textboxSelector) {
			function updateCaretPosition() {
				$(textboxSelector).attr("data-caret-position", $(textboxSelector).caret().begin);
			}
			$(textboxSelector).click(updateCaretPosition);
			$(textboxSelector).keydown(updateCaretPosition);
		},
		getStoredCaretPosition: function (textboxSelector) {
			var caretPosition = $(textboxSelector).attr("data-caret-position");
			if ([null, undefined].indexOf(caretPosition) > -1)
				return null;
			else
				return parseInt(caretPosition, 10);
		},
		bindClientSideEvent: function (jQuerySelector, eventType, serverSideFunction, serverSideFunctionArgs, clearExistingListeners) {
			var target = $(jQuerySelector);
			if (clearExistingListeners)
				target.off(eventType);
			target.on(eventType, function() {
				$window.executeInlineScript(serverSideFunction.formname, serverSideFunction.script, serverSideFunctionArgs);
			})
		},
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
		}
	}
})
//.run(function($rootScope,$services){})