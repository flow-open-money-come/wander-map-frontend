import React, { useContext, memo } from 'react'
import styled from 'styled-components'
import { FONT, COLOR, RADIUS, MEDIA_QUERY } from '../../constants/style'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context'
import ReactHtmlParser from 'react-html-parser'
import useUserInfo from '../../hooks/useUserInfo'

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
  min-width: 120px;
  height: 120px;
  border-radius: ${RADIUS.lg};
  align-self: center;
  object-fit: cover;
  ${MEDIA_QUERY.md} {
    min-width: 150px;
    height: 150px;
    margin-right: 13px;
  }
`
const UserAvatar = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 1px solid ${COLOR.gray_light};
  object-fit: cover;

  ${MEDIA_QUERY.md} {
    width: 45px;
    height: 45px;
    margin-right: 13px;
  }

  ${(props) =>
    props.width === true &&
    `
      min-width: 30px;

      ${MEDIA_QUERY.md} {
        min-width: 45px;
      }
  `}
`
const ArticlesTags = styled.div`
  display: flex;
  align-items: center;
  overflow: auto;
`
const ArticlesTag = styled.span`
  border-radius: ${RADIUS.s};
  background-color: ${COLOR.yellow_dark};
  font-size: ${FONT.xs};
  margin: 5px 3px;
  padding: 4px;
  white-space: nowrap;
  color: ${COLOR.white};
  ${(props) =>
    !props.$lessRwd &&
    `
  ${MEDIA_QUERY.md} {
    padding: 6px 15px;
    margin-right: 10px;
  }
  ${MEDIA_QUERY.lg} {
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
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
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
  &:hover {
    opacity: 0.9;
  }
  ${MEDIA_QUERY.md} {
    justify-content: space-between;
  }
`

function ArticleList({
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
  width,
}) {
  const { userInfo } = useContext(AuthContext)
  const { toUserInfo } = useUserInfo()

  return (
    <ArticlesContainer to={articlePage}>
      <ArticlesImg src={articleImgSrc} />
      <ArticlesInfoContainer>
        <ArticlesTitle $lessRwd={lessRwd}>{title}</ArticlesTitle>
        <ArticlesTags>
          {tags &&
            tags.map((tag) => {
              return (
                <ArticlesTag key={tag} $lessRwd={lessRwd}>
                  {tag}
                </ArticlesTag>
              )
            })}
        </ArticlesTags>
        <ArticlesContent $lessRwd={lessRwd}>
          {ReactHtmlParser(content.replace(/<img[^>]*>/g, ''))}
        </ArticlesContent>
        <ArticlesInfo>
          <ArticlesUser to={toUserInfo(authorId, userInfo)}>
            <UserAvatar width={width} src={avatarImgSrc} />
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

export default memo(ArticleList)
