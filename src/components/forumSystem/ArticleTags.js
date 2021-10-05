import React from 'react'
import styled from 'styled-components'
import { FONT, COLOR, RADIUS, MEDIA_QUERY } from '../../constants/style'

const ArticleTags = styled.div`
  border-radius: ${RADIUS.md};
  flex-wrap: wrap;
  display: flex;
  margin: 10px 0;

  ${MEDIA_QUERY.lg} {
    height: 50px;
  }
`

const ArticleTag = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  border-radius: ${RADIUS.s};
  background-color: ${COLOR.yellow_dark};
  font-size: ${FONT.xs};
  margin: 5px 3px;
  color: #ffffff;
  padding: 6px 10px;

  ${MEDIA_QUERY.md} {
    font-size: ${FONT.md};
    padding: 6px 14px;
    flex: 0 1 auto;
  }
`

export default function Tags() {
  return (
    <ArticleTags>
      <ArticleTag>一日</ArticleTag>
      <ArticleTag>有水源</ArticleTag>
      <ArticleTag>新手小白體驗</ArticleTag>
      <ArticleTag>一日</ArticleTag>
      <ArticleTag>一日</ArticleTag>
      <ArticleTag>有水源</ArticleTag>
      <ArticleTag>新手小白體驗</ArticleTag>
      <ArticleTag>一日</ArticleTag>
      <ArticleTag>一日</ArticleTag>
      <ArticleTag>一日</ArticleTag>
      <ArticleTag>有水源</ArticleTag>
      <ArticleTag>新手小白體驗</ArticleTag>
      <ArticleTag>一日</ArticleTag>
    </ArticleTags>
  )
}
