import styled from 'styled-components'
import { FONT, COLOR, EFFECT, RADIUS, MEDIA_QUERY } from '../../constants/style'
import SearchBar from '../common/SearchBar'

const FilterContainer = styled.div`
  width: 90%;
  margin: 0 auto;

  ${MEDIA_QUERY.lg} {
    width: 60%;
  }
`

const Filter = styled.div`
  padding: 10px;
  width: 100%;
  background-color: ${COLOR.white};
  border-radius: ${RADIUS.lg};
  box-shadow: ${EFFECT.shadow_light};

  ${MEDIA_QUERY.md} {
    max-width: 1032px;
    margin: 0 auto;
  }
`

const FilterTags = styled.div`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

const FilterTag = styled.button`
  cursor: pointer;
  padding: 10px;
  border: 1px transparent solid;
  border-bottom: 1px solid ${COLOR.beige};
  color: ${COLOR.gray};
  ${MEDIA_QUERY.md} {
    font-size: ${FONT.md};
  }

  ${(props) =>
    props.isChecked === true &&
    `
    background: ${COLOR.beige};
    border: 1px solid ${COLOR.white};
    color:${COLOR.black};
    `}
`

export default function ForumFilter({
  tags,
  setTags,
  tagValue,
  setTagValue,
  inputValue,
  handleInputChange,
  handleClickSearch,
  handleClickCross,
}) {
  const handleTagValue = (e) => {
    setTagValue(
      tagValue.find((item) => item === e.target.name)
        ? tagValue.filter((data) => data !== e.target.name)
        : [...tagValue, e.target.name]
    )
    setTags(
      tags.map((tag) => {
        if (tag.tagName !== e.target.name) return tag
        return {
          ...tag,
          isChecked: !tag.isChecked,
        }
      })
    )
  }

  return (
    <FilterContainer>
      <Filter>
        <SearchBar
          placeholder='關鍵字...'
          horizontalAlign
          noBorderRadius
          width='100%'
          fontSize={FONT.md}
          noShadow
          inputValue={inputValue}
          handleKeyWordChange={(e) => {
            handleInputChange(e)
          }}
          handleSearchTrails={(e) => {
            handleClickSearch(e)
          }}
          handleKeyWordDelete={handleClickCross}
          handleKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleClickSearch(e)
            }
          }}
        />
        <FilterTags>
          {tags.map((tag) => {
            return (
              <FilterTag
                key={tag.tagId}
                isChecked={tag.isChecked}
                name={tag.tagName}
                onClick={(e) => {
                  handleTagValue(e)
                }}
              >
                {tag.tagName}
              </FilterTag>
            )
          })}
        </FilterTags>
      </Filter>
    </FilterContainer>
  )
}
