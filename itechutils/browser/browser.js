angular.module('itechutilsBrowser',['servoy'])
.factory("itechutilsBrowser",function($services) 
{
	var scope = $services.getServiceScope('itechutilsBrowser');
	var parser = new UAParser();
	return {
		  getBrowser: function(){
			 return parser.getBrowser()
		  },
		  getDevice: function(){
			  return parser.getDevice()
		  },
		  getEngine: function(){
			  return parser.getEngine()
		  },
		  getOS: function(){
			  return parser.getOS()
		  },
		  getCPU: function(){
			  return parser.getCPU()
		  },
		  getResult: function(){
			  return parser.getResult()
		  },
		  getUA: function(){
			  return parser.getUA()
		  },
		  setUA: function(uastring){
			  parser.setUA(uastring);
		  }
	}
})
.run(function($rootScope,$services)
{

})