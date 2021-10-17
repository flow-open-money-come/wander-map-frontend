import TodoItem from '../todoSystem/TodoList'
import { useState, useRef } from 'react'
import styled from 'styled-components'
import { COLOR, FONT, RADIUS, EFFECT, MEDIA_QUERY } from '../../constants/style'

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
  const [todos, setTodos] = useState([
    { id: 1, content: '水壺', isDone: true },
    { id: 2, content: '要帶水壺', isDone: false },
    { id: 3, content: '要記得帶水壺' },
    { id: 4, content: '可以帶兩個水壺' },
    { id: 5, content: '帶兩個就不會忘記水壺' },
  ])

  const [value, setValue] = useState('')
  const id = useRef(6)
  //新增
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setTodos([
        {
          id: id.current,
          content: value,
        },
        ...todos,
      ])
      setValue('')
      id.current++
    }
  }

  const handleInputChange = (e) => {
    setValue(e.target.value)
  }
  //已完成未完成
  const handleToggleIsDone = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id !== id) return todo
        return {
          ...todo,
          isDone: !todo.isDone,
        }
      })
    )
  }
  //刪除
  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }
  return (
    <Block className='App'>
      <TodoInput
        placeholder='點擊新增待辦清單'
        value={value}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleDeleteTodo={handleDeleteTodo}
          handleToggleIsDone={handleToggleIsDone}
        />
      ))}
    </Block>
  )
}
