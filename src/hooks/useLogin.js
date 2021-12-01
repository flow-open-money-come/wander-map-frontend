import { useState, useContext } from 'react'
import { useHistory } from 'react-router'
import useUserInfoValidation from './useUserInfoValidation'
import { AuthContext } from '../context'
import { setAuthToken } from '../utils'
import { userLogin } from '../WebAPI'
import jwt_decode from 'jwt-decode'
import swal from 'sweetalert'

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
  const [isLoadingLogin, setIsLoadingLogin] = useState(false)

  const handleLogin = (e) => {
    setErrMsg('')
    e.preventDefault()
    for (let i = 0; i < Object.keys(loginInfo).length; i++) {
      if (!validateUserInfos(loginInfo, Object.keys(loginInfo)[i])) return
    }
    setIsLoadingLogin(true)
    userLogin(loginInfo)
      .then((res) => {
        if (!res) return setIsLoadingLogin(false)
        if (res && res.data.success) {
          setAuthToken(res.data.data.token)
          setUserInfo(jwt_decode(res.data.data.token))
          setIsLoadingLogin(false)
          swal('登入成功！', {
            icon: 'success',
            button: '關閉',
          })
          history.push('/')
          return
        }
      })
      .catch((err) => {
        if (err.response) setErrMsg(err.response.data.message)
        setIsLoadingLogin(false)
      })
  }
  return {
    handleUserInfoChange,
    handleLogin,
    errMsg,
    isLoadingLogin,
  }
}
