import React, { useState, useEffect, useContext } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { AuthContext } from '../../context'
import useUserInfoValidation from '../../hooks/useUserInfoValidation'
import { patchUserInfo } from '../../WebAPI'
import styled from 'styled-components'
import { COLOR, FONT, EFFECT, RADIUS, MEDIA_QUERY } from '../../constants/style'

const ModifyField = styled.div`
  width: 400px;
  padding: 40px 30px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border: 1px solid ${COLOR.gray};
  border-radius: ${RADIUS.s};
`
const ModifyTitle = styled.div`
  margin: 10px;
  text-align: center;
  font-size: ${FONT.md};
`
const InputWrapper = styled.div`
  margin: 0 auto;
  text-align: center;
`
const Input = styled.input`
  width: 250px;
  height: 40px;
  padding: 20px;
  border-radius: ${RADIUS.md};
  margin: 10px;
  background-color: rgba(0, 0, 0, 0.3);
  border: none;
  transition: ${EFFECT.transition};
  font-size: ${FONT.s};
  color: ${COLOR.white};
  box-shadow: ${EFFECT.shadow_light};
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
    background-color: rgba(0, 0, 0, 0);
    box-shadow: none;
    color: ${COLOR.gray};
  }
  ${MEDIA_QUERY.lg} {
    height: 30px;
    width: 500px;
    font-size: ${FONT.md};
  }
`
const AlertMsg = styled.span`
  margin-top: 8px;
  font-size: ${FONT.xs};
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

export default function UserUpdateBox({ popUp, setPopUp }) {
  console.log(popUp)
  const [updateUserInfo, setUpdateUserInfo] = useState({
    nickname: '',
    password: '',
    confirmPassword: '',
  })

  const { userInfo } = useContext(AuthContext)
  const history = useHistory()
  const { errMsg, setErrMsg, validateUserInfos } = useUserInfoValidation()

  const handleUpdateUerSubmit = (e) => {
    if (!popUp.key) return
    e.preventDefault()
    setErrMsg('')
    for (let i = 0; i < Object.keys(updateUserInfo).length; i++) {
      if (!validateUserInfos(updateUserInfo, Object.keys(updateUserInfo)[i]))
        return
    }
    patchUserInfo(popUp.key)
      .then((res) => {
        console.log(res.data.data)
        console.log('修改成功')
      })
      .catch((err) => {
        console.log(err.response.data)
        console.log('修改不成功')
      })
    setPopUp({ ...popUp, isShow: false })
  }

  const handleUserInfoChange = (e) => {
    setUpdateUserInfo({
      ...updateUserInfo,
      [e.target.name]: e.target.value,
    })
    console.log(updateUserInfo)
  }

  return (
    <ModifyField>
      <ModifyTitle>修改會員資料</ModifyTitle>
      <InputWrapper>
        <AlertMsg $error>{errMsg}</AlertMsg>
        <Input
          name='nickname'
          placeholder='使用者名稱'
          required
          onChange={handleUserInfoChange}
        />
        <br />
        <AlertMsg>至多 20 個字元</AlertMsg>
        <Input
          name='password'
          type='password'
          placeholder='密碼'
          pattern='(?=.*\d)(?=.*[a-zA-Z])^[a-zA-Z0-9!@#$%^&*]{8,}$'
          required
          onChange={handleUserInfoChange}
        />
        <br />
        <AlertMsg>8 位以上的英數組合</AlertMsg>
        <br />
        <Input
          name='confirmPassword'
          type='password'
          placeholder='確認密碼'
          pattern='(?=.*\d)(?=.*[a-zA-Z])^[a-zA-Z0-9!@#$%^&*]{8,}$'
          required
          onChange={handleUserInfoChange}
        />
        <br />
        <AlertMsg>請再次輸入密碼</AlertMsg>
      </InputWrapper>
      <BtnWrapper>
        <Btn
          type='button'
          onClick={() => setPopUp({ ...popUp, isShow: false })}
        >
          返回
        </Btn>
        <Btn type='submit' onClick={handleUpdateUerSubmit}>
          確認
        </Btn>
      </BtnWrapper>
    </ModifyField>
  )
}
