import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import useUserInfoValidation from '../../hooks/useUserInfoValidation'
import { patchUserInfo, refreshAccessToken } from '../../WebAPI'
import { AuthContext } from '../../context'
import styled from 'styled-components'
import { COLOR, FONT, EFFECT, RADIUS } from '../../constants/style'
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
const Input = styled.input`
  width: 250px;
  height: 40px;
  padding: 20px;
  border: none;
  border-radius: ${RADIUS.md};
  color: ${COLOR.gray};
  background-color: rgba(0, 0, 0, 0.3);
  box-shadow: ${EFFECT.shadow_light};
  transition: ${EFFECT.transition};
  font-size: ${FONT.s};
  &::placeholder {
    color: ${COLOR.white};
    text-align: center;
  }
  &:hover {
    cursor: pointer;
  }
  &:focus {
    outline: none;
    border: 2px solid ${COLOR.green};
    background-color: ${COLOR.white};
    box-shadow: none;
  }
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

export default function UserUpdateBox({
  popUp,
  setPopUp,
  userData,
  setUserData,
}) {
  const { userInfo, setUserInfo } = useContext(AuthContext)
  const history = useHistory()
  if (!userInfo) history.push('/')
  const { errMsg, setErrMsg, validateUserInfos } = useUserInfoValidation()
  const [updateUserData, setUpdateUserData] = useState({
    nickname: userData.nickname,
    iconUrl: userData.icon_url,
    icon_url: userData.icon_url,
    password: '',
    confirmPassword: '',
  })
  const { setIsLoading } = useContext(LoadingContext)

  const handleUserInfoChange = (e) => {
    const { name, value } = e.target
    setUpdateUserData({
      ...updateUserData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    if (!popUp.key) return
    e.preventDefault()
    setErrMsg('')
    for (let i = 0; i < Object.keys(updateUserData).length; i++) {
      if (!validateUserInfos(updateUserData, Object.keys(updateUserData)[i]))
        return
    }
    setIsLoading(true)
    patchUserInfo(popUp.key, updateUserData)
      .then((res) => {
        if (res.data.success) {
          setUserData({
            ...userData,
            nickname: updateUserData.nickname,
          })
          setUserInfo({
            ...userInfo,
            nickname: updateUserData.nickname,
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
      .catch(() => {
        setIsLoading(false)
        swal('Oh 不！', '請求失敗！請稍候再試一次，或者聯繫我們。', 'error')
      })
    setPopUp({ ...popUp, isShow: false })
  }

  return (
    <ModifyField>
      <Title>修改會員資料</Title>
      <InputWrapper>
        <AlertMsg $error>{errMsg}</AlertMsg>
        <Input
          name='nickname'
          placeholder='使用者名稱'
          onChange={handleUserInfoChange}
          value={updateUserData.nickname}
        />
        <AlertMsg>至多 20 個字元</AlertMsg>
        <Input
          name='password'
          type='password'
          placeholder='密碼'
          pattern='(?=.*\d)(?=.*[a-zA-Z])^[a-zA-Z0-9!@#$%^&*]{8,}$'
          onChange={handleUserInfoChange}
        />
        <AlertMsg>8 位以上的英數組合</AlertMsg>
        <Input
          name='confirmPassword'
          type='password'
          placeholder='確認密碼'
          pattern='(?=.*\d)(?=.*[a-zA-Z])^[a-zA-Z0-9!@#$%^&*]{8,}$'
          onChange={handleUserInfoChange}
        />
        <AlertMsg>請再次輸入密碼</AlertMsg>
      </InputWrapper>
      <BtnWrapper>
        <Btn
          type='button'
          onClick={() => setPopUp({ ...popUp, isShow: false })}
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
