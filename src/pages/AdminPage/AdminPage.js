import React, { useState, useContext } from 'react'
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

const PageContainer = styled.div`
  border: 2px solid ${COLOR.green};
  border-radius: 0 ${RADIUS.s} ${RADIUS.s} ${RADIUS.s};
  width: 100%;
  min-height: 70vh;
`

function AdminPage() {
  const [tab, setTab] = useState('Users')
  const [trailRecycle, setTrailRecycle] = useState(false)
  const [articleRecycle, setArticleRecycle] = useState(false)
  const { userInfo } = useContext(AuthContext)
  const history = useHistory()

  if (!userInfo || userInfo.role !== 'admin') history.push('/')

  return (
    <AdminPageContainer>
      <PageTitle>???????????????</PageTitle>
      <PageDesc>Hello???Wander Map ????????????~ ???????????????????????????</PageDesc>

      <ManagementContainer>
        <Tabs>
          <UsersTab
            tab={tab}
            onClick={() => {
              setTab('Users')
            }}
          >
            <UserIcon />
            <TabTitle>????????????</TabTitle>
          </UsersTab>
          <TrailsTab
            tab={tab}
            onClick={() => {
              setTab('Trails')
            }}
          >
            <TrailIcon />
            <TabTitle>????????????</TabTitle>
          </TrailsTab>
          <ArticlesTab
            tab={tab}
            onClick={() => {
              setTab('Articles')
            }}
          >
            <ArticleIcon />
            <TabTitle>????????????</TabTitle>
          </ArticlesTab>
        </Tabs>
        <PageContainer>
          {tab === 'Users' && <UsersManagement />}
          {tab === 'Trails' && (
            <TrailsManagement recycle={trailRecycle} setRecycle={setTrailRecycle} />
          )}
          {tab === 'Articles' && (
            <ArticlesManagement recycle={articleRecycle} setRecycle={setArticleRecycle} />
          )}
        </PageContainer>
      </ManagementContainer>
    </AdminPageContainer>
  )
}

export default AdminPage
