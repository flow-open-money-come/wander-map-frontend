import React from 'react'
import styled from 'styled-components'
import { COLOR, FONT, MEDIA_QUERY } from '../../constants/style.js'
import { ReactComponent as TitleIcon } from '../../icons/trails/article.svg'
import ArticleList from '../forumSystem/Article.js'
import { Link } from 'react-router-dom'

const ArticlesWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 35px;
  ${MEDIA_QUERY.lg} {
    margin-bottom: 65px;
  }
`

const Title = styled.div`
  font-size: ${FONT.md};
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    margin: 0 5px;
    width: 20px;
    height: 20px;
  }
  ${MEDIA_QUERY.lg} {
    font-size: ${FONT.logo};
    margin-bottom: 10px;
    svg {
      margin: 0 10px;
      width: 40px;
      height: 40px;
    }
  }
`

const ArticlesContainer = styled.div`
  width: 100%;
  position: relative;
`

const More = styled(Link)`
  position: absolute;
  right: 0;
  bottom: -1;
  margin: 10px 0;
  color: ${COLOR.green};
  font-size: ${FONT.s};
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
  ${MEDIA_QUERY.lg} {
    font-size: ${FONT.md};
  }
`

function TrailArticles({ articles }) {
  return (
    <ArticlesWrapper>
      <Title>
        <TitleIcon />
        相關心得
      </Title>
      <ArticlesContainer>
        {articles.map((article) => (
          <ArticleList
            id={article.article_id}
            articleImgSrc={article.cover_picture_url}
            avatarImgSrc={'https://i.imgur.com/eGREu6v.png'}
            title={article.title}
            user={'水怪貓貓'}
            tags={['有水源', '賞花', '危險地形']}
            date={new Date(article.departure_time).toLocaleString('ja')}
            content={article.content}
          />
        ))}
        <More to={`/articles`}>看更多</More>
      </ArticlesContainer>
    </ArticlesWrapper>
  )
}

export default TrailArticles
