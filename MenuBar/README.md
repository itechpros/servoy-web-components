# Mega Menu Bar
## Web Component for Mega | Responsive Megamenu Navigation


Website of component library:  
https://codecanyon.net/item/mega-responsive-megamenu-navigation/20095078/support


Model:
 - callback(id) - Servoy function with
 - menuItems[] - array of "item"
 - options{} - see "Plugin Options" in Mega reference (for functions see "Event Handlers")
 - skin"" - see "Skins" of Mega reference
 - item{}:
    - align: for main items (<blank>* | align-to-right | nav-menu-centered)
    - horizontal: horizontal drop down (false* | true)
    - href: creates link, if specified callback is ignored
    - icon: Font Awesome icon class
    - id: value passed to Servoy callback
    - items: array of item[] (recursion)
    - type: type of Mega menu item
        - item: menu item/submenu, default
        - brand: brand text
        - logotype: logotype image
        - grid: Bootstrap grid
        - list: navigation lists
        - panel: content panels 100% width
        - panelHalf: panels 50%
        - panelQuarter: panels 25%
        - text: text without link
        - button: html button
        - search: search box


```
// "items[]" format for "grid", "list", "panel", "tab" types:
{
   type: "grid", 
   items: [
              {
                  items:
                      [
                          {
                              value:'<html string>'
                          }
                          ,..
                      ]
              }
              ,..
          ]
}

{
    type: "list",
    items: [
               {
                   items:
                      [
                          {<list header>},
                          {<item 1>},..
                      ]
                }
                ,..
           ]
}

{
    type: "panel | panelHalf | panelQuarter",
    items: [
               {
                   <content>
               }
           ]
}

{
    type: "tab",
    items: [
               {
                   items:
                      [
                          {<tab peg>},
                          {<tab pane>}
                      ]
                }
                ,..
           ]
}


// Example use:

elements.<name>.menuItems = 
[
    {
        value:'https://d4c2us8g123wy.cloudfront.net/icon/3754268191.png',
        type:'logotype',
        href:'http://itechpros.com'
    },
    {
        value:'Mega',
        type:'brand',
        href:'http://itechpros.com'
    },
    {
        value:'Item',
        icon:'fa fa-home',
        href:'http://itechpros.com'
    },
    {
        value:'Menu',
        items:
            [
                {
                    value:'Item 1',
                    id:'M1'
                },
                {
                    value:'Submenu 1',
                    items:
                        [
                            {
                                value:'Item 1 1',
                                id:'M11'
                            },
                            {
                                value:'Item 1 2',
                                id:'M12'
                            },
                            {
                                value:'Submenu 1 1',
                                items:
                                    [
                                        {
                                            value:'Item 1 1 1',
                                            id:'M111'
                                        },
                                        {
                                            value:'Item 1 1 2',
                                            id:'M112'
                                        }
                                   ]
                            },
                            {
                                value:'Item 1 3',
                                id:'M13'
                            }
                       ]
                },
                {
                    value:'Item 2',
                    id:'M2'
                }
         ]
    },
    {
        value:'Horiz.',
        horizontal:true,
        items:
            [
                {
                    value:'Horizontally placed Item',
                    id:'H2'
                },
                {
                    value:'Submenu',
                    horizontal:true,
                    items:
                        [
                            {
                                value:'Item A',
                                id:'H21A'
                            },
                            {
                                value:'Item B',
                                id:'H21B'
                            }
                        ]
                }
           ]
    },
    {
        value:'Grid',
        type:'grid',
        items:
            [
                {
                    items:
                        [
                            {
                                value:'<div style="background-color:lightgray;">grid 1</div>'
                            }
                        ]
                },
                {
                    items:
                        [
                            {
                                value:'<div style="background-color:lightgray;">grid 2 1</div>'
                            },
                            {
                                value:'<div style="background-color:lightgray;">grid 2 2</div>'
                            }
                        ]
                },
            ]
    },
    {
        value:'Tabs',
        type:'tabs',
        items:
            [
                {
                    items:
                        [
                             {
                                 value:'Tab A'
                             },
                             {
                                 value:'<h1>Tab A</h1>And its content..'
                             }
                        ]
                },
                {
                    items:
                        [
                              {
                                  value:'Tab B'
                              },
                              {
                                  value:'<h1>Tab B</h1>And its content..'
                              }
                        ]
                }
            ]
    },
    {
        value:'Panel',
        type:'panelHalf',
        align:'align-to-right',
        items:
            [
                {
                    value:'<h1>Panel</h1><i>HTML</i> content.'
                }
            ]
    },
    {
        value:'List',
        type:'list',
        items:
            [
                {
                    items:
                        [
                            {
                                value:'First List'
                            },
                            {
                                value:'Item 1 A',
                                id:'L1A'
                            },
                            {
                                value:'Item 1 B',
                                id:'L1B'
                            }
                        ]
                },
                {
                    items:
                        [
                            {
                                value:'Second List'
                            },
                            {
                                value:'Item 2 A',
                                id:'L2A'
                            },
                            {
                                value:'Item 2 B',
                                id:'L2B'
                            },
                            {
                                value:'Item 2 C',
                                id:'L2C'
                            }
                        ]
                },
            ]
    },
    {
        value:'Text',
        type:'text'
    },
    {
        value:'Button',
        type:'button',
        id:'BTN'
    },
    {
        value:'Search Box',
        type:'search'
    }
]



elements.<name>.options = 
{
    effect:'slide',
    submenuTrigger:'click'
}

```


API:
 - toggleOffCanvas(): show or hide the offcanvas panel
 - toggleSearch(): show or hide the search panel

Event Handlers:
 - onInit()
 - onLandscape()
 - onPortrait()
 - onShowOffCanvas()
 - onHideOffCanvas()
 - onSearch()
See "Plugin Options" of Mega Menu for description


## License

All source code in the repository is licensed under a dual license.  To use these components and services in your commercial or corporate internal projects, please contact sales@itechpros.com for licensing costs and information.

 * For non-commercial and open public uses: Open Software License 3.0 (https://opensource.org/licenses/OSL-3.0)
 * For commercial or non-public / in-house uses: contact sales@itechpros.com for licensing costs and information

&copy; iTech Professionals, Inc. 
http://itechpros.com
