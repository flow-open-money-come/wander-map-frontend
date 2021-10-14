import React, { useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import ImgurUploaderInit from 'ckeditor5-imgur-uploader'
import styled from 'styled-components'
import { FONT, MEDIA_QUERY } from '../../constants/style'

const EditorWrapper = styled.div`
  width: 320px;
  margin-bottom: 10px;
  ${MEDIA_QUERY.lg} {
    width: 500px;
    font-size: ${FONT.md};
  }
`


export default function ContentCKEditor({ name, newDatas, setNewDatas }) {

  const [data, setData] = useState('')
  const handleDataChange = (event, editor) => {
    let inputData = editor.getData()
    setData(inputData)
    setNewDatas({
      ...newDatas,
      [name]: inputData,
    })
    console.log(data)    
  }
  const ImgurUploader = ImgurUploaderInit({clientID: `${process.env.REACT_APP_IMGUR_CLIENTID}`})

  return (
    <EditorWrapper>
        <CKEditor 
          editor={ClassicEditor}
          data=''
          config={{
              extraPlugins: [ImgurUploader],
              removePlugins: ['MediaEmbed'],
             }}
          onReady={(editor) => {
            console.log('Editor is ready to use!', editor)
            editor.editing.view.change((writer) => {
              writer.setStyle(
                  "height",
                  "250px",
                  editor.editing.view.document.getRoot()
              )
            })
          }}
          onChange={handleDataChange}
          
        />
      </EditorWrapper>
  )
}
