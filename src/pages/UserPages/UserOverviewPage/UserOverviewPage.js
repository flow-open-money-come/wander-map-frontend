import React, { useState, useEffect } from 'react';
import axios from 'axios'
import styled from 'styled-components'
import {
  COLOR,
  FONT,
  EFFECT,
  RADIUS,
  MEDIA_QUERY,
} from '../../../constants/style'
import { ReactComponent as ArticleIcon } from '../../../icons/user/user_article.svg'
import { ReactComponent as EmailIcon } from '../../../icons/user/user_email.svg'
import { ReactComponent as NicknameIcon } from '../../../icons/user/user_nickname.svg'

const Wrapper = styled.div`
  margin: 0 auto;
  width: 90%;
  display: flex;
  flex-wrap: wrap;
`

const MemberProfileWrapper = styled.div`
  text-align: center;
  margin: 20px;
  width: 90%;
  ${MEDIA_QUERY.md} {
    box-shadow: ${EFFECT.shadow_light};
    border-radius: ${RADIUS.lg};
  }
  ${MEDIA_QUERY.lg} {
    margin: 50px auto;
    width: 25%;
    min-width: 30vmin;
  }
`
const Avatar = styled.div`
  display: inline-block;
  position: relative;
  overflow: hidden;
  border-radius: 50%;
  background-color: #eee;
  margin: 20px auto;
`
const AvatarPic = styled.img`
  width: 40vmin;
  height: 40vmin;
  object-fit: cover;
  object-position: center;
  ${MEDIA_QUERY.lg} {
    width: 30vmin;
    height: 30vmin;
  }
`
const Profile = styled.div`
  padding: 15px;
  box-shadow: ${EFFECT.shadow_dark};
  border-radius: ${RADIUS.md};
  margin: 20px auto;
  ${MEDIA_QUERY.md} {
    box-shadow: none;
    margin: 0 auto;
  }
`

const Info = styled.div`
  font-size: ${FONT.s};
  margin: 6px;
  word-break: break-all;
  white-space: pre-wrap;
  text-align: center;
  svg {
    width: 12px;
    height: 12px;
    margin: 0 6px;
  }
  ${MEDIA_QUERY.md} {
    font-size: ${FONT.md};
    svg {
      width: 20px;
      height: 20px;
    }
  }
  ${MEDIA_QUERY.lg} {
    margin-top: 15px;
    font-size: ${FONT.lg};
   
  }
`
const SectionWrapper = styled.div`
  margin: 0 auto;
  width: 90%;
  ${MEDIA_QUERY.lg} {
    width: 60%;
    margin: 20px auto;
  }
`
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
    font-size: ${FONT.lg};
    svg {
      width: 30px;
      height: 30px;
      margin: 0 10px;
    }
  }
`
const ArticlesWrapper = styled.div`
  display: flex;
  margin: 20px auto;
  padding: 0 5px;
  border-radius: ${RADIUS.md};
  box-shadow: ${EFFECT.shadow_dark};
  ${MEDIA_QUERY.md} {
    margin: 30px auto;
  }
`
const ArticlesPic = styled.img`
  margin: 10px;
  width: 80px;
  height: 80px;
  border-radius: ${RADIUS.lg};
  background-color: #eee;
  ${MEDIA_QUERY.md} {
    width: 120px;
    height: 120px;
  }
`
const Articles = styled.div`
  padding: 15px 10px;
  line-height: 1.2em;
  width: calc(100% - 90px);
  ${MEDIA_QUERY.md} {
    line-height: 2em;
    width: calc(100% - 140px);
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
  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'http://3.138.41.92:8000/api/v1/users/1',
      );

      setData(result.data);
      console.log(data)
    };

    fetchData();
  }, []);

  return (
    <Wrapper>
      <MemberProfileWrapper>
        <Avatar>
          <AvatarPic src='https://s.yimg.com/os/creatr-uploaded-images/2021-09/50aee8d0-0cca-11ec-afd6-ddd0414a9b75' />
        </Avatar>
        <Profile>
          <Info>
            <NicknameIcon />
            野原新之助{data.nickname}
          </Info>
          <Info>
            <EmailIcon />
            hehe@123.com{data.email}
          </Info>
        </Profile>
      </MemberProfileWrapper>
      <SectionWrapper>
        <SectionTitle>
          <ArticleIcon />
          心得
        </SectionTitle>
        <ArticlesWrapper>
          <ArticlesPic src='http://shuj.shu.edu.tw/wp-content/uploads/2020/04/%E5%85%A7%E6%94%BF%E9%83%A8%E7%87%9F%E5%BB%BA%E7%BD%B2%E6%8F%90%E4%BE%9B%EF%BC%BF%E9%82%B1%E5%AE%B6%E7%B5%82_%E6%9D%9C%E9%B5%91%E6%BB%BF%E5%B1%B1%E7%B4%85_%E5%A4%AA%E9%AD%AF%E9%96%A3%E5%9C%8B%E5%AE%B6%E5%85%AC%E5%9C%92.jpg' />
          <Articles>
            <ArticlesTitle>礁溪林美石磐涼爽一日遊</ArticlesTitle>
            <ArticlesContent>
              林美石磐步道有著低海拔亞熱帶溪谷的景色，步道沿舊水圳整建...
            </ArticlesContent>
            <ArticlesDate>2021.9.7 / 20:20:22</ArticlesDate>
          </Articles>
        </ArticlesWrapper>
        <ArticlesWrapper>
          <ArticlesPic src='http://shuj.shu.edu.tw/wp-content/uploads/2020/04/%E5%85%A7%E6%94%BF%E9%83%A8%E7%87%9F%E5%BB%BA%E7%BD%B2%E6%8F%90%E4%BE%9B%EF%BC%BF%E9%82%B1%E5%AE%B6%E7%B5%82_%E6%9D%9C%E9%B5%91%E6%BB%BF%E5%B1%B1%E7%B4%85_%E5%A4%AA%E9%AD%AF%E9%96%A3%E5%9C%8B%E5%AE%B6%E5%85%AC%E5%9C%92.jpg' />
          <Articles>
            <ArticlesTitle>
              礁溪林美石磐涼爽一日遊礁溪林美石磐涼爽一日遊
            </ArticlesTitle>
            <ArticlesContent>
              林美石磐步道有著低海拔亞熱帶溪谷的景色，步道沿舊水圳整建有著低海拔亞熱帶溪谷的景色，步道沿舊水圳整建有著低海拔亞熱帶溪谷的景色，步道沿舊水圳整建
            </ArticlesContent>
            <ArticlesDate>2021.9.7 / 20:20:22</ArticlesDate>
          </Articles>
        </ArticlesWrapper>

        <ArticlesWrapper>
          <ArticlesPic src='http://shuj.shu.edu.tw/wp-content/uploads/2020/04/%E5%85%A7%E6%94%BF%E9%83%A8%E7%87%9F%E5%BB%BA%E7%BD%B2%E6%8F%90%E4%BE%9B%EF%BC%BF%E9%82%B1%E5%AE%B6%E7%B5%82_%E6%9D%9C%E9%B5%91%E6%BB%BF%E5%B1%B1%E7%B4%85_%E5%A4%AA%E9%AD%AF%E9%96%A3%E5%9C%8B%E5%AE%B6%E5%85%AC%E5%9C%92.jpg' />
          <Articles>
            <ArticlesTitle>礁溪林美石磐涼爽一日遊</ArticlesTitle>
            <ArticlesContent>
              林美石磐步道有著低海拔亞熱帶溪谷的景色，步道沿舊水圳整建...
            </ArticlesContent>
            <ArticlesDate>2021.9.7 / 20:20:22</ArticlesDate>
          </Articles>
        </ArticlesWrapper>
      </SectionWrapper>
    </Wrapper>
  )
}
