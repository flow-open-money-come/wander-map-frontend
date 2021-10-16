import styled from 'styled-components'
import { FONT, MEDIA_QUERY } from '../../constants/style'

const Select = styled.select`
  height: 25px;
  width: 150px;
  text-align: center;
  ${MEDIA_QUERY.lg} {
    height: 30px;
    width: 230px;
    font-size: ${FONT.md};
  }
`

export default function SelectSeason({ name, handleInputChange }) {
  return (
    <Select name={name} onChange={handleInputChange}>
      <option value='' disabled selected>
        請選擇
      </option>
      <option value='四季皆宜'>四季皆宜</option>
      <option value='春季'>春季</option>
      <option value='夏季'>夏季</option>
      <option value='秋季'>秋季</option>
      <option value='冬季'>冬季</option>
    </Select>
  )
}
