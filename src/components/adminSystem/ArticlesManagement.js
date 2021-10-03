import React from 'react'
import styled from 'styled-components'
import { COLOR, FONT, RADIUS, MEDIA_QUERY } from '../../constants/style'
import { ReactComponent as UserIcon } from '../../icons/backstage/adminUser.svg'
import { ReactComponent as TrailIcon } from '../../icons/backstage/adminTrail.svg'
import { ReactComponent as ArticleIcon } from '../../icons/backstage/adminArticle.svg'
import { ReactComponent as SearchIcon } from '../../icons/search.svg'
import { ReactComponent as BinIcon } from '../../icons/backstage/bin.svg'


const UsersManagementContainer = styled.div`
  width: 100%;
  margin: 20px auto;
`
const Tabs = styled.div`
  display: flex;
  align-items: center;
`

const UsersTab = styled.div`
  width: 30%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
  font-size: ${FONT.s};
  border-radius: ${RADIUS.s} ${RADIUS.s} 0 0;
  border: 2px solid ${COLOR.green};
  border-bottom: none;
  color: black;
  background: white;
  svg {
    width: 20px;
    margin: 0 2px;
  }
  rect {
    stroke: none;
  }
  ${MEDIA_QUERY.md} {
    font-size: ${FONT.md};
  }
  ${MEDIA_QUERY.lg} {
    width: 200px;
    height: 50px;
    margin-right: 20px;
    font-size: ${FONT.lg};
    svg {
      width: 40px;
      margin: 0 2px;
    }

    &:hover {
      cursor: pointer;
      background: ${COLOR.green};
      color: ${COLOR.white};
      path {
        fill: white;
        stroke: white;
      }
      rect {
        fill: ${COLOR.green};
      }
    }
  }
`

const TrailsTab = styled(UsersTab)``

const ArticlesTab = styled(UsersTab)`
  color: white;
  background: ${COLOR.green};
  rect {
    fill: ${COLOR.green};
  }
  path {
    fill: white;
    stroke: white;
  }
`

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
    svg{
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

const RecycleBlock = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  height: 15px;
  ${MEDIA_QUERY.md} {
    height: 25px;
  }
  ${MEDIA_QUERY.lg} {
    height: 40px;
  }
`

const RecycleTitle = styled.div`
  font-size: ${FONT.s};
  ${MEDIA_QUERY.md} {
    font-size: ${FONT.lg};
  }
  ${MEDIA_QUERY.lg} {
    font-size: ${FONT.logo};
  }
`

const BackBtn = styled.button`
  position: absolute;
  right: 0;
  margin: 0 10px;
  font-size: ${FONT.xs};
  color: ${COLOR.green};
  &:hover {
    cursor: pointer;
  }
  ${MEDIA_QUERY.md} {
    margin: 0 20px;
    font-size: ${FONT.md};
  }
  ${MEDIA_QUERY.lg} {
    margin: 0 50px;
    font-size: ${FONT.lg};
  }
`

const RecycleBin = styled.div`
  position: absolute;
  right: 0;
  margin: 0 10px;
  path {
    fill: ${COLOR.pink};
  }
  &:hover {
    cursor: pointer;
  }
  ${MEDIA_QUERY.md} {
    margin: 0 20px;
    svg {
      width: 25px;
      height: 25px;
    }
  }
  ${MEDIA_QUERY.lg} {
    margin: 0 50px;
    svg {
      width: 35px;
      height: 35px;
    }
  }
`

const TrailsTable = styled.table`
  margin: 10px auto;
  border-top: 2px solid ${COLOR.green};
  width: 95%;
  display: block;
  overflow-x: auto;
  white-space: nowrap;
`


const TableContent = styled.tr`
  text-align: center;
  font-size: ${FONT.s};
  ${MEDIA_QUERY.md} {
    font-size: ${FONT.md};
  }
  ${MEDIA_QUERY.lg} {
    font-size: ${FONT.lg};
  }
`

const CoverTd = styled.td`
  text-align: start;
  padding: 5px 0 3px 0;
  width: 10%;
  ${MEDIA_QUERY.lg} {
    width: 5%;
  }
`

const TrailImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: ${RADIUS.s};
  ${MEDIA_QUERY.lg} {
    width: 80px;
    height: 80px;
  }
`

const TrailsTd = styled.td`
  width: 60%;
  min-width: 180px;
  overflow: auto;
  text-align: start;
  padding: 0 3px;
  vertical-align: middle;
  ${MEDIA_QUERY.lg} {
    width: 600px;
    padding-left: 30px;
  }
`

const CreatorTd = styled.td`
  width: 10%;
  min-width: 50px;
  padding: 0 3px;
  vertical-align: middle;
  ${MEDIA_QUERY.lg} {
    width: 150px;
  }
`
const DateTd = styled.td`
  width: 20%;
  min-width: 50px;
  padding: 0 3px;
  vertical-align: middle;
  ${MEDIA_QUERY.lg} {
    width: 150px;
  }
`

const BtnTd = styled.td`
  min-width: 40px;
  vertical-align: middle;
  svg {
    margin: 0 2px;
  }
  ${MEDIA_QUERY.lg} {
    width: 5%;
    svg {
      width: 30px;
      height: 30px;
      margin: 0 8px;
    }
  }
`


function ArticlesManagement({ setTab, recycle, setRecycle }) {
  return (
    <UsersManagementContainer>
      <Tabs>
        <UsersTab
          onClick={() => {
            setTab('Users')
          }}
        >
          <UserIcon />
          會員資料
        </UsersTab>
        <TrailsTab
          onClick={() => {
            setTab('Trails')
          }}
        >
          <TrailIcon />
          步道列表
        </TrailsTab>
        <ArticlesTab
          onClick={() => {
            setTab('Articles')
          }}
        >
          <ArticleIcon />
          心得列表
        </ArticlesTab>
      </Tabs>
      <Block>
        <SearchBar>
          <SearchIcon />
          <SearchField></SearchField>
        </SearchBar>
        <RecycleBlock>
          {recycle && (
            <>
              <RecycleTitle>刪除列表</RecycleTitle>
              <BackBtn
                onClick={() => {
                  setRecycle(false)
                }}
              >
                返回
              </BackBtn>
            </>
          )}
          {!recycle && (
            <RecycleBin
              onClick={() => {
                setRecycle(true)
              }}
            >
              <BinIcon />
            </RecycleBin>
          )}
        </RecycleBlock>
        <TrailsTable>
          <TableContent>
            <CoverTd>
              <TrailImg src='https://recreation.forest.gov.tw/Files/RT/Photo/001/05/001.jpg' />
            </CoverTd>
            <TrailsTd>
              <a>大雪山國家森林遊樂區一日遊</a>
            </TrailsTd>
            <CreatorTd>
              <a>admin</a>
            </CreatorTd>
            <DateTd>2000-01-01</DateTd>
            <BtnTd>
              <a>
                <BinIcon />
              </a>
            </BtnTd>
          </TableContent>
          <TableContent>
            <CoverTd>
              <TrailImg src='https://recreation.forest.gov.tw/Files/RT/Photo/001/05/001.jpg' />
            </CoverTd>
            <TrailsTd>
              <a>大雪山國家森林遊樂區一日遊</a>
            </TrailsTd>
            <CreatorTd>
              <a>admin</a>
            </CreatorTd>
            <DateTd>2000-01-01</DateTd>
            <BtnTd>
              <a>
                <BinIcon />
              </a>
            </BtnTd>
          </TableContent>
        </TrailsTable>
      </Block>
    </UsersManagementContainer>
  )
}

export default ArticlesManagement
