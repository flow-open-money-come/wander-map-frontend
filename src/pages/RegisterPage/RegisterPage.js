import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { COLOR, FONT, EFFECT, RADIUS, MEDIA_QUERY } from '../../constants/style'

const RegisterPageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.2) 100%
    ),
    url('https://i.imgur.com/Y5790Kx.png');
  background-size: cover;
  padding: 40px 0px;
`
const RegisterFormsWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`
const Title = styled.div`
  font-size: ${FONT.md};
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

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SubmitBtn = styled.input`
  width: 250px;
  height: 40px;
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
export default function RegisterPage() {
  return (
    <>
      <RegisterPageWrapper>
        <Title> 註冊成為會員，和大家分享心得吧！ </Title>
        <RegisterFormsWrapper>
          <FormWrapper>
            <AlertMsg $error>資料不齊全，請再次檢查。</AlertMsg>
            <Input placeholder='使用者名稱' required />
            <AlertMsg>至多 20 個字元</AlertMsg>
            <Input type='email' placeholder='電子郵件' required />
            <Input
              type='password'
              placeholder='密碼'
              pattern='(?=.*\d)(?=.*[a-zA-Z])^[a-zA-Z0-9!@#$%^&*]{8,}$'
              required
            />
            <AlertMsg>8 位以上的英數組合</AlertMsg>
            <Input
              type='password'
              placeholder='確認密碼'
              pattern='(?=.*\d)(?=.*[a-zA-Z])^[a-zA-Z0-9!@#$%^&*]{8,}$'
              required
            />
            <AlertMsg>請再次輸入密碼</AlertMsg>
            <SubmitBtn type='submit' value='註冊'></SubmitBtn>
            <AlertMsg>
              已是會員？<OuterLink to='/login'>登入</OuterLink>
            </AlertMsg>
          </FormWrapper>
        </RegisterFormsWrapper>
      </RegisterPageWrapper>
    </>
  )
}
