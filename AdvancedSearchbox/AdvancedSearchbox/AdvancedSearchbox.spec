{
  "name": "advancedsearchbox-Advanced-Searchbox",
  "displayName": "AdvancedSearchbox",
  "version": 1,
  "definition": "advancedsearchbox/AdvancedSearchbox/AdvancedSearchbox.js",
  "libraries": [
      {
      "name": "angular-advanced-searchbox.min.css",
      "version": "1",
      "mimetype": "text/css",
      "url": "advancedsearchbox/AdvancedSearchbox/lib/angular-advanced-searchbox.min.css"
    },
    {
      "name": "angular-advanced-searchbox.js",
      "version": "1",
      "mimetype": "text/javascript",
      "url": "advancedsearchbox/AdvancedSearchbox/lib/angular-advanced-searchbox.js"
    }
  ],
  "model": {
    "availableSearchParams":"searchParam[]",
    "parametersLabel": {
      "type": "string",
      "default": "Suggestions"
    },
    "crlfAction": "function",
    "placeholder": {
      "type": "string",
      "default": "Search..."
    }
  },  
  "types": {
    "searchParam": {
      "key": "string",
      "name": "string",
      "placeholder": "string",
      "restrictToSuggestedValues": "boolean",
      "suggestedValues": "string[]",
      "allowMultiple": "boolean"
    }
  },
  "api": {
    "keyUp": {
      "returns":"boolean"
    },
    "clearAllSearchParameters": {
      "returns": "boolean"
    },
    "clearAvailableSearchParameters": {
      "returns": "boolean"
    },
    "getSearchParams": {
      "returns": "object"
    },
    "setSearchParams": {
      "returns": "boolean",
      "parameters": [
        {
          "name": "availableSearchParams",
          "type": "array[]"
        }
      ]
    }    
  }
}