import React, { useState } from 'react'
import styled from 'styled-components'
import { COLOR, RADIUS } from '../../constants/style'
import { ReactComponent as ImageSvg } from '../../icons/image.svg'
import { NavBarButton } from '../../components/common/Button'
import { postImgur } from '../../WebAPI'

const PicHolder = styled.label`
  margin: 0 auto;
  width: 250px;
  height: 180px;
  background-color: ${COLOR.gray_light};
  border-radius: ${RADIUS.md};
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
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

export default function UserUploadImg({
  name,
  updateUserData,
  setUpdateUserData,
}) {
  const [fileSrc, setFileSrc] = useState(updateUserData.iconUrl)

  const handleUploadFile = (e) => {
    if (!e.target.files[0]) return
    let file = e.target.files[0]
    let reader = new FileReader()
    let imageData = new FormData()
    imageData.append('image', file)
    imageData.append('album', 'Znitr92')

    postImgur(imageData)
      .then((res) => {
        reader.onload = () => {
          setFileSrc(reader.result)
        }
        reader.readAsDataURL(file)
        return res
      })
      .then((res) => {
        let dataUrl = res.data.data.link
        setUpdateUserData({
          ...updateUserData,
          [name]: dataUrl,
        })
      })
      .catch((err) => {
        console.log(err.response)
      })

    e.target.value = ''
  }

  const handleClear = (e) => {
    e.preventDefault()
    setFileSrc(null)
    setUpdateUserData({
      ...updateUserData,
      [name]: 'https://i.imgur.com/r50z0vv.png',
    })
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
        </>
      )}
    </PicHolder>
  )
}
