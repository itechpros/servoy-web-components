{
    "name": "dateinput",
    "displayName": "Date Input",
    "version": 1,
    "definition": "dateinput/DateInput/DateInput.js",
    "libraries": [
        {
	      "name": "bootstrap.min.css",
	      "version": "1",
	      "mimetype": "text/css",
	      "url": "dateinput/DateInput/lib/css/bootstrap.min.css"
	    },
        {
	      "name": "bootstrap-datepicker3.min.css",
	      "version": "1",
	      "mimetype": "text/css",
	      "url": "dateinput/DateInput/lib/css/bootstrap-datepicker3.min.css"
	    },
	    {
	      "name": "bootstrap-datepicker.min.js",
	      "version": "1",
	      "mimetype": "text/javascript",
	      "url": "dateinput/DateInput/lib/js/bootstrap-datepicker.min.js"
	    },
	    {
	      "name": "moment.js",
	      "version": "1",
	      "mimetype": "text/javascript",
	      "url": "dateinput/DateInput/lib/moment.js"
	    }
	],
  	"model": {
        "format" : {"type" :"string", "default": "dd/mm/yy" },
        "date" : {"type" :"string" }
    }
}