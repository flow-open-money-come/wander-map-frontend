import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import { COLOR, FONT, RADIUS, MEDIA_QUERY } from '../../constants/style'
import { ReactComponent as SearchIcon } from '../../icons/search.svg'
import { getAuthToken } from '../../utils'
import { getAllUsers, changeUserRole } from '../../WebAPI'
import { Link } from 'react-router-dom'
import { AuthContext, LoadingContext } from '../../context'
import Pagination from './Pagination'
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

const UsersTable = styled.table`
  width: 95%;
  margin: 10px auto;
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
`

const NicknameTd = styled(ContentTd)`
  width: 60px;
  overflow: auto;
  ${MEDIA_QUERY.lg} {
    width: 200px;
  }
`

const EmailTd = styled(ContentTd)`
  width: 120px;
  overflow: auto;
  ${MEDIA_QUERY.lg} {
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
  const [suspended, setSuspended] = useState(false) //優化延遲問題用

  useEffect(() => {
    setIsLoading(true)
    getAllUsers(`?offset=${(page - 1) * 20}`)
      .then((res) => {
        setUsers(res.data.data.users)
        setTotalPages(Math.ceil(res.headers['x-total-count'] / 20))
        setIsLoading(false)
      })
      .catch((err) => console.error(err))
  }, [page, toggleStatus, setIsLoading])

  const handleToggleState = (userID, role) => {
    if (!userInfo || userInfo.role !== 'admin') return
    if (role === 'admin') return
    setToggleStatus(!toggleStatus)
    if (role === 'member') changeUserRole(userID, 'suspended')
    if (role === 'suspended') changeUserRole(userID, 'member')
    alert('更改會員權限')
  }

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <Block>
          <SearchBar>
            <SearchIcon />
            <SearchField />
          </SearchBar>
          <UsersTable>
            <TableHeader>
              <HeaderTd>暱稱</HeaderTd>
              <HeaderTd>帳號</HeaderTd>
              <HeaderTd>入會日期</HeaderTd>
              <HeaderTd>狀態</HeaderTd>
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
                        handleToggleState(user.user_id, user.role)
                      }}
                    >
                      {user.role === 'member' && '停權'}
                      {user.role === 'suspended' && '復權'}
                      {user.role === 'admin' && '管理員'}
                    </StatusBtn>
                  </ContentTd>
                </TableContent>
              ))}
          </UsersTable>
          <Pagination page={page} setPage={setPage} totalPages={totalPages} />
        </Block>
      )}
    </>
  )
}

export default UsersManagement
