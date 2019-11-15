angular.module('itechutilsDownload',['servoy'])
.factory("itechutilsDownload",function($services, $window) 
{
	var scope = $services.getServiceScope('itechutilsDownload');
	return {
		 downloadFile : function(url){
			  window.downloadFile(url);
		  }
	}
})
.run(function($rootScope,$services)
{

})