import styled from 'styled-components'
import { COLOR, FONT } from '../../constants/style'

const FooterContainer = styled.footer`
  width: 100%;
  max-height: 60px;
  padding: 0px 10px;
  background-color: ${COLOR.green};
  color: ${COLOR.white};
  font-size: ${FONT.s};
  text-align: center;
  line-height: 30px;
  position: fixed;
  bottom: 0;
  margin-top: 20px;
`
export default function Footer() {
  return (
    <>
      <FooterContainer>
        Copyright © 2021 Flow Open Money Come All Rights Reserved.
        花開富貴股份有限公司版權所有
      </FooterContainer>
    </>
  )
}
