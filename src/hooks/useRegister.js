import { useState, useContext } from 'react'
import { useHistory } from 'react-router'
import useUserInfoValidation from './useUserInfoValidation'
import { AuthContext } from '../context'
import { setAuthToken } from '../utils'
import { userRegister } from '../WebAPI'
import jwt_decode from 'jwt-decode'
import swal from 'sweetalert'

export default function useRegister() {
  const [registerInfo, setRegisterInfo] = useState({
    nickname: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const { setUserInfo } = useContext(AuthContext)
  const history = useHistory()
  const { errMsg, setErrMsg, validateUserInfos } = useUserInfoValidation()
  const [isLoadingRegister, setIsLoadingRegister] = useState(false)

  const handleUserInfoChange = (e) => {
    setRegisterInfo({
      ...registerInfo,
      [e.target.name]: e.target.value,
    })
  }
  const handleRegister = (e) => {
    setErrMsg('')
    e.preventDefault()
    for (let i = 0; i < Object.keys(registerInfo).length; i++) {
      if (!validateUserInfos(registerInfo, Object.keys(registerInfo)[i])) return
    }
    setIsLoadingRegister(true)
    userRegister(registerInfo)
      .then((res) => {
        if (res.data.success) {
          setAuthToken(res.data.data.token)
          setUserInfo(jwt_decode(res.data.data.token))
          setIsLoadingRegister(false)
          swal('註冊成功！ 歡迎您的加入～', {
            icon: 'success',
            button: '關閉',
          })
          history.push('/')
        }
        if (res.data.message.indexOf('already') > 0)
          setErrMsg('電子郵件已被註冊！')
        setIsLoadingRegister(false)
      })
      .catch((err) => {
        if (err) {
          setErrMsg(err.response.data.data.errors[0].msg)
          setIsLoadingRegister(false)
        }
      })
  }

  return {
    handleUserInfoChange,
    handleRegister,
    errMsg,
    isLoadingRegister,
  }
}
