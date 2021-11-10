import React, { useEffect, useState, useContext } from 'react'
import styled from 'styled-components'
import { COLOR, FONT, RADIUS, MEDIA_QUERY } from '../../constants/style'
import { ReactComponent as SearchIcon } from '../../icons/search.svg'
import { ReactComponent as BinIcon } from '../../icons/backstage/bin.svg'
import { ReactComponent as RecoverIcon } from '../../icons/backstage/refresh.svg'
import { ReactComponent as RecycleIcon } from '../../icons/backstage/recycle.svg'
import { ReactComponent as AddIcon } from '../../icons/user/plus.svg'
import { getArticles, getDeletedArticle } from '../../WebAPI'
import { Link, useHistory } from 'react-router-dom'
import { LoadingContext } from '../../context'
import Pagination from './Pagination'
import swal from 'sweetalert'
import SmallRegionLoading from '../common/SmallRegionLoading'
import useDeleteToggle from '../../hooks/useDeleteToggle'

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

const ControlBTN = styled.div`
  position: absolute;
  right: 0;
  margin: 0 10px;
  ${MEDIA_QUERY.md} {
    margin: 0 30px;
  }
`
const RecycleBin = styled(RecycleIcon)`
  path {
    fill: ${COLOR.pink};
  }
  &:hover {
    cursor: pointer;
  }
  width: 20px;
  height: 20px;
  ${MEDIA_QUERY.md} {
    margin: 0 10px;
    width: 25px;
    height: 25px;
  }
`
const AddPost = styled(AddIcon)`
  path {
    fill: ${COLOR.green};
  }
  &:hover {
    cursor: pointer;
  }
  width: 25px;
  height: 25px;
  ${MEDIA_QUERY.md} {
    width: 30px;
    height: 30px;
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
    width: 10%;
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
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const { isLoading, setIsLoading } = useContext(LoadingContext)
  const history = useHistory()
  const { handleDelete, handleRecover } = useDeleteToggle()

  useEffect(() => {
    let isMounted = false
    setIsLoading(true)
    getArticles(`?offset=${(page - 1) * 20}&search=${searchResults}`)
      .then((res) => {
        if (isMounted) return
        setArticles(res.data.data)
        setTotalPages(Math.ceil(res.headers['x-total-count'] / 20))
        setIsLoading(false)
      })
      .catch((err) => {
        console.error(err)
        swal('Oh 不！', '請求失敗！請稍候再試一次，或者聯繫我們。', 'error')
      })
    getDeletedArticle(`?offset=${(page - 1) * 20}`)
      .then((res) => setDeletedArticles(res.data.data))
      .catch((err) => {
        console.error(err)
        swal('Oh 不！', '請求失敗！請稍候再試一次，或者聯繫我們。', 'error')
      })
    return () => {
      isMounted = true
    }
  }, [page, searchResults, recycle, setIsLoading])

  useEffect(() => {
    if (!searchValue) setSearchResults('')
  }, [searchValue])

  return (
    <>
      {isLoading ? (
        <SmallRegionLoading isFullScreen />
      ) : (
        <>
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
            {recycle ? (
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
            ) : (
              <ControlBTN>
                <RecycleBin
                  onClick={() => {
                    setRecycle(true)
                  }}
                />
                <AddPost
                  onClick={() => {
                    history.push(`/post-article`)
                  }}
                />
              </ControlBTN>
            )}
          </RecycleBlock>
          <TrailsTable>
            <tbody>
              {!recycle &&
                articles &&
                articles.map((article) => (
                  <TableContent key={article.article_id}>
                    <CoverTd>
                      <LinkDefault to={`/articles/${article.article_id}`}>
                        <TrailImg src={article.cover_picture_url} />
                      </LinkDefault>
                    </CoverTd>
                    <TrailsTd>
                      <LinkDefault to={`/articles/${article.article_id}`}>
                        {article.title}
                      </LinkDefault>
                    </TrailsTd>
                    <CreatorTd>
                      <LinkDefault to={`/users/${article.author_id}`}>
                        {article.nickname}
                      </LinkDefault>
                    </CreatorTd>
                    <DateTd>
                      {new Date(
                        new Date(article.created_at).getTime() + 8 * 3600 * 1000
                      ).toLocaleString('ja')}
                    </DateTd>
                    <BtnTd>
                      <BinIcon
                        onClick={() => {
                          handleDelete(article.article_id, article.title, setArticles, articles, true)
                        }}
                      />
                    </BtnTd>
                  </TableContent>
                ))}

              {recycle &&
                deletedArticles &&
                deletedArticles.map((article) => (
                  <TableContent key={article.article_id}>
                    <CoverTd>
                      <LinkDefault to={`/articles/${article.article_id}`}>
                        <TrailImg src={article.cover_picture_url} />
                      </LinkDefault>
                    </CoverTd>
                    <TrailsTd>
                      <LinkDefault to={`/articles/${article.article_id}`}>
                        {article.title}
                      </LinkDefault>
                    </TrailsTd>
                    <CreatorTd>
                      <LinkDefault to={`/users/${article.author_id}`}>
                        {article.nickname}
                      </LinkDefault>
                    </CreatorTd>
                    <DateTd>{new Date(article.created_at).toLocaleString('ja')}</DateTd>
                    <BtnTd>
                      <RecoverIcon
                        onClick={() => {
                          handleRecover(
                            article.article_id,
                            article.title,
                            setDeletedArticles,
                            deletedArticles,
                            true
                          )
                        }}
                      />
                    </BtnTd>
                  </TableContent>
                ))}
            </tbody>
          </TrailsTable>
          {!recycle && <Pagination page={page} setPage={setPage} totalPages={totalPages} />}
        </>
      )}
    </>
  )
}

export default ArticlesManagement
