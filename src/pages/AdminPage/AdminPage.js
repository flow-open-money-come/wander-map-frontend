import React, { useState } from 'react'
import styled from 'styled-components'
import { COLOR, FONT } from '../../constants/style'
import UsersManagement from '../../components/adminSystem/UsersManagement'
import TrailsManagement from '../../components/adminSystem/TrailsManagement'
import ArticlesManagement from '../../components/adminSystem/ArticlesManagement'

const MEDIA_QUERY_MD = '@media screen and (min-width: 768px)'
const MEDIA_QUERY_LG = '@media screen and (min-width: 1280px)'


const AdminPageContainer = styled.div`
  width: 90%;
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
  ${MEDIA_QUERY_LG} {
    font-size: 48px;
    padding: 20px 0;
  }
`

const PageDesc = styled.div`
  width: 100%;
  font-size: ${FONT.xs};
  margin: 10px 0;
  text-align: center;
  ${MEDIA_QUERY_LG} {
    font-size: ${FONT.lg};
    margin: 20px 0;
  }
`


function AdminPage() {

  const [ tab, setTab ] = useState('Users')
  console.log(tab)

  return (
    <AdminPageContainer>
      <PageTitle>管理員後台</PageTitle>
      <PageDesc>Hello！Wander Map 的管理員~ 今天要做些什麼呢？</PageDesc>
       <UsersManagement setTab={setTab} />
      <TrailsManagement setTab={setTab} />
      <ArticlesManagement setTab={setTab} />
    </AdminPageContainer>
  )
}

export default AdminPage
