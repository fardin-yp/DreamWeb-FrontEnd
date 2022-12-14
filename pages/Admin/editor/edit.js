import React, { useState, useEffect, useRef } from 'react';

export default function CKEditor ({setProperty,data}) {
  const editorRef = useRef()
  const [editorLoaded, setEditorLoaded] = useState(false)
  const { CKEditor, ClassicEditor,ImageInsert } = editorRef.current || {}

  useEffect(() => {
    editorRef.current = {
      // CKEditor: require('@ckeditor/ckeditor5-react'), // depricated in v3
      CKEditor: require('@ckeditor/ckeditor5-react').CKEditor, // v3+
      ClassicEditor: require('@ckeditor/ckeditor5-build-classic'),
    }
    setEditorLoaded(true)
  }, []);

  function uploadPlugin(editor) {
    editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
      return uploadImage(loader);
    };
  }

  return editorLoaded ? (
    <CKEditor
      editor={ClassicEditor}
      class={".ck.ck-editor__editable_inline "}
      data={data}
      onChange={(event, editor) => {
        const data = editor.getData()
        setProperty(data)
        
      }}
      config = {
        {
           // plugins: [ Essentials ],
          ckfinder: {
              // The URL that the images are uploaded to.
              uploadUrl: 'https://dreamwebbackend.herokuapp.com/upload', 
  
              // Enable the XMLHttpRequest.withCredentials property.
              withCredentials: true,
  
              // Headers sent along with the XMLHttpRequest to the upload server.
              headers: {
                  'X-CSRF-TOKEN': 'CSFR-Token',
                   Authorization: 'Bearer <JSON Web Token>'
              }
        } }

     }

    />
  ) : (
    <div>Editor loading</div>
  )
}