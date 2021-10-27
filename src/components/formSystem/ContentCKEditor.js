import React, { useState } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import ImgurUploaderInit from 'ckeditor5-imgur-uploader'
import styled from 'styled-components'
import { FONT, MEDIA_QUERY } from '../../constants/style'

const EditorWrapper = styled.div`
  width: 320px;
  margin-bottom: 10px;
  line-height: 1.5rem;
  ${MEDIA_QUERY.md} {
    width: 438px;
    font-size: ${FONT.md};
  }
  ${MEDIA_QUERY.lg} {
    width: 638px;
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
              '400px',
              editor.editing.view.document.getRoot()
            )
          })
        }}
        data={formData.content}
        onChange={handleDataChange}
      />
    </EditorWrapper>
  )
}
