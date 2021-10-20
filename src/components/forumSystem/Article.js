import React, { useContext } from 'react'
import styled from 'styled-components'
import { FONT, COLOR, RADIUS, MEDIA_QUERY } from '../../constants/style'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context'

const ArticlesContainer = styled(Link)`
  color: ${COLOR.black};
  width: 100%;
  display: flex;
  margin: 35px auto 0px auto;
  padding-bottom: 20px;
  border-bottom: ${COLOR.beige} 1px solid;
  align-items: center;
`

const ArticlesImg = styled.img`
  width: 120px;
  height: 120px;
  border-radius: ${RADIUS.lg};
  align-self: center;
  object-fit: cover;
  ${MEDIA_QUERY.md} {
    width: 150px;
    height: 150px;
    margin-right: 13px;
  }
`
const UserAvatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid ${COLOR.gray_light};

  ${MEDIA_QUERY.md} {
    width: 45px;
    height: 45px;
    margin-right: 13px;
  }
`
const ArticlesTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`
const ArticlesTag = styled.span`
  border-radius: ${RADIUS.s};
  background-color: ${COLOR.yellow_dark};
  font-size: ${FONT.xs};
  margin: 5px 3px;
  padding: 4px;
  color: ${COLOR.white};
  ${(props) =>
    !props.$lessRwd &&
    `
  ${MEDIA_QUERY.md} {
    padding: 6px 15px;
    margin-right: 10px;
  }
  ${MEDIA_QUERY.lg} {
    &:first-child {
      margin-left: 30px;
    }
    margin-right: 17px;
  }
  `}
`
const ArticlesContent = styled.div`
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: wrap;
  font-size: ${FONT.s};
  max-height: 3em;
  line-height: 1.5em;
  ${(props) =>
    !props.$lessRwd &&
    `
  ${MEDIA_QUERY.lg} {
    font-size: ${FONT.md};
  }
  `}
`
const ArticlesTitle = styled.div`
  margin-bottom: 5px;
  font-weight: bold;
  ${(props) =>
    !props.$lessRwd &&
    `
  ${MEDIA_QUERY.md} {
    line-height: 1.5em;
    font-size: ${FONT.md};
  }
  ${MEDIA_QUERY.lg} {
    font-size: ${FONT.lg};
  }
  `}
`

const ArticlesInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  min-width: calc(100% - 130px);

  ${MEDIA_QUERY.md} {
    min-width: calc(100% - 173px);
  }
`
const ArticlesUser = styled(Link)`
  margin-top: 5px;
  display: flex;
  justify-content: space-between;
  color: ${COLOR.black};
  ${MEDIA_QUERY.md} {
    margin-top: 9px;
  }
`
const ArticlesDate = styled.div`
  font-size: 11px;
`

const UserName = styled.div`
  margin-bottom: 5px;
`

const UserInfo = styled.div`
  font-size: 11px;
  padding-top: 2px;
  margin-left: 5px;
  ${MEDIA_QUERY.md} {
    font-size: ${FONT.s};
    padding-top: 10px;
  }
`

const ArticlesInfo = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  ${MEDIA_QUERY.md} {
    justify-content: space-between;
  }
`
const TitleAndTags = styled.div`
  ${(props) =>
    !props.$lessRwd &&
    `
    ${MEDIA_QUERY.lg} {
        display: flex;
      }
    `}
`

export default function ArticleList({
  id,
  title,
  content,
  tags,
  user,
  date,
  articleImgSrc,
  avatarImgSrc,
  lessRwd,
  articlePage,
  authorId,
}) {
  const { userInfo } = useContext(AuthContext)

  return (
    <ArticlesContainer key={id} to={articlePage}>
      <ArticlesImg src={articleImgSrc} />
      <ArticlesInfoContainer>
        <TitleAndTags $lessRwd={lessRwd}>
          <ArticlesTitle $lessRwd={lessRwd}>{title}</ArticlesTitle>
          <ArticlesTags>
            {tags &&
              tags.map((tag) => {
                return <ArticlesTag $lessRwd={lessRwd}>{tag}</ArticlesTag>
              })}
          </ArticlesTags>
        </TitleAndTags>
        <ArticlesContent $lessRwd={lessRwd}>{content}</ArticlesContent>
        <ArticlesInfo>
          <ArticlesUser
            to={
              userInfo && userInfo.user_id === authorId
                ? `/backstage/${authorId}`
                : `/user/${authorId}`
            }
          >
            <UserAvatar src={avatarImgSrc} />
            <UserInfo>
              <UserName>{user}</UserName>
              <ArticlesDate>{date}</ArticlesDate>
            </UserInfo>
          </ArticlesUser>
        </ArticlesInfo>
      </ArticlesInfoContainer>
    </ArticlesContainer>
  )
}
