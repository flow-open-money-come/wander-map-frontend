import React from 'react'
import styled, { css } from 'styled-components'

const ArticlePostWrapper = styled.div``
const PageName = styled.div`
  font-size: 30px;
  text-align: center;
  margin: 20px;
`
const FormWrapper = styled.div`
  margin: 20px;
`
const Half = styled.div`
  display: inline-block;
  width: 170px;
`
const InputWrapper = styled.div`
  display: flex;
  align-items: center;
`
const FormTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  margin-bottom: 8px;
`
const FormSubTitleWrapper = styled.div`
  width: 320px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const FormSubTitle = styled.div`
  font-size: 14px;
  margin-right: 10px;
`
const FormUnit = styled.div`
  font-size: 14px;
  margin: 0 15px;
`
const Input = styled.input.attrs((props) => ({
  type: 'text',
}))`
  height: 25px;
  width: ${(props) => (props.size === 'short' ? '100px' : '320px')};
`
const Textarea = styled.textarea.attrs((props) => ({
  rows: '6',
}))`
  width: 320px;
`
const Radio = styled.input.attrs((props) => ({
  type: 'radio',
}))``
const Select = styled.select`
  height: 25px;
  width: 150px;
  text-align: center;
  color: #909090;
`
const PicHolder = styled.div`
  width: 320px;
  height: 180px;
  background-color: #eee;
  border-radius: 3px;
`

function ArticlePostPage() {
  return (
    <ArticlePostWrapper>
      <PageName>新增心得</PageName>
      <FormWrapper>
        <FormTitle>文章標題</FormTitle>
        <Input />
      </FormWrapper>
      <FormWrapper>
        <FormTitle>上傳封面圖片</FormTitle>
        <PicHolder />
      </FormWrapper>
      <FormWrapper>
        <FormTitle>行程地點</FormTitle>
        <FormSubTitleWrapper>
          <Select>
            <option>臺北市</option>
            <option>新北市</option>
            <option>桃園市</option>
          </Select>
          <Select>
            <option>北投區</option>
            <option>信義區</option>
            <option>大安區</option>
          </Select>
        </FormSubTitleWrapper>
      </FormWrapper>
      <FormWrapper>
        <FormTitle>出發時間</FormTitle>
        <Input size='short' placeholder='開始日期' />
        －
        <Input size='short' placeholder='結束日期' />
      </FormWrapper>

      <FormWrapper>
        <FormTitle>相關步道</FormTitle>
        <Input />
      </FormWrapper>
      <FormWrapper>
        <FormTitle>分類</FormTitle>
        <button>一日</button>
        多日 海景 山景 夜景 城市景色 賞花 稀有動植物 有水源 危險地形
        登山小白體驗 需專業設備 專業分享 GPX
      </FormWrapper>
      <FormWrapper>
        <FormTitle>內文</FormTitle>
        <Textarea />
      </FormWrapper>
      <FormWrapper>
        <FormTitle>上傳GPX檔案</FormTitle>
        <Input />
      </FormWrapper>
    </ArticlePostWrapper>
  )
}

export default ArticlePostPage
