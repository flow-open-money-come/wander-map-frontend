import styled from 'styled-components'
import { COLOR, FONT, EFFECT, RADIUS, MEDIA_QUERY } from '../../constants/style'

const InputTemplate = styled.input`
  width: 250px;
  height: 35px;
  padding: 20px;
  margin-top: 20px;
  transition: ${EFFECT.transition};
  color: ${COLOR.white};
  font-size: ${FONT.s};
  background-color: rgba(0, 0, 0, 0.2);
  border: transparent;
  border-radius: ${RADIUS.lg};
  box-shadow: ${EFFECT.shadow_dark};
  &:hover {
    width: 330px;
    cursor: pointer;
  }
  &:focus {
    width: 330px;
    outline: none;
    background-color: rgba(0, 0, 0, 0.6);
  }
  &::placeholder {
    color: ${COLOR.white};
    text-align: center;
  }
  ${MEDIA_QUERY.md} {
    width: 350px;
    height: 40px;
    font-size: ${FONT.md};
    &:hover,
    &:focus {
      width: 430px;
    }
  }
`

export default function Input({ placeholder }) {
  return (
    <>
      <InputTemplate placeholder={placeholder} />
    </>
  )
}
