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

const Block = styled.div`
  border: 2px solid ${COLOR.green};
  border-radius: 0 ${RADIUS.s} ${RADIUS.s} ${RADIUS.s};
  width: 100%;
  min-height: 70vh;
  margin: 0 auto;
  height: 400px;
  overflow-y: scroll;
  overflow-x: hidden;
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

  useEffect(() => {
    getUserTodos(userID)
      .then((res) => {
        setMyTodos(res.data.data.todos)
        console.log(res.data.data.todos)
      })
      .catch((err) => {
        console.log(err.response)
      })
  }, [])

  //新增
  const [value, setValue] = useState('')
  const handleInputChange = (e) => {
    setValue(e.target.value)
  }
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      postUserTodos(userID, { content: value })
        .then((res) => {
          console.log(res.data)
          console.log('新增成功')
          setMyTodos([
            {
              todo_id: res.data.data.result.insertId,
              content: value,
            },
            ...myTodos,
          ])
        })
        .catch((err) => {
          console.log(err.response)
        })
      setValue('')
    }
  }

  //已完成未完成
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
    patchUserTodos(userID, todo_id, {
      isDone:
        myTodos.filter((todo) => todo.todo_id === todo_id)[0].is_done === 1
          ? 0
          : 1,
    })
      .then((res) => {
        console.log(res.data)
        console.log('修改成功')
      })
      .catch((err) => {
        console.log(err.response)
      })
  }
  //刪除
  const handleDeleteTodo = (todo_id) => {
    deleteUserTodos(userID, todo_id)
      .then((res) => {
        console.log(res.data)
        console.log('刪除成功')
        setMyTodos(myTodos.filter((todo) => todo.todo_id !== todo_id))
      })
      .catch((err) => {
        console.log(err.response.data)
      })
  }
  //編輯
  const [updateValue, setUpdateValue] = useState()
  const handleUpdateChange = (todo_id, e) => {
    setUpdateValue({
      ...updateValue,
      todo_id: todo_id,
      content: e.target.value,
    })
    console.log(e.target.value)
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
    patchUserTodos(userID, todo_id, { content: updateValue.content })
      .then((res) => {
        console.log(res.data)
        console.log('編輯成功')
      })
      .catch((err) => {
        console.log(err.response)
      })
    setUpdateValue('')
  }

  return (
    <Block>
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
