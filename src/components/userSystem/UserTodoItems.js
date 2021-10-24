import TodoItem from '../todoSystem/TodoList'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { COLOR, FONT, RADIUS, EFFECT, MEDIA_QUERY } from '../../constants/style'
import {
  getUserTodos,
  postUserTodos,
  patchUserTodos,
  deleteUserTodos,
} from '../../WebAPI'
import SmallRegionLoading from '../common/SmallRegionLoading'
import swal from 'sweetalert'

const Block = styled.div`
  border: 2px solid ${COLOR.green};
  border-radius: 0 ${RADIUS.s} ${RADIUS.s} ${RADIUS.s};
  width: 100%;
  min-height: 70vh;
  margin: 0 auto;
  height: 400px;
  overflow-y: scroll;
`

const TodoInput = styled.input.attrs((props) => ({
  type: 'text',
}))`
  height: 45px;
  border: none;
  outline: none;
  display: block;
  text-align: center;
  width: calc(100% - 40px);
  border-bottom: 1px solid ${COLOR.beige};
  margin: 0 auto;
  font-size: ${FONT.md};
  transition: ${EFFECT.transition};
  &:focus {
    border-bottom: 1px solid ${COLOR.green};
  }
  ${MEDIA_QUERY.lg} {
    height: 60px;
    font-size: ${FONT.md};
  }
`

export default function UserTodoItems() {
  const { userID } = useParams()
  const [myTodos, setMyTodos] = useState([])
  const [isLoadingTodos, setIsLoadingTodos] = useState(false)

  useEffect(() => {
    setIsLoadingTodos(true)
    getUserTodos(userID)
      .then((res) => {
        setMyTodos(res.data.data.todos)
        setIsLoadingTodos(false)
      })
      .catch(() => {
        setIsLoadingTodos(false)
        swal('Oh 不！', '請求失敗！請稍候再試一次，或者聯繫我們。', 'error')
      })
  }, [userID])

  const [value, setValue] = useState('')
  const handleInputChange = (e) => {
    setValue(e.target.value)
  }
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setIsLoadingTodos(true)
      postUserTodos(userID, { content: value })
        .then((res) => {
          if (res.data.message) {
            setMyTodos([
              {
                todo_id: res.data.data.result.insertId,
                content: value,
              },
              ...myTodos,
            ])
            setIsLoadingTodos(false)
          }
        })
        .catch(() => {
          setIsLoadingTodos(false)
          swal('Oh 不！', '請求失敗！請稍候再試一次，或者聯繫我們。', 'error')
        })
      setValue('')
    }
  }

  const handleToggleIsDone = (todo_id) => {
    setMyTodos(
      myTodos.map((todo) => {
        if (todo.todo_id !== todo_id) return todo
        return {
          ...todo,
          is_done: todo.is_done === 1 ? 0 : 1,
        }
      })
    )
    setIsLoadingTodos(true)
    patchUserTodos(userID, todo_id, {
      isDone:
        myTodos.filter((todo) => todo.todo_id === todo_id)[0].is_done === 1
          ? 0
          : 1,
    })
      .then((res) => {
        if (res.data.message) {
          setIsLoadingTodos(false)
        }
      })
      .catch(() => {
        setIsLoadingTodos(false)
        swal('Oh 不！', '請求失敗！請稍候再試一次，或者聯繫我們。', 'error')
      })
  }

  const handleDeleteTodo = (todo_id) => {
    setIsLoadingTodos(true)
    deleteUserTodos(userID, todo_id)
      .then((res) => {
        if (res.data.message) {
          setMyTodos(myTodos.filter((todo) => todo.todo_id !== todo_id))
          setIsLoadingTodos(false)
        }
      })
      .catch((err) => {
        setIsLoadingTodos(false)
        swal('Oh 不！', '請求失敗！請稍候再試一次，或者聯繫我們。', 'error')
      })
  }

  const [updateValue, setUpdateValue] = useState('')
  const handleUpdateChange = (todo_id, e) => {
    setUpdateValue({
      ...updateValue,
      todo_id: todo_id,
      content: e.target.value,
    })
    setMyTodos(
      myTodos.map((todo) => {
        if (todo.todo_id !== todo_id) return todo
        return {
          ...todo,
          content: e.target.value,
        }
      })
    )
  }

  const handleUpdateTodo = (todo_id, e) => {
    if (!todo_id) {
      e.preventDefault()
    }
    if (updateValue.todo_id !== todo_id) return
    setIsLoadingTodos(true)
    patchUserTodos(userID, todo_id, { content: updateValue.content })
      .then(() => {
        setIsLoadingTodos(false)
        swal('已儲存更變！', {
          icon: 'success',
          button: '關閉',
        })
      })
      .catch(() => {
        setIsLoadingTodos(false)
        swal('Oh 不！', '請求失敗！請稍候再試一次，或者聯繫我們。', 'error')
      })
    setUpdateValue('')
  }

  return (
    <Block>
      {isLoadingTodos && <SmallRegionLoading />}
      <TodoInput
        placeholder='點擊新增待辦清單'
        value={value}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      {myTodos.map((todo) => (
        <TodoItem
          key={todo.todo_id}
          todo={todo}
          handleUpdateChange={handleUpdateChange}
          handleUpdateTodo={handleUpdateTodo}
          handleDeleteTodo={handleDeleteTodo}
          handleToggleIsDone={handleToggleIsDone}
        />
      ))}
    </Block>
  )
}
