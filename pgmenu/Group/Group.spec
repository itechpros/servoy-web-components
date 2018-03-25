{
	"name": "pgmenu-Group",
	"displayName": "Group",
	"version": 1,
	"definition": "pgmenu/Group/Group.js",
	"libraries": [],
	"model":
	{
		"group":{ "type": "int" },
		"items":{"type":"item[]", "droppable":true}
	},
	"types":
	{
		"item":
		{
			"label":{"type":"string"},
			"callback": { "type": "function" }
		}
	}
}