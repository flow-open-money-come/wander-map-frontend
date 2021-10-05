import TodoItem from '../todoSystem/TodoList'
import { react, useState, useRef } from 'react'
import styled from 'styled-components'
import { COLOR, FONT, EFFECT, RADIUS, MEDIA_QUERY } from '../../constants/style'
import { ReactComponent as ArticleManageIcon } from '../../icons/user/user_article_manage.svg'
import { ReactComponent as TodosIcon } from '../../icons/user/user_todos.svg'
import { ReactComponent as LikeArticlesIcon } from '../../icons/user/user_like_article.svg'
import { ReactComponent as CollectTrailsIcon } from '../../icons/user/user_collect_trail.svg'
import { ReactComponent as PlusIcon } from '../../icons/user/plus.svg'

const Tabs = styled.div`
  display: flex;
  align-items: center;
`
const UsersManagementContainer = styled.div`
  width: 100%;
  margin: 20px auto;
  ${MEDIA_QUERY.lg} {
    width: 70%;
  }
`

const ArticlesTab = styled.div`
  width: 30%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
  font-size: ${FONT.s};
  border-radius: ${RADIUS.s} ${RADIUS.s} 0 0;
  border: 2px solid ${COLOR.green};
  border-bottom: none;
  color: black;
  background: white;
  svg {
    width: 20px;
    margin: 0 2px;
  }
  rect {
    stroke: none;
  }
  ${MEDIA_QUERY.md} {
    font-size: ${FONT.md};
  }
  ${MEDIA_QUERY.lg} {
    width: 200px;
    height: 50px;
    margin-right: 20px;
    font-size: ${FONT.lg};
    svg {
      width: 40px;
      margin: 0 2px;
    }
    &:hover {
      cursor: pointer;
      background: ${COLOR.green};
      color: ${COLOR.white};
      path {
        fill: white;
        stroke: white;
      }
      rect {
        fill: ${COLOR.green};
      }
    }
  }
`
const TodosTab = styled(ArticlesTab)`
  color: white;
  background: ${COLOR.green};
  rect {
    fill: ${COLOR.green};
  }
  path {
    fill: white;
    stroke: white;
  }
`
const CollectTab = styled(ArticlesTab)``
const LikeTab = styled(ArticlesTab)``
const TabTitle = styled.div`
  display: none;
  ${MEDIA_QUERY.md} {
    display: block;
  }
`

const Block = styled.div`
  border: 2px solid ${COLOR.green};
  border-radius: 0 ${RADIUS.s} ${RADIUS.s} ${RADIUS.s};
  width: 100%;
  min-height: 70vh;
  margin: 0 auto;
`

const TodoInput = styled.input.attrs((props) => ({
  type: 'text',
}))`
  height: 45px;
  border: none;
  outline: none;
  text-align: center;
  width: calc(100% - 100px);
  font-size: ${FONT.md};
  ${MEDIA_QUERY.lg} {
    height: 60px;
    margin: 0 auto;
    font-size: ${FONT.lg};
  }
`

const AddButton = styled.button.attrs((props) => ({
  type: 'submit',
}))`
  margin: 20px auto;
  svg {
    width: 40px;
    height: 40px;
    color: ${COLOR.green};
  }
  ${MEDIA_QUERY.lg} {
  }
`

export default function UserTodoItems({ setTab, recycle, setRecycle }) {
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
  const handleButtonClick = () => {
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

  const handleInputChange = (e) => {
    setValue(e.target.value)
  }
  //編修
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
    console.log('todos ' + todos)
  }
  return (
    <UsersManagementContainer>
      <Tabs>
        <ArticlesTab
          onClick={() => {
            setTab('Articles')
          }}
        >
          <ArticleManageIcon />
          <TabTitle>文章管理</TabTitle>
        </ArticlesTab>
        <TodosTab
          onClick={() => {
            setTab('Todos')
          }}
        >
          <TodosIcon />
          <TabTitle>裝備清單</TabTitle>
        </TodosTab>
        <CollectTab
          onClick={() => {
            setTab('Collect')
          }}
        >
          <CollectTrailsIcon />
          <TabTitle>收藏步道</TabTitle>
        </CollectTab>
        <LikeTab
          onClick={() => {
            setTab('Like')
          }}
        >
          <LikeArticlesIcon />
          <TabTitle>按讚心得</TabTitle>
        </LikeTab>
      </Tabs>
      <Block className='App'>
        <TodoInput
          placeholder='點擊新增待辦清單'
          value={value}
          onChange={handleInputChange}
        />
        <AddButton onClick={handleButtonClick}>
          <PlusIcon />
        </AddButton>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleDeleteTodo={handleDeleteTodo}
            handleToggleIsDone={handleToggleIsDone}
          />
        ))}
      </Block>
    </UsersManagementContainer>
  )
}
