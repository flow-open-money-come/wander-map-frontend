import React, { useEffect, useState, useContext } from 'react'
import styled from 'styled-components'
import { COLOR, FONT, RADIUS, MEDIA_QUERY } from '../../constants/style'
import { ReactComponent as SearchIcon } from '../../icons/search.svg'
import { ReactComponent as BinIcon } from '../../icons/backstage/bin.svg'
import { ReactComponent as RecoverIcon } from '../../icons/backstage/refresh.svg'
import { getArticles, deleteArticle, getDeletedArticle, recoverArticle } from '../../WebAPI'
import { Link } from 'react-router-dom'
import { AuthContext, LoadingContext } from '../../context'
import Pagination from './Pagination'
import { getAuthToken } from '../../utils'
import Loading from '../common/Loading'

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
      width: 25px;
      height: 25px;
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
    width: 60px;
    height: 60px;
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
    padding-left: 20px;
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
const DateTd = styled(CreatorTd)``

const BtnTd = styled.td`
  min-width: 40px;
  vertical-align: middle;
  svg {
    margin: 0 2px;
    &:hover {
      cursor: pointer;
    }
  }
  ${MEDIA_QUERY.lg} {
    width: 5%;
    svg {
      width: 20px;
      height: 20px;
      margin: 0 8px;
    }
  }
`
const LinkDefault = styled(Link)`
  color: black;
`

function ArticlesManagement({ recycle, setRecycle }) {
  const [articles, setArticles] = useState(null)
  const [deletedArticles, setDeletedArticles] = useState(null)
  const [searchValue, setSearchValue] = useState('')
  const [searchResults, setSearchResults] = useState('')
  const { userInfo } = useContext(AuthContext)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const { isLoading, setIsLoading } = useContext(LoadingContext)

  useEffect(() => {
    setIsLoading(true)
    getArticles(`?offset=${(page - 1) * 20}&search=${searchResults}`)
      .then((res) => {
        setArticles(res.data.data)
        setTotalPages(Math.ceil(res.headers['x-total-count'] / 20))
        setIsLoading(false)
      })
      .catch((err) => console.error(err))
    getDeletedArticle(`?offset=${(page - 1) * 20}`)
      .then((res) => setDeletedArticles(res.data.data))
      .catch((err) => console.error(err))
  }, [page, searchResults, recycle, setIsLoading])

  useEffect(() => {
    if (!searchValue) setSearchResults('')
  }, [searchValue])


  const handleDelete = (articleID, articleTitle) => {
    if (!userInfo || userInfo.role !== 'admin') return
    deleteArticle(articleID).then()
    alert(`刪除 ${articleTitle}`)
    setArticles(articles.filter((article) => article.article_id !== articleID))
  }

  const handleRecover = (articleID, articleTitle) => {
    if (!userInfo || userInfo.role !== 'admin') return
    recoverArticle(articleID).then()
    alert(`恢復 ${articleTitle}`)
    setDeletedArticles(deletedArticles.filter((article) => article.article_id !== articleID))
  }

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Block>
          <SearchBar>
            <SearchIcon />
            <SearchField
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') setSearchResults(searchValue)
              }}
            />
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
            {!recycle &&
              articles &&
              articles.map((article) => (
                <TableContent key={article.article_id}>
                  <LinkDefault to={`/articles/${article.article_id}`}>
                    <CoverTd>
                      <TrailImg src={article.cover_picture_url} />
                    </CoverTd>
                    <TrailsTd>{article.title}</TrailsTd>
                  </LinkDefault>
                  <CreatorTd>
                    <LinkDefault to={`/users/${article.author_id}`}>{article.nickname}</LinkDefault>
                  </CreatorTd>
                  <DateTd>{new Date(article.created_at).toLocaleString('ja')}</DateTd>
                  <BtnTd>
                    <BinIcon
                      onClick={() => {
                        handleDelete(article.article_id, article.title)
                      }}
                    />
                  </BtnTd>
                </TableContent>
              ))}
            {!recycle && <Pagination page={page} setPage={setPage} totalPages={totalPages} />}
            {recycle &&
              deletedArticles &&
              deletedArticles.map((article) => (
                <TableContent key={article.article_id}>
                  <LinkDefault to={`/articles/${article.article_id}`}>
                    <CoverTd>
                      <TrailImg src={article.cover_picture_url} />
                    </CoverTd>
                    <TrailsTd>{article.title}</TrailsTd>
                  </LinkDefault>
                  <CreatorTd>
                    <LinkDefault to={`/users/${article.author_id}`}>{article.nickname}</LinkDefault>
                  </CreatorTd>
                  <DateTd>{new Date(article.created_at).toLocaleString('ja')}</DateTd>
                  <BtnTd>
                    <RecoverIcon
                      onClick={() => {
                        handleRecover(article.article_id, article.title)
                      }}
                    />
                  </BtnTd>
                </TableContent>
              ))}
          </TrailsTable>
        </Block>
      )}
    </>
  )
}

export default ArticlesManagement
