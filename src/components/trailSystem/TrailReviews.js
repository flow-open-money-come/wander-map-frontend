import React from 'react'
import styled from 'styled-components'
import { COLOR, FONT, EFFECT, RADIUS, MEDIA_QUERY } from '../../constants/style.js'
import { ReactComponent as TitleIcon } from '../../icons/trails/review.svg'
import Comments from '../forumSystem/Comments.js'


const ReviewWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  ${MEDIA_QUERY.lg} {
    margin-bottom: 65px;
  }
`

const Title = styled.div`
  font-size: ${FONT.md};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  svg {
    margin: 0 5px;
    width: 20px;
    height: 20px;
  }
  ${MEDIA_QUERY.lg} {
    font-size: 34px;
    margin-bottom: 35px;
    svg {
      margin: 0 10px;
      width: 35px;
      height: 35px;
    }
  }
`


function TrailReviews() {
  return (
    <ReviewWrapper>
      <Title>
        <TitleIcon />
        評論區
      </Title>
      <Comments />
    </ReviewWrapper>
  )
}

export default TrailReviews
