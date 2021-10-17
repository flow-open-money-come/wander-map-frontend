import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { postArticles, patchArticle } from '../../../WebAPI'
import styled from 'styled-components'
import { FONT, COLOR, MEDIA_QUERY } from '../../../constants/style'
import UploadImg from '../../../components/formSystem/UploadImg'
import SelectLocation from '../../../components/formSystem/SelectLocation'
import SearchRelated from '../../../components/formSystem/SearchRelated'
import UploadGpx from '../../../components/formSystem/UploadGpx'
import CategoryTags from '../../../components/formSystem/CategoryTags'
import ContentCKEditor from '../../../components/formSystem/ContentCKEditor'
import { NavBarButton } from '../../../components/common/Button'

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
const PageDes = styled.div`
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
  const [errorMessage, setErrorMessage] = useState()
  const [newDatas, setNewDatas] = useState({
    author_id: 1,
    title: '',
    cover_picture_url: '',
    location: '',
    departure_time: '',
    end_time: '',
    related: '',
    tags: '',
    content: '',
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setNewDatas({
      ...newDatas,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    console.log(newDatas)
    e.preventDefault()
    postArticles(newDatas)
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err.response.data)
        setErrorMessage('您好，標題、內文為必填喔!')
      })
  }

  // 如有帶參數為修改心得
  const { articleID } = useParams()
  const [articleData, setAricleData] = useState()

  return (
    <ArticlePostWrapper>
      {articleID ? (
        <PageName>編輯心得</PageName>
      ) : (
        <>
          <PageName>新增心得</PageName>
          <PageDes>Hey！最近去哪裡玩呀？來來分享一下這段旅程的體驗</PageDes>
        </>
      )}

      <ErrorMessage>{errorMessage}</ErrorMessage>
      <FormWrapper>
        <FormTitle>文章標題</FormTitle>
        <Input
          name='title'
          onChange={handleInputChange}
          value={newDatas.title}
          required
        />
      </FormWrapper>
      <FormWrapper>
        <FormTitle>封面圖片</FormTitle>
        <FormSubTitleWrapper>
          <UploadImg
            name='cover_picture_url'
            newDatas={newDatas}
            setNewDatas={setNewDatas}
          />
        </FormSubTitleWrapper>
      </FormWrapper>
      <FormWrapper>
        <FormTitle>行程地點</FormTitle>
        <FormSubTitleWrapper>
          <SelectLocation
            name='location'
            newDatas={newDatas}
            setNewDatas={setNewDatas}
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
            value={newDatas.departure_time}
          />
          　—　
          <Date
            name='end_time'
            placeholder='結束日期'
            onChange={handleInputChange}
            value={newDatas.end_time}
          />
        </FormSubTitleWrapper>
      </FormWrapper>
      <FormWrapper>
        <FormTitle>相關步道</FormTitle>
        <SearchRelated
          name='related'
          handleInputChange={handleInputChange}
          newDatas={newDatas}
          setNewDatas={setNewDatas}
        />
      </FormWrapper>
      <FormWrapper>
        <FormTitle>分類</FormTitle>
        <CategoryTags
          name='tags'
          newDatas={newDatas}
          setNewDatas={setNewDatas}
        />
      </FormWrapper>
      <FormWrapper>
        <FormTitle />
        <ContentCKEditor
          name='content'
          newDatas={newDatas}
          setNewDatas={setNewDatas}
        />
      </FormWrapper>
      <FormWrapper>
        <FormTitle>GPX</FormTitle>
        <UploadGpx />
      </FormWrapper>
      <FormWrapper>
        <FormTitle />
        <SubmitBtn>
          <Submit onClick={handleSubmit} />
        </SubmitBtn>
      </FormWrapper>
    </ArticlePostWrapper>
  )
}
