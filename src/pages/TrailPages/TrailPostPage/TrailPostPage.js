import React from 'react'
import styled from 'styled-components'
import { FONT, COLOR, MEDIA_QUERY } from '../../../constants/style'
import UploadImg from '../../../components/formSystem/UploadImg'
import SelectLocation from '../../../components/formSystem/SelectLocation'
import UploadGpx from '../../../components/formSystem/UploadGpx'
import { NavBarButton } from '../../../components/common/Button'

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
const FormSubTitle = styled.div`
  margin-right: 10px;
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
const Radio = styled.input.attrs((props) => ({
  type: 'radio',
}))`
  margin-right: 10px;
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
          <UploadImg />
        </FormSubTitleWrapper>
      </FormWrapper>
      <FormWrapper>
        <FormTitle>步道簡介</FormTitle>
        <Textarea />
      </FormWrapper>
      <FormWrapper>
        <FormTitle>步道地點</FormTitle>
        <FormSubTitleWrapper>
          <SelectLocation />
        </FormSubTitleWrapper>
      </FormWrapper>
      <FormWrapper>
        <HalfWrapper>
          <Half>
            <FormTitle>步道長度</FormTitle>
            <InputWrapper>
              <Input size='short' type='number' />
              <FormUnit>公里</FormUnit>
            </InputWrapper>
          </Half>
          <Half>
            <FormTitle>海拔高度</FormTitle>
            <InputWrapper>
              <Input size='short' type='number' />
              <FormUnit>公尺</FormUnit>
            </InputWrapper>
          </Half>
        </HalfWrapper>
      </FormWrapper>
      <FormWrapper>
        <FormTitle>步道難度</FormTitle>
        <FormSubTitleWrapper>
          <label>
            <Radio value='1' name='difficulty' />
            新手
          </label>
          <label>
            <Radio value='2' name='difficulty' />
            入門
          </label>
          <label>
            <Radio value='3' name='difficulty' />
            進階
          </label>
          <label>
            <Radio value='4' name='difficulty' />
            挑戰
          </label>
          <label>
            <Radio value='5' name='difficulty' />
            困難
          </label>
        </FormSubTitleWrapper>
      </FormWrapper>
      <FormWrapper>
        <FormTitle>步道座標</FormTitle>
        <FormSubTitleWrapper>
          <InputWrapper>
            <FormSubTitle>北緯</FormSubTitle>
            <Input size='short' type='number' />
          </InputWrapper>
          <InputWrapper>
            <FormSubTitle>東經</FormSubTitle>
            <Input size='short' type='number' />
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
          <UploadImg />
        </FormSubTitleWrapper>
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
    </TrailsPostWrapper>
  )
}
