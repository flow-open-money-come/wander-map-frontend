import React from 'react'
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
export default function ContentCKEditor() {
  return <Textarea />
}
