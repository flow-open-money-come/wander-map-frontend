import React, { useState } from 'react'
import styled from 'styled-components'
import { COLOR, FONT, RADIUS, MEDIA_QUERY } from '../../../constants/style'
import UserArticlesManage from '../../../components/userSystem/UserArticlesManage'
import UserTodoItems from '../../../components/userSystem/UserTodoItems'
import UserCollect from '../../../components/userSystem/UserCollect'
import UserLike from '../../../components/userSystem/UserLike'
import UserBackstageTabs from '../../../components/userSystem/UserBackstageTabs'
import { ReactComponent as EditIcon } from '../../../icons/backstage/edit.svg'
import { ReactComponent as EmailIcon } from '../../../icons/user/user_email.svg'
import { ReactComponent as NicknameIcon } from '../../../icons/user/user_nickname.svg'

const Wrapper = styled.div`
  margin: 0 auto;
  width: 90%;
  display: flex;
  flex-direction: column;
  ${MEDIA_QUERY.lg} {
    flex-direction: row;
    align-items: center;
  }
`

const MemberProfileWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  ${MEDIA_QUERY.lg} {
    width: 30%;
    flex-direction: column;
    border: solid 1.5px ${COLOR.green};
    border-radius: ${RADIUS.lg};
    padding: 20px;
    margin: 0;
  }
`
const Avatar = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  background-color: ${COLOR.gray};
`
const AvatarPic = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  object-position: center;
  ${MEDIA_QUERY.lg} {
    width: 150px;
    height: 150px;
  }
`
const Profile = styled.div`
  padding: 10px;
  margin: 20px;
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
  svg {
    width: 12px;
    height: 12px;
    margin: 0 6px;
  }
  ${MEDIA_QUERY.md} {
    font-size: ${FONT.md};
  }
  ${MEDIA_QUERY.lg} {
    margin-top: 15px;
    font-size: ${FONT.lg};
    svg {
      width: 20px;
      height: 20px;
    }
  }
`
const UsersManagementContainer = styled.div`
  margin: 20px auto;
  width: 100%;
  padding-bottom: 100px;
  ${MEDIA_QUERY.lg} {
    width: 65%;
    margin: 50px auto;
    padding-bottom: 0px;
  }
`

export default function UserBackstage() {
  const [tab, setTab] = useState('Articles')

  return (
    <Wrapper>
      <MemberProfileWrapper>
        <Avatar>
          <AvatarPic src='https://s.yimg.com/os/creatr-uploaded-images/2021-09/50aee8d0-0cca-11ec-afd6-ddd0414a9b75' />
        </Avatar>
        <Profile>
          <ModifyBtn />
          <Info>
            <NicknameIcon />
            野原新之助
          </Info>
          <Info>
            <EmailIcon />
            hehe@123.com
          </Info>
        </Profile>
      </MemberProfileWrapper>
      <UsersManagementContainer>
        <UserBackstageTabs tab={tab} setTab={setTab} />
        {tab === 'Articles' && <UserArticlesManage setTab={setTab} />}
        {tab === 'Todos' && <UserTodoItems setTab={setTab} />}
        {tab === 'Collect' && <UserCollect setTab={setTab} />}
        {tab === 'Like' && <UserLike setTab={setTab} />}
      </UsersManagementContainer>
    </Wrapper>
  )
}
