import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import { COLOR, FONT, RADIUS, MEDIA_QUERY } from '../../constants/style'
import { getAllUsers, patchUserRole } from '../../WebAPI'
import { Link } from 'react-router-dom'
import { AuthContext, LoadingContext } from '../../context'
import Pagination from './Pagination'
import swal from 'sweetalert'
import SmallRegionLoading from '../common/SmallRegionLoading'


const UsersTable = styled.table`
  width: 95%;
  margin: 50px auto 20px auto;
  display: block;
  overflow-x: auto;
  white-space: nowrap;
`

const TableHeader = styled.tr`
  border-bottom: 1px solid ${COLOR.green};
  text-align: center;
  font-size: ${FONT.s};
  ${MEDIA_QUERY.md} {
    font-size: ${FONT.md};
  }
  ${MEDIA_QUERY.lg} {
    font-size: ${FONT.md};
    font-weight: bold;
  }
`
const HeaderTd = styled.td`
  padding: 3px 0;
`

const TableContent = styled.tr`
  color: ${({ $role }) => ($role === 'suspended' ? `${COLOR.gray}` : 'black')};
  border-bottom: 0.5px solid #8f8f8f;
  text-align: center;
  font-size: ${FONT.s};
  ${MEDIA_QUERY.md} {
    font-size: ${FONT.md};
  }
  ${MEDIA_QUERY.lg} {
    font-size: ${FONT.md};
  }
`
const ContentTd = styled.td`
  padding: 15px 0 5px 0;
  width: 40%;
`

const NicknameTd = styled(ContentTd)`
  width: 60px;
  overflow: auto;
  ${MEDIA_QUERY.lg} {
    width: 30%;
  }
`

const EmailTd = styled(ContentTd)`
  width: 120px;
  overflow: auto;
  ${MEDIA_QUERY.lg} {
    width: 30%;
  }
`

const StatusBtn = styled.button`
  font-size: ${FONT.xs};
  border: 1px solid #8f8f8f;
  border-radius: ${RADIUS.s};
  padding: 2px 4px;

  &:hover {
    background: ${(props) => (props.role === 'member' ? `${COLOR.pink}` : `${COLOR.green}`)};
    border: 1px solid ${COLOR.pink};
    color: white;
    cursor: pointer;
  }

  ${MEDIA_QUERY.lg} {
    font-size: ${FONT.s};
    padding: 2px 12px;
  }
`
const LinkDefault = styled(Link)`
  color: inherit;
`

function UsersManagement() {
  const [users, setUsers] = useState(null)
  const [toggleStatus, setToggleStatus] = useState(true)
  const { userInfo } = useContext(AuthContext)
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const { isLoading, setIsLoading } = useContext(LoadingContext)

  useEffect(() => {
    let isMounted = false
    setIsLoading(true)
    getAllUsers(`?offset=${(page - 1) * 20}`)
      .then((res) => {
        if (isMounted) return
        setUsers(res.data.data.users)
        setTotalPages(Math.ceil(res.headers['x-total-count'] / 20))
        setIsLoading(false)
      })
      .catch((err) => {
        console.error(err)
        swal('Oh ??????', '????????????????????????????????????????????????????????????', 'error')
      })
    return () => {
      isMounted = true
    }
  }, [page, setIsLoading, toggleStatus])

  const handleToggleState = (userID, nickname, role) => {
    if (!userInfo || userInfo.role !== 'admin') return
    if (role === 'admin') return
    if (role === 'member') {
      swal({
        title: `????????? ${nickname} ????????????`,
        icon: 'warning',
        buttons: ['??????', '??????'],
        dangerMode: true
      }).then((willDo) => {
        if (willDo) {
          setIsLoading(true)
          patchUserRole(userID, 'suspended')
            .then((res) => {
              if (res.data.success) {
                setToggleStatus(!toggleStatus)
                setIsLoading(false)
                swal(`?????? ${nickname} ??????`, {
                  icon: 'success',
                  button: '??????'
                })
              }
            })
            .catch((err) => {
              console.log(err.response)
              swal('Oh ??????', '????????????????????????????????????????????????????????????', 'error')
            })
        }
      })
    }
    if (role === 'suspended') {
      swal({
        title: `??? ${nickname} ????????????`,
        icon: 'info',
        buttons: ['??????', '??????'],
        dangerMode: true
      }).then((willDo) => {
        if (willDo) {
          setIsLoading(true)
          patchUserRole(userID, 'member')
            .then((res) => {
              if (res.data.success) {
                setToggleStatus(!toggleStatus)
                setIsLoading(false)
                swal(`?????? ${nickname} ??????`, {
                  icon: 'success',
                  button: '??????'
                })
              }
            })
            .catch((err) => {
              console.log(err.response)
              swal('Oh ??????', '????????????????????????????????????????????????????????????', 'error')
            })
        }
      })
    }
  }

  return (
    <>
      {isLoading ? (
        <SmallRegionLoading isFullScreen />
      ) : (
        <>
          <UsersTable>
            <tbody>
              <TableHeader>
                <HeaderTd>??????</HeaderTd>
                <HeaderTd>??????</HeaderTd>
                <HeaderTd>????????????</HeaderTd>
                <HeaderTd>??????</HeaderTd>
              </TableHeader>
              {users &&
                users.map((user) => (
                  <TableContent key={user.user_id} $role={user.role}>
                    <NicknameTd>
                      <LinkDefault to={`/user/${user.user_id}`}>{user.nickname}</LinkDefault>
                    </NicknameTd>
                    <EmailTd>{user.email}</EmailTd>
                    <ContentTd>{new Date(user.created_at).toLocaleDateString('ja')}</ContentTd>
                    <ContentTd>
                      <StatusBtn
                        onClick={() => {
                          handleToggleState(user.user_id, user.nickname, user.role)
                        }}
                        role={user.role}
                      >
                        {user.role === 'member' && '??????'}
                        {user.role === 'suspended' && '??????'}
                        {user.role === 'admin' && '?????????'}
                      </StatusBtn>
                    </ContentTd>
                  </TableContent>
                ))}
            </tbody>
          </UsersTable>
          <Pagination page={page} setPage={setPage} totalPages={totalPages} />
        </>
      )}
    </>
  )
}

export default UsersManagement
