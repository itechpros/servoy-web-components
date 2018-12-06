/**
 * Callback method for when solution is opened.
 * When deeplinking into solutions, the argument part of the deeplink url will be passed in as the first argument
 * All query parameters + the argument of the deeplink url will be passed in as the second argument
 * For more information on deeplinking, see the chapters on the different Clients in the Deployment Guide.
 *
 * @param {String} arg startup argument part of the deeplink url with which the Client was started
 * @param {Object<Array<String>>} queryParams all query parameters of the deeplink url with which the Client was started
 *
 * @properties={typeid:24,uuid:"5F109703-0847-4466-8DA5-B5B337538E0C"}
 */
function onSolutionOpen(arg, queryParams) {
	plugins.keyboardeventsservicesEnterKey.enterKeyHitForSearch = scopes.utilsNG.enterKeyHitForSearch
	plugins.keyboardeventsservicesEnterKey.addEnterListener()
}

/**
 * Callback method for when solution is closed, force boolean argument tells if this is a force (not stoppable) close or not.
 *
 * @param {Boolean} force if false then solution close can be stopped by returning false
 *
 * @return {Boolean}
 *
 * @properties={typeid:24,uuid:"431227C1-C66D-4EFE-BAEC-0A0507B4BD22"}
 */
function onSolutionClose(force) {
	plugins.keyboardeventsservicesEnterKey.removeEnterListener()
	return true
}
