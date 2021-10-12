import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Comment from '../../../components/forumSystem/Comments'
import { FONT, COLOR, RADIUS, MEDIA_QUERY } from '../../../constants/style'
import { ReactComponent as Review } from '../../../icons/articles/review.svg'
import thumbSVG from '../../../icons/thumb_up.svg'
import thumbGreenSVG from '../../../icons/thumb_up_green.svg'
import Tags from '../../../components/forumSystem/ArticleTags'
import ArticleContent from '../../../components/forumSystem/ArticleContent'
import { apiArticle, apiMessages } from '../../../WebAPI'
import { useParams } from 'react-router-dom'

const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  ${MEDIA_QUERY.md} {
    font-size: ${FONT.md};
    width: 80%;
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
    font-size: ${FONT.logo};
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
`

const ThumbUp = styled.span`
  background-image: url('${thumbSVG}');
  background-size: contain;
  width: 30px;
  height: 30px;
  cursor: pointer;
  margin-right: 5px;
  justify-content: center;

  ${(props) =>
    props.thumb &&
    `
      background-image: url('${thumbGreenSVG}');
      width: 25px;
      height: 25px;
    `}
`

const ArticleTitleAndLikes = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const ArticleStandardInformation = styled.div`
  margin: 7px 0;

  ${(props) =>
    props.topElement &&
    `
     margin: 21px 0 7px 0; 
  `}
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
    font-size: ${FONT.logo};
  }
`

const FlexGroup = styled.div`
  display: flex;
  align-items: center;
  margin: 20px auto;
`

function ArticlePage() {
  const { id } = useParams()
  const [thumb, setThumb] = useState(false)
  const [post, setPost] = useState([])
  const [value, setValue] = useState('')
  const [messages, setMessages] = useState([])

  useEffect(() => {
    const getPost = async () => {
      try {
        let res = await apiArticle(id)
        setPost(res.data.data[0])
      } catch (err) {
        console.log(err)
      }
    }
    getPost()
  }, [])

  useEffect(() => {
    const getMessage = async () => {
      try {
        let res = await apiMessages(id)
        setMessages(res.data.data)
      } catch (err) {
        console.log(err)
      }
    }
    getMessage()
  }, [value])

  return (
    <Wrapper>
      <CoverImg src={post.cover_picture_url} />
      <ArticleTitleAndLikes>
        <ArticleTitle>{post.title}</ArticleTitle>
        <ArticleLikes>
          <ThumbUp
            thumb={thumb}
            onClick={() => {
              setThumb(!thumb)
            }}
          />
          {/* {post.likes} */}
        </ArticleLikes>
      </ArticleTitleAndLikes>
      {post.tag_names ? <Tags tags={post.tag_names.split(',')} /> : ''}
      <ArticleStandardInformation topElement>
        地點：{post.location}
      </ArticleStandardInformation>
      <ArticleStandardInformation>
        出發時間：{new Date(post.departure_time).toLocaleString()}
      </ArticleStandardInformation>
      {/* {post.time_spent ? (
        <ArticleStandardInformation>
          行進時間：{post.time_spent} 小時
        </ArticleStandardInformation>
      ) : (
        ''
      )}
      {post.length ? (
        <ArticleStandardInformation>
          距離：{post.length} 公里
        </ArticleStandardInformation>
      ) : (
        ''
      )}
      {post.gpx_url ? (
        <ArticleStandardInformation>
          GPX：{post.gpx_url}
        </ArticleStandardInformation>
      ) : (
        ''
      )} */}
      <ArticleContent content={post.content} />
      <FlexGroup>
        <ReviewIcon />
        <CommentTitle>討論區</CommentTitle>
      </FlexGroup>
      <Comment
        value={value}
        setValue={setValue}
        setMessages={setMessages}
        messages={messages}
      />
    </Wrapper>
  )
}

export default ArticlePage
