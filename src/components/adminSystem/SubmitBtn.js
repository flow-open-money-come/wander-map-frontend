import styled from 'styled-components'
import { COLOR, FONT, EFFECT, RADIUS, MEDIA_QUERY } from '../../constants/style'

const SubmitBtnTemplate = styled.div`
  width: 250px;
  height: 35px;
  padding: 10px 20px;
  margin-top: 25px;
  font-size: ${FONT.s};
  color: ${COLOR.white};
  border-radius: ${RADIUS.lg};
  border: 1px solid ${COLOR.gray};
  text-align: center;
  transition: 0.5s linear;
  box-shadow: ${EFFECT.shadow_dark};
  &:hover {
    cursor: pointer;
    background-color: ${COLOR.green};
  }
  ${MEDIA_QUERY.md} {
    width: 350px;
    height: 40px;
    font-size: ${FONT.md};
  }
`
export default function SubmitBtn({ text }) {
  return (
    <>
      <SubmitBtnTemplate>{text}</SubmitBtnTemplate>
    </>
  )
}
