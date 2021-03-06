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
    if (
      formData.cover_picture_url &&
      formData.cover_picture_url !==
        'https://images.unsplash.com/photo-1600284536251-8bb98db53468?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80'
    )
      return setFileSrc(formData.cover_picture_url)
    if (formData.map_picture_url) return setFileSrc(formData.map_picture_url)
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
          swal('???????????????', '????????????????????????????????? 3 MB ????????????', 'error')
        }
        swal('Oh ??????', '????????????????????????????????????????????????????????????', 'error')
      })

    e.target.value = ''
  }

  const handleClear = (e) => {
    e.preventDefault()
    setFileSrc(null)
    setFormData({
      ...formData,
      [name]:
        'https://images.unsplash.com/photo-1600284536251-8bb98db53468?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80',
    })
  }

  return (
    <PicHolder>
      {fileSrc ? (
        <>
          <UploadPreview>
            <UploadPreviewImg src={fileSrc} />
          </UploadPreview>
          <ClearBtn onClick={handleClear}>??????</ClearBtn>
        </>
      ) : (
        <>
          <ImageIcon />
          <br />
          ????????????
          <UploadInput name={name} onChange={handleUploadFile} required />
          <UploadNotice>
            ?????????????????? 700 ????????????????????????????????????????????? 3MB
          </UploadNotice>
        </>
      )}
    </PicHolder>
  )
}
