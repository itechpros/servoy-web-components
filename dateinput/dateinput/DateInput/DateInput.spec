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
        "displayFormat": {"type" :"string", "default": "dd/mm/yy" },
        "inputFormat": {"type" :"string", "values": [
        	{ "DD/MM/YY": "DD/MM/YY" },
        	{ "DD/MM/YYYY": "DD/MM/YYYY" },
        	{ "MM/DD/YY": "MM/DD/YY" },
        	{ "MM/DD/YYYY": "MM/DD/YYYY" }
        ], "default": "DD/MM/YY" },
        "dataProviderID": {
        	"type" :"dataprovider",
        	"pushToServer": "allow",
        	"ondatachange": { "onchange":"onDataChange" }
        },
        "cutoffNextYear": { "type": "boolean", "default": true },
        "entryTemplate": { "type": "boolean", "default": true },
        "tabSeq" : {"type" :"tabseq", "tags": { "scope" :"design" }},
        "placeholderText" : "tagstring",
     	"toolTipText" : "tagstring",
     	"border": "border",
     	"background": "color",
     	"foreground": "color",
     	"backgroundPicker": "color",
     	"foregroundPicker": "color"
    },
    "handlers": {
    	"onDataChange": "function",
    	"onFocusGained": "function",
    	"onFocusLost": "function"
    }
}