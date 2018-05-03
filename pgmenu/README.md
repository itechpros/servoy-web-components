# pgAdmin Menu
## Web Component for pgAdmin Menu


https://www.pgadmin.org/docs/pgadmin4/dev/pgadmin_menu_bar.html


Component Properties:
- callback: Servoy function called when menu item is clicked
- menuItems: Array of Menu/Submenu items
  - label: Menu/Submenu label
  - id: value passed to callback function (blank for Submenu headers)
  - items: Array of Submenu items (blank for Menu items)
  - icon: css class of icon

```
// example of "menuItems" property:

elements.<menu element>.menuItems = 
[
  {
    label:'Submenu A',
       icon: 'fa fa-database aria-hidden=false',
    items:
    [
      {
        label:'Item A 1',
        icon: 'fa fa-check aria-hidden=false',
        id:'A1'
      },
      {
        label:'Submenu A 1',
        icon:'fa fa-cogs',
        items:
        [
          {
            label:'Item A 1 1',
            id:'A11'
          }
        ]
      },
      {
          label:'Item A 2',
          id:'A2'
      }
    ]
  },
  {
    label:'Item 1',
    icon:'fa fa-clone',
    id:'1'
  },
  {
    label:'Submenu B',
    items:
    [
      {
        label:'Item B 1',
        id:'B1'
      },
      {
        label:'Submenu B 1',
        items:
        [
          {
            label:'Item B 1 1',
            id:'B11'
          },
          {
            label:'Item B 1 2',
            id:'B12',
            icon:'fa fa-check-square-o'
          }
        ]
      }
    ]
  }
]

// Supports 2 levels of submenus
```


## License

All source code in the repository is licensed under a dual license.  To use these components and services in your commercial or corporate internal projects, please contact sales@itechpros.com for licensing costs and information.

 * For non-commercial and open public uses: Open Software License 3.0 (https://opensource.org/licenses/OSL-3.0)
 * For commercial or non-public / in-house uses: contact sales@itechpros.com for licensing costs and information

&copy; iTech Professionals, Inc. 
http://itechpros.com
