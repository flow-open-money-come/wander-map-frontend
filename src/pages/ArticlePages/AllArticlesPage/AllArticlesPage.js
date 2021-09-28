import React from 'react'
import styled from 'styled-components'
import { ReactComponent as hot } from '../../../icons/hot.svg'
import { FONT, COLOR, EFFECT, RADIUS } from '../../../constants/style'

const Wrapper = styled.div``

const Title = styled.h1`
  font-size: 48px;
  @media screen and (max-width: 500px) {
    font-size: ${FONT.md};
  }
`

const HotICon = styled(hot)`
  width: 29px;
  height: 29px;
`

function AllArticlesPage() {
  return (
    <Wrapper>
      <HotICon />
      <Title>熱門文章</Title>
    </Wrapper>
  )
}

export default AllArticlesPage
