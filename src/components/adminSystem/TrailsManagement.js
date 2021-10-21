import React, { useEffect, useState, useContext } from 'react'
import styled from 'styled-components'
import { COLOR, FONT, RADIUS, MEDIA_QUERY } from '../../constants/style'
import { ReactComponent as SearchIcon } from '../../icons/search.svg'
import { ReactComponent as BinIcon } from '../../icons/backstage/bin.svg'
import { ReactComponent as EditIcon } from '../../icons/backstage/edit.svg'
import { ReactComponent as RecycleIcon } from '../../icons/backstage/recycle.svg'
import { ReactComponent as RecoverIcon } from '../../icons/backstage/refresh.svg'
import { getTrails, deleteTrail, getDeletedTrail, recoverTrail } from '../../WebAPI'
import { Link } from 'react-router-dom'
import { AuthContext, LoadingContext } from '../../context'
import Pagination from './Pagination'
import swal from 'sweetalert'
import SmallRegionLoading from '../common/SmallRegionLoading'


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
  }
`
const TrailsTable = styled.table`
  width: 95%;
  margin: 10px auto;
  border-top: 2px solid ${COLOR.green};
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
  width: 200px;
  overflow: auto;
  text-align: start;
  padding: 0 3px;
  vertical-align: middle;
  ${MEDIA_QUERY.md} {
    width: 700px;
  }
  ${MEDIA_QUERY.lg} {
    width: 900px;
    padding-left: 20px;
  }
`
const CreatorTd = styled.td`
  width: 80px;
  vertical-align: middle;
  padding: 0 3px;
  ${MEDIA_QUERY.lg} {
    width: 140px;
  }
`
const BtnTd = styled.td`
  width: 80px;
  vertical-align: middle;
  svg {
    margin: 0 2px;
    &:hover {
      cursor: pointer;
    }
  }
  ${MEDIA_QUERY.lg} {
    width: 80px;
    svg {
      width: 20px;
      height: 20px;
      margin: 0 8px;
    }
  }
`
const LinkWrapper = styled(Link)`
  color: black;
`

function TrailsManagement({ recycle, setRecycle }) {
  const [trails, setTrails] = useState(null)
  const [deletedTrails, setDeletedTrails] = useState(null)
  const [searchValue, setSearchValue] = useState('')
  const [searchResults, setSearchResults] = useState('')
  const { userInfo } = useContext(AuthContext)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const { isLoading, setIsLoading } = useContext(LoadingContext)

  useEffect(() => {
    setIsLoading(true)
    getTrails(`?offset=${(page - 1) * 20}&search=${searchResults}`)
      .then((res) => {
        setTrails(res.data.data)
        setTotalPages(Math.ceil(res.headers['x-total-count'] / 20))
        setIsLoading(false)
      })
      .catch((err) => console.error(err))
    getDeletedTrail(`?offset=${(page - 1) * 20}`)
      .then((res) => setDeletedTrails(res.data.data))
      .catch((err) => console.error(err))
  }, [page, searchResults, recycle, setIsLoading])


  useEffect(() => {
    if (!searchValue) setSearchResults('')
  }, [searchValue])

  const handleDelete = (trailID, trailTitle) => {
    if (!userInfo || userInfo.role !== 'admin') return
    swal({
      title: '確定刪除嗎？',
      icon: 'warning',
      buttons: ['取消', '確定'],
      dangerMode: true
    }).then((willDo) => {
      if (willDo) {
        deleteTrail(trailID)
          .then((res) => {
            if (res.data.success) {
              setTrails(trails.filter((trail) => trail.trail_id !== trailID))
              swal(`已刪除步道 ${trailTitle}`, {
                icon: 'success',
                button: '關閉'
              })
            }
          })
          .catch((err) => console.log(err.response))
      }
    })
  }

  const handleRecover = (trailID, trailTitle) => {
    if (!userInfo || userInfo.role !== 'admin') return
    recoverTrail(trailID).then()
    swal(`恢復步道`, `${trailTitle}`, 'success')
    setDeletedTrails(deletedTrails.filter((trail) => trail.trail_id !== trailID))
  }

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
            {recycle && (
              <>
                <RecycleTitle>刪除列表</RecycleTitle>
                <BackBtn onClick={() => setRecycle(false)}>返回</BackBtn>
              </>
            )}
            {!recycle && (
              <RecycleBin
                onClick={() => {
                  setRecycle(true)
                }}
              >
                <RecycleIcon />
              </RecycleBin>
            )}
          </RecycleBlock>
          <TrailsTable>
            {!recycle &&
              trails &&
              trails.map((trail) => (
                <TableContent key={trail.trail_id}>
                  <LinkWrapper to={`/trails/${trail.trail_id}`}>
                    <CoverTd>
                      <TrailImg src={trail.cover_picture_url} />
                    </CoverTd>
                    <TrailsTd>{trail.title}</TrailsTd>
                  </LinkWrapper>
                  <CreatorTd>admin</CreatorTd>
                  <BtnTd>
                    <Link to={`/trails/${trail.trail_id}`}>
                      <EditIcon />
                    </Link>
                    <BinIcon
                      onClick={() => {
                        handleDelete(trail.trail_id, trail.title)
                      }}
                    />
                  </BtnTd>
                </TableContent>
              ))}
            {!recycle && <Pagination page={page} setPage={setPage} totalPages={totalPages} />}
            {recycle &&
              deletedTrails &&
              deletedTrails.map((trail) => (
                <TableContent key={trail.trail_id}>
                  <CoverTd>
                    <TrailImg src={trail.cover_picture_url} />
                  </CoverTd>
                  <TrailsTd>{trail.title}</TrailsTd>
                  <CreatorTd>admin</CreatorTd>
                  <BtnTd>
                    <RecoverIcon
                      onClick={() => {
                        handleRecover(trail.trail_id, trail.title)
                      }}
                    />
                  </BtnTd>
                </TableContent>
              ))}
          </TrailsTable>
        </>
      )}
    </>
  )
}

export default TrailsManagement
