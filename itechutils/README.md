# iTech Utils
## Many utils such as browser info, download, cookies, DOM manipulation, and onReady

All feattures are available under plugins.itechutils*

## Browser Example Usages:
plugins.itechutilsBrowser allows you to get browser information.  It is is based on https://github.com/faisalman/ua-parser-js

Get Browser Info:
```javascript
//each call returns a JSON object.  See UAParser docs for details
plugins.itechutilsBrowser..getBrowser().name
```
Many more functions available.  See code completion.

## Cookie Example Usages:
plugins.itechutilsCookies allows you to get and set browser cookies.  It is is based on https://github.com/js-cookie/js-cookie
```javascript
//get a cookie
plugins.itechutilsCookies.getCookie(name)
//set a cookie
plugins.itechutilsCookies.setCookie(name,value,expireInDays)
```

## DOM Example Usages:
plugins.itechutilsDOM has various DOM manipulation functions, like getting the height of elements, viewport settings, visiblity, etc.

## Download Example Usages:
plugins.itechutilsDownload allows you to send a download link to the browser automatic download handling
```javascript
//each call returns a JSON object.  See UAParser docs for details
plugins.itechutilsDownload.downloadFile(URL)
```

## onReady Example Usages:
plugins.itechutilsOnReady allows you to hook Servoy events into the browsers onReady event.  This is useful if you need to manipulate some DOM elements but need to wait until after the full page has loaded.  Its also usefull to get a reliable event to fire when the browser first shows or refreshes.
```javascript
//setup the handler
plugins.itechutilsOnReady.onReadyCallback = yourServoyCallbackHandlerFunction
//init the service
plugins.itechutilsOnReady.onReady()
```


## License

All source code in the repository is licensed under a dual license.  To use these components and services in your commercial or corporate internal projects, please contact sales@itechpros.com for licensing costs and information.

 * For non-commercial and open public uses: Open Software License 3.0 (https://opensource.org/licenses/OSL-3.0)
 * For commercial or non-public / in-house uses: contact sales@itechpros.com for licensing costs and information

&copy; iTech Professionals, Inc. 
http://itechpros.com
