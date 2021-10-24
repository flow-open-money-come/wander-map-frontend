import React, { useState, useEffect, useContext } from 'react'
import { useParams, useHistory, useRouteMatch } from 'react-router-dom'
import { postArticles, getArticles, patchArticle } from '../../../WebAPI'
import { AuthContext } from '../../../context'
import styled from 'styled-components'
import { FONT, COLOR, MEDIA_QUERY } from '../../../constants/style'
import UploadImg from '../../../components/formSystem/UploadImg'
import SelectLocation from '../../../components/formSystem/SelectLocation'
import SearchRelated from '../../../components/formSystem/SearchRelated'
import UploadGpx from '../../../components/formSystem/UploadGpx'
import CategoryTags from '../../../components/formSystem/CategoryTags'
import ContentCKEditor from '../../../components/formSystem/ContentCKEditor'
import { NavBarButton } from '../../../components/common/Button'
import swal from 'sweetalert'

const ArticlePostWrapper = styled.div`
  margin: 0 auto;
  width: 360px;
  font-family: Arial, Helvetica, sans-serif;
  ${MEDIA_QUERY.md} {
    width: 100%;
  }
  ${MEDIA_QUERY.lg} {
    width: 800px;
  }
`
const PageName = styled.div`
  font-size: ${FONT.lg};
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
    margin: 10px 20px;
    font-size: ${FONT.md};
  }
  ${MEDIA_QUERY.lg} {
    font-size: ${FONT.lg};
  }
`
const FormTitle = styled.div`
  font-weight: 600;
  margin-bottom: 8px;
  ${MEDIA_QUERY.md} {
    margin: 10px 20px;
    width: 100px;
    text-align: center;
  }
  ${MEDIA_QUERY.lg} {
    margin: 10px 40px;
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
const Input = styled.input.attrs((props) => ({
  type: 'text',
}))`
  height: 25px;
  width: 320px;
  padding: 10px;
  &:focus {
    outline: none;
    border: 2px solid ${COLOR.green};
  }
  ${MEDIA_QUERY.lg} {
    height: 30px;
    width: 500px;
    font-size: ${FONT.md};
  }
`
const Date = styled.input.attrs((props) => ({
  type: 'date',
}))`
  height: 25px;
  width: 150px;
  ${MEDIA_QUERY.lg} {
    height: 30px;
    width: 200px;
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
  value: '確認送出',
}))`
  ${NavBarButton}
  background:none;
  color: ${COLOR.green};
  font-size: ${FONT.md};
`
const ErrorMessage = styled.div`
  text-align: center;
  margin: 20px auto;
  color: #ff0000;
  font-weight: 600;
  font-size: ${FONT.s};
`

export default function ArticlePostPage() {
  const { userInfo } = useContext(AuthContext)
  let isPostPage = useRouteMatch('/post-article')
  const { articleID } = useParams()
  const history = useHistory()
  if (!userInfo) history.push('/')

  const [errorMessage, setErrorMessage] = useState()
  const [formData, setFormData] = useState({
    author_id: userInfo.user_id,
  })

  useEffect(() => {
    if (!isPostPage) {
      getArticles(articleID)
        .then((res) => {
          setFormData(res.data.data[0])
        })
        .catch(() => {
          swal('Oh 不！', '請求失敗！請稍候再試一次，或者聯繫我們。', 'error')
        })
    }
  }, [articleID, isPostPage])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handlePostSubmit = (e) => {
    e.preventDefault()
    if (Object.keys(formData).indexOf('title') < 0 || formData.title === '')
      return setErrorMessage('您好，標題為必填喔!')
    if (Object.keys(formData).indexOf('content') < 0 || formData.content === '')
      return setErrorMessage('您好，內文為必填喔!')

    postArticles(formData)
      .then((res) => {
        let articleID = res.data.message.split(' ').slice(-1)[0]
        swal('發佈成功', {
          icon: 'success',
          button: '關閉',
        })
        history.push(`/articles/${articleID}`)
      })
      .catch(() => {
        swal('Oh 不！', '請求失敗！請稍候再試一次，或者聯繫我們。', 'error')
      })
  }

  const handlePatchSubmit = (e) => {
    console.log(formData)
    e.preventDefault()
    patchArticle(articleID, formData)
      .then((res) => {
        console.log(res.data)
        history.push(`/articles/${articleID}`)
      })
      .catch(() => {
        swal('Oh 不！', '請求失敗！請稍候再試一次，或者聯繫我們。', 'error')
      })
  }

  return (
    <ArticlePostWrapper>
      {articleID ? (
        <PageName>編輯心得</PageName>
      ) : (
        <>
          <PageName>新增心得</PageName>
          <PageDesc>Hey！最近去哪裡玩呀？來來分享一下這段旅程的體驗</PageDesc>
        </>
      )}
      <ErrorMessage>{errorMessage}</ErrorMessage>
      <FormWrapper>
        <FormTitle>文章標題</FormTitle>
        <Input
          name='title'
          onChange={handleInputChange}
          value={formData.title}
          required
        />
      </FormWrapper>
      <FormWrapper>
        <FormTitle>封面圖片</FormTitle>
        <FormSubTitleWrapper>
          <UploadImg
            name='cover_picture_url'
            formData={formData}
            setFormData={setFormData}
            setErrorMessage={setErrorMessage}
          />
        </FormSubTitleWrapper>
      </FormWrapper>
      <FormWrapper>
        <FormTitle>行程地點</FormTitle>
        <FormSubTitleWrapper>
          <SelectLocation
            name='location'
            formData={formData}
            setFormData={setFormData}
          />
        </FormSubTitleWrapper>
      </FormWrapper>
      <FormWrapper>
        <FormTitle>出發時間</FormTitle>
        <FormSubTitleWrapper>
          <Date
            name='departure_time'
            placeholder='開始日期'
            onChange={handleInputChange}
            value={
              isPostPage
                ? formData.departure_time
                : formData.departure_time
                ? formData.departure_time.slice(0, 10)
                : null
            }
          />
          　—　
          <Date
            name='end_time'
            placeholder='結束日期'
            onChange={handleInputChange}
            value={
              isPostPage
                ? formData.end_time
                : formData.end_time
                ? formData.end_time.slice(0, 10)
                : null
            }
          />
        </FormSubTitleWrapper>
      </FormWrapper>
      <FormWrapper>
        <FormTitle>相關步道</FormTitle>
        <SearchRelated
          name='relatedTrail'
          handleInputChange={handleInputChange}
          formData={formData}
          setFormData={setFormData}
        />
      </FormWrapper>
      <FormWrapper>
        <FormTitle>分類</FormTitle>
        <CategoryTags
          name='tags'
          formData={formData}
          setFormData={setFormData}
          isPostPage={isPostPage}
        />
      </FormWrapper>
      <FormWrapper>
        <FormTitle />
        <ContentCKEditor
          name='content'
          formData={formData}
          setFormData={setFormData}
        />
      </FormWrapper>
      <FormWrapper style={{ display: 'none' }}>
        <FormTitle>GPX</FormTitle>
        <UploadGpx />
      </FormWrapper>
      <FormWrapper>
        <FormTitle />
        <SubmitBtn>
          {articleID ? (
            <Submit onClick={handlePatchSubmit} />
          ) : (
            <Submit onClick={handlePostSubmit} />
          )}
        </SubmitBtn>
      </FormWrapper>
    </ArticlePostWrapper>
  )
}
