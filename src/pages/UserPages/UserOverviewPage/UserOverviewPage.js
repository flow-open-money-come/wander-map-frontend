import React from 'react'
import styled, { css } from 'styled-components'
import {
  COLOR,
  FONT,
  EFFECT,
  RADIUS,
  MEDIA_QUERY,
} from '../../../constants/style'
import { ReactComponent as ArticleIcon } from '../../../icons/user/user_article.svg'

const Wrapper = styled.div`
  margin: 0 auto;
  min-width: 360px;
  width: 90%;
  ${MEDIA_QUERY.md} {
  }
  ${MEDIA_QUERY.lg} {
  }
`
const PageName = styled.div`
  font-size: ${FONT.lg};
  font-weight: bold;
  border-bottom: 5px solid ${COLOR.green};
  width: 100%;
  text-align: center;
  padding: 5px 0;
  margin: 20px;
  ${MEDIA_QUERY.lg} {
    font-size: ${FONT.xll};
    padding: 15px 0;
  }
`
const MemberProfileWrapper = styled.div`
  text-align: center;
  ${MEDIA_QUERY.md} {
    box-shadow: ${EFFECT.shadow_light};
    border-radius: ${RADIUS.lg};
    margin: 50px auto;
    width: 450px;
  }
`
const Avatar = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: #eee;
  margin: 20px auto;
  ${MEDIA_QUERY.lg} {
    width: 150px;
    height: 150px;
    margin-top: 50px;
  }
`
const Profile = styled.div`
  margin: 20px;
  padding: 20px;
  min-width: 320px;
  box-shadow: ${EFFECT.shadow_dark};
  border-radius: ${RADIUS.md};
  margin: 20px auto;
  ${MEDIA_QUERY.md} {
    width: 450px;
    box-shadow: none;
  }
`

const Info = styled.div`
  font-size: ${FONT.s};
  margin: 6px;
  word-break: break-all;
  white-space: pre-wrap;
  ${MEDIA_QUERY.md} {
    font-size: ${FONT.md};
  }
  ${MEDIA_QUERY.lg} {
    margin-top: 15px;
    font-size: ${FONT.lg};
  }
`
const ArticlesSectionWrapper = styled.div``
const SectionTitle = styled.div`
  text-align: center;
  margin-top: 25px;
  font-size: ${FONT.s};
  svg {
    width: 20px;
    height: 20px;
    margin: 0 5px;
  }
  ${MEDIA_QUERY.md} {
    font-size: ${FONT.md};
  }
  ${MEDIA_QUERY.lg} {
    margin-top: 30px;
    font-size: ${FONT.lg};
    svg {
      width: 30px;
      height: 30px;
      margin: 0 10px;
    }
  }
`
const ArticlesWrapper = styled.div`
  display: felx;
  margin: 20px auto;
  min-width: 320px;
  border-radius: ${RADIUS.md};
  box-shadow: ${EFFECT.shadow_dark};
  ${MEDIA_QUERY.md} {
    width: 450px;
    margin: 50px auto;
  }
`
const Pic = styled.img`
  margin: 10px;
  width: 80px;
  height: 80px;
  border-radius: ${RADIUS.lg};
  background-color: #eee;
  ${MEDIA_QUERY.lg} {
    width: 120px;
    height: 120px;
  }
`
const Articles = styled.div`
  padding: 15px 10px;
  line-height: 1.2em;
  width: 70%;
  ${MEDIA_QUERY.md} {
    line-height: 2em;
  }
`
const ArticlesTitle = styled.div`
  font-weight: 700;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: ${FONT.s};
  ${MEDIA_QUERY.md} {
    font-size: ${FONT.md};
  }
  ${MEDIA_QUERY.lg} {
    font-size: ${FONT.lg};
  }
`
const ArticlesContent = styled.div`
  font-size: ${FONT.xs};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  white-space: normal;
  ${MEDIA_QUERY.md} {
    font-size: ${FONT.s};
  }
  ${MEDIA_QUERY.lg} {
    font-size: ${FONT.md};
  }
`
const ArticlesDate = styled.div`
  font-size: ${FONT.xs};
  color: ${COLOR.gray};
  text-align: right;
  margin: 5px;
  ${MEDIA_QUERY.md} {
    font-size: ${FONT.s};
  }
  ${MEDIA_QUERY.lg} {
    font-size: ${FONT.md};
    margin: 10px;
  }
`

export default function UserOverviewPage() {
  return (
    <Wrapper>
      <PageName>會員前台</PageName>
      <MemberProfileWrapper>
        <Avatar />
        <Profile>
          <Info>野原新之助</Info>
          <Info>hehe@123.com</Info>
        </Profile>
      </MemberProfileWrapper>
      <ArticlesSectionWrapper>
        <SectionTitle>
          <ArticleIcon />
          心得
        </SectionTitle>
        <ArticlesWrapper>
          <Pic src='http://shuj.shu.edu.tw/wp-content/uploads/2020/04/%E5%85%A7%E6%94%BF%E9%83%A8%E7%87%9F%E5%BB%BA%E7%BD%B2%E6%8F%90%E4%BE%9B%EF%BC%BF%E9%82%B1%E5%AE%B6%E7%B5%82_%E6%9D%9C%E9%B5%91%E6%BB%BF%E5%B1%B1%E7%B4%85_%E5%A4%AA%E9%AD%AF%E9%96%A3%E5%9C%8B%E5%AE%B6%E5%85%AC%E5%9C%92.jpg' />
          <Articles>
            <ArticlesTitle>礁溪林美石磐涼爽一日遊</ArticlesTitle>
            <ArticlesContent>
              林美石磐步道有著低海拔亞熱帶溪谷的景色，步道沿舊水圳整建...
            </ArticlesContent>
            <ArticlesDate>2021.9.7 / 20:20:22</ArticlesDate>
          </Articles>
        </ArticlesWrapper>
        <ArticlesWrapper>
          <Pic src='http://shuj.shu.edu.tw/wp-content/uploads/2020/04/%E5%85%A7%E6%94%BF%E9%83%A8%E7%87%9F%E5%BB%BA%E7%BD%B2%E6%8F%90%E4%BE%9B%EF%BC%BF%E9%82%B1%E5%AE%B6%E7%B5%82_%E6%9D%9C%E9%B5%91%E6%BB%BF%E5%B1%B1%E7%B4%85_%E5%A4%AA%E9%AD%AF%E9%96%A3%E5%9C%8B%E5%AE%B6%E5%85%AC%E5%9C%92.jpg' />
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
