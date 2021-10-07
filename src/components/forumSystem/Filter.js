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
    /* box-shadow: ${EFFECT.shadow_dark}; */
    `}
`

export default function ForumFilter({ tags, setTags }) {
  const handleIsChecked = (id) => {
    setTags(
      tags.map((tag) => {
        if (tag.tag_id !== id) return tag
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
          fontAndWidthFilter
          widthFilter
        />
        <FilterTags>
          {tags.map((tag) => {
            return (
              <FilterTag
                key={tag.tag_id}
                isChecked={tag.isChecked}
                onClick={() => handleIsChecked(tag.tag_id)}
              >
                {tag.tag_name}
              </FilterTag>
            )
          })}
        </FilterTags>
      </Filter>
    </FilterContainer>
  )
}
