import React, { useState, useEffect } from 'react'
import { getUserLiked } from '../../WebAPI'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { COLOR, FONT, RADIUS, MEDIA_QUERY } from '../../constants/style'
import { ReactComponent as SearchIcon } from '../../icons/search.svg'
import { ReactComponent as EmptyIcon } from '../../icons/user/user_empty_collect.svg'
import ArticleList from '../forumSystem/Article'

const Block = styled.div`
  border: 2px solid ${COLOR.green};
  border-radius: 0 ${RADIUS.s} ${RADIUS.s} ${RADIUS.s};
  width: 100%;
  min-height: 70vh;
  height: 400px;
  overflow-y: scroll;
  overflow-x: hidden;
`
const SearchBar = styled.div`
  border: 1px solid #c4c4c4;
  border-radius: ${RADIUS.s};
  width: 95%;
  height: 25px;
  margin: 10px auto;
  display: flex;
  align-items: center;
  padding-left: 3px;
  ${MEDIA_QUERY.lg} {
    margin: 30px auto;
    height: 45px;
    svg {
      width: 30px;
      height: 30px;
      margin: 0 5px;
    }
  }
`
const SearchField = styled.input`
  width: calc(100% - 20px);
  border: none;
  outline: none;
  ${MEDIA_QUERY.lg} {
    width: calc(100% - 30px);
    font-size: ${FONT.lg};
  }
`
const ArticlesWrapper = styled.div`
  margin: 20px auto;
  width: 90%;
  position: relative;
  ${MEDIA_QUERY.md} {
    width: 95%;
  }
  ${MEDIA_QUERY.lg} {
    margin: 50px auto;
  }
`
const EmptyInfo = styled.div`
  margin: 50px auto;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  opacity: 0.8;
  svg {
    width: 130px;
    height: 130px;
    margin: 0 20px;
  }
`
const EmptyMsg = styled.div`
  font-size: ${FONT.md};
  font-weight: bold;
  color: ${COLOR.gray};
`

export default function UserLike() {
  const [userLikeData, setUserLikeData] = useState({
    articles: [{ author_id: '', tag_names: '' }],
  })
  const { userID } = useParams()

  useEffect(() => {
    getUserLiked(userID)
      .then((res) => {
        setUserLikeData(res.data.data)
      })
      .catch((err) => {
        console.log(err.response.data)
      })
  }, [])

  return (
    <Block>
      <SearchBar style={{ display: 'none' }}>
        <SearchIcon />
        <SearchField></SearchField>
      </SearchBar>
      <ArticlesWrapper>
        {userLikeData.articles.length !== 0 ? (
          userLikeData.articles.map((article) => (
            <ArticleList
              key={article.article_id}
              articleImgSrc={article.cover_picture_url}
              avatarImgSrc={''}
              title={article.title}
              user={''}
              tags={article.tag_names.split(',')}
              date={article.created_at}
              content={article.content}
              lessRwd={true}
            />
          ))
        ) : (
          <EmptyInfo>
            <EmptyIcon />
            <EmptyMsg>
              還沒有按讚喔～
              <br />
              快去看看大家的心得分享吧
            </EmptyMsg>
          </EmptyInfo>
        )}
      </ArticlesWrapper>
    </Block>
  )
}
