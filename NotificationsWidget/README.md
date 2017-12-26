# Bell Icon Notifications Widget
## Web Component for Servoy NG Client


Component Properties:

- items: List of notifications placed into the widget
  - type: notifications[], custom type array of objects
  - default: -none-
```
// definition of type "notifictions[]"
[
   {  
       "id": "int",
       "title": "string",
       "date": "string"
   }
]
```
- horizontalAlignment: H pos of popup
  - type: string
  - default: RIGHT
- verticalAlignment: V pos of poput
  - type: string
  - default: TOP
- maxheight: Max height of notificatios popup in pixels
  - type: integer
  - default: 0 (unlimited height)
- onRemoveItem(id): callback for remove item event
  - type: function
  - default: -none-
  
  
API:  

- setItems([notifications]): updates content of the widget  
- removeItem(id): removes notification id
   
&copy; Itechpros  
http://itechpros.com
