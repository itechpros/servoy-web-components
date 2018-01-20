# Advanced Searchbox
## Web Component for MEGA | Responsive Megamenu Navigation


Website of component library:  
https://codecanyon.net/item/mega-responsive-megamenu-navigation/20095078/support


Component Properties:
- menu: Navigation menu HTML string
  - type: string
  - default: none
```
// DROPDOWN MENU
    <div class="nav-header">
        <a class="nav-brand" href="#">Navigation</a>
        <div class="nav-toggle"></div>
    </div>

    <div class="nav-menus-wrapper">
        <ul class="nav-menu">
            <li class="active"><a href="#">Home</a></li>
            <li><a href="#">Services</a>
                <ul class="nav-dropdown">
                    <li><a href="#">Web desing</a></li>
                    <li><a href="#">Programming</a></li>
                    <li><a href="#">Consulting</a></li>
                </ul>
            </li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </div>

// SOCIAL MENU
<ul class="nav-menu nav-menu-social">
    <li>
        <a href="#">
            <i class="ion-social-facebook"></i>
        </a>
    </li>
    <li>
        <a href="#">
            <i class="ion-social-twitter"></i>
        </a>
    </li>
    <li>
        <a href="#">
            <i class="ion-social-instagram"></i>
        </a>
    </li>
</ul>
```


API:
- setMenu(menu, options): creates menu with specified options at runtime


## License

All source code in the repository is licensed under a dual license.  To use these components and services in your commercial or corporate internal projects, please contact sales@itechpros.com for licensing costs and information.

 * For non-commercial and open public uses: Open Software License 3.0 (https://opensource.org/licenses/OSL-3.0)
 * For commercial or non-public / in-house uses: contact sales@itechpros.com for licensing costs and information

&copy; iTech Professionals, Inc. 
http://itechpros.com
