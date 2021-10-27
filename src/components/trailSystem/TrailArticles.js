import React from 'react'
import styled from 'styled-components'
import { FONT, MEDIA_QUERY } from '../../constants/style.js'
import { ReactComponent as TitleIcon } from '../../icons/trails/article.svg'
import ArticleList from '../forumSystem/Article.js'

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
  max-height: 650px;
  overflow: auto;
  width: 100%;
  position: relative;
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
            key={article.article_id}
            id={article.article_id}
            articleImgSrc={article.cover_picture_url}
            avatarImgSrc={article.icon_url}
            title={article.title}
            user={article.author_name}
            tags={!article.tag_names ? [] : article.tag_names.split(',')}
            date={new Date(
              new Date(article.created_at).getTime() + 8 * 3600 * 1000
            ).toLocaleString('ja')}
            content={article.content}
            articlePage={`/articles/${article.article_id}`}
            authorId={article.author_id}
          />
        ))}
      </ArticlesContainer>
    </ArticlesWrapper>
  )
}

export default TrailArticles
