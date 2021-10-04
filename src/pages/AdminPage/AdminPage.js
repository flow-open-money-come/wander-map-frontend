import React, { useState } from 'react'
import styled from 'styled-components'
import { COLOR, FONT, MEDIA_QUERY } from '../../constants/style'
import UsersManagement from '../../components/adminSystem/UsersManagement'
import TrailsManagement from '../../components/adminSystem/TrailsManagement'
import ArticlesManagement from '../../components/adminSystem/ArticlesManagement'



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
  font-size: ${FONT.xs};
  margin: 10px 0;
  text-align: center;
  ${MEDIA_QUERY.lg} {
    font-size: ${FONT.md};
    margin: 20px 0;
  }
`


function AdminPage() {

  const [tab, setTab] = useState('Users')
  const [recycle, setRecycle] = useState(false)

  return (
    <AdminPageContainer>
      <PageTitle>管理員後台</PageTitle>
      <PageDesc>Hello！Wander Map 的管理員~ 今天要做些什麼呢？</PageDesc>
      {tab === 'Users' && <UsersManagement setTab={setTab} />}
      {tab === 'Trails' && (
        <TrailsManagement setTab={setTab} recycle={recycle} setRecycle={setRecycle} />
      )}
      {tab === 'Articles' && (
        <ArticlesManagement setTab={setTab} recycle={recycle} setRecycle={setRecycle} />
      )}
    </AdminPageContainer>
  )
}

export default AdminPage
