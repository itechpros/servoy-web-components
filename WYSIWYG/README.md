# WYSIWYG HTML Editor based on TinyMCE
## Web Component for Servoy NG Client


Component Properties:

- custom_buttons: Places user-defined buttons in HTML Editor menu appended to "toolbar"
  - type: tinymce_button[] (custom type, array of objects)
  - default: none
```
// custom type "tinymce_button[]"
[
   {
      "callback": "function",   - callback function on Servoy form
      "image": "string",        - path to icon
      "name": "string",         - unique name of button, see "toolbar" property
      "text": "string",         - button text, has priority over "image"
      "tooltip": "string"       - tooltip popup
   }
]
```

- options: Enables one or more TinyMCE options
  type: options[], custom type, array of objects
```
// custom type "options[]"
[
   {
      "name": "string",  - name of option
      "value": "string"  - option's value
   }
]
```

- paste_data_images: Enables paste of images into editor textarea
  - type: boolean
  - default: true

- plugins: Extended features available in editor 
  - type: string
  - default: link image code paste  
  full list of plugins https://www.tinymce.com/docs/plugins/

- toolbar: Editor toolbar, groups of buttons are separated with "|" 
  - type: string
  - default: undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | image paste

- visible: show/hide editor
  - tyle: boolean
  - default: true

API:
- getContent()          - returns string content of editor textarea, images are base64-encoded
- setContent(string)    - sets editor content to value of "string"
- insertContent(string) - inserts value of "string" at cursor


&copy; Itechpros  
http://itechpros.com
