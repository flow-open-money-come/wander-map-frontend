import React, { useState, useEffect } from 'react'
import { getUserInfo, getUserArticles } from '../../../WebAPI'
import { useParams } from 'react-router-dom'
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
  background-color: ${COLOR.white};
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
  const [userData, setUserData] = useState({
    user_id: '',
    nickname: '',
    email: '',
    icon_url: '',
  })
  const [userArticlesData, setUserArticlesData] = useState({
    articles: [
      {
        title: '',
        content: '',
        cover_picture_url: '',
        created_at: '',
      },
    ],
  })
  const { userID } = useParams()

  useEffect(() => {
    getUserInfo(userID)
      .then((res) => {
        console.log(res.data)
        setUserData(res.data.data)
      })
      .catch((err) => {
        console.log(err.response.data)
      })

    getUserArticles(userID)
      .then((res) => {
        console.log(res.data)
        setUserArticlesData(res.data.data)
      })
      .catch((err) => {
        console.log(err.response.data)
      })
  }, [])

  return (
    <Wrapper>
      <MemberProfileWrapper>
        <Avatar>
          <AvatarPic src={`${userData.icon_url}`} />
        </Avatar>
        <Profile>
          <Info>
            <NicknameIcon />
            {userData.nickname}
          </Info>
          <Info>
            <EmailIcon />
            {userData.email}
          </Info>
        </Profile>
      </MemberProfileWrapper>
      <SectionWrapper>
        <SectionTitle>
          <ArticleIcon />
          心得
        </SectionTitle>
        {userArticlesData.articles.map((article) => (
          <ArticlesWrapper>
            <ArticlesPic src={article.cover_picture_url} />
            <Articles>
              <ArticlesTitle>{article.title}</ArticlesTitle>
              <ArticlesContent>{article.content}</ArticlesContent>
              <ArticlesDate>{article.created_at}</ArticlesDate>
            </Articles>
          </ArticlesWrapper>
        ))}
      </SectionWrapper>
    </Wrapper>
  )
}
