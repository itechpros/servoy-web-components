# PrintJS
## NG Service for PrintJS http://printjs.crabbly.com

Basic Usage:

```javascript
plugins.printjs.print('http://localhost:8080/path/mydoc.pdf','pdf')
```

Suggested Usage:
```javascript
//Store your docs to be printed in the location of plugins.file.getDefaultUploadLocation()
var file = plugins.file.convertToRemoteJSFile("/mydoc.pdf");
var url = plugins.file.getUrlForRemoteFile(file);
plugins.printjs.print(url,'pdf')
```

## License

All source code in the repository is licensed under a dual license.  To use these components and services in your commercial or corporate internal projects, please contact sales@itechpros.com for licensing costs and information.

 * For non-commercial and open public uses: Open Software License 3.0 (https://opensource.org/licenses/OSL-3.0)
 * For commercial or non-public / in-house uses: contact sales@itechpros.com for licensing costs and information

&copy; iTech Professionals, Inc. 
http://itechpros.com
