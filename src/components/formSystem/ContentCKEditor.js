import React, { useState,useCallback, useMemo, useRef } from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import * as PropTypes from 'prop-types'
import ImgurUploaderInit from 'ckeditor5-imgur-uploader'
import styled from 'styled-components'
import { FONT, MEDIA_QUERY } from '../../constants/style'

const EditorWrapper = styled.div`
  width: 320px;
  height: 300px;
  ${MEDIA_QUERY.lg} {
    width: 500px;
    font-size: ${FONT.md};
  }
`


export default function ContentCKEditor({ name, newDatas, setNewDatas }) {
  const token = 'ab90413f9143e67d1d34de592899632ee97d2ddf'
  const [data, setData] = useState('')
  const handleDataChange = (event, editor) => {
    let inputData = editor.getData()
    setData(inputData)
    
    console.log(data)
    console.log(inputData)
  }
  const ImgurUploader = ImgurUploaderInit({clientID: '3687233b4392a31'})
  

  return (
    <EditorWrapper>
        <CKEditor
          editor={ClassicEditor}
          data=''
          config={{
              extraPlugins: [ImgurUploader]
             }}
          onReady={(editor) => {
            console.log('Editor is ready to use!', editor)
          }}
          onChange={handleDataChange}
          onClick={() => {
            console.log(data)
          }}
        />
      </EditorWrapper>
  )
}
