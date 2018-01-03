# Bell Icon Notifications Widget
## Web Component for Servoy NG Client


Component Properties:

- items: List of notifications placed into widget
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
  - default: LEFT
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

- setItems([notifications]): updates content of widget  
- removeItem(id): removes notification id
   
   
## License

All source code in the repository is licensed under a dual license.  To use these components and services in your commercial or corporate internal projects, please contact sales@itechpros.com for licensing costs and information.

 * For non-commercial and open public uses: Open Software License 3.0 (https://opensource.org/licenses/OSL-3.0)
 * For commercial or non-public / in-house uses: contact sales@itechpros.com for licensing costs and information

&copy; iTech Professionals, Inc. 
http://itechpros.com
