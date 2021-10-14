import React, { useState, useContext, useEffect } from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { COLOR, FONT, RADIUS, MEDIA_QUERY } from '../../constants/style'
import UsersManagement from '../../components/adminSystem/UsersManagement'
import TrailsManagement from '../../components/adminSystem/TrailsManagement'
import ArticlesManagement from '../../components/adminSystem/ArticlesManagement'
import { ReactComponent as UserIcon } from '../../icons/backstage/adminUser.svg'
import { ReactComponent as TrailIcon } from '../../icons/backstage/adminTrail.svg'
import { ReactComponent as ArticleIcon } from '../../icons/backstage/adminArticle.svg'
import { AuthContext } from '../../context'
import { getAuthToken } from '../../utils'
import { getAllUsers } from '../../WebAPI'

const AdminPageContainer = styled.div`
  width: 80%;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const PageTitle = styled.div`
  font-size: ${FONT.lg};
  font-weight: bold;
  border-bottom: 5px solid ${COLOR.green};
  width: 100%;
  text-align: center;
  padding: 5px 0;
  ${MEDIA_QUERY.lg} {
    font-size: ${FONT.logo};
    padding: 20px 0;
  }
`

const PageDesc = styled.div`
  width: 100%;
  font-size: ${FONT.s};
  margin: 10px 0;
  text-align: center;
  ${MEDIA_QUERY.lg} {
    font-size: ${FONT.md};
    margin: 20px 0;
  }
`

const ManagementContainer = styled.div`
  width: 100%;
  margin: 20px auto;
`

const Tabs = styled.div`
  display: flex;
  align-items: center;
`

const normalTabColor = `
  color: ${COLOR.black};
  background: white;
  rect {
    fill: white;
    stroke: none;
  }
  path {
    fill: ${COLOR.green};
    stroke: ${COLOR.green};
  }
`

const activeTabColor = `
  color: white;
  background: ${COLOR.green};
  rect {
    fill: ${COLOR.green};
    stroke: none;
  }
   path {
    fill: white;
    stroke: white;
  }
`

const UsersTab = styled.div`
  ${normalTabColor};
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
  svg {
    width: 25px;
    margin: 0 2px;
  }
  ${MEDIA_QUERY.md} {
    font-size: ${FONT.md};
  }
  ${MEDIA_QUERY.lg} {
    width: 200px;
    height: 50px;
    margin-right: 20px;
    font-size: ${FONT.md};
    svg {
      width: 30px;
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
  ${(props) => props.tab === 'Users' && activeTabColor};
`

const TrailsTab = styled(UsersTab)`
  ${normalTabColor};
  ${(props) => props.tab === 'Trails' && activeTabColor};
`

const ArticlesTab = styled(UsersTab)`
  ${normalTabColor};
  ${(props) => props.tab === 'Articles' && activeTabColor};
`

const TabTitle = styled.div`
  display: none;
  ${MEDIA_QUERY.md} {
    display: block;
  }
`

function AdminPage() {
  const [tab, setTab] = useState('Users')
  const [users, setUsers] = useState(null)
  const [recycle, setRecycle] = useState(false)
  const { userInfo } = useContext(AuthContext)
  const history = useHistory()
  const adminToken = getAuthToken()
  console.log('userInfo', userInfo)
  console.log('adminToken', adminToken)

  if (!userInfo || userInfo.role !== 'admin') history.push('/')

  useEffect(()=>{
    getAllUsers(adminToken)
      .then((res) => {
        console.log('data', res.data.data.user)
        setUsers(res.data.data.user)
      })
      .catch((err) => console.error(err))
  })
  console.log('users',users)

  return (
    <AdminPageContainer>
      <PageTitle>管理員後台</PageTitle>
      <PageDesc>Hello！Wander Map 的管理員~ 今天要做些什麼呢？</PageDesc>

      <ManagementContainer>
        <Tabs>
          <UsersTab
            tab={tab}
            onClick={() => {
              setTab('Users')
            }}
          >
            <UserIcon />
            <TabTitle>會員資料</TabTitle>
          </UsersTab>
          <TrailsTab
            tab={tab}
            onClick={() => {
              setTab('Trails')
            }}
          >
            <TrailIcon />
            <TabTitle>步道列表</TabTitle>
          </TrailsTab>
          <ArticlesTab
            tab={tab}
            onClick={() => {
              setTab('Articles')
            }}
          >
            <ArticleIcon />
            <TabTitle>心得列表</TabTitle>
          </ArticlesTab>
        </Tabs>

        {tab === 'Users' && <UsersManagement users={users} setUsers={setUsers} />}
        {tab === 'Trails' && <TrailsManagement recycle={recycle} setRecycle={setRecycle} />}
        {tab === 'Articles' && <ArticlesManagement recycle={recycle} setRecycle={setRecycle} />}
      </ManagementContainer>
    </AdminPageContainer>
  )
}

export default AdminPage
