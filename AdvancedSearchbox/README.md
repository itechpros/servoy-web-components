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

&copy; Itechpros  
http://itechpros.com
