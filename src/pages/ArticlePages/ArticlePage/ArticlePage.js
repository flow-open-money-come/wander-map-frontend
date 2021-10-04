import React, { useState } from 'react'
import styled from 'styled-components'
import Comment from '../../../components/forumSystem/Comment'
import { FONT, COLOR, RADIUS, MEDIA_QUERY } from '../../../constants/style'
import { ReactComponent as Review } from '../../../icons/articles/review.svg'
import Tags from '../../../components/forumSystem/ArticleTags'
import ArticleContent from '../../../components/forumSystem/ArticleContent'

const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  ${MEDIA_QUERY.md} {
    font-size: ${FONT.md};
  }
`

const ArticleTitle = styled.div`
  font-weight: bold;
  display: flex;
  padding: 5px;
  font-size: ${FONT.md};

  ${MEDIA_QUERY.md} {
    flex: 0 1 auto;
    padding: 10px 10px 8px 0;
    font-size: ${FONT.xl};
  }

  ${MEDIA_QUERY.lg} {
    font-size: ${FONT.xll};
  }
`

const ArticleLikes = styled.span`
  align-items: flex-end;
  display: flex;
  margin-right: 7px;
  color: ${COLOR.green};
  font-size: ${FONT.md};

  ${MEDIA_QUERY.md} {
    font-size: ${FONT.logo};
  }

  ${MEDIA_QUERY.lg} {
    font-size: ${FONT.xl};
  }
`

const ThumbUp = styled.span`
  background-image: url('https://i.imgur.com/gE3TYlC.png');
  background-size: contain;
  width: 30px;
  height: 30px;
  cursor: pointer;
  margin-right: 5px;

  ${MEDIA_QUERY.lg} {
    width: 45px;
    height: 45px;
  }

  ${(props) =>
    props.thumb &&
    `
    background-image: url('https://i.imgur.com/aJBAUDX.png');
    `}
`

const ArticleTitleAndLikes = styled.div`
  display: flex;
  justify-content: space-between;
`

const CoverImg = styled.img`
  width: 100%;
  height: 40%;
  justify-content: center;
  margin: 20px 0;
  border-radius: ${RADIUS.lg};

  ${MEDIA_QUERY.md} {
    margin: 61px 0 44px 0;
  }
`

const ArticleDepartureTime = styled.div`
  margin: 7px 0;
`

const ArticleLocation = styled.div`
  margin: 21px 0 7px 0;
`

const ReviewIcon = styled(Review)`
  width: 20px;
  height: 20px;

  ${MEDIA_QUERY} {
    width: 25px;
    height: 25px;
  }
  ${MEDIA_QUERY.lg} {
    width: 40px;
    height: 40px;
  }
`

const CommentTitle = styled.h1`
  font-size: ${FONT.md};
  margin-left: 5px;

  ${MEDIA_QUERY.md} {
    font-size: ${FONT.lg};
  }

  ${MEDIA_QUERY.lg} {
    font-size: ${FONT.xl};
  }
`

const FlexGroup = styled.div`
  display: flex;
  align-items: center;
  margin: 20px auto;
`

function ArticlePage() {
  const [thumb, setThumb] = useState(false)

  return (
    <Wrapper>
      <CoverImg src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Dawu_Mt%2BHunag_Chung_Yu%E9%BB%83%E4%B8%AD%E4%BD%91%2B17755.jpg/2560px-Dawu_Mt%2BHunag_Chung_Yu%E9%BB%83%E4%B8%AD%E4%BD%91%2B17755.jpg' />
      <ArticleTitleAndLikes>
        <ArticleTitle>林美石磐步道</ArticleTitle>
        <ArticleLikes>
          <ThumbUp
            thumb={thumb}
            onClick={() => {
              setThumb(!thumb)
            }}
          />
          300
        </ArticleLikes>
      </ArticleTitleAndLikes>
      <Tags />
      <ArticleLocation>地點：宜蘭縣礁溪鄉 林美石磐步道</ArticleLocation>
      <ArticleDepartureTime>
        出發時間：2000.01.02 ~ 2000.01.03
      </ArticleDepartureTime>
      <ArticleContent />
      <FlexGroup>
        <ReviewIcon />
        <CommentTitle>討論區</CommentTitle>
      </FlexGroup>
      <Comment />
    </Wrapper>
  )
}

export default ArticlePage
