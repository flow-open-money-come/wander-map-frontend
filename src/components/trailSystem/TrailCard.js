import styled from 'styled-components'
import { COLOR, FONT, EFFECT, MEDIA_QUERY, RADIUS } from '../../constants/style'
import { ReactComponent as LocationSvg } from '../../icons/location_s.svg'
import { useHistory } from 'react-router'

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
  ${MEDIA_QUERY.lg} {
    margin-left: 20px;
  }
`
const FilteredTrailImgWrapper = styled.div`
  width: 100%;
  overflow: hidden;
`
const FilteredTrailImg = styled.img`
  width: 100%;
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
  font-weight: bold;
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
const FilteredTrailTags = styled.div`
  color: ${COLOR.gray};
  margin-top: 10px;
  font-size: ${FONT.xs};
  ${MEDIA_QUERY.md} {
    font-size: ${FONT.s};
  }
`
const Location = styled(LocationSvg)`
  width: 15px;
  height: 15px;
  margin-right: 8px;
  ${MEDIA_QUERY.md} {
    width: 20px;
    height: 20px;
  }
`

export default function TrailCard({ trailInfo }) {
  const history = useHistory()
  return (
    <>
      <FilteredTrailCard
        key={trailInfo.trail_id}
        onClick={() => {
          history.push(`/articles/${trailInfo.trail_id}`)
        }}
      >
        <FilteredTrailImgWrapper>
          <FilteredTrailImg src={trailInfo.cover_picture_url} />
        </FilteredTrailImgWrapper>
        <FilteredTrailTitle>{trailInfo.title}</FilteredTrailTitle>
        <FilteredTrailLocation>
          <Location />
          {trailInfo.location.split('；')[0]}
        </FilteredTrailLocation>
        <FilteredTrailTags>
          {trailInfo.required_time}
          {trailInfo.season ? `| ${trailInfo.season}` : null}
        </FilteredTrailTags>
      </FilteredTrailCard>
    </>
  )
}
