import styled from 'styled-components'
import { FONT, COLOR, EFFECT, RADIUS, MEDIA_QUERY } from '../../constants/style'

const FilterContainer = styled.div`
  padding-top: 30px;
  border-top: 1px solid ${COLOR.beige};
  margin-bottom: 10px;

  ${MEDIA_QUERY.md} {
    margin-bottom: 60px;
    padding-top: 23px;
    margin-top: 9px;
  }

  ${MEDIA_QUERY.lg} {
    margin-bottom: 117px;
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

const UpperPart = styled.div`
  display: flex;
`

const SearchInput = styled.input`
  padding-left: 10px;
  width: 90%;
  border: 0;
  border-bottom: 1px solid ${COLOR.beige};
  background-color: ${COLOR.white};
  color: ${COLOR.gray};
`

const SearchIcon = styled.button`
  background-image: url('https://i.imgur.com/XG5YxVh.png');
  background-size: contain;
  border-bottom: 1px solid ${COLOR.beige};
  width: 30px;
  height: 30px;
  cursor: pointer;
`

const FilterTags = styled.div`
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`

const FilterTag = styled.button`
  cursor: pointer;
  padding: 12px;
  border-bottom: 1px solid ${COLOR.beige};

  ${(props) =>
    props.isChecked === true &&
    `
    border: 1px ${COLOR.gray} solid;
    background: ${COLOR.beige};
    box-shadow: ${EFFECT.shadow_dark};
    `}
`

export default function ForumFilter({ tags }) {
  return (
    <FilterContainer>
      <Filter>
        <UpperPart>
          <SearchInput placeholder='關鍵字...' />
          <SearchIcon />
        </UpperPart>
        <FilterTags>
          {tags.map((tag) => {
            return <FilterTag isChecked={tag.isChecked}>{tag.name}</FilterTag>
          })}
        </FilterTags>
      </Filter>
    </FilterContainer>
  )
}
