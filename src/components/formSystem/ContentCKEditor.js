import React, { useCallback, useMemo, useRef } from 'react'
import ReactDOM from 'react-dom'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import * as PropTypes from 'prop-types'
import styled from 'styled-components'
import { FONT, MEDIA_QUERY } from '../../constants/style'

const Textarea = styled.textarea.attrs(() => ({
  rows: '6',
}))`
  width: 320px;
  height: 300px;
  ${MEDIA_QUERY.lg} {
    width: 500px;
    font-size: ${FONT.md};
  }
`
const EditorWrapper = styled.div`
  width: 320px;
  height: 300px;
  ${MEDIA_QUERY.lg} {
    width: 500px;
    font-size: ${FONT.md};
  }
`

const token = 'ab90413f9143e67d1d34de592899632ee97d2ddf'

const CkEditor = ({ value, updateValuesHandler }) => {
  const EditorComponent = useMemo(
    () => (
      <CKEditor
        editor={ClassicEditor}
        onInit={(editor) => {
          console.log('here')
        }}
        onChange={(event, editor) => {
          updateValuesHandler(editor.getData())
        }}
        config={{
          simpleUpload: {
            uploadUrl: 'https://api.imgur.com/3/image',
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
          removePlugins: ['MediaEmbed'],
        }}
      />
    ),
    [updateValuesHandler]
  )

  const Editor = useRef(EditorComponent)

  const setEditorData = useCallback(
    (data) => {
      console.dir(Editor)
      Editor.current.editor.setData(data)
    },
    [Editor]
  )

  const getEditorData = useCallback(() => {
    Editor.current.editor.getData()
  }, [Editor])

  const api = useMemo(
    () => ({
      getEditorData,
      setEditorData,
    }),
    [getEditorData, setEditorData]
  )

  return [Editor.current, api]
}

CkEditor.propTypes = {
  value: PropTypes.string,
  updateValuesHandler: PropTypes.func.isRequired,
}

CkEditor.defaultProps = {
  value: '',
}

export default function ContentCKEditor({ name, handleInputChange, newDatas }) {
  const updateHandler = useCallback((value) => console.log(value), [])

  const [editor] = CkEditor({
    value: 'Some default value',
    updateValuesHandler: updateHandler,
  })

  return (
    <EditorWrapper
      name={name}
      onChange={handleInputChange}
      value={newDatas.content}
    >
      {editor}
    </EditorWrapper>
  )
}
