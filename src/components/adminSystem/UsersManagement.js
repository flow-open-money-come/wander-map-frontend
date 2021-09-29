import React from 'react'
import styled from 'styled-components'
import { COLOR, FONT, RADIUS } from '../../constants/style'
import { ReactComponent as UserIcon } from '../../icons/backstage/adminUser.svg'
import { ReactComponent as TrailIcon } from '../../icons/backstage/adminTrail.svg'
import { ReactComponent as ArticleIcon } from '../../icons/backstage/adminArticle.svg'
import { ReactComponent as SearchIcon } from '../../icons/search.svg'


const MEDIA_QUERY_MD = '@media screen and (min-width: 768px)'
const MEDIA_QUERY_LG = '@media screen and (min-width: 1280px)'

const line = `outline: 1px red solid`

const UsersManagementContainer = styled.div`
  width: 100%;
  margin: 20px auto;
`
const Tabs = styled.div`
  display: flex;
  align-items: center;
`

const UsersTab = styled.div`
  width: 90px;
  height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
  font-size: ${FONT.xs};
  border-radius: ${RADIUS.s} ${RADIUS.s} 0 0;
  border: 2px solid ${COLOR.green};
  border-bottom: none;
  color: white;
  background: ${COLOR.green};
  svg {
    width: 20px;
    margin: 0 2px;
  }
  rect {
    fill: ${COLOR.green};
    stroke: none;
  }
  path {
    fill: white;
    stroke: white;
  }
  ${MEDIA_QUERY_LG} {
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

const TrailsTab = styled(UsersTab)`
  color: black;
  background: white;
  rect {
    fill: white;
  }
  path {
    fill: ${COLOR.green};
    stroke: ${COLOR.green};
  }
`

const ArticlesTab = styled(TrailsTab)`
  color: ${COLOR.black};
  background: white;
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
  ${MEDIA_QUERY_LG} {
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
  ${MEDIA_QUERY_LG} {
    width: calc(100% - 30px);
    font-size: ${FONT.lg};
  }
`

const UsersTable = styled.table`
  width: 95%;
  margin: 10px auto;
`

const TableHeader = styled.tr`
  border-bottom: 1px solid ${COLOR.green};
  text-align: center;
  ${MEDIA_QUERY_LG} {
    font-size: ${FONT.md};
    font-weight: bold;
  }
`
const HeaderTd = styled.td`
  padding: 3px 0;
`

const TableContent = styled.tr`
  border-bottom: 0.5px solid #8f8f8f;
  text-align: center;
  ${MEDIA_QUERY_LG} {
    font-size: ${FONT.md};
  }
`
const ContentTd = styled.td`
  padding: 15px 0 5px 0;
`

const NicknameTd = styled(ContentTd)`
  width: 60px;
  overflow: auto;
  ${MEDIA_QUERY_LG} {
    width: 200px;
  }
`

const EmailTd = styled(ContentTd)`
  width: 120px;
  overflow: auto;
  ${MEDIA_QUERY_LG} {
    width: 400px;
  }
`

const StatusBtn = styled.button`
  font-size: ${FONT.xs};
  border: 1px solid #8f8f8f;
  border-radius: ${RADIUS.s};
  padding: 2px 4px;

  &:hover {
    background: ${COLOR.pink};
    border: 1px solid ${COLOR.pink};
    color: white;
    cursor: pointer;
  }

  ${MEDIA_QUERY_LG} {
    font-size: ${FONT.md};
    padding: 2px 12px;
  }
`


function UsersManagement({ setTab }) {
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
        <UsersTable>
          <TableHeader>
            <HeaderTd>暱稱</HeaderTd>
            <HeaderTd>帳號</HeaderTd>
            <HeaderTd>入會日期</HeaderTd>
            <HeaderTd>狀態</HeaderTd>
          </TableHeader>
          <TableContent>
            <NicknameTd>胖虎</NicknameTd>
            <EmailTd>woo.123.com</EmailTd>
            <ContentTd>2000.01.01</ContentTd>
            <ContentTd>
              <StatusBtn>一般</StatusBtn>
            </ContentTd>
          </TableContent>
          <TableContent>
            <NicknameTd>胖虎</NicknameTd>
            <EmailTd>woo.123.com</EmailTd>
            <ContentTd>2000.01.01</ContentTd>
            <ContentTd>
              <StatusBtn>停權</StatusBtn>
            </ContentTd>
          </TableContent>
        </UsersTable>
      </Block>
    </UsersManagementContainer>
  )
}

export default UsersManagement
