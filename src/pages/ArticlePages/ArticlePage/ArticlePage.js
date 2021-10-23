import React, { useState, useEffect, useContext, useLayoutEffect } from 'react'
import styled from 'styled-components'
import Comment from '../../../components/forumSystem/Comments'
import { FONT, COLOR, RADIUS, MEDIA_QUERY } from '../../../constants/style'
import { ReactComponent as Review } from '../../../icons/articles/review.svg'
import thumbSVG from '../../../icons/thumb_up.svg'
import thumbGreenSVG from '../../../icons/thumb_up_green.svg'
import Tags from '../../../components/forumSystem/ArticleTags'
import ArticleContent from '../../../components/forumSystem/ArticleContent'
import { getArticles, getUserLiked } from '../../../WebAPI'
import { useParams, useHistory } from 'react-router-dom'
import { AuthContext, LoadingContext } from '../../../context'
import useLike from '../../../hooks/useLike'
import SmallRegionLoading from '../../../components/common/SmallRegionLoading'
import swal from 'sweetalert'

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
      transform: translate(-2px, -2px);
      background-image: url('${thumbGreenSVG}');
      width: 25px;
      height: 25px;
    `}

  ${(props) =>
    !props.userInfo &&
    `
    pointer-events: none;  
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
  const [post, setPost] = useState([])
  const { userInfo } = useContext(AuthContext)
  const { isLoading, setIsLoading } = useContext(LoadingContext)
  const { thumb, setThumb, handleClickLike, count } = useLike()
  const [loadingLike, setLoadingLike] = useState(false)
  let history = useHistory()

  useEffect(() => {
    setIsLoading(true)
    const getPost = async () => {
      try {
        let res = await getArticles(`/${id}`)
        if (res.data.data.length > 0) {
          setPost(res.data.data[0])
          setLoadingLike(true)
        } else {
          history.goBack()
        }
      } catch (err) {
        console.log(err)
        swal('Oh 不！', '請求失敗！請稍候再試一次，或者聯繫我們。', 'error')
      }
      setIsLoading(false)
    }
    getPost()
  }, [id])

  useEffect(() => {
    const getLike = async () => {
      try {
        let res = await getUserLiked(userInfo.user_id)
        if (res.data.data.articles.length > 0) {
          res.data.data.articles.map((article) => {
            if (article.article_id == id) {
              setThumb(true)
            }
          })
        }
      } catch (err) {
        console.log(err)
        swal('Oh 不！', '請求失敗！請稍候再試一次，或者聯繫我們。', 'error')
      }
    }
    if (userInfo) {
      getLike()
    }
  }, [loadingLike, id])

  return (
    <Wrapper>
      {isLoading ? (
        <SmallRegionLoading isFullScreen />
      ) : (
        <>
          <CoverImg src={post.cover_picture_url} />
          <ArticleTitleAndLikes>
            <ArticleTitle>{post.title}</ArticleTitle>
            <ArticleLikes>
              <ThumbUp
                thumb={thumb}
                userInfo={userInfo}
                onClick={userInfo && handleClickLike}
              />
              {post.count + count}
            </ArticleLikes>
          </ArticleTitleAndLikes>
          {post.tag_names ? <Tags tags={post.tag_names.split(',')} /> : ''}
          {post.location ? (
            <ArticleStandardInformation topElement>
              地點：{post.location}
            </ArticleStandardInformation>
          ) : (
            ''
          )}
          {post.departure_time || post.end_time ? (
            <ArticleStandardInformation>
              行程日期：{new Date(post.departure_time).toLocaleDateString()}
              {new Date(post.departure_time).toLocaleDateString() !==
              new Date(post.end_time).toLocaleDateString()
                ? ` - ${new Date(post.end_time).toLocaleDateString()}`
                : ''}
            </ArticleStandardInformation>
          ) : (
            ''
          )}
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
          <ArticleContent post={post} />
          <FlexGroup>
            <ReviewIcon />
            <CommentTitle>討論區</CommentTitle>
          </FlexGroup>
          <Comment isMessage={true} />
        </>
      )}
    </Wrapper>
  )
}

export default ArticlePage
