angular.module('itechutilsCookies',['servoy'])
.factory("itechutilsCookies",function($services) 
{
	var scope = $services.getServiceScope('itechutilsCookies');
	return {
		 setCookie: function(name, value, expires){
			  if(!expires)
				  expires = 365;
			  Cookies.set(name, value, { expires: expires });
		  },
		  getCookie: function(name){
			  return Cookies.get(name);
		  },
	}
})
.run(function($rootScope,$services)
{

})