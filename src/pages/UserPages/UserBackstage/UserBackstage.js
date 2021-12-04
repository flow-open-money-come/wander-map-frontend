import React, { useState, useEffect, useContext } from 'react'
import { getUserInfo } from '../../../WebAPI'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { COLOR, FONT, RADIUS, MEDIA_QUERY } from '../../../constants/style'
import UserUpdateBox from '../../../components/userSystem/UserUpdateBox'
import UserUpdateAvatarBox from '../../../components/userSystem/UserUpdateAvatarBox'
import UserArticlesManage from '../../../components/userSystem/UserArticlesManage'
import UserTodoItems from '../../../components/userSystem/UserTodoItems'
import UserCollect from '../../../components/userSystem/UserCollect'
import UserLike from '../../../components/userSystem/UserLike'
import UserBackstageTabs from '../../../components/userSystem/UserBackstageTabs'
import { ReactComponent as EditIcon } from '../../../icons/backstage/edit.svg'
import { ReactComponent as EmailIcon } from '../../../icons/user/user_email.svg'
import { ReactComponent as NicknameIcon } from '../../../icons/user/user_nickname.svg'
import { LoadingContext } from '../../../context'
import SmallRegionLoading from '../../../components/common/SmallRegionLoading'

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
  position: relative;
  ${MEDIA_QUERY.lg} {
    width: 30%;
    flex-direction: column;
    border: solid 2px ${COLOR.green};
    border-radius: ${RADIUS.lg};
    padding: 20px;
    margin: 0;
    background-color: ${COLOR.white};
  }
`
const Avatar = styled.div`
  position: relative;
  padding: 10px;
`

const AvatarPicWrapper = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  background-color: ${COLOR.white};
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
  margin-left: 10px;
  border-radius: 3px;
  border: solid 1.5px ${COLOR.green};
  background-color: ${COLOR.white};
  position: relative;
  ${MEDIA_QUERY.lg} {
    border: none;
    border-top: 1px solid ${COLOR.green_light};
    margin: 10px 0;
    padding-bottom: 0px;
    background-color: none;
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
const ModifyBtn = styled(EditIcon)`
  width: 12px;
  height: 12px;
  position: absolute;
  top: 5px;
  right: 5px;
  margin: 6px;
  color: ${COLOR.green};
  &:hover {
    cursor: pointer;
  }
  ${MEDIA_QUERY.lg} {
    width: 20px;
    height: 20px;
  }
`
const ModifyAvatarBtn = styled(ModifyBtn)`
  top: 80px;
  right: 0;
  ${MEDIA_QUERY.lg} {
    top: 0;
  }
`

export default function UserBackstage() {
  const { isLoading, setIsLoading } = useContext(LoadingContext)
  const [tab, setTab] = useState('Articles')
  const [popUp, setPopUp] = useState({
    key: '',
    isShow: false,
  })
  const [avatarPop, setAvatarPop] = useState({
    key: '',
    isShow: false,
  })
  const [userData, setUserData] = useState({
    user_id: '',
    nickname: '',
    email: '',
    icon_url: '',
  })

  const { userID } = useParams()
  useEffect(() => {
    setIsLoading(true)
    getUserInfo(userID)
      .then((res) => {
        setUserData(res.data.data)
        setIsLoading(false)
      })
      .catch((err) => {})
  }, [userID, setIsLoading])

  const handleOnClick = () => {
    setPopUp({ key: userData.user_id, isShow: true })
  }

  return (
    <>
      {isLoading ? (
        <SmallRegionLoading />
      ) : (
        <Wrapper>
          <MemberProfileWrapper>
            <Avatar>
              <AvatarPicWrapper>
                <AvatarPic src={`${userData.icon_url}`} />
              </AvatarPicWrapper>
              <ModifyAvatarBtn
                onClick={() => {
                  setAvatarPop({ key: userData.user_id, isShow: true })
                }}
              />
              {avatarPop.isShow === true && (
                <UserUpdateAvatarBox
                  avatarPop={avatarPop}
                  setAvatarPop={setAvatarPop}
                  userData={userData}
                  setUserData={setUserData}
                />
              )}
            </Avatar>
            <Profile>
              <ModifyBtn onClick={handleOnClick} />
              {popUp.isShow === true && (
                <UserUpdateBox
                  popUp={popUp}
                  setPopUp={setPopUp}
                  userData={userData}
                  setUserData={setUserData}
                />
              )}
              <Info>
                <NicknameIcon />
                {userData.nickname}
              </Info>
              <Info>
                <EmailIcon />
                {userData.email}
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
      )}
    </>
  )
}
