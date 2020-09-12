function getImageBytes() {

    var dataURL = imageEditor.toDataURL();
    var blob

    blob = base64ToBlob(dataURL);
    return dataURL.replace(/^data:image\/(png|jpg);base64,/, '')

}



  function base64ToBlob(data) {
      var mimeString = '';
      var raw, uInt8Array, i, rawLength;

      raw = data.replace(/data:(image\/.+);base64,/, function(header, imageType) {
          mimeString = imageType;

          return '';
      });

      raw = atob(raw);
      rawLength = raw.length;
      uInt8Array = new Uint8Array(rawLength); // eslint-disable-line

      for (i = 0; i < rawLength; i += 1) {
          uInt8Array[i] = raw.charCodeAt(i);
      }

      return new Blob([uInt8Array], {type: mimeString});
  }


function getImageName() {
	
    var imageName = imageEditor.getImageName();
    var dataURL = imageEditor.toDataURL();
    var blob, type;

    
    blob = base64ToBlob(dataURL,type);
    type = blob.type.split('/')[1];
    
    if (imageName.split('.').pop() !== type) {
      imageName += '.' + type;
    }

    return imageName

}
