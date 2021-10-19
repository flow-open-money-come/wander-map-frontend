import React, { useState, useContext } from 'react'
import styled from 'styled-components'
import { FONT, COLOR, MEDIA_QUERY, EFFECT } from '../../constants/style'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context'

const UserName = styled(Link)`
  color: ${COLOR.black};

  ${MEDIA_QUERY.md} {
    font-size: ${FONT.md};
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
`
const ArticleDate = styled.div`
  font-size: ${FONT.xs};
  margin-top: 10px;

  ${MEDIA_QUERY.md} {
    font-size: ${FONT.md};
  }
`

const UserAvatar = styled.img`
  border: 1px solid ${COLOR.gray_light};
  border-radius: 50%;
  width: 30px;
  height: 30px;

  ${MEDIA_QUERY.md} {
    width: 45px;
    height: 45px;
  }
`
const ArticleContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: ${COLOR.beige} 1px solid;
  box-shadow: ${EFFECT.shadow_light};
  width: 100%;
  margin: 21px 0 50px 0;
  padding: 10px 15px 15px 15px;

  ${MEDIA_QUERY.md} {
    margin-bottom: 78px;
    padding: 19px 35px 35px 35px;
  }
`

const ArticleDesc = styled.div`
  align-self: center;
  border-top: 1px solid ${COLOR.beige};
  margin: 15px 0;
  width: 100%;
  max-height: 40rem;
  font-size: ${FONT.s};
  line-height: 40px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: wrap;

  ${MEDIA_QUERY.lg} {
    font-size: ${FONT.md};
  }

  ${(props) =>
    props.unfold &&
    `
    overflow: visible;
    max-height: fit-content;
  `}
`

const UnfoldButton = styled.button`
  margin-top: 10px;
  align-self: flex-end;
  cursor: pointer;
  color: ${COLOR.green};
  font-size: ${FONT.s};
  font-weight: bold;
  margin: 0 5px 13px 0;

  ${MEDIA_QUERY.lg} {
    font-size: ${FONT.md};
  }
`

export default function ArticleContent({ post }) {
  const [unfold, setUnfold] = useState(false)
  const { userInfo } = useContext(AuthContext)

  return (
    <ArticleContentContainer>
      <ArticleUser>
        <UserAvatar src={post.icon_url} />
        <UserInfo>
          <UserName
            to={
              userInfo && userInfo.user_id === post.author_id
                ? `/backstage/${post.author_id}`
                : `/user/${post.author_id}`
            }
          >
            {post.nickname}
          </UserName>
          <ArticleDate>
            {new Date(post.created_at).toLocaleString('ja')}
          </ArticleDate>
        </UserInfo>
      </ArticleUser>
      <ArticleDesc unfold={unfold}>{post.content}</ArticleDesc>
      <UnfoldButton unfold={unfold} onClick={() => setUnfold(!unfold)}>
        {unfold ? '收合' : '展開全文'}
      </UnfoldButton>
    </ArticleContentContainer>
  )
}
