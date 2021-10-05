import styled, { css } from 'styled-components'
import { COLOR, FONT, EFFECT, RADIUS, MEDIA_QUERY } from '../../constants/style'
import { ReactComponent as MoveIcon } from '../../icons/user/user_todos_move.svg'
import { ReactComponent as EditIcon } from '../../icons/user/user_todos_edit.svg'
import { ReactComponent as DelIcon } from '../../icons/user/user_todos_del.svg'

const TodosWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 1.2em;
  border-bottom: 1.5px solid ${COLOR.green};
  width: 90%;
  ${MEDIA_QUERY.lg} {
    font-size: ${FONT.lg};
  }
`

const TodoContent = styled.div`
  width: calc(100% - 30px);
  cursor: pointer;
  ${MEDIA_QUERY.lg} {
    font-size: ${FONT.lg};
  }
  ${(props) =>
    props.isDone &&
    `
    text-decoration: line-through;
  `}
`

const Button = styled.button`
  background: transparent;
  margin: 0.1em;
  padding: 0.4em 1em;
  cursor: pointer;
  svg {
    width: 20px;
    height: 20px;
    margin: 0;
  }
  ${MEDIA_QUERY.lg} {
    svg {
      width: 25px;
      height: 25px;
    }
  }
`

export default function TodoItem({
  className,
  size,
  todo,
  handleDeleteTodo,
  handleToggleIsDone,
}) {
  const handleToggleClick = () => {
    handleToggleIsDone(todo.id)
  }
  const handleDeleteClick = () => {
    handleDeleteTodo(todo.id)
  }
  return (
    <TodosWrapper className={className} data-todo-id={todo.id}>
      <Button>
        <MoveIcon />
      </Button>
      <TodoContent isDone={todo.isDone} size={size} onClick={handleToggleClick}>
        {todo.content}
      </TodoContent>
      <Button>
        <EditIcon />
      </Button>
      <Button onClick={handleDeleteClick}>
        <DelIcon />
      </Button>
    </TodosWrapper>
  )
}
