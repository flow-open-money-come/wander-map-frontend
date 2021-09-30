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
const Avatar = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: #eee;
  margin: 0 auto;
`
const Profile = styled.div`
  margin: 20px;
  padding: 20px;
  width: 320px;
  height: 80px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`

const Info = styled.div`
  font-size: 12px;
  margin: 6px;
`
const ArticlesSectionWrapper = styled.div``
const SectionTitle = styled.div`
  text-align: center;
  font-size: 14px;
`
const ArticlesWrapper = styled.div`
  display: felx;
  margin: 20px;

  width: 320px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
const Pic = styled.div`
  margin: 10px;
  width: 80px;
  height: 80px;
  border-radius: 15px;
  background-color: #eee;
`
const Articles = styled.div`
  padding: 15px 10px;
  line-height: 1.2em;
  width: 220px;
`
const ArticlesTitle = styled.div`
  font-size: 13px;
  font-weight: 700;
`
const ArticlesContent = styled.div`
  font-size: 12px;
`
const ArticlesDate = styled.div`
  font-size: 9px;
  color: #8a8686;
  text-align: right;
`

export default function UserOverviewPage() {
  return (
    <Wrapper>
      <PageName>會員前台</PageName>
      <Avatar />
      <Profile>
        <Info>野原新之助</Info>
        <Info>hehe@123.com</Info>
      </Profile>
      <ArticlesSectionWrapper>
        <SectionTitle>心得</SectionTitle>
        <ArticlesWrapper>
          <Pic />
          <Articles>
            <ArticlesTitle>礁溪林美石磐涼爽一日遊</ArticlesTitle>
            <ArticlesContent>
              林美石磐步道有著低海拔亞熱帶溪谷的景色，步道沿舊水圳整建...
            </ArticlesContent>
            <ArticlesDate>2021.9.7 / 20:20:22</ArticlesDate>
          </Articles>
        </ArticlesWrapper>
        <ArticlesWrapper>
          <Pic />
          <Articles>
            <ArticlesTitle>礁溪林美石磐涼爽一日遊</ArticlesTitle>
            <ArticlesContent>
              林美石磐步道有著低海拔亞熱帶溪谷的景色，步道沿舊水圳整建...
            </ArticlesContent>
            <ArticlesDate>2021.9.7 / 20:20:22</ArticlesDate>
          </Articles>
        </ArticlesWrapper>
      </ArticlesSectionWrapper>
    </Wrapper>
  )
}
