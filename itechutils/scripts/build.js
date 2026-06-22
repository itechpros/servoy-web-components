var AdmZip = require('adm-zip');

// creating archives
var zip = new AdmZip();

zip.addLocalFolder("./onReady/","/onReady/");
zip.addLocalFolder("./download/","/download/");
zip.addLocalFolder("./cookies/","/cookies/");
zip.addLocalFolder("./browser/","/browser/");
zip.addLocalFolder("./DOM/","/DOM/");
zip.addLocalFolder("./META-INF/", "/META-INF/");
zip.addLocalFolder("./lib/", "/lib/");
zip.addLocalFolder("./dist/", "/dist/");
// add here all ng1 components/services 
//zip.addLocalFolder("./mycomponent/", "/mycomponent/");

zip.writeZip("itechutils.zip");