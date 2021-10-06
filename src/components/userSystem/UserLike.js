import React from 'react'
import styled from 'styled-components'
import { COLOR, FONT, RADIUS, MEDIA_QUERY } from '../../constants/style'
import { ReactComponent as SearchIcon } from '../../icons/search.svg'

const Block = styled.div`
  border: 2px solid ${COLOR.green};
  border-radius: 0 ${RADIUS.s} ${RADIUS.s} ${RADIUS.s};
  width: 100%;
  min-height: 70vh;
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
  display: felx;
  justify-content: center;
  margin: 5px;
  border-bottom: 1px solid #f0eeeb;
  width: 90%;
  ${MEDIA_QUERY.md} {
    width: 95%;
  }
  ${MEDIA_QUERY.lg} {
    margin: 10px;
  }
`
const Pic = styled.img`
  margin: 20px 5px;
  width: 80px;
  height: 80px;
  border-radius: ${RADIUS.lg};
  background-color: #eee;
  ${MEDIA_QUERY.lg} {
    width: 120px;
    height: 120px;
  }
`
const Articles = styled.div`
  padding: 15px 10px;
  line-height: 1.2em;
  width: 80%;
  ${MEDIA_QUERY.md} {
    line-height: 2em;
  }
`
const ArticlesTitle = styled.div`
  font-size: ${FONT.s};
  font-weight: 700;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  ${MEDIA_QUERY.md} {
    font-size: ${FONT.md};
  }
  ${MEDIA_QUERY.lg} {
    font-size: ${FONT.lg};
  }
`
const ArticlesContent = styled.div`
  font-size: ${FONT.xs};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: normal;
  ${MEDIA_QUERY.md} {
    font-size: ${FONT.s};
  }
  ${MEDIA_QUERY.lg} {
    font-size: ${FONT.md};
  }
`
const ArticlesRead = styled.div`
  font-size: ${FONT.xs};
  color: ${COLOR.gray};
  text-align: right;
  margin: 5px;
  ${MEDIA_QUERY.md} {
    font-size: ${FONT.s};
  }
  ${MEDIA_QUERY.lg} {
    font-size: ${FONT.md};
    margin: 10px;
  }
`
export default function UserLike({ setTab, recycle, setRecycle }) {
  return (
    <Block>
      <SearchBar>
        <SearchIcon />
        <SearchField></SearchField>
      </SearchBar>
      <ArticlesWrapper>
        <Pic src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUwNfDwVwTVqqfBMLpi_e2MHnkmqRBHpvhow&usqp=CAU' />
        <Articles>
          <ArticlesTitle>礁溪林美石磐涼爽一日遊</ArticlesTitle>
          <ArticlesContent>
            林美石磐步道有著低海拔亞熱帶溪谷的景色，步道沿舊水圳整建...
          </ArticlesContent>
          <ArticlesRead>閱讀全文</ArticlesRead>
        </Articles>
      </ArticlesWrapper>
      <ArticlesWrapper>
        <Pic src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUwNfDwVwTVqqfBMLpi_e2MHnkmqRBHpvhow&usqp=CAU' />
        <Articles>
          <ArticlesTitle>
            礁溪林美石磐涼爽一日遊礁溪林美石磐涼爽一日遊 礁溪林美石磐涼爽一日遊
          </ArticlesTitle>
          <ArticlesContent>
            林美石磐步道有著低海拔亞熱帶溪谷的景色，步道沿舊水圳整建，現寬敞平緩好現寬敞平緩好現寬敞平緩好現寬敞平緩好
          </ArticlesContent>
          <ArticlesRead>閱讀全文</ArticlesRead>
        </Articles>
      </ArticlesWrapper>
      <ArticlesWrapper>
        <Pic src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUwNfDwVwTVqqfBMLpi_e2MHnkmqRBHpvhow&usqp=CAU' />
        <Articles>
          <ArticlesTitle>礁溪林美石磐涼爽一日遊</ArticlesTitle>
          <ArticlesContent>
            林美石磐步道有著低海拔亞熱帶溪谷的景色，步道沿舊水圳整建...
          </ArticlesContent>
          <ArticlesRead>閱讀全文</ArticlesRead>
        </Articles>
      </ArticlesWrapper>
    </Block>
  )
}
