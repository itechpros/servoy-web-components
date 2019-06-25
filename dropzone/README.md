# Dropzone Drag-n-Drop File Uploader
## Web Component for Servoy NG Client


Website of component library:  
https://www.dropzonejs.com/



Component properties:
- file: binding to form variable of type MEDIA
- option: configuration options (see dropzonejs "configuration" section)
Events:
- onDataChange: Servoy callback function to receive uploaded files


set options using:
elements.<uploader>.options = {option:value}
 - note: options of type function are not supported in current ver.


Example use in Servoy Form:
```
// Create a MEDIA var, bind it to "file" property of Dropzone
var m = solutionModel.newGlobalVariable('globals', 'gMedia', JSVariable.MEDIA);

// Create string var with same name as MEDIA var + _filename
// and _mimetype to store file info
var m_filename = '';
var m_mimetype = '';

// create a callback function and bind it to onDataChange event of Dropzone
function cbk(a, b, c){
    // a - old value, b - new value, c - event
    application.output(m) // 
    application.output(m_filename)
    application.output(m_mimetype)
    application.output(plugins.file.writeFile(plugins.file.createFile('<file path>'), b))
}

```




## License

All source code in the repository is licensed under a dual license.  To use these components and services in your commercial or corporate internal projects, please contact sales@itechpros.com for licensing costs and information.

 * For non-commercial and open public uses: Open Software License 3.0 (https://opensource.org/licenses/OSL-3.0)
 * For commercial or non-public / in-house uses: contact sales@itechpros.com for licensing costs and information

&copy; iTech Professionals, Inc. 
http://itechpros.com
