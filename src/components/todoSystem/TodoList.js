import styled from 'styled-components'
import { COLOR, FONT, EFFECT, MEDIA_QUERY } from '../../constants/style'
import { ReactComponent as CheckIcon } from '../../icons/user/user_todos_check.svg'
import { ReactComponent as RocketIcon } from '../../icons/user/user_todos_rocket.svg'
import { ReactComponent as DelIcon } from '../../icons/user/user_todos_del.svg'

const TodosWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 20px auto;

  width: 90%;
  ${MEDIA_QUERY.lg} {
    font-size: ${FONT.md};
  }
`
const TodoContent = styled.input.attrs((props) => ({
  type: 'text',
}))`
  width: calc(100% - 30px);
  padding: 10px;
  border: none;
  font-size: ${FONT.md};
  border-bottom: 1.5px solid ${COLOR.white};
  transition: ${EFFECT.transition};
  &:focus {
    outline: none;
    border-bottom: 1.5px solid ${COLOR.green};
  }
  ${(props) =>
    props.$is_done &&
    `
    text-decoration: line-through;
    color:${COLOR.gray}
  `}
`
const Button = styled.button`
  background: transparent;
  margin: 0.1em;
  padding: 0.4em 0.8em;
  cursor: pointer;
  svg {
    width: 15px;
    height: 15px;
    margin: 0;
  }
  path {
    stroke: ${COLOR.green};
  }
  ${MEDIA_QUERY.lg} {
    svg {
      width: 18px;
      height: 18px;
    }
  }
`

export default function TodoItem({
  todo,
  handleDeleteTodo,
  handleToggleIsDone,
  handleUpdateTodo,
  handleUpdateChange,
}) {
  const handleToggleClick = () => {
    handleToggleIsDone(todo.todo_id)
  }
  const handleDeleteClick = () => {
    handleDeleteTodo(todo.todo_id)
  }
  const handleUpdateClick = (e) => {
    handleUpdateTodo(todo.todo_id, e)
  }
  return (
    <TodosWrapper data-todo-id={todo.todo_id}>
      <Button>
        <CheckIcon onClick={handleToggleClick} />
      </Button>
      <TodoContent
        $is_done={todo.is_done}
        value={todo.content}
        onChange={(e) => handleUpdateChange(todo.todo_id, e)}
      />
      <Button>
        <RocketIcon onClick={handleUpdateClick} />
      </Button>
      <Button onClick={handleDeleteClick}>
        <DelIcon />
      </Button>
    </TodosWrapper>
  )
}
