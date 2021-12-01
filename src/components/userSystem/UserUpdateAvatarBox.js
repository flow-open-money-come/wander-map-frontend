import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { patchUserInfo, refreshAccessToken } from '../../WebAPI'
import { AuthContext } from '../../context'
import styled from 'styled-components'
import { COLOR, FONT, RADIUS } from '../../constants/style'
import UserUploadImg from './UserUploadImg'
import swal from 'sweetalert'
import { setAuthToken } from '../../utils'
import { LoadingContext } from '../../context'

const ModifyField = styled.div`
  z-index: 10;
  width: 360px;
  padding: 30px 10px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border: 1px solid ${COLOR.gray};
  border-radius: ${RADIUS.md};
`
const Title = styled.div`
  margin: 20px 10px;
  margin-bottom: 40px;
  text-align: center;
  font-size: ${FONT.lg};
`
const InputWrapper = styled.div`
  margin: 0 auto;
  text-align: center;
`

const AlertMsg = styled.div`
  margin: 8px;
  font-size: ${FONT.xs};
  color: ${COLOR.gray};
  ${(props) =>
    props.$error && `color: red; font-weight:bold; font-size:${FONT.s}`};
`
const BtnWrapper = styled.div`
  text-align: center;
`
const Btn = styled.button`
  opacity: 0.8;
  display: inline-block;
  padding: 10px 20px;
  margin: 20px;
  color: ${COLOR.white};
  font-size: ${FONT.s};
  background: rgba(0, 0, 0, 0.4);
  border-radius: ${RADIUS.md};
  transition: 0.5s;
  &:hover {
    cursor: pointer;
    background: ${COLOR.green};
  }
`

export default function UserUpdateAvatarBox({
  avatarPop,
  setAvatarPop,
  userData,
  setUserData,
}) {
  const { userInfo, setUserInfo } = useContext(AuthContext)
  const history = useHistory()
  if (!userInfo) history.push('/')
  const [errMsg, setErrMsg] = useState()
  const [updateUserData, setUpdateUserData] = useState({
    nickname: userData.nickname,
    iconUrl: userData.icon_url,
    icon_url: userData.icon_url,
  })
  const { setIsLoading } = useContext(LoadingContext)

  const handleSubmit = (e) => {
    if (!avatarPop.key) return
    e.preventDefault()
    setErrMsg('')
    setIsLoading(true)
    patchUserInfo(avatarPop.key, updateUserData)
      .then((res) => {
        if (res.data.success) {
          setUserData({
            ...userData,
            icon_url: updateUserData.iconUrl,
            iconUrl: updateUserData.iconUrl,
          })
          setUserInfo({
            ...userInfo,
            icon_url: updateUserData.iconUrl,
            iconUrl: updateUserData.iconUrl,
          })
          refreshAccessToken()
            .then((res) => {
              if (res.data.success) {
                setAuthToken(res.data.data.token)
                setIsLoading(false)
                swal('修改成功', {
                  icon: 'success',
                  button: '關閉',
                })
              }
            })
            .catch(() => {
              setIsLoading(false)
              swal(
                'Oh 不！',
                '請求失敗！請稍候再試一次，或者聯繫我們。',
                'error'
              )
            })
        }
      })
      .catch((err) => {
        setIsLoading(false)
        swal('Oh 不！', '請求失敗！請稍候再試一次，或者聯繫我們。', 'error')
      })
    setAvatarPop({ ...avatarPop, isShow: false })
  }

  return (
    <ModifyField>
      <Title>更改大頭照</Title>
      <InputWrapper>
        <AlertMsg $error>{errMsg}</AlertMsg>
        <UserUploadImg
          name='iconUrl'
          updateUserData={updateUserData}
          setUpdateUserData={setUpdateUserData}
          setErrMsg={setErrMsg}
        />
        <AlertMsg>檔案大小限制為3MB</AlertMsg>
      </InputWrapper>
      <BtnWrapper>
        <Btn
          type='button'
          onClick={() => setAvatarPop({ ...avatarPop, isShow: false })}
        >
          返回
        </Btn>
        <Btn type='submit' onClick={handleSubmit}>
          確認
        </Btn>
      </BtnWrapper>
    </ModifyField>
  )
}
