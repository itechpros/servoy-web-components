{
	"name": "hvgrid-Grid",
	"displayName": "Grid",
	"version": 1,
	"definition": "hvgrid/Grid/Grid.js",
	"model":
	{
		"columns": { "type": "column[]", "droppable": true },
		"currentPage": { "type": "int", "default": 1, "tags": { "scope": "runtime" } },
		"fsLoadSize": { "type": "int", "default": 50, "tags": { "scope": "runtime" } },
		"foundset": { "type": "foundset","default" : {"foundsetSelector":""} , "initialPreferredViewPortSize": 50, "sendSelectionViewportInitially": true },
		"rowsPerPage": { "type": "int", "default": 10 },
		"columnsPerRow": { "type": "int", "default": 3 },
		"template": { "type": "dataprovider" },
		"columnCssClass": { "type": "string", "default": "col" },
		"rowCssClass": { "type": "string", "default": "row" },
		"onCellClick": { "type": "function" },
		"overflow": { "type": "string", "values": [{"scroll":"scroll"},{"hidden": "hidden"},{"auto": "auto"},{"visible": "visible"}], "default": "scroll" }
	},
	"types": {
		"column": {
			"dataprovider": { "type": "dataprovider", "forFoundset": "foundset"}
		}
    }
}