(c) Itechpros
http://itechpros.com

Notifications Widget:
   Bell icon notifications
   Model:
     items:     Places notifications defined in Servoy form editor into widget
                - type: notifications[] {
			"id": "int",
			"title": "string",
			"date": "string"
		 }
     position:  Position of notifications popup
     maxheight: Height limit of notificatios popup in pixels
     onRemoveItem(id): callback for remove item event
   API:
     setItems([notifications]): Updates content of the widget
     removeItem(id): removes item
   
