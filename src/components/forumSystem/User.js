import React from 'react'
import styled from 'styled-components'
import { FONT, COLOR, MEDIA_QUERY } from '../../constants/style'

const UserName = styled.div`
  margin-bottom: 5px;

  ${MEDIA_QUERY.md} {
    font-size: ${FONT.md};
    padding-bottom: 5px;
  }
`

const UserInfo = styled.div`
  font-size: ${FONT.xs};
  align-items: center;
  margin-left: 15px;

  ${MEDIA_QUERY.md} {
    font-size: ${FONT.s};
  }
`
const ArticleUser = styled.div`
  display: flex;

  ${MEDIA_QUERY.md} {
  }
`
const ArticleDate = styled.div`
  font-size: ${FONT.xs};

  ${MEDIA_QUERY.md} {
    font-size: ${FONT.md};
  }
`

const UserAvatar = styled.img`
  width: 30px;
  height: 30px;

  ${MEDIA_QUERY.md} {
    width: 45px;
    height: 45px;
  }
`

export default function User() {
  return (
    <ArticleUser>
      <UserAvatar src='https://i.imgur.com/eGREu6v.png' />
      <UserInfo>
        <UserName>水貓怪怪</UserName>
        <ArticleDate>2021.9.7 / 20:20:22</ArticleDate>
      </UserInfo>
    </ArticleUser>
  )
}
