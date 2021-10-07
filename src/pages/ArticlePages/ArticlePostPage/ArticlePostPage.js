import React from 'react'
import styled from 'styled-components'
import { FONT, COLOR, RADIUS, MEDIA_QUERY } from '../../../constants/style'
import UploadImg from '../../../components/formSystem/UploadImg'
import SelectLocation from '../../../components/formSystem/SelectLocation'
import UploadGpx from '../../../components/formSystem/UploadGpx'
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
    align-items: center;
    margin: 30px 20px;
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

const CategoryWrapper = styled.div`
  width: 320px;
  display: flex;
  flex-wrap: wrap;
  ${MEDIA_QUERY.lg} {
    width: 500px;
  }
`

const CategoryBtn = styled.button`
  border-radius: ${RADIUS.lg};
  border: solid 1.5px ${COLOR.green};
  font-size: ${FONT.xs};
  margin: 6px 3px;
  padding: 3px 6px;
  ${MEDIA_QUERY.lg} {
    margin: 6px;
    font-size: ${FONT.s};
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

export default function ArticlePostPage() {
  return (
    <ArticlePostWrapper>
      <PageName>新增心得</PageName>
      <PageDes>Hey！最近去哪裡玩呀？來來分享一下這段旅程的體驗</PageDes>
      <FormWrapper>
        <FormTitle>文章標題</FormTitle>
        <Input />
      </FormWrapper>
      <FormWrapper>
        <FormTitle>封面圖片</FormTitle>
        <FormSubTitleWrapper>
          <UploadImg />
        </FormSubTitleWrapper>
      </FormWrapper>
      <FormWrapper>
        <FormTitle>行程地點</FormTitle>
        <FormSubTitleWrapper>
          <SelectLocation />
        </FormSubTitleWrapper>
      </FormWrapper>
      <FormWrapper>
        <FormTitle>出發時間</FormTitle>
        <FormSubTitleWrapper>
          <Date placeholder='開始日期' />
          　—　
          <Date placeholder='結束日期' />
        </FormSubTitleWrapper>
      </FormWrapper>
      <FormWrapper>
        <FormTitle>相關步道</FormTitle>
        <Input />
      </FormWrapper>
      <FormWrapper>
        <FormTitle>分類</FormTitle>
        <CategoryWrapper>
          <CategoryBtn>一日</CategoryBtn>
          <CategoryBtn>多日</CategoryBtn>
          <CategoryBtn>海景</CategoryBtn>
          <CategoryBtn>山景</CategoryBtn>
          <CategoryBtn>夜景</CategoryBtn>
          <CategoryBtn>城市景色</CategoryBtn>
          <br />
          <CategoryBtn>賞花</CategoryBtn>
          <CategoryBtn>稀有動植物</CategoryBtn>
          <CategoryBtn>有水源</CategoryBtn>
          <CategoryBtn>危險地形</CategoryBtn>
          <br />
          <CategoryBtn>登山小白體驗</CategoryBtn>
          <CategoryBtn>需專業設備</CategoryBtn>
          <CategoryBtn>專業分享</CategoryBtn>
          <CategoryBtn>GPX</CategoryBtn>
        </CategoryWrapper>
      </FormWrapper>
      <FormWrapper>
        <FormTitle />
        <ContentCKEditor />
      </FormWrapper>
      <FormWrapper>
        <FormTitle>GPX</FormTitle>
        <UploadGpx />
      </FormWrapper>
      <FormWrapper>
        <FormTitle />
        <SubmitBtn>
          <Submit />
        </SubmitBtn>
      </FormWrapper>
    </ArticlePostWrapper>
  )
}
