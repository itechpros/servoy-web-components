# WYSIWYG HTML Editor based on TinyMCE
## Web Component for Servoy NG Client


Component Properties:

- plugins: Extended features available in editor 
  - type: string
  - default: link image code paste

- toolbar: Editor toolbar, groups of buttons are separated with "|" 
  - type: string
  - default: undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | image paste

- paste_data_images: Enables paste of images into editor textarea
  - type: boolean
  - default: true

- custom_buttons: Places user-defined buttons in HTML Editor menu appended to "toolbar"
  - type: tinymce_button[] (custom type, array of objects)
       `
       [
          {
              "callback": "function",   - callback function on Servoy form
              "image": "string",        - path to icon
              "name": "string",         - unique name of button, see "toolbar" property
              "text": "string",         - button text, has priority over "image"
              "tooltip": "string"       - tooltip popup
          }
       ]
       `
  - default: none


API:
- getContent()          - returns string content of editor textarea, images are base64-encoded
- setContent(string)    - sets editor content to value of "string"
- insertContent(string) - inserts value of "string" at cursor


&copy; Itechpros  
http://itechpros.com
