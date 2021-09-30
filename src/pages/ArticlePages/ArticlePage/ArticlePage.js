import React from 'react'
import styled from 'styled-components'
import Comment from '../../../components/forumSystem/Comment'
import {
  FONT,
  COLOR,
  EFFECT,
  RADIUS,
  MEDIA_QUERY,
} from '../../../constants/style'

const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  ${MEDIA_QUERY.md} {
    width: 90%;
    display: flex;
    font-size: ${FONT.md};
  }
`

function ArticlePage() {
  return (
    <Wrapper>
      <Comment />
    </Wrapper>
  )
}

export default ArticlePage
