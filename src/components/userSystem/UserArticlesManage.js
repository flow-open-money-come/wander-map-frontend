import React from 'react'
import styled from 'styled-components'
import { COLOR, FONT, RADIUS, MEDIA_QUERY } from '../../constants/style'
import { ReactComponent as SearchIcon } from '../../icons/search.svg'
import { ReactComponent as BinIcon } from '../../icons/backstage/bin.svg'
import { ReactComponent as EditIcon } from '../../icons/user/user_article_manage_edit.svg'

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
  border-bottom: 1px solid #f0eeeb;
  ${MEDIA_QUERY.md} {
    font-size: ${FONT.md};
  }
  ${MEDIA_QUERY.lg} {
    font-size: ${FONT.lg};
  }
`

const CoverTd = styled.td`
  display: inline;
  text-align: start;
`

const TrailImg = styled.img`
  margin: 20px 5px;
  width: 80px;
  height: 80px;
  border-radius: ${RADIUS.lg};
  background-color: #eee;
  ${MEDIA_QUERY.md} {
    width: 120px;
    height: 120px;
  }
`

const TrailsTd = styled.td`
  width: 70%;
  text-align: start;
  padding: 10px;
  vertical-align: middle;
  font-size: ${FONT.md};
  font-weight: 700;
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

export default function UserArticlesManage() {
  return (
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
            <a>礁溪林美石磐涼爽一日遊</a>
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
  )
}
