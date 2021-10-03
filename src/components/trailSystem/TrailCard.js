import styled from 'styled-components'
import { COLOR, FONT, EFFECT, MEDIA_QUERY, RADIUS } from '../../constants/style'

const FilteredTrailCard = styled.div`
  width: 250px;
  height: 280px;
  border-radius: ${RADIUS.md};
  margin: 20px auto;
  overflow: hidden;
  text-align: center;
  box-shadow: ${EFFECT.shadow_dark};
  background-color: ${COLOR.white};
  ${MEDIA_QUERY.md} {
    width: 270px;
    height: 300px;
  }
`
const FilteredTrailImgWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`
const FilteredTrailImg = styled.img`
  height: 200px;
  object-fit: cover;
  transition: ${EFFECT.transition};
  &:hover {
    transform: scale(1.1);
  }
`

const FilteredTrailTitle = styled.div`
  margin-top: 5px;
  font-size: ${FONT.md};
  ${MEDIA_QUERY.md} {
    margin-top: 10px;
  }
`

const FilteredTrailLocation = styled.div`
  margin-top: 10px;
  font-size: ${FONT.xs};
  display: flex;
  align-items: center;
  justify-content: center;
  ${MEDIA_QUERY.md} {
    font-size: ${FONT.s};
  }
`
const FilteredTrailTages = styled.div`
  color: ${COLOR.gray};
  margin-top: 10px;
  font-size: ${FONT.xs};
  ${MEDIA_QUERY.md} {
    font-size: ${FONT.s};
  }
`

export default function TrailCard({ trailInfo }) {
  return (
    <>
      <FilteredTrailCard>
        <FilteredTrailImgWrapper>
          <FilteredTrailImg src={trailInfo.cover_picture_url} />
        </FilteredTrailImgWrapper>
        <FilteredTrailTitle>{trailInfo.title}</FilteredTrailTitle>
        <FilteredTrailLocation>{trailInfo.location}</FilteredTrailLocation>
        <FilteredTrailTages>
          {trailInfo.required_time} | {trailInfo.season}
        </FilteredTrailTages>
      </FilteredTrailCard>
    </>
  )
}