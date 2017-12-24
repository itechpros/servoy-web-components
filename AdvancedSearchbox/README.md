(c) Itechpros

AdvancedSearchbox (http://dnauck.github.io/angular-advanced-searchbox/)
  
  Model:
    availableSearchParams
             Supplies suggested input values
             - type: searchParam[] (array of objects)
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


  API:
    getSearchParams()  - returns search parameters from input box

