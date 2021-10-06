import styled from 'styled-components'
import { COLOR, FONT, RADIUS, MEDIA_QUERY } from '../../constants/style'
import { ReactComponent as SearchIcon } from '../../icons/search.svg'
import TrailCard from '../trailSystem/TrailCard'

const Block = styled.div`
  border: 2px solid ${COLOR.green};
  border-radius: 0 ${RADIUS.s} ${RADIUS.s} ${RADIUS.s};
  width: 100%;
  min-height: 70vh;
`
const SearchBar = styled.div`
  border: 1px solid #c4c4c4;
  border-radius: ${RADIUS.s};
  width: 95%;
  height: 25px;
  margin: 10px auto;
  display: flex;
  align-items: center;
  padding-left: 3px;
  ${MEDIA_QUERY.lg} {
    margin: 30px auto;
    height: 45px;
    svg {
      width: 30px;
      height: 30px;
      margin: 0 5px;
    }
  }
`
const SearchField = styled.input`
  width: calc(100% - 20px);
  border: none;
  outline: none;
  ${MEDIA_QUERY.lg} {
    width: calc(100% - 30px);
    font-size: ${FONT.lg};
  }
`

const TrailsWrapper = styled.div`
  margin: 0px auto;
  width: 95%;
  ${MEDIA_QUERY.lg} {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`

export default function UserCollect() {
  const trailInfo = {
    title: '林美石磐步道',
    location: '宜蘭縣礁溪鄉',
    cover_picture_url:
      'https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1806&q=80',
    required_time: '一天',
    season: '四季皆宜',
  }
  return (
    <Block>
      <SearchBar>
        <SearchIcon />
        <SearchField></SearchField>
      </SearchBar>
      <TrailsWrapper>
        <TrailCard trailInfo={trailInfo} />
        <TrailCard trailInfo={trailInfo} />
        <TrailCard trailInfo={trailInfo} />
        <TrailCard trailInfo={trailInfo} />
      </TrailsWrapper>
    </Block>
  )
}
