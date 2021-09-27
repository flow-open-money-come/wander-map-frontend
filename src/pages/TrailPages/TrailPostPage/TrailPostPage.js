import React from 'react'
import styled, { css } from 'styled-components'
import { ReactComponent as ImageSvg } from '../../../icons/image.svg'
import { COLOR, FONT, EFFECT, RADIUS } from '../../../constants/style'

const TrailsPostWrapper = styled.div`
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
  font-size: 14px;
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
  margin-right: 10px;
`
const FormUnit = styled.div`
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
  width: 150px;
  text-align: center;
  color: #909090;
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
  font-weight: 500;
  margin-left: 245px;
`

function TrailPostPage() {
  return (
    <TrailsPostWrapper>
      <PageName>新增步道</PageName>
      <FormWrapper>
        <FormTitle>步道名稱</FormTitle>
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
        <FormTitle>步道簡介</FormTitle>
        <Textarea />
      </FormWrapper>
      <FormWrapper>
        <FormTitle>步道地點</FormTitle>
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
        <Half>
          <FormTitle>步道長度</FormTitle>
          <InputWrapper>
            <Input size='short' />
            <FormUnit>公里</FormUnit>
          </InputWrapper>
        </Half>
        <Half>
          <FormTitle>海拔高度</FormTitle>
          <InputWrapper>
            <Input size='short' />
            <FormUnit>公尺</FormUnit>
          </InputWrapper>
        </Half>
      </FormWrapper>
      <FormWrapper>
        <FormTitle>步道難度</FormTitle>
        <FormSubTitleWrapper>
          <Radio value='1' />
          <label>新手</label>
          <Radio value='2' />
          <label>入門</label>
          <Radio value='3' />
          <label>進階</label>
          <Radio value='4' />
          <label>挑戰</label>
          <Radio value='5' />
          <label>困難</label>
        </FormSubTitleWrapper>
      </FormWrapper>
      <FormWrapper>
        <FormTitle>步道座標</FormTitle>
        <FormSubTitleWrapper>
          <InputWrapper>
            <FormSubTitle>北緯</FormSubTitle>
            <Input size='short' />
          </InputWrapper>
          <InputWrapper>
            <FormSubTitle>東經</FormSubTitle>
            <Input size='short' />
          </InputWrapper>
        </FormSubTitleWrapper>
      </FormWrapper>
      <FormWrapper>
        <FormTitle>步道特色</FormTitle>
        <Input />
      </FormWrapper>
      <FormWrapper>
        <FormTitle>建議季節</FormTitle>
        <Select>
          <option>四季皆宜</option>
          <option>春季</option>
          <option>夏季</option>
        </Select>
      </FormWrapper>
      <FormWrapper>
        <FormTitle>上傳路線圖片</FormTitle>
        <PicHolder />
      </FormWrapper>
      <FormWrapper>
        <FormTitle>上傳GPX檔案</FormTitle>
        <Input />
      </FormWrapper>
      <FormWrapper>
        <Submit />
      </FormWrapper>
    </TrailsPostWrapper>
  )
}

export default TrailPostPage
