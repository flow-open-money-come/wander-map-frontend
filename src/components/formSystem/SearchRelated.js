import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { FONT, COLOR, MEDIA_QUERY } from '../../constants/style'
import trailsData from './TrailsData'

const Wrapper = styled.div`
  width: 320px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${MEDIA_QUERY.lg} {
    width: 500px;
  }
`

const Input = styled.input.attrs((props) => ({
  type: 'text',
}))`
  height: 25px;
  width: 150px;
  padding: 10px;
  &:focus {
    outline: none;
    border: 2px solid ${COLOR.green};
  }
  ${MEDIA_QUERY.lg} {
    height: 30px;
    width: 230px;
    font-size: ${FONT.md};
  }
`
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

export default function SearchRelated({
  name,
  formData,
  setFormData,
  isPostPage,
}) {
  const [keyWord, setKeyWord] = useState('')
  const [filteredData, setFilteredDate] = useState(trailsData)
  const [relatedTrail, setRelatedTrail] = useState('')

  const updateSearch = (e) => {
    setKeyWord(e.target.value)
  }

  useEffect(() => {
    setFilteredDate(
      trailsData.filter(
        (trail) => trail.toLowerCase().indexOf(keyWord.toLowerCase()) !== -1
      )
    )
    if (Object.keys(formData).length > 0 && !isPostPage) {
      if (!formData.trail_title) return
      setRelatedTrail(formData.trail_title)
    }
  }, [keyWord, formData, isPostPage])

  const handleSelectChange = (e) => {
    setFormData({
      ...formData,
      [name]: e.target.value,
    })
  }

  return (
    <Wrapper>
      <Input
        placeholder='關鍵字...'
        name={name}
        onChange={(e) => updateSearch(e)}
        value={keyWord}
      />
      <Select onChange={handleSelectChange}>
        {filteredData.map((item) =>
          relatedTrail === item ? (
            <option value={item} selected>
              {item}
            </option>
          ) : (
            <option value={item}>{item}</option>
          )
        )}
      </Select>
    </Wrapper>
  )
}
