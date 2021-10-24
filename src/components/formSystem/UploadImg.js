import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { FONT, COLOR, EFFECT } from '../../constants/style'
import { ReactComponent as ImageSvg } from '../../icons/image.svg'
import { NavBarButton } from '../../components/common/Button'
import { postImgur } from '../../WebAPI'
import swal from 'sweetalert'

const PicHolder = styled.label`
  width: 500px;
  height: 180px;
  border-radius: 3px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  text-align: center;
  transition: ${EFFECT.transition};
  border: 1px solid ${COLOR.gray};
  &:hover {
    background-color: ${COLOR.gray_light};
  }
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

export default function UploadImg({ name, formData, setFormData }) {
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
        reader.onload = function () {
          setFileSrc(reader.result)
        }
        reader.readAsDataURL(file)
        return res
      })
      .then((res) => {
        let dataUrl = res.data.data.link
        setFormData({
          ...formData,
          [name]: dataUrl,
        })
      })
      .catch((err) => {
        if (err.response.data.data.error.includes('over the size limit')) {
          swal('上傳失敗！', '圖片過大，請上傳不大於 3 MB 的圖片。', 'error')
        }
        swal('Oh 不！', '請求失敗！請稍候再試一次，或者聯繫我們。', 'error')
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
