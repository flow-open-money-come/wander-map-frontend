import React from 'react'
import styled from 'styled-components'
import { ReactComponent as AvatarIcon } from '../../icons/default_avatar.svg'
import { ReactComponent as SendIcon } from '../../icons/send.svg'
import { ReactComponent as EditIcon } from '../../icons/backstage/edit.svg'
import { ReactComponent as BinIcon } from '../../icons/backstage/bin.svg'
import { FONT, COLOR, EFFECT, RADIUS, MEDIA_QUERY } from '../../constants/style'

const CommentsContainer = styled.div`

  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 10px auto;
  padding-bottom: 20px;
`

const CommentsHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
`

const UserAvatar = styled.div`
  svg {
    width: 30px;
    height: 30px;
  }
  ${MEDIA_QUERY.md} {
    svg {
      width: 40px;
      height: 40px;
    }
  }
  ${MEDIA_QUERY.lg} {
    svg {
      width: 50px;
      height: 50px;
    }
  }
`

const InputField = styled.input`
  min-width: 80%;
  height: 25px;
  background: ${COLOR.white};
  outline: none;
  border: none;
  border-radius: ${RADIUS.s};
  margin: 5px;
  font-size: ${FONT.s};
  font-weight: bold;
  text-indent: 10px;
  ::placeholder {
    color: ${COLOR.green};
  }
  ${MEDIA_QUERY.md} {
    font-size: ${FONT.md};
    min-width: 85%;
    height: 30px;
    margin: 5px 10px;
  }
  ${MEDIA_QUERY.lg} {
    font-size: ${FONT.md};
    min-width: 87%;
    height: 40px;
    margin: 10px 20px;
  }
`

const SentBtn = styled.div`
  svg {
    width: 16px;
    height: 16px;
    &:hover {
      cursor: pointer;
    }
  }
  ${MEDIA_QUERY.md} {
    svg {
      width: 22px;
      height: 22px;
    }
  }
  ${MEDIA_QUERY.lg} {
    svg {
      width: 35px;
      height: 35px;
    }
  }
`

const Card = styled.div`
  width: 100%;
  background: rgb(127, 158, 35, 0.1);
  box-shadow: ${EFFECT.shadow_dark};
  margin: 5px 0;
  padding: 5px;
  display: flex;
  flex-direction: column;
  ${MEDIA_QUERY.md} {
    padding: 10px;
    margin: 8px 0;
  }
  ${MEDIA_QUERY.lg} {
    padding: 15px;
    margin: 10px 0;
  }
`

const CommentInfo = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`

const CommentAvatar = styled.div`
  svg {
    width: 35px;
    height: 35px;
  }
  ${MEDIA_QUERY.lg} {
    svg {
      width: 50px;
      height: 50px;
    }
  }
`

const CommentNickname = styled.div`
  font-size: ${FONT.s};
  font-weight: bold;
  color: ${COLOR.green};
  margin: 0 10px;
  ${MEDIA_QUERY.md} {
    font-size: ${FONT.md};
    margin: 0 15px;
  }
  ${MEDIA_QUERY.lg} {
    font-size: ${FONT.md};
    margin: 0 20px;
  }
`

const CommentTime = styled.div`
  font-size: ${FONT.xs};
  color: ${COLOR.gray};
  ${MEDIA_QUERY.md} {
    font-size: ${FONT.s};
  }
  ${MEDIA_QUERY.lg} {
    font-size: ${FONT.s};
  }
`

const CommentBtn = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  svg {
    margin: 0 3px;
    width: 15px;
    height: 15px;

    &:hover {
      cursor: pointer;
    }
  }
  ${MEDIA_QUERY.md} {
    svg {
      width: 20px;
      height: 20px;
      margin: 0 4px;
    }
  }
  ${MEDIA_QUERY.lg} {
    svg {
      width: 25px;
      height: 25px;
      margin: 0 6px;
    }
  }
`

const Content = styled.div`
  margin: 5px 0 8px 0;
  font-size: ${FONT.s};
  line-height: ${FONT.md};
  text-align: justify;
  ${MEDIA_QUERY.md} {
    font-size: ${FONT.s};
    line-height: ${FONT.lg};
  }
  ${MEDIA_QUERY.lg} {
    font-size: ${FONT.md};
    line-height: ${FONT.lg};
  }
`


export default function Comments() {
  return (
    <CommentsContainer>
      <CommentsHeader>
        <UserAvatar>
          <AvatarIcon />
        </UserAvatar>
        <InputField placeholder='請輸入留言...' />
        <SentBtn>
          <SendIcon />
        </SentBtn>
      </CommentsHeader>
      <Card>
        <CommentInfo>
          <CommentAvatar>
            <AvatarIcon />
          </CommentAvatar>
          <CommentNickname>甄環</CommentNickname>
          <CommentTime>2020.09.08 / 20:20:22</CommentTime>
          <CommentBtn>
            <EditIcon />
            <BinIcon />
          </CommentBtn>
        </CommentInfo>
        <Content>
          前陣子天氣炎熱，本宮得空和眉姐姐一同前往避暑，無意間在山腳下覓得一小溪，趁便四下無人，脫了鞋襪踏踏水。
        </Content>
      </Card>
      <Card>
        <CommentInfo>
          <CommentAvatar>
            <AvatarIcon />
          </CommentAvatar>
          <CommentNickname>甄環</CommentNickname>
          <CommentTime>2020.09.08 / 20:20:22</CommentTime>
          <CommentBtn>
            <EditIcon />
            <BinIcon />
          </CommentBtn>
        </CommentInfo>
        <Content>
          鳥語花香，甚是詩情畫意。可惜階梯太多階，爬得本宮腿都痠了，下回必要找機會回了皇上，將修繕步道的奴才們通通拉去慎行司領罰，那才解氣！鳥語花香，甚是詩情畫意。可惜階梯太多階，爬得本宮腿都痠了，下回必要找機會回了皇上，將修繕步道的奴才們通通拉去慎行司領罰，那才解氣！鳥語花香，甚是詩情畫意。可惜階梯太多階，爬得本宮腿都痠了，下回必要找機會回了皇上，將修繕步道的奴才們通通拉去慎行司領罰，那才解氣！鳥語花香，甚是詩情畫意。可惜階梯太多階，爬得本宮腿都痠了，下回必要找機會回了皇上，將修繕步道的奴才們通通拉去慎行司領罰，那才解氣！
        </Content>
      </Card>
    </CommentsContainer>
  )
}
