import styled from 'styled-components'
import { COLOR, FONT, EFFECT, RADIUS, MEDIA_QUERY } from '../../constants/style'

const InputTemplate = styled.input`
  width: 250px;
  height: 40px;
  border-radius: ${RADIUS.lg};
  margin-top: 20px;
  background-color: rgba(0, 0, 0, 0.3);
  border: none;
  padding: 20px;
  transition: ${EFFECT.transition};
  font-size: ${FONT.s};
  color: ${COLOR.white};
  box-shadow: ${EFFECT.shadow_light};
  &:hover {
    width: 330px;
    cursor: pointer;
  }
  &:focus {
    width: 330px;
    background-color: rgba(0, 0, 0, 0.6);
    outline: none;
  }
  &::placeholder {
    color: ${COLOR.white};
    text-align: center;
  }
  ${MEDIA_QUERY.lg} {
    font-size: ${FONT.md};
    width: 350px;
    &:hover {
      width: 430px;
      cursor: pointer;
    }
    &:focus {
      width: 430px;
      outline: none;
    }
  }
`
export default function Input({ placeholder, type }) {
  return (
    <>
      <InputTemplate type={type} placeholder={placeholder} />
    </>
  )
}
