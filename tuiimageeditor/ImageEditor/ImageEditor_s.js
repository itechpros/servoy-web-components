$scope.getImageBytes = function(base64) {
	
	   var b64 = new Packages.org.apache.commons.codec.binary.Base64();
	   /** @type {Array<byte>} */
	   var bytes = b64.decode(base64.replace(/^data:image\/(png|jpg);base64,/, ''));
	   console.log(bytes)
	   return bytes
	
}