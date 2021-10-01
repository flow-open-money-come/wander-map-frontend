import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { COLOR, FONT, MEDIA_QUERY } from '../../constants/style'
import Input from '../../components/adminSystem/Input'
import SubmitBtn from '../../components/adminSystem/SubmitBtn'
import AlertMsg from '../../components/adminSystem/AlertMsg'

const RegisterPageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0.3) 100%
    ),
    url(https://i.imgur.com/Y5790Kx.png);
  background-size: cover;
`
const RegisterTitle = styled.div`
  font-size: ${FONT.md};
  text-align: center;
  padding-top: 50px;
  margin-bottom: 20px;
  font-weight: bold;
  color: ${COLOR.white};
  ${MEDIA_QUERY.md} {
    font-size: ${FONT.lg};
  }
  ${MEDIA_QUERY.lg} {
    font-size: ${FONT.logo};
  }
`
const RegisterFromsWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  ${MEDIA_QUERY.lg} {
    display: flex;
  }
`
const RegisterFrom = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${MEDIA_QUERY.lg} {
    width: 50%;
  }
`
const ThirdPartyRegisterForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${MEDIA_QUERY.lg} {
    width: 50%;
  }
`
const LoginLink = styled(Link)`
  color: ${COLOR.white};
  font-size: ${FONT.s};
  margin-top: 8px;
  font-weight: bold;
`
const RedirectMsg = styled.div`
  display: flex;
  margin-top: 10px;
`
function LoginPage() {
  return (
    <>
      <RegisterPageWrapper>
        <RegisterTitle>會員登入</RegisterTitle>
        <RegisterFromsWrapper>
          <RegisterFrom>
            <AlertMsg
              text='資料不齊全，請再次檢查。'
              styles={{ color: 'red', fontSize: FONT.md, weight: 'bold' }}
            ></AlertMsg>
            <Input placeholder='使用者名稱' />
            <Input type='email' placeholder='電子郵件' />
            <Input type='password' placeholder='密碼' />
            <SubmitBtn text='登入' />
            <RedirectMsg>
              <AlertMsg
                text='還不是會員嗎？'
                styles={{ color: COLOR.white, fontSize: FONT.s }}
              ></AlertMsg>
              <LoginLink>註冊</LoginLink>
            </RedirectMsg>
          </RegisterFrom>
          <ThirdPartyRegisterForm></ThirdPartyRegisterForm>
        </RegisterFromsWrapper>
      </RegisterPageWrapper>
    </>
  )
}

export default LoginPage
