import React from 'react'
import styled from 'styled-components'
import { FONT, COLOR, MEDIA_QUERY } from '../../constants/style'

const GPXBtn = styled.label`
  display: flex;
  align-items: center;
  height: 25px;
  width: 320px;
  border-radius: 3px;
  border: 1px solid ${COLOR.gray};

  ${MEDIA_QUERY.lg} {
    height: 30px;
    width: 500px;
  }
`
const GPXInfo = styled.div`
  text-align: center;
  vertical-align: middle;
  padding: 5px;
  height: 23px;
  width: 100px;
  border-radius: 3px;
  background-color: #eee;
  border-right: 1px solid ${COLOR.gray};
  ${MEDIA_QUERY.lg} {
    height: 28px;
    font-size: ${FONT.s};
  }
`

const GPXInput = styled.input.attrs(() => ({
  type: 'file',
}))`
  cursor: pointer;
  display: none;
`

export default function UploadGpx() {
  return (
    <GPXBtn>
      <GPXInfo>上傳檔案</GPXInfo>
      <GPXInput />
    </GPXBtn>
  )
}
