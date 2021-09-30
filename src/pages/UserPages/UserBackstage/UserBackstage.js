import React from 'react'
import styled, { css } from 'styled-components'
import { COLOR, FONT, EFFECT, RADIUS } from '../../../constants/style'

const Wrapper = styled.div`
  margin: 0 auto;
  width: 360px;
`
const PageName = styled.div`
  font-size: 30px;
  text-align: center;
  margin: 20px;
`
const MemberProfileWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: 20px;
`
const Avatar = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: #eee;
`
const Profile = styled.div`
  padding: 20px;
  width: 160px;
  height: 80px;
  border-radius: 3px;
  border: solid 1.5px ${COLOR.green};
  position: relative;
`
const ModifyBtn = styled.button`
  width: 12px;
  height: 12px;
  position: absolute;
  top: 0;
  right: 0;
  margin: 6px;
  background-color: ${COLOR.green};
`
const Info = styled.div`
  font-size: 12px;
  margin: 6px;
`

export default function UserBackstage() {
  return (
    <Wrapper>
      <PageName>會員後台</PageName>
      <MemberProfileWrapper>
        <Avatar />
        <Profile>
          <ModifyBtn />
          <Info>野原新之助</Info>
          <Info>hehe@123.com</Info>
        </Profile>
      </MemberProfileWrapper>
    </Wrapper>
  )
}
