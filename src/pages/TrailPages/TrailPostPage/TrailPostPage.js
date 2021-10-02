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
  ${MEDIA_QUERY.lg} {
    height: 30px;
    width: ${(props) => (props.size === 'short' ? '170px' : '500px')};
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
const Radio = styled.input.attrs((props) => ({
  type: 'radio',
}))`
  ${MEDIA_QUERY.md} {
    height: 20px;
    width: 20px;
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

export default function TrailPostPage() {
  return (
    <TrailsPostWrapper>
      <PageName>新增步道</PageName>
      <PageDes>Wow！又新發現什麼新步道了呢？快來昭告天下吧~</PageDes>
      <FormWrapper>
        <FormTitle>步道名稱</FormTitle>
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
        <HalfWrapper>
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
        </HalfWrapper>
      </FormWrapper>
      <FormWrapper>
        <FormTitle>步道難度</FormTitle>
        <FormSubTitleWrapper>
          <label>
            <Radio value='1' />
            新手
          </label>
          <label>
            <Radio value='2' />
            入門
          </label>
          <label>
            <Radio value='3' />
            進階
          </label>
          <label>
            <Radio value='4' />
            挑戰
          </label>
          <label>
            <Radio value='5' />
            困難
          </label>
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
        <FormSubTitleWrapper>
          <Select>
            <option>請選擇</option>
            <option>四季皆宜</option>
            <option>春季</option>
            <option>夏季</option>
            <option>秋季</option>
            <option>冬季</option>
          </Select>
        </FormSubTitleWrapper>
      </FormWrapper>
      <FormWrapper>
        <FormTitle>路線圖片</FormTitle>
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
    </TrailsPostWrapper>
  )
}
