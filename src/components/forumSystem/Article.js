import React from 'react'
import styled from 'styled-components'
import { ReactComponent as avatar } from '../../icons/default_avatar.svg'
import { FONT, COLOR, EFFECT, RADIUS, MEDIA_QUERY } from '../../constants/style'

const ArticlesContainer = styled.div`
  width: 100%;
  display: flex;
  margin: 35px auto 0px auto;
  padding-bottom: 20px;
  border-bottom: ${COLOR.beige} 1px solid;

  ${MEDIA_QUERY.md} {
    width: 100%;
    border-bottom: ${COLOR.beige} 1px solid;
  }
`
const ArticleInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const ArticlesImg = styled.img`
  width: 120px;
  height: 120px;
  border-radius: ${RADIUS.lg};
  align-self: center;

  ${MEDIA_QUERY.md} {
    width: 130px;
    height: 130px;
    margin-right: 13px;
  }

  ${MEDIA_QUERY.lg} {
    width: 160px;
    height: 160px;
    margin-right: 13px;
  }
`
const UserAvatar = styled(avatar)`
  width: 30px;
  height: 30px;

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

  ${MEDIA_QUERY.md} {
  }
`
const ArticlesTag = styled.span`
  border-radius: ${RADIUS.s};
  background-color: ${COLOR.yellow_dark};
  font-size: ${FONT.xs};
  margin: 5px 3px;
  padding: 4px;
  color: #ffffff;

  ${MEDIA_QUERY.md} {
    padding: 6px 15px;
    margin-right: 10px;
  }

  ${MEDIA_QUERY.lg} {
    &:first-child {
      margin-left: 30px;
    }
    padding: 6px 15px;
    margin-right: 17px;
  }
`
const ArticlesContent = styled.div`
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: wrap;
  font-size: ${FONT.s};
  max-height: 3em;
  line-height: 1.5em;

  ${MEDIA_QUERY.md} {
    font-size: ${FONT.s};
  }

  ${MEDIA_QUERY.lg} {
    font-size: ${FONT.md};
  }
`
const ArticlesTitle = styled.div`
  margin-bottom: 5px;
  font-weight: bold;

  ${MEDIA_QUERY.md} {
    line-height: 1.5em;
    font-size: ${FONT.md};
  }

  ${MEDIA_QUERY.lg} {
    line-height: 1.5em;
    font-size: ${FONT.lg};
  }
`

const ArticlesInfoContainer = styled.div`
  margin-left: 10px;
`
const ArticlesUser = styled.div`
  margin-top: 5px;
  display: flex;
  justify-content: space-between;

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

const ReadMore = styled.button`
  display: none;

  ${MEDIA_QUERY.md} {
    display: inline;
    color: ${COLOR.gray};
    cursor: pointer;
  }
`

const ArticlesInfo = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  ${MEDIA_QUERY.md} {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }
`
const TitleAndTags = styled.div`
  ${MEDIA_QUERY.lg} {
    display: flex;
  }
`

export default function ArticleList({ title, content, tags, user, date }) {
  return (
    <ArticlesContainer>
      <ArticlesImg src='https://i.imgur.com/w2Y6y4z.jpg' />
      <ArticlesInfoContainer>
        <TitleAndTags>
          <ArticlesTitle>{title}</ArticlesTitle>
          <ArticlesTags>
            {tags.map((tag) => {
              return <ArticlesTag>{tag}</ArticlesTag>
            })}
          </ArticlesTags>
        </TitleAndTags>
        <ArticlesContent>{content}</ArticlesContent>
        <ArticlesInfo>
          <ArticlesUser>
            <UserAvatar />
            <UserInfo>
              <UserName>{user}</UserName>
              <ArticlesDate>{date}</ArticlesDate>
            </UserInfo>
          </ArticlesUser>
          <ReadMore>閱讀全文</ReadMore>
        </ArticlesInfo>
      </ArticlesInfoContainer>
    </ArticlesContainer>
  )
}
