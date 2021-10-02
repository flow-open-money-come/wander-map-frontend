import React from 'react'
import styled, { css } from 'styled-components'
import {
  FONT,
  COLOR,
  EFFECT,
  RADIUS,
  MEDIA_QUERY,
} from '../../../constants/style'
import { ReactComponent as ImageSvg } from '../../../icons/image.svg'

const ArticlePostWrapper = styled.div`
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
  font-size: ${FONT.logo};
  text-align: center;
  margin: 20px;
  ${MEDIA_QUERY.md} {
    font-size: ${FONT.xl};
  }
  ${MEDIA_QUERY.lg} {
    font-size: ${FONT.xll};
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
    text-align: right;
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
  width: 100px;
  ${MEDIA_QUERY.lg} {
    height: 30px;
    width: 200px;
    font-size: ${FONT.md};
  }
`

const Textarea = styled.textarea.attrs((props) => ({
  rows: '6',
}))`
  width: 320px;
  height: 300px;
  ${MEDIA_QUERY.lg} {
    width: 500px;
    font-size: ${FONT.md};
  }
`

const Select = styled.select`
  height: 25px;
  width: 150px;
  text-align: center;
  ${MEDIA_QUERY.lg} {
    height: 30px;
    width: 230px;
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
const PicHolder = styled.label`
  width: 320px;
  height: 180px;
  background-color: #eee;
  border-radius: 3px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const UploadBtn = styled.button`
  margin: 50px auto;
  font-size: ${FONT.md};
`
const UploadInput = styled.input.attrs({
  type: 'file',
  accept: 'image/png, image/jpeg',
})`
  opacity: 0;
  z-index: -1;
  position: absolute;
`
const Image = styled(ImageSvg)`
  width: 30px;
  height: 30px;
  color: ${COLOR.green};
`
const UploadNotice = styled.div`
  font-size: ${FONT.xs};
`

const SubmitBtn = styled.div`
  text-align: right;
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
  padding: 4px 10px;
  background: ${COLOR.white};
  border-radius: 3px;
  border: solid 1.5px ${COLOR.green};
  color: ${COLOR.green};
  font-size: ${FONT.s};
  font-weight: 500;
  &:hover {
    cursor: pointer;
    background: ${COLOR.green};
    color: ${COLOR.white};
  }
  ${MEDIA_QUERY.lg} {
    padding: 12px 25px;
    font-size: ${FONT.lg};
    border-radius: ${RADIUS.md};
  }
`
const GPXBtn = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 25px;
  width: 320px;
  background-color: #eee;
  border-radius: 3px;
  ${MEDIA_QUERY.lg} {
    width: 500px;
    font-size: ${FONT.md};
  }
`
const GPXInput = styled.input.attrs((props) => ({
  type: 'file',
}))`
  cursor: pointer;
`

function ArticlePostPage() {
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
          <PicHolder>
            <UploadBtn>
              <Image />
              <br />
              點擊上傳
            </UploadBtn>
            <UploadInput />
            <UploadNotice>
              建議寬度大於700像素的橫幅照片，檔案大小限制為3MB
            </UploadNotice>
          </PicHolder>
        </FormSubTitleWrapper>
      </FormWrapper>
      <FormWrapper>
        <FormTitle>行程地點</FormTitle>
        <FormSubTitleWrapper>
          <Select>
            <option>請選擇</option>
            <option value='基隆市'>基隆市</option>
            <option value='臺北市'>臺北市</option>
            <option value='新北市'>新北市</option>
            <option value='新竹市'>新竹市</option>
            <option value='新竹縣'>新竹縣</option>
            <option value='桃園市'>桃園市</option>
            <option value='宜蘭縣'>宜蘭縣</option>
            <option value='苗栗縣'>苗栗縣</option>
            <option value='臺中市'>臺中市</option>
            <option value='彰化縣'>彰化縣</option>
            <option value='南投縣'>南投縣</option>
            <option value='嘉義市'>嘉義市</option>
            <option value='嘉義縣'>嘉義縣</option>
            <option value='雲林縣'>雲林縣</option>
            <option value='臺南市'>臺南市</option>
            <option value='高雄市'>高雄市</option>
            <option value='澎湖縣'>澎湖縣</option>
            <option value='屏東縣'>屏東縣</option>
            <option value='臺東縣'>臺東縣</option>
            <option value='花蓮縣'>花蓮縣</option>
            <option value='金門縣'>金門縣</option>
            <option value='連江縣'>連江縣</option>
          </Select>
          <Select>
            <option>請選擇</option>
            <option>北投區</option>
            <option>信義區</option>
            <option>大安區</option>
          </Select>
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
        <Textarea />
      </FormWrapper>
      <FormWrapper>
        <FormTitle>GPX</FormTitle>
        <GPXBtn>
          <GPXInput />
        </GPXBtn>
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

export default ArticlePostPage
