import React from 'react'
import styled from 'styled-components'
import { COLOR, FONT, EFFECT, RADIUS, MEDIA_QUERY } from '../../constants/style'
import { ReactComponent as ArticleManageIcon } from '../../icons/user/user_article_manage.svg'
import { ReactComponent as TodosIcon } from '../../icons/user/user_todos.svg'
import { ReactComponent as LikeArticlesIcon } from '../../icons/user/user_like_article.svg'
import { ReactComponent as CollectTrailsIcon } from '../../icons/user/user_collect_trail.svg'
import { ReactComponent as SearchIcon } from '../../icons/search.svg'
import { ReactComponent as BinIcon } from '../../icons/backstage/bin.svg'
import { ReactComponent as EditIcon } from '../../icons/user/user_article_manage_edit.svg'

const Tabs = styled.div`
  display: flex;
  align-items: center;
`

const UsersManagementContainer = styled.div`
  width: 100%;
  margin: 20px auto;
  ${MEDIA_QUERY.lg} {
    width: 70%;
  }
`
const TodosTab = styled.div`
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
const ArticlesTab = styled(TodosTab)`
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
const CollectTab = styled(TodosTab)``
const LikeTab = styled(TodosTab)``

const TabTitle = styled.div`
  display: none;
  ${MEDIA_QUERY.md} {
    display: block;
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
const TrailsTable = styled.table`
  margin: 10px auto;
  width: 90%;
  display: block;
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
  display: none;
  ${MEDIA_QUERY.md} {
    display: inline;
    text-align: start;
  }
`

const TrailImg = styled.img`
  display: none;
  ${MEDIA_QUERY.md} {
    margin: 20px 5px;
    display: inline;
    width: 80px;
    height: 80px;
    border-radius: ${RADIUS.lg};
  }
`

const TrailsTd = styled.td`
  width: 90%;
  min-width: 180px;
  text-align: start;
  padding: 10px;
  vertical-align: middle;
  ${MEDIA_QUERY.md} {
    width: 80%;
  }
`

const BtnTd = styled.td`
  vertical-align: middle;
  svg {
    width: 20px;
    height: 20px;
    margin: 0 5px;
  }
  ${MEDIA_QUERY.lg} {
    svg {
      width: 30px;
      height: 30px;
      margin: 0 8px;
    }
  }
`

export default function UserArticlesManage({ setTab, recycle, setRecycle }) {
  return (
    <UsersManagementContainer>
      <Tabs>
        <ArticlesTab
          onClick={() => {
            setTab('Articles')
          }}
        >
          <ArticleManageIcon />
          <TabTitle>文章管理</TabTitle>
        </ArticlesTab>
        <TodosTab
          onClick={() => {
            setTab('Todos')
          }}
        >
          <TodosIcon />
          <TabTitle>裝備清單</TabTitle>
        </TodosTab>
        <CollectTab
          onClick={() => {
            setTab('Collect')
          }}
        >
          <CollectTrailsIcon />
          <TabTitle>收藏步道</TabTitle>
        </CollectTab>
        <LikeTab
          onClick={() => {
            setTab('Like')
          }}
        >
          <LikeArticlesIcon />
          <TabTitle>按讚心得</TabTitle>
        </LikeTab>
      </Tabs>
      <Block>
        <SearchBar>
          <SearchIcon />
          <SearchField></SearchField>
        </SearchBar>
        <TrailsTable>
          <TableContent>
            <CoverTd>
              <TrailImg src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYWSx3Oc7QWYbB59GeeEE6JgBPIznP7_G9hQ&usqp=CAU' />
            </CoverTd>
            <TrailsTd>
              <a>大雪山國家森林遊樂區一日遊</a>
            </TrailsTd>
            <BtnTd>
              <a>
                <EditIcon />
              </a>
            </BtnTd>
            <BtnTd>
              <a>
                <BinIcon />
              </a>
            </BtnTd>
          </TableContent>
          <TableContent>
            <CoverTd>
              <TrailImg src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYWSx3Oc7QWYbB59GeeEE6JgBPIznP7_G9hQ&usqp=CAU' />
            </CoverTd>
            <TrailsTd>
              <a>大雪山國家森林遊樂區一日遊</a>
            </TrailsTd>
            <BtnTd>
              <a>
                <EditIcon />
              </a>
            </BtnTd>
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