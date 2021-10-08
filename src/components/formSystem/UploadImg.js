import React from 'react'
import styled from 'styled-components'
import { FONT, COLOR } from '../../constants/style'
import { ReactComponent as ImageSvg } from '../../icons/image.svg'

const PicHolder = styled.label`
  width: 500px;
  height: 180px;
  background-color: #eee;
  border-radius: 3px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  text-align: center;
`

const UploadInput = styled.input.attrs({
  type: 'file',
  accept: 'image/png, image/jpeg',
})`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`
const Image = styled(ImageSvg)`
  width: 30px;
  height: 30px;
  color: ${COLOR.green};
`
const UploadNotice = styled.div`
  font-size: ${FONT.xs};
  margin-top: 30px;
  margin-bottom: 5px;
`

export default function UploadImg() {
  return (
    <PicHolder>
      <Image />
      <br />
      點擊上傳
      <UploadInput />
      <UploadNotice>
        建議寬度大於700像素的橫幅照片，檔案大小限制為3MB
      </UploadNotice>
    </PicHolder>
  )
}
