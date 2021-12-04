import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { COLOR, FONT, EFFECT, RADIUS, MEDIA_QUERY } from '../../constants/style'
import useLogin from '../../hooks/useLogin'
import SmallRegionLoading from '../../components/common/SmallRegionLoading'

const LoginPageWrapper = styled.div`
  width: 100%;
  height: 86vh;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 100%
    ),
    url('https://i.imgur.com/Y5790Kx.png');
  background-size: cover;
  padding: 40px 0px;
`
const LoginFormsWrapper = styled.form`
  width: 80%;
  margin: 0 auto;
`
const Title = styled.div`
  font-size: ${FONT.lg};
  color: ${COLOR.white};
  text-align: center;
  margin-bottom: 30px;
  ${MEDIA_QUERY.lg} {
    font-size: ${FONT.logo};
  }
`

const Input = styled.input`
  width: 250px;
  height: 40px;
  border-radius: ${RADIUS.lg};
  margin-top: 20px;
  background-color: rgba(0, 0, 0, 0.3);
  border: none;
  padding: 20px;
  transition: ${EFFECT.transition};
  font-size: ${FONT.s};
  color: ${COLOR.white};
  box-shadow: ${EFFECT.shadow_light};
  &:hover {
    width: 330px;
    cursor: pointer;
  }
  &:focus {
    width: 330px;
    background-color: rgba(0, 0, 0, 0.6);
    outline: none;
  }
  &::placeholder {
    color: ${COLOR.white};
    text-align: center;
  }
  ${MEDIA_QUERY.lg} {
    font-size: ${FONT.md};
    width: 350px;
    &:hover {
      width: 430px;
      cursor: pointer;
    }
    &:focus {
      width: 430px;
      outline: none;
    }
  }
`

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SubmitBtn = styled.input`
  width: 250px;
  height: 40px;
  padding: 10px 20px;
  border: 1px solid ${COLOR.gray};
  border-radius: ${RADIUS.lg};
  margin-top: 25px;
  color: ${COLOR.white};
  text-align: center;
  transition: ${EFFECT.transition};
  font-size: ${FONT.s};
  background-color: transparent;
  &:hover {
    cursor: pointer;
    background-color: ${COLOR.green};
    color: white;
  }
  ${MEDIA_QUERY.lg} {
    width: 350px;
    font-size: ${FONT.md};
  }
`
const AlertMsg = styled.span`
  margin-top: 8px;
  font-size: ${FONT.xs};
  color: ${COLOR.white};
  ${(props) =>
    props.$error && `color: red; font-weight:bold; font-size:${FONT.s}`}
`
const OuterLink = styled(Link)`
  font-size: ${FONT.xs};
  font-weight: bold;
  color: ${COLOR.white};
`
export default function LoginPage() {
  const { handleUserInfoChange, handleLogin, errMsg, isLoadingLogin } =
    useLogin()
  return (
    <>
      <LoginPageWrapper>
        {isLoadingLogin && <SmallRegionLoading />}
        <Title> 會員登入 </Title>
        <LoginFormsWrapper>
          <FormWrapper>
            <AlertMsg $error>{errMsg}</AlertMsg>
            <Input
              name='email'
              type='email'
              placeholder='電子郵件'
              required
              onChange={(e) => {
                handleUserInfoChange(e)
              }}
            />
            <Input
              name='password'
              type='password'
              placeholder='密碼'
              pattern='(?=.*\d)(?=.*[a-zA-Z])^[a-zA-Z0-9!@#$%^&*]{8,}$'
              required
              onChange={(e) => {
                handleUserInfoChange(e)
              }}
            />
            <SubmitBtn
              type='submit'
              value='登入'
              onClick={(e) => {
                handleLogin(e)
              }}
            ></SubmitBtn>
            <AlertMsg>
              還不是會員？<OuterLink to='/register'>註冊</OuterLink>
            </AlertMsg>
          </FormWrapper>
        </LoginFormsWrapper>
      </LoginPageWrapper>
    </>
  )
}
