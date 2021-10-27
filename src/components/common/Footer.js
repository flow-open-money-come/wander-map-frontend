import styled from 'styled-components'
import { COLOR, EFFECT, FONT, MEDIA_QUERY, RADIUS } from '../../constants/style'
import { ReactComponent as GitHubIcon } from '../../icons/GitHub.svg'
import { useContext } from 'react'
import { LoadingContext } from '../../context'

const FooterContainer = styled.footer`
  width: 100%;
  background-color: ${COLOR.green};
  color: ${COLOR.white};
  font-size: ${FONT.s};
  line-height: 1.5rem;
  padding: 10px;
  position: sticky;
  bottom: 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  ${MEDIA_QUERY.lg} {
    flex-direction: row;
  }
  ${(props) =>
    props.$isLoading &&
    `
  margin-top: 86vh`}
`

const GitHubLink = styled.a`
  text-decoration: none;
  color: ${COLOR.beige};
  padding: 2px 5px;
  margin: 10px 0px 0px 10px;
  transition: ${EFFECT.transition};
  border: 1px solid ${COLOR.white};
  border-radius: ${RADIUS.s};
  display: flex;
  align-items: center;

  & svg {
    margin-right: 10px;
  }
  &:hover {
    color: ${COLOR.white};
    background-color: ${COLOR.green_light};
  }
  ${MEDIA_QUERY.lg} {
    margin: 0px 0px 0px 10px;
  }
`

export default function Footer() {
  const { isLoading } = useContext(LoadingContext)
  return (
    <>
      <FooterContainer $isLoading={isLoading}>
        Copyright © 2021 Flow Open Money Come All Rights Reserved.
        花開富貴股份有限公司版權所有。
        <GitHubLink href='https://github.com/flow-open-money-come'>
          <GitHubIcon /> Wander Map Source code.
        </GitHubLink>
      </FooterContainer>
    </>
  )
}
