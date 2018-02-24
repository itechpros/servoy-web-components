# H/V Grid
## Web Component for Bootstrap Grid


https://getbootstrap.com/docs/4.0/layout/grid/


Component Properties:
- foundset: grid foundset
- columns: array of droppable foundset columns
- columnsPerRow, rowsPerPage: grid H/V size
- columnCssClass, rowCssClass: Bootstrap class, e.g. "col-md-4", "row"
- onCellClick: Servoy callback method
- overflow: grid container behavior
- template: optional, allows custom styling of cell appearance
```
// example of "template" property:
// foundset columns:
//   0 - icon
//   1 - link
//   2 - name
//
// template has JSON format; numeric (vs string) values are
// replaced with foundset columns of their index

{
   div:
      {
         style:
         {
            height:'100px'
         },
         children:
         [
            {
               img:
               {
                  src: 0,      // numeric "0" will place
                               // value of foundset column "icon"
                  height:'50',
                  width:'100'
                }
            },
            {br:{}},     // line break
            {
               a:
               {
                   href:1,     // foundset column "link"
                   html:2      // foundset column "name"
               }
            }
         ]
      }
}

// html in grid cells in Browser:
<div style="height:100px">
  <img src="fs.icon" height="50" width="100">
  <br>
  <a href="fs.link">fs.name</a>
</div>

```


## License

All source code in the repository is licensed under a dual license.  To use these components and services in your commercial or corporate internal projects, please contact sales@itechpros.com for licensing costs and information.

 * For non-commercial and open public uses: Open Software License 3.0 (https://opensource.org/licenses/OSL-3.0)
 * For commercial or non-public / in-house uses: contact sales@itechpros.com for licensing costs and information

&copy; iTech Professionals, Inc. 
http://itechpros.com
