{
  "name": "wysiwyg-Tiny-M-C-E",
  "displayName": "TinyMCE",
  "version": "1",
  "definition": "wysiwyg/TinyMCE/TinyMCE.js",
  "group": false,
  "libraries": [
    {
      "name": "tinymce_4.5.5.js",
      "version": "1",
      "mimetype": "text/javascript",
      "url": "wysiwyg/TinyMCE/lib/tinymce/tinymce.min.js"
    },
    {
      "name": "tinymce_ng_4.5.5.js",
      "version": "1",
      "mimetype": "text/javascript",
      "url": "wysiwyg/TinyMCE/lib/angular-ui-tinymce/dist/tinymce.min.js"
    }
  ],
  "api": {
    "getContent": {
      "returns": "string"
    },
    "insertContent": {
      "returns": "boolean",
      "parameters": [
        {
        "name": "data",
        "type": "string"
        }
      ]
    },
    "setContent": {
      "returns": "boolean",
      "parameters": [
        {
          "name": "data",
          "type": "string"
        }
      ]
    }
  },
  "model": {
    "custom_buttons": "tinymce_button[]",
    "options": "option[]",
    "paste_data_images": {
      "type": "boolean",
      "default": true
    },
    "plugins": {
      "type": "string",
      "default": "link image code paste"
    },
    "toolbar": {
      "type": "string",
      "default": "undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | image paste"
    },
    "visible": "visible",
    "readonly": {
      "type": "boolean",
      "default": false
     }    
  },
  "types":{
    "tinymce_button": {
      "callback": "function",
      "image": "string",
      "name": "string",
      "text": "string",
      "tooltip": "string"
    },
    "option": {
      "name": "string",
      "value": "string"
    }  
  }
}