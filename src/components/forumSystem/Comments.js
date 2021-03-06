import React, { useState, useEffect, useContext, useCallback } from 'react'
import { useParams, Link } from 'react-router-dom'
import styled from 'styled-components'
import { ReactComponent as SendIcon } from '../../icons/send.svg'
import EditIcon from '../../icons/backstage/edit.svg'
import BinIcon from '../../icons/backstage/bin.svg'
import { FONT, COLOR, EFFECT, RADIUS, MEDIA_QUERY } from '../../constants/style'
import {
  postMessage,
  deleteMessage,
  patchMessage,
  getMessages,
  getComments,
  postComment,
  patchComment,
  deleteComment,
} from '../../WebAPI'
import { AuthContext } from '../../../src/context'
import SmallRegionLoading from '../../components/common/SmallRegionLoading'
import { useInput } from '../../hooks/useInput'
import useUserInfo from '../../hooks/useUserInfo'
import swal from 'sweetalert'

const CommentsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 10px auto 50px auto;
  padding-bottom: 20px;
`

const CommentsHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5px;
`

const UserAvatar = styled.img`
  border: 1px solid ${COLOR.gray_light};
  width: 7vmin;
  height: 7vmin;
  border-radius: 50%;
  object-fit: cover;

  ${(props) =>
    props.authorImg &&
    `
    min-width: 7vmin;
  `}
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
  ${(props) =>
    !props.userInfo &&
    `
    pointer-events: none;
  `}
`

const SentBtn = styled.button`
  svg {
    width: 16px;
    height: 16px;
    &:hover {
      cursor: pointer;
      opacity: 0.8;
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
  justify-content: space-between;
`

const CommentViewInfo = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 70%;
`

const CommentNickname = styled(Link)`
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
  display: flex;
  align-items: center;
  max-width: 60px;
  text-align: right;
  font-size: ${FONT.xs};
  color: ${COLOR.gray};
  ${MEDIA_QUERY.md} {
    font-size: ${FONT.s};
    max-width: 80px;
  }
  ${MEDIA_QUERY.lg} {
    max-width: 160px;
  }
`

const CommentBtn = styled.div`
  display: flex;
  max-width: 80%;
  button {
    margin: 0 3px;
    width: 15px;
    height: 15px;
    &:hover {
      cursor: pointer;
      opacity: 0.7;
    }
  }
  ${MEDIA_QUERY.md} {
    button {
      width: 20px;
      height: 20px;
      margin: 0 4px;
    }
  }
  ${MEDIA_QUERY.lg} {
    button {
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
  white-space: pre-line;
  ${MEDIA_QUERY.md} {
    font-size: ${FONT.s};
    line-height: ${FONT.lg};
  }
  ${MEDIA_QUERY.lg} {
    font-size: ${FONT.md};
    line-height: ${FONT.lg};
  }
`

const EditInput = styled.textarea`
  &:focus {
    outline: none;
  }
  border: ${COLOR.gray_light} solid 2px;
  border-radius: ${RADIUS.s};
  margin-top: 10px;
  line-height: 1.5em;
  padding-left: 5px;
  min-width: 80%;
  padding: 5px;
  background: ${COLOR.white};
`

const SendBtn = styled.button`
  border: 1px ${COLOR.gray_light} solid;
  padding: 5px;
  border-radius: ${RADIUS.s};
  margin: 5px 5px 0 0;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  ${(props) =>
    props.editValue &&
    `
    background-color: ${COLOR.green};
    color: ${COLOR.white};
  `}
`

const EditWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
`

const Reminder = styled.span`
  color: ${COLOR.pink};
  font-size: ${FONT.s};
  ${(props) =>
    props.reminder === 1 &&
    `
    margin: 0 auto;
  `}
`

const EditButton = styled.button`
  background-image: url('${EditIcon}');
  background-size: contain;
  background-repeat: no-repeat;
`

const BinButton = styled.button`
  background-image: url('${BinIcon}');
  background-size: contain;
  background-repeat: no-repeat;
`

export default function Comments({ isMessage }) {
  let { id } = useParams()
  const { trailID } = useParams()
  const [reminder, setReminder] = useState('')
  const { inputValue, setInputValue, handleInputChange } = useInput()
  const { toUserInfo } = useUserInfo()
  const [messages, setMessages] = useState([])
  const [editValue, setEditValue] = useState('')
  const [editing, setEditing] = useState(false)
  const { userInfo } = useContext(AuthContext)
  const [loadingComment, setLoadingComment] = useState(false)

  const isMessageOrNot = useCallback(
    (message, comment) => {
      return isMessage ? message : comment
    },
    [isMessage]
  )

  if (trailID) {
    id = trailID
  }

  useEffect(() => {
    let isUnmount = false
    const getMessage = async () => {
      try {
        let res = await isMessageOrNot(getMessages, getComments)(id)
        if (res.status === 200 && !isUnmount) {
          setMessages(res.data.data)
        }
      } catch (err) {
        console.log(err)
        swal('Oh ??????', '????????????????????????????????????????????????????????????', 'error')
      }
    }
    getMessage()
    return () => (isUnmount = true)
  }, [
    setInputValue,
    setEditValue,
    setLoadingComment,
    loadingComment,
    isMessageOrNot,
    userInfo,
  ])

  const handleSubmit = async (e) => {
    setReminder('')
    if (inputValue === '') {
      setReminder(1)
      return e.preventDefault()
    }
    setLoadingComment(true)
    try {
      await isMessageOrNot(postMessage, postComment)(
        id,
        userInfo.user_id,
        inputValue
      )
      setLoadingComment(false)
      setInputValue('')
    } catch (err) {
      console.log(err)
      swal('Oh ??????', '????????????????????????????????????????????????????????????', 'error')
    }
  }

  const handleEditMessage = async (e) => {
    setReminder('')
    const messageId = e.target.id
    if (editValue === '') {
      setReminder(2)
      return e.preventDefault()
    }
    setLoadingComment(true)
    try {
      await isMessageOrNot(patchMessage, patchComment)(id, messageId, editValue)
      setEditing(false)
      setLoadingComment(false)
    } catch (err) {
      console.log(err)
      swal('Oh ??????', '????????????????????????????????????????????????????????????', 'error')
    }
    setEditValue('')
  }

  const handlePopUpInput = (e) => {
    setEditing(e.target.id)
    setEditValue('')
    setReminder('')
  }

  const handleDeleteMessage = async (e) => {
    const messageId = e.target.id
    if (editing) {
      return e.preventDefault
    }
    try {
      const willDelete = await swal({
        title: '??????',
        text: '??????????????????',
        icon: 'warning',
        buttons: ['??????', '??????'],
        dangerMode: true,
      })
      if (willDelete) {
        setLoadingComment(true)
        const res = await isMessageOrNot(deleteMessage, deleteComment)(
          id,
          messageId
        )
        if (res.status === 200) {
          swal('?????????', {
            icon: 'success',
          })
          setLoadingComment(false)
        }
      }
    } catch (err) {
      console.log(err)
      setLoadingComment(false)
      swal('Oh ??????', '????????????????????????????????????????????????????????????', 'error')
    }
  }

  return (
    <>
      <CommentsContainer>
        {reminder === 1 && userInfo && (
          <Reminder reminder={reminder}>???????????????</Reminder>
        )}
        <CommentsHeader>
          <UserAvatar
            authorImg
            src={
              userInfo ? userInfo.icon_url : 'https://i.imgur.com/r50z0vv.png'
            }
          />
          <InputField
            userInfo={userInfo}
            value={inputValue}
            onChange={(e) => {
              handleInputChange(e)
              setReminder('')
            }}
            placeholder={!userInfo ? '?????????????????????' : '???????????????...'}
          />
          <SentBtn onClick={(e) => handleSubmit(e)}>
            <SendIcon />
          </SentBtn>
        </CommentsHeader>
        {messages.map((message) => (
          <Card key={isMessageOrNot(message.message_id, message.comment_id)}>
            <CommentInfo>
              <CommentViewInfo>
                <UserAvatar
                  to={toUserInfo(message.author_id, userInfo)}
                  src={message.icon_url}
                />
                <CommentNickname to={toUserInfo(message.author_id, userInfo)}>
                  {message.nickname}
                </CommentNickname>
              </CommentViewInfo>
              <CommentBtn>
                <CommentTime>
                  {new Date(
                    new Date(message.created_at).getTime() + 8 * 3600 * 1000
                  ).toLocaleString('ja')}
                </CommentTime>
                {userInfo &&
                  (userInfo.user_id === message.author_id ||
                    userInfo.role === 'admin') && (
                    <>
                      <EditButton
                        id={isMessageOrNot(
                          message.message_id,
                          message.comment_id
                        )}
                        onClick={handlePopUpInput}
                      />
                      <BinButton
                        id={isMessageOrNot(
                          message.message_id,
                          message.comment_id
                        )}
                        onClick={(e) => {
                          handleDeleteMessage(e)
                        }}
                      />
                    </>
                  )}
              </CommentBtn>
            </CommentInfo>
            {Number(editing) ===
            isMessageOrNot(message.message_id, message.comment_id) ? (
              <EditWrapper>
                <EditInput
                  rows='3'
                  id={isMessageOrNot(message.message_id, message.comment_id)}
                  onChange={(e) => {
                    setEditValue(e.target.value)
                    setReminder('')
                  }}
                  defaultValue={editValue ? editValue : message.content}
                  type='text'
                />
                <div>
                  <SendBtn
                    editValue={editValue}
                    id={isMessageOrNot(message.message_id, message.comment_id)}
                    onClick={(e) => {
                      handleEditMessage(e)
                    }}
                  >
                    ??????
                  </SendBtn>
                  <SendBtn
                    editValue={!editValue}
                    onClick={() => {
                      setEditing(false)
                      setEditValue('')
                      setReminder('')
                    }}
                  >
                    ????????????
                  </SendBtn>
                  {reminder === 2 && (
                    <Reminder reminder={reminder}>?????????????????????</Reminder>
                  )}
                </div>
              </EditWrapper>
            ) : (
              <Content
                id={isMessageOrNot(message.message_id, message.comment_id)}
              >
                {message.content}
              </Content>
            )}
          </Card>
        ))}
        {loadingComment && <SmallRegionLoading />}
      </CommentsContainer>
    </>
  )
}
