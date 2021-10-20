import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getArticles } from '../../WebAPI'
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

export default function ContentCKEditor({ name, formData, setFormData }) {
  const [data, setData] = useState(formData.content)
  const handleDataChange = (event, editor) => {
    let inputData = editor.getData()
    setData(inputData)
    setFormData({
      ...formData,
      [name]: inputData,
    })
  }
  const ImgurUploader = ImgurUploaderInit({
    clientID: `${process.env.REACT_APP_IMGUR_CLIENTID}`,
  })

  return (
    <EditorWrapper>
      <CKEditor
        editor={ClassicEditor}
        config={{
          extraPlugins: [ImgurUploader],
          removePlugins: ['MediaEmbed'],
        }}
        onReady={(editor) => {
          console.log('Editor is ready to use!', editor)
          editor.editing.view.change((writer) => {
            writer.setStyle(
              'height',
              '250px',
              editor.editing.view.document.getRoot()
            )
          })
        }}
        onChange={handleDataChange}
      />
    </EditorWrapper>
  )
}
