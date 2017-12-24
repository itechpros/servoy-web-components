(c) Itechpros
http://itechpros.com

WYSIWYG HTML Editor based on TinyMCE
Web Component for Servoy NG Client

Model:

    plugins: Configures extended features of TinyMCE HTML editor
             - type: string
             - default:
               link image code paste

    toolbar: Defines buttons in HTML Editor menu, groups of buttons are separated with "|" 
             - type: string
             - default:
               undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | image paste

    paste_data_images:
             Enables pasting of images directly into HTML Editor textarea
             - type: boolean
             - default: true

    custom_buttons:
             Places user-defined buttons in HTML Editor menu appended to "toolbar"
             - type: tinymce_button[] (array of objects)
                     [
                       {
                          "callback": "function",   - callback function on Servoy form
                          "image": "string",        - path to icon image
                          "name": "string",         - unique name of button, used by component's controller (see "toolbar")
                          "text": "string",         - button text, has priority over "image"
                          "tooltip": "string"       - tooltip popup
                       }
                     ]
             default: none


  API:
    getContent()          - returns string content of HTML Editor textarea (images are base64-encoded)
    setContent(string)    - sets HTML Editor to passed value
    insertContent(string) - inserts passed value at cursor
