import { useState } from 'react'
import styled from 'styled-components'
import { COLOR, EFFECT, RADIUS, MEDIA_QUERY } from '../../constants/style'
import { ReactComponent as BackToTopBtnSvg } from '../../icons/back_to_top.svg'

const BackToTopBtnItem = styled(BackToTopBtnSvg)`
  width: 50px;
  height: 50px;
  padding: 10px;
  background-color: ${COLOR.white};
  border-radius: ${RADIUS.md};
  box-shadow: ${EFFECT.shadow_dark};
  position: fixed;
  bottom: 100px;
  right: 10px;
  display: none;
  ${(props) => props.$display && `display: block`};
  transition: ${EFFECT.transition};
  &:hover {
    transform: scale(0.9);
    background-color: ${COLOR.beige};
  }
  ${MEDIA_QUERY.md} {
    right: 50px;
  }
`
export default function BackToTopBtn() {
  const [isScrollDown, setIsScrollDown] = useState(false)
  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  window.onscroll = () => {
    setIsScrollDown(
      document.body.scrollTop > 20 || document.documentElement.scrollTop > 20
    )
  }
  return (
    <>
      <BackToTopBtnItem $display={isScrollDown} onClick={handleBackToTop} />
    </>
  )
}
