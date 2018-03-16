# Advanced Searchbox
## Web Component for Servoy NG Client


Website of component library:  
http://dnauck.github.io/angular-advanced-searchbox/


Component Properties:
- availableSearchParams: suggested input values  
  - type: searchParam[], array of objects
  - default: none
```
// searchParam[] type definition
[
   {
      "key": "string",
      "name": "string",
      "placeholder": "string",
      "restrictToSuggestedValues": "boolean",
      "suggestedValues": "string[]",
      "allowMultiple": "boolean"
   }
]
```
- disableTypeahead: enable/disable typeahead dropdown
- crlfAction: Servoy form function for "Enter" key
  - type: function
  - default: -none-
- parametersLabel: Label of suggested values
  - type: string
  - default: 'Suggestions'
- placeholder: Placeholder in search box
  - type: string
  - default: 'Search...'


API:
- keyUp: Fired on keyUp event
- clearAllSearchParameters: Removes selected items
- clearAvailableSearchParameters: Removes search parameters
- getSearchParams: Returns selected items
- setSearchParams: Assigns new search parameters


## License

All source code in the repository is licensed under a dual license.  To use these components and services in your commercial or corporate internal projects, please contact sales@itechpros.com for licensing costs and information.

 * For non-commercial and open public uses: Open Software License 3.0 (https://opensource.org/licenses/OSL-3.0)
 * For commercial or non-public / in-house uses: contact sales@itechpros.com for licensing costs and information

&copy; iTech Professionals, Inc. 
http://itechpros.com
