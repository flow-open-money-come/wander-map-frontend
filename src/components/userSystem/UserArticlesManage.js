import React, { useState, useEffect } from 'react'
import { getUserArticles } from '../../WebAPI'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { COLOR, FONT, EFFECT, RADIUS, MEDIA_QUERY } from '../../constants/style'
import { ReactComponent as SearchIcon } from '../../icons/search.svg'
import { ReactComponent as BinIcon } from '../../icons/backstage/bin.svg'
import { ReactComponent as EditIcon } from '../../icons/user/user_article_manage_edit.svg'
import { ReactComponent as PostIcon } from '../../icons/user/user_post.svg'

const Block = styled.div`
  border: 2px solid ${COLOR.green};
  border-radius: 0 ${RADIUS.s} ${RADIUS.s} ${RADIUS.s};
  width: 100%;
  min-height: 70vh;
  height: 400px;
  overflow-y: scroll;
  overflow-x: hidden;
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

const PostLink = styled.div`
  text-align: right;
  opacity: 0.8;
  svg {
    width: 30px;
    height: 30px;
    margin: 20px;
    &:hover {
      cursor: pointer;
      transition: ${EFFECT.transition};
      transform: scale(1.5);
      transform-origin: (15px, 0);
      opacity: 1;
    }
  }
`
const TrailsTable = styled.table`
  margin: 10px auto;
  width: 90%;
  display: block;
  ${MEDIA_QUERY.lg} {
    height: 400px;
  }
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
  const [userArticlesData, setUserArticlesData] = useState({
    articles: [
      {
        title: '',
        content: '',
        cover_picture_url: '',
        created_at: '',
      },
    ],
  })
  const { userID } = useParams()

  useEffect(() => {
    getUserArticles(userID)
      .then((res) => {
        console.log(res.data)
        setUserArticlesData(res.data.data)
      })
      .catch((err) => {
        console.log(err.response.data)
      })
  }, [])

  return (
    <Block>
      <SearchBar>
        <SearchIcon />
        <SearchField></SearchField>
      </SearchBar>
      <PostLink>
        <Link to={`../post-article`}>
          <PostIcon />
        </Link>
      </PostLink>
      <TrailsTable>
        {userArticlesData.articles.map((article) => (
          <TableContent>
            <CoverTd>
              <TrailImg src={article.cover_picture_url} />
            </CoverTd>
            <TrailsTd>{article.title}</TrailsTd>
            <BtnTd>
              <Link to={`../patch-article/${article.article_id}`}>
                <EditIcon />
              </Link>
            </BtnTd>
            <BtnTd>
              <BinIcon />
            </BtnTd>
          </TableContent>
        ))}
      </TrailsTable>
    </Block>
  )
}
