{
	"name": "hvgrid-Grid",
	"displayName": "Grid",
	"version": 1,
	"definition": "hvgrid/Grid/Grid.js",
	"libraries": [
	    {
            "name": "bootstrap.min.css",
            "version": "1",
            "mimetype": "text/css",
            "url": "hvgrid/Grid/bootstrap/css/bootstrap.min.css"
        }
	],
	"model":
	{
		"columns": { "type": "column[]", "droppable": true },
		"currentPage": { "type": "int", "default": 1, "tags": { "scope": "runtime" } },
		"foundset": { "type": "foundset","default" : {"foundsetSelector":""} , "initialPreferredViewPortSize": 100, "sendSelectionViewportInitially": true },
		"pageSize": { "type": "int", "default": 20 },
		"columnsPerRow": { "type": "int", "default": 3 },
		"template": { "type": "dataprovider" },
		"columnCssClass": { "type": "string", "default": "col" },
		"rowCssClass": { "type": "string", "default": "row" },
		"onCellClick": { "type": "function" }
	},
	"types": {
		"column": {
			"dataprovider": { "type": "dataprovider", "forFoundset": "foundset"}
		}
    }
}