import styled from 'styled-components'
import { MEDIA_QUERY } from '../../constants/style'

const RadioWrapper = styled.div`
  width: 320px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${MEDIA_QUERY.lg} {
    width: 500px;
  }
`
const Radio = styled.input.attrs((props) => ({
  type: 'radio',
  name: 'difficulty',
}))`
  margin-right: 10px;
  height: 10px;
  width: 10px;

  ${MEDIA_QUERY.md} {
    height: 20px;
    width: 20px;
  }
`

export default function DifficultyRadio({ name, value, handleInputChange }) {
  return (
    <RadioWrapper onChange={handleInputChange}>
      <label>
        <Radio value='新手' name={name} checked={value === '新手'} />
        新手
      </label>
      <label>
        <Radio value='入門' name={name} checked={value === '入門'} />
        入門
      </label>
      <label>
        <Radio value='進階' name={name} checked={value === '進階'} />
        進階
      </label>
      <label>
        <Radio value='挑戰' name={name} checked={value === '挑戰'} />
        挑戰
      </label>
      <label>
        <Radio value='困難' name={name} checked={value === '困難'} />
        困難
      </label>
    </RadioWrapper>
  )
}
