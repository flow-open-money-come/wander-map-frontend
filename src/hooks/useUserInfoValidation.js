import { useState } from 'react'

export default function useUserInfoValidation() {
  const emailValidRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  const passwordValidRegex = /(?=.*\d)(?=.*[a-zA-Z])^[a-zA-Z0-9!@#$%^&*]{8,}$/
  const [errMsg, setErrMsg] = useState('')

  const validateUserInfos = (userInfos, option) => {
    if (option === 'nickname') {
      if (!userInfos[option]) {
        setErrMsg(`使用者名稱不得為空`)
        return false
      }
      if (userInfos[option].length > 20) {
        setErrMsg('使用者名稱過長')
        return false
      }
    }
    if (option === 'email') {
      if (!userInfos[option]) {
        setErrMsg(`電子郵件不得為空`)
        return false
      }
      if (!emailValidRegex.test(userInfos[option])) {
        setErrMsg('電子郵件格式不符')
        return false
      }
    }
    if (option === 'password') {
      if (!userInfos[option]) {
        setErrMsg(`密碼不得為空`)
        return false
      }
      if (!passwordValidRegex.test(userInfos[option])) {
        setErrMsg('密碼格式不符')
        return false
      }
    }
    if (option === 'confirmPassword') {
      if (!userInfos[option]) {
        setErrMsg(`確認密碼不得為空`)
        return false
      }
      if (userInfos[option] !== userInfos.password) {
        setErrMsg('確認密碼與密碼不符')
        return false
      }
    }
    return true
  }
  return {
    errMsg,
    setErrMsg,
    validateUserInfos,
  }
}
