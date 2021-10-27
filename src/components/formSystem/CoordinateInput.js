import styled from 'styled-components'
import { FONT, COLOR, MEDIA_QUERY } from '../../constants/style'

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
`
const FormSubTitle = styled.div`
  margin-right: 10px;
`
const Input = styled.input.attrs(() => ({
  type: 'number',
}))`
  height: 25px;
  width: 100px;
  padding: 10px;
  &:focus {
    outline: none;
    border: 2px solid ${COLOR.green};
  }
  ${MEDIA_QUERY.lg} {
    height: 30px;
    width: 170px;
    font-size: ${FONT.md};
  }
`

export default function CoordinateInput({ formData, handleInputChange }) {
  console.log('CoordinateInput', formData)
  return (
    <>
      <InputWrapper>
        <FormSubTitle>北緯</FormSubTitle>
        <Input
          name='coordinateY'
          onChange={handleInputChange}
          value={formData && formData.coordinateY}
          min='22'
          max='25'
        />
      </InputWrapper>
      <InputWrapper>
        <FormSubTitle>東經</FormSubTitle>
        <Input
          name='coordinateX'
          onChange={handleInputChange}
          value={formData && formData.coordinateX}
          min='120'
          max='122'
        />
      </InputWrapper>
    </>
  )
}
