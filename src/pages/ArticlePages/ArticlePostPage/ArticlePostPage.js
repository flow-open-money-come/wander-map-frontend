import React from 'react'
import styled, { css } from 'styled-components'
import { ReactComponent as ImageSvg } from '../../../icons/image.svg'
import { COLOR, FONT, EFFECT, RADIUS } from '../../../constants/style'

const ArticlePostWrapper = styled.div`
  margin: 0 auto;
  width: 360px;
`
const PageName = styled.div`
  font-size: 30px;
  text-align: center;
  margin: 20px;
`
const FormWrapper = styled.div`
  margin: 20px;
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

const Input = styled.input.attrs((props) => ({
  type: 'text',
}))`
  height: 25px;
  width: ${(props) => (props.size === 'short' ? '100px' : '320px')};
`
const Date = styled.input.attrs((props) => ({
  type: 'date',
}))`
  height: 25px;
  width: 100px;
`

const Textarea = styled.textarea.attrs((props) => ({
  rows: '6',
}))`
  width: 320px;
  height: 300px;
`

const Select = styled.select`
  height: 25px;
  width: 150px;
  text-align: center;
  color: #909090;
`

const CategoryBtn = styled.button`
  border-radius: 15px;
  border: solid 1.5px ${COLOR.green};
  font-size: 12px;
  margin: 6px 3px;
  padding: 3px 6px;
`
const PicHolder = styled.div`
  width: 320px;
  height: 180px;
  background-color: #eee;
  border-radius: 3px;
  text-align: center;
  margin: 0 auto;
`
const UploadBtn = styled.button`
  margin: 55px;
`
const Image = styled(ImageSvg)`
  width: 30px;
  height: 30px;
`
const UploadNotice = styled.div`
  font-size: 10px;
`
const Submit = styled.input.attrs((props) => ({
  type: 'submit',
  value: '確認送出',
}))`
  padding: 4px 10px;
  background: ${COLOR.green};
  border-radius: 3px;
  border: 0;
  color: white;
  font-size: 14px;
  font-weight: 500;
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
        <PicHolder>
          <UploadBtn>
            <Image />
            <br />
            點擊上傳
          </UploadBtn>
          <UploadNotice>
            檔案小於3MB，建議寬度大於700像素的橫幅照片
          </UploadNotice>
        </PicHolder>
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
        <Date placeholder='開始日期' />
        　—　
        <Date placeholder='結束日期' />
      </FormWrapper>

      <FormWrapper>
        <FormTitle>相關步道</FormTitle>
        <Input />
      </FormWrapper>
      <FormWrapper>
        <FormTitle>分類</FormTitle>
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
      </FormWrapper>
      <FormWrapper>
        <FormTitle />
        <Textarea />
      </FormWrapper>
      <FormWrapper>
        <FormTitle>上傳GPX檔案</FormTitle>
        <Input />
      </FormWrapper>
      <FormWrapper>
        <Submit />
      </FormWrapper>
    </ArticlePostWrapper>
  )
}

export default ArticlePostPage
