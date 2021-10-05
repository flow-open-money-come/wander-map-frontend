import React from 'react'
import styled from 'styled-components'
import { COLOR, FONT, MEDIA_QUERY } from '../../constants/style.js'
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
  width: 100%;
  position: relative;
`

const More = styled.div`
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

function TrailArticles() {
  return (
    <ArticlesWrapper>
      <Title>
        <TitleIcon />
        相關心得
      </Title>
      <ArticlesContainer>
        <ArticleList
          articleImgSrc={'https://i.imgur.com/w2Y6y4z.jpg'}
          avatarImgSrc={'https://i.imgur.com/eGREu6v.png'}
          title={'礁溪林美石磐涼爽一日遊'}
          user={'水怪貓貓'}
          tags={['有水源', '賞花', '危險地形']}
          date={'2021.9.7 / 20:20:22'}
          content={`林美石磐步道有著低海拔亞熱帶溪谷的景色，步道沿舊水圳整建，
          現寬敞平緩好走、又不失幽幽古意；沿途生態豐富，樹林成蔭，
          潺潺流水，散發陣陣芬多精，走在其中清爽無比...`}
        />
        <ArticleList
          articleImgSrc={'https://i.imgur.com/w2Y6y4z.jpg'}
          avatarImgSrc={'https://i.imgur.com/eGREu6v.png'}
          title={'礁溪林美石磐涼爽一日遊'}
          user={'水怪貓貓'}
          tags={['有水源', '賞花', '危險地形']}
          date={'2021.9.7 / 20:20:22'}
          content={`林美石磐步道有著低海拔亞熱帶溪谷的景色，步道沿舊水圳整建，
          現寬敞平緩好走、又不失幽幽古意；沿途生態豐富，樹林成蔭，
          潺潺流水，散發陣陣芬多精，走在其中清爽無比...`}
        />
        <ArticleList
          articleImgSrc={'https://i.imgur.com/w2Y6y4z.jpg'}
          avatarImgSrc={'https://i.imgur.com/eGREu6v.png'}
          title={'礁溪林美石磐涼爽一日遊'}
          user={'水怪貓貓'}
          tags={['有水源', '賞花', '危險地形']}
          date={'2021.9.7 / 20:20:22'}
          content={`林美石磐步道有著低海拔亞熱帶溪谷的景色，步道沿舊水圳整建，
          現寬敞平緩好走、又不失幽幽古意；沿途生態豐富，樹林成蔭，
          潺潺流水，散發陣陣芬多精，走在其中清爽無比...`}
        />
        <More>看更多</More>
      </ArticlesContainer>
    </ArticlesWrapper>
  )
}

export default TrailArticles
