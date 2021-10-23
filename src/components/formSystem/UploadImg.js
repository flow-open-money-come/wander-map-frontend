import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { FONT, COLOR } from '../../constants/style'
import { ReactComponent as ImageSvg } from '../../icons/image.svg'
import { NavBarButton } from '../../components/common/Button'
import { postImgur } from '../../WebAPI'

const PicHolder = styled.label`
  width: 500px;
  height: 180px;
  background-color: ${COLOR.gray_light};
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
const ImageIcon = styled(ImageSvg)`
  width: 30px;
  height: 30px;
  color: ${COLOR.green};
`
const UploadNotice = styled.div`
  font-size: ${FONT.xs};
  margin-top: 30px;
  margin-bottom: 5px;
`

const UploadPreview = styled.div`
  max-width: 100%;
  max-height: 100%;
  text-align: center;
`
const UploadPreviewImg = styled.img`
  max-width: 100%;
  max-height: 100%;
`
const ClearBtn = styled.button`
  ${NavBarButton}
  opacity: 0.8;
  position: absolute;
  display: block;
  background: rgba(0, 0, 0, 0);
  color: rgba(0, 0, 0, 0);
  border: none;
  &:hover {
    cursor: pointer;
    background: rgba(0, 0, 0, 0.4);
    color: ${COLOR.white};
  }
`

export default function UploadImg({
  name,
  formData,
  setFormData,
  setErrorMessage,
}) {
  const [fileSrc, setFileSrc] = useState()
  useEffect(() => {
    if (formData.cover_picture_url) {
      setFileSrc(formData.cover_picture_url)
    } else if (formData.map_picture_url) {
      setFileSrc(formData.map_picture_url)
    }
  }, [formData])

  const handleUploadFile = (e) => {
    if (!e.target.files[0]) return
    let file = e.target.files[0]
    let reader = new FileReader()
    let imageData = new FormData()
    imageData.append('image', file)
    imageData.append('album', 'Znitr92')

    postImgur(imageData)
      .then((res) => {
        // 預覽
        reader.onload = function () {
          setFileSrc(reader.result)
        }
        reader.readAsDataURL(file)
        return res
      })
      .then((res) => {
        // 回傳值
        let dataUrl = res.data.data.link
        setFormData({
          ...formData,
          [name]: dataUrl,
        })
      })
      .catch((err) => {
        console.log('沒打成功')
        console.log(err.response)
        if (err.response.status === 400) {
          setErrorMessage('圖片檔案過大，請重新上傳')
        }
      })

    e.target.value = ''
  }

  const handleClear = (e) => {
    e.preventDefault()
    setFileSrc(null)
  }

  return (
    <PicHolder>
      {fileSrc ? (
        <>
          <UploadPreview>
            <UploadPreviewImg src={fileSrc} />
          </UploadPreview>
          <ClearBtn onClick={handleClear}>刪除</ClearBtn>
        </>
      ) : (
        <>
          <ImageIcon />
          <br />
          點擊上傳
          <UploadInput name={name} onChange={handleUploadFile} required />
          <UploadNotice>
            建議寬度大於700像素的橫幅照片，檔案大小限制為3MB
          </UploadNotice>
        </>
      )}
    </PicHolder>
  )
}
