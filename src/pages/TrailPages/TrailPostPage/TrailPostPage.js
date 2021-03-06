import React, { useState, useEffect, useContext } from 'react'
import { useParams, useHistory, useRouteMatch } from 'react-router-dom'
import { postTrails, getTrails, patchTrail } from '../../../WebAPI'
import { AuthContext } from '../../../context'
import styled from 'styled-components'
import { FONT, COLOR, MEDIA_QUERY } from '../../../constants/style'
import UploadImg from '../../../components/formSystem/UploadImg'
import SelectLocation from '../../../components/formSystem/SelectLocation'
import DifficultyRadio from '../../../components/formSystem/DifficultyRadio'
import CoordinateInput from '../../../components/formSystem/CoordinateInput'
import SelectSeason from '../../../components/formSystem/SelectSeason'
import UploadGpx from '../../../components/formSystem/UploadGpx'
import { NavBarButton } from '../../../components/common/Button'
import swal from 'sweetalert'
import SmallRegionLoading from '../../../components/common/SmallRegionLoading'

const TrailsPostWrapper = styled.div`
  margin: 0 auto;
  width: 360px;
  ${MEDIA_QUERY.md} {
    width: 100%;
  }
  ${MEDIA_QUERY.lg} {
    width: 800px;
  }
`
const PageName = styled.div`
  font-size: ${FONT.lg};
  font-weight: bold;
  text-align: center;
  margin: 20px;
  ${MEDIA_QUERY.md} {
    font-size: ${FONT.logo};
  }
  ${MEDIA_QUERY.lg} {
    padding: 15px;
    border-bottom: solid 8px ${COLOR.green};
  }
`
const PageDesc = styled.div`
  display: none;
  ${MEDIA_QUERY.lg} {
    display: block;
    font-size: ${FONT.lg};
    text-align: center;
    margin-bottom: 50px;
  }
`
const FormWrapper = styled.div`
  margin: 20px;
  font-size: ${FONT.s};
  ${MEDIA_QUERY.md} {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px 20px;
    font-size: ${FONT.md};
  }
`
const HalfWrapper = styled.div`
  ${MEDIA_QUERY.md} {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`
const Half = styled.div`
  display: inline-block;
  width: 50%;
  ${MEDIA_QUERY.md} {
    display: flex;
    width: 70%;
    margin: 10px;
  }
  ${MEDIA_QUERY.lg} {
    width: 90%;
  }
`
const InputWrapper = styled.div`
  display: flex;
  align-items: center;
`
const FormTitle = styled.div`
  margin-bottom: 8px;
  font-size: ${FONT.md};
  font-weight: bold;
  ${MEDIA_QUERY.md} {
    margin: 10px 20px;
    width: 100px;
    text-align: center;
  }
  ${MEDIA_QUERY.lg} {
    margin: 10px 40px;
    font-size: ${FONT.lg};
  }
`
const FormSubTitleWrapper = styled.div`
  width: 320px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${MEDIA_QUERY.lg} {
    width: 500px;
  }
`

const FormUnit = styled.div`
  margin: 0 15px;
`
const Input = styled.input`
  height: 25px;
  width: ${(props) => (props.size === 'short' ? '100px' : '320px')};
  padding: 10px;
  &:focus {
    outline: none;
    border: 2px solid ${COLOR.green};
  }
  ${MEDIA_QUERY.lg} {
    height: 30px;
    width: ${(props) => (props.size === 'short' ? '170px' : '500px')};
    font-size: ${FONT.md};
  }
`
const Textarea = styled.textarea.attrs(() => ({
  rows: '6',
}))`
  width: 320px;
  height: 300px;
  padding: 10px;
  ${MEDIA_QUERY.lg} {
    width: 500px;
    font-size: ${FONT.md};
  }
`

const SubmitBtn = styled.div`
  text-align: right;
  margin-bottom: 50px;
  ${MEDIA_QUERY.md} {
    width: 320px;
  }
  ${MEDIA_QUERY.lg} {
    width: 500px;
  }
`
const Submit = styled.input.attrs((props) => ({
  type: 'submit',
  value: '????????????',
}))`
  ${NavBarButton}
  background:none;
  color: ${COLOR.green};
  font-size: ${FONT.md};
`

export default function TrailPostPage() {
  const { userInfo } = useContext(AuthContext)
  let isPostPage = useRouteMatch('/post-trail')
  const { trailID } = useParams()
  const history = useHistory()
  const [isLoadingTrail, setIsLoadingTrail] = useState(false)
  const [isTrailRetrieve, setIsTrailRetrieve] = useState(false)
  const [formData, setFormData] = useState({ author_id: userInfo.user_id })

  if (!userInfo || userInfo.role !== 'admin') history.push('/')

  useEffect(() => {
    if (!isPostPage) {
      setIsLoadingTrail(true)
      getTrails(trailID)
        .then((res) => {
          setFormData({
            ...res.data.data[0],
            coordinateX: res.data.data[0].coordinate.x,
            coordinateY: res.data.data[0].coordinate.y,
          })
          setIsLoadingTrail(false)
          setIsTrailRetrieve(true)
        })
        .catch((err) => {
          setIsLoadingTrail(false)
          setIsTrailRetrieve(false)
          swal('Oh ??????', '????????????????????????????????????????????????????????????', 'error')
        })
    }
  }, [trailID, isPostPage])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handlePostSubmit = (e) => {
    e.preventDefault()
    if (!isPostPage) return
    if (Object.keys(formData).indexOf('title') < 0 || formData.title === '')
      return swal('????????????', '???????????????????????????', 'error')
    if (
      Object.keys(formData).indexOf('description') < 0 ||
      formData.description === ''
    )
      return swal('????????????', '???????????????????????????', 'error')
    setIsLoadingTrail(true)
    postTrails(formData)
      .then((res) => {
        if (res.data.success) {
          setIsLoadingTrail(false)
          const id = res.data.data.insertId
          swal('????????????', {
            icon: 'success',
            button: '??????',
          })
          return history.push(`/trails/${id}`)
        }
      })
      .catch(() => {
        setIsLoadingTrail(false)
        swal('Oh ??????', '????????????????????????????????????????????????????????????', 'error')
      })
  }

  const handlePatchSubmit = (e) => {
    e.preventDefault()
    if (isPostPage) return
    if (!isTrailRetrieve) return
    if (formData.title === '')
      return swal('????????????', '???????????????????????????', 'error')
    if (formData.description === '')
      return swal('????????????', '???????????????????????????', 'error')
    setIsLoadingTrail(true)
    patchTrail(trailID, formData)
      .then((res) => {
        if (res.data.success) {
          setIsLoadingTrail(false)
          swal('??????????????????', {
            icon: 'success',
            button: '??????',
          })
          history.push(`/trails/${trailID}`)
        }
      })
      .catch(() => {
        setIsLoadingTrail(false)
        swal('Oh ??????', '????????????????????????????????????????????????????????????', 'error')
      })
  }

  return (
    <TrailsPostWrapper>
      {isLoadingTrail && <SmallRegionLoading />}
      {isPostPage ? (
        <>
          <PageName>????????????</PageName>
          <PageDesc>Wow????????????????????????????????????????????????????????????~</PageDesc>
        </>
      ) : (
        <PageName>????????????</PageName>
      )}
      <FormWrapper>
        <FormTitle>????????????</FormTitle>
        <Input
          name='title'
          onChange={handleInputChange}
          value={formData.title}
          required
        />
      </FormWrapper>
      <FormWrapper>
        <FormTitle>????????????</FormTitle>
        <FormSubTitleWrapper>
          <UploadImg
            name='cover_picture_url'
            formData={formData}
            setFormData={setFormData}
          />
        </FormSubTitleWrapper>
      </FormWrapper>
      <FormWrapper>
        <FormTitle>????????????</FormTitle>
        <Textarea
          name='description'
          onChange={handleInputChange}
          value={formData.description}
          required
        />
      </FormWrapper>
      <FormWrapper>
        <FormTitle>????????????</FormTitle>
        <FormSubTitleWrapper>
          <SelectLocation
            name='location'
            formData={formData}
            setFormData={setFormData}
          />
        </FormSubTitleWrapper>
      </FormWrapper>
      <FormWrapper>
        <HalfWrapper>
          <Half>
            <FormTitle>????????????</FormTitle>
            <InputWrapper>
              <Input
                size='short'
                type='number'
                name='length'
                onChange={handleInputChange}
                value={formData.length}
              />
              <FormUnit>??????</FormUnit>
            </InputWrapper>
          </Half>
          <Half>
            <FormTitle>????????????</FormTitle>
            <InputWrapper>
              <Input
                size='short'
                type='number'
                name='altitude'
                onChange={handleInputChange}
                value={formData.altitude}
              />
              <FormUnit>??????</FormUnit>
            </InputWrapper>
          </Half>
        </HalfWrapper>
      </FormWrapper>
      <FormWrapper>
        <FormTitle>????????????</FormTitle>
        <DifficultyRadio
          name='difficulty'
          value={formData.difficulty}
          handleInputChange={handleInputChange}
        />
      </FormWrapper>
      <FormWrapper>
        <FormTitle>????????????</FormTitle>
        <FormSubTitleWrapper>
          <CoordinateInput
            formData={formData && formData}
            handleInputChange={handleInputChange}
          />
        </FormSubTitleWrapper>
      </FormWrapper>
      <FormWrapper>
        <FormTitle>????????????</FormTitle>
        <Input
          name='situation'
          onChange={handleInputChange}
          value={formData.situation}
        />
      </FormWrapper>
      <FormWrapper>
        <FormTitle>????????????</FormTitle>
        <FormSubTitleWrapper>
          <SelectSeason
            name='season'
            handleInputChange={handleInputChange}
            value={formData.season}
          />
        </FormSubTitleWrapper>
      </FormWrapper>
      <FormWrapper>
        <FormTitle>????????????</FormTitle>
        <FormSubTitleWrapper>
          <UploadImg
            name='map_picture_url'
            formData={formData}
            setFormData={setFormData}
          />
        </FormSubTitleWrapper>
      </FormWrapper>
      <FormWrapper style={{ display: 'none' }}>
        <FormTitle>GPX</FormTitle>
        <UploadGpx />
      </FormWrapper>
      <FormWrapper>
        <FormTitle />
        <SubmitBtn>
          {isPostPage ? (
            <Submit onClick={handlePostSubmit} />
          ) : (
            <Submit onClick={handlePatchSubmit} />
          )}
        </SubmitBtn>
      </FormWrapper>
    </TrailsPostWrapper>
  )
}
