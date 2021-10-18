import { useState, useContext } from 'react'
import { useHistory } from 'react-router'
import useUserInfoValidation from './useUserInfoValidation'
import { AuthContext } from '../context'
import { setAuthToken } from '../utils'
import { userLogin } from '../WebAPI'
import jwt_decode from 'jwt-decode'

export default function useLogin() {
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  })

  const handleUserInfoChange = (e) => {
    setLoginInfo({
      ...loginInfo,
      [e.target.name]: e.target.value,
    })
  }

  const { setUserInfo } = useContext(AuthContext)
  const history = useHistory()
  const { errMsg, setErrMsg, validateUserInfos } = useUserInfoValidation()

  const handleLogin = (e) => {
    setErrMsg('')
    e.preventDefault()
    for (let i = 0; i < Object.keys(loginInfo).length; i++) {
      if (!validateUserInfos(loginInfo, Object.keys(loginInfo)[i])) return
    }
    userLogin(loginInfo)
      .then((res) => {
        if (res.data.success) {
          setAuthToken(res.data.data.token)
          setUserInfo(jwt_decode(res.data.data.token))
          alert('登入成功！ 歡迎大駕光臨～')
          history.push('/')
        }
      })
      .catch((err) => {
        setErrMsg(err.response.data.message)
      })
  }
  return {
    handleUserInfoChange,
    handleLogin,
    errMsg,
  }
}
