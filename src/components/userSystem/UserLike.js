import React from 'react'
import styled from 'styled-components'
import { COLOR, FONT, RADIUS, MEDIA_QUERY } from '../../constants/style'
import { ReactComponent as SearchIcon } from '../../icons/search.svg'
import ArticleList from '../forumSystem/Article'

const Block = styled.div`
  border: 2px solid ${COLOR.green};
  border-radius: 0 ${RADIUS.s} ${RADIUS.s} ${RADIUS.s};
  width: 100%;
  min-height: 70vh;
  height: 400px;
  overflow: scroll;
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

export default function UserLike() {
  return (
    <Block>
      <SearchBar>
        <SearchIcon />
        <SearchField></SearchField>
      </SearchBar>
      <ArticlesWrapper>
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
          lessRwd
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
          lessRwd
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
          lessRwd
        />

        <More>看更多</More>
      </ArticlesWrapper>
    </Block>
  )
}
