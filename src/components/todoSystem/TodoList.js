import styled from 'styled-components'
import { COLOR, FONT, MEDIA_QUERY } from '../../constants/style'
import { ReactComponent as MoveIcon } from '../../icons/user/user_todos_move.svg'
import { ReactComponent as EditIcon } from '../../icons/user/user_todos_edit.svg'
import { ReactComponent as DelIcon } from '../../icons/user/user_todos_del.svg'

const TodosWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 20px auto;
  border-bottom: 1.5px solid ${COLOR.green};
  width: 90%;
  ${MEDIA_QUERY.lg} {
    font-size: ${FONT.md};
  }
`

const TodoContent = styled.div`
  width: calc(100% - 30px);
  cursor: pointer;
  ${MEDIA_QUERY.lg} {
    font-size: ${FONT.md};
  }
  ${(props) =>
    props.isDone &&
    `
    text-decoration: line-through;
    color:${COLOR.gray}
  `}
`

const Button = styled.button`
  background: transparent;
  margin: 0.1em;
  padding: 0.4em 1em;
  cursor: pointer;
  svg {
    width: 12px;
    height: 12px;
    margin: 0;
  }
  ${MEDIA_QUERY.lg} {
    svg {
      width: 20px;
      height: 20px;
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
