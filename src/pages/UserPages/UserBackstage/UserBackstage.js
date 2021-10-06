import React, { useState } from 'react'
import styled from 'styled-components'
import { COLOR, FONT, RADIUS, MEDIA_QUERY } from '../../../constants/style'
import UserArticlesManage from '../../../components/userSystem/UserArticlesManage'
import UserTodoItems from '../../../components/userSystem/UserTodoItems'
import UserCollect from '../../../components/userSystem/UserCollect'
import UserLike from '../../../components/userSystem/UserLike'
import UserBackstageTabs from '../../../components/userSystem/UserBackstageTabs'
import { ReactComponent as EditIcon } from '../../../icons/backstage/edit.svg'

const Wrapper = styled.div`
  margin: 0 auto;
  width: 90%;
  display: flex;
  flex-wrap: wrap;
`
const PageName = styled.div`
  font-size: ${FONT.lg};
  font-weight: bold;
  border-bottom: 5px solid ${COLOR.green};
  width: 100%;
  text-align: center;
  padding: 5px 0;
  margin: 20px;
  ${MEDIA_QUERY.lg} {
    font-size: ${FONT.xll};
    padding: 15px 0;
  }
`
const MemberProfileWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 20px;
  width: 90%;
  ${MEDIA_QUERY.lg} {
    flex-direction: column;
    border: solid 1.5px ${COLOR.green};
    border-radius: ${RADIUS.lg};
    padding: 10px 0;
    margin-top: 50px;
    height: 350px;
    width: 22%;
  }
`
const Avatar = styled.div`
  min-width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: #eee;
  ${MEDIA_QUERY.lg} {
    width: 150px;
    min-height: 150px;
  }
`
const Profile = styled.div`
  padding: 20px;
  margin: 0 20px;
  border-radius: 3px;
  border: solid 1.5px ${COLOR.green};
  position: relative;
  ${MEDIA_QUERY.lg} {
    border: none;
    margin: 10px 0;
    padding-bottom: 0px;
  }
`

const ModifyBtn = styled(EditIcon)`
  width: 12px;
  height: 12px;
  position: absolute;
  top: 0;
  right: 0;
  margin: 6px;
  color: ${COLOR.green};
  ${MEDIA_QUERY.lg} {
    width: 20px;
    height: 20px;
  }
`
const Info = styled.div`
  font-size: ${FONT.s};
  margin: 6px;
  word-break: break-all;
  white-space: pre-wrap;
  ${MEDIA_QUERY.md} {
    font-size: ${FONT.md};
  }
  ${MEDIA_QUERY.lg} {
    margin-top: 15px;
    text-align: center;
    font-size: ${FONT.lg};
  }
`
const UsersManagementContainer = styled.div`
  width: 100%;
  margin: 20px auto;
  ${MEDIA_QUERY.lg} {
    width: 70%;
  }
`

export default function UserBackstage({ tab, setTab }) {
  const [recycle, setRecycle] = useState(false)

  return (
    <Wrapper>
      <MemberProfileWrapper>
        <Avatar />
        <Profile>
          <ModifyBtn />
          <Info>野原新之助</Info>
          <Info>hehe@123.com</Info>
        </Profile>
      </MemberProfileWrapper>
      <UsersManagementContainer>
        <UserBackstageTabs>
          {tab === 'Articles' && <UserArticlesManage setTab={setTab} />}
          {tab === 'Todos' && (
            <UserTodoItems
              setTab={setTab}
              recycle={recycle}
              setRecycle={setRecycle}
            />
          )}
          {tab === 'Collect' && (
            <UserCollect
              setTab={setTab}
              recycle={recycle}
              setRecycle={setRecycle}
            />
          )}
          {tab === 'Like' && (
            <UserLike
              setTab={setTab}
              recycle={recycle}
              setRecycle={setRecycle}
            />
          )}
        </UserBackstageTabs>
      </UsersManagementContainer>
    </Wrapper>
  )
}
