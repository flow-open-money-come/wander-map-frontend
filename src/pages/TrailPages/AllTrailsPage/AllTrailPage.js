import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { COLOR, FONT, MEDIA_QUERY, RADIUS } from '../../../constants/style'
import { ReactComponent as StarSvg } from '../../../icons/star.svg'
import SearchBar from '../../../components/common/SearchBar'
import DropDownCheckBoxList from '../../../components/common/DropDownCheckBoxList'
import { NavBarButton } from '../../../components/common/Button'
import TrailCard from '../../../components/trailSystem/TrailCard'

const AllTrailsPageWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  position: relative;
`
const AllTrailsPageTitleWrapper = styled.div`
  font-size: ${FONT.lg};
  margin: 20px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${MEDIA_QUERY.lg} {
    font-size: ${FONT.logo};
  }
`
const SearchBarWrapper = styled.div`
  ${(props) =>
    props.$combined
      ? `
    display:none;
    ${MEDIA_QUERY.lg}{
      display: block;
    };
    `
      : `${MEDIA_QUERY.lg}{
      display: none;
    };`}
`
const FeaturedTrailsCarousel = styled.img`
  width: 100%;
  height: 150px;
  margin-top: 20px;
  object-fit: cover;
  border-radius: ${RADIUS.md};
  ${MEDIA_QUERY.md} {
    height: 200px;
  }
  ${MEDIA_QUERY.lg} {
    height: 300px;
    margin-top: 5px;
  }
`
const FeaturedTrailName = styled.div`
  font-size: ${FONT.md};
  color: ${COLOR.white};
  background-color: rgba(0, 0, 0, 0.3);
  padding: 10px 20px;
  position: absolute;
  top: 40px;
  right: 40px;
  z-index: 1;
  border-radius: ${RADIUS.md};
  ${MEDIA_QUERY.lg} {
    font-size: ${FONT.logo};
  }
`
const FeaturedTrailsCarouselWrapper = styled.div`
  position: relative;
`

const DropDownContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  top: -20px;
`
const FilteredTrailsWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  ${MEDIA_QUERY.lg} {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`

const LoadMoreBtn = styled.div`
  ${NavBarButton}
  margin: 50px auto 100px auto;
`

function AllTrailPage() {
  const FeaturedTrailsInfo = {
    林美石磐步道:
      'https://images.unsplash.com/photo-1581339538525-978298a19203?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80',
    枕頭山步道:
      'https://images.unsplash.com/photo-1501554728187-ce583db33af7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80',
    加里山登山步道:
      'https://images.unsplash.com/photo-1558734918-dfc4fe470147?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80',
  }
  const FeaturedTrailLength = Object.keys(FeaturedTrailsInfo).length
  const [currentImgIndex, setCurrentImageIndex] = useState(0)

  const handelCarousel = () => {
    if (currentImgIndex < FeaturedTrailLength - 1) {
      return setCurrentImageIndex(currentImgIndex + 1)
    }
    setCurrentImageIndex(0)
  }
  useEffect(() => {
    setTimeout(handelCarousel, 5000)
  })

  const trailInfo = {
    title: '林美石磐步道',
    location: '宜蘭縣礁溪鄉',
    cover_picture_url:
      'https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1806&q=80',
    required_time: '一天',
    season: '四季皆宜',
  }

  return (
    <>
      <AllTrailsPageWrapper>
        <AllTrailsPageTitleWrapper>
          <StarSvg />
          精選步道
        </AllTrailsPageTitleWrapper>
        <SearchBarWrapper>
          <SearchBar horizontalAlign={true} placeholder='關鍵字...' />
        </SearchBarWrapper>
        <FeaturedTrailsCarouselWrapper>
          <FeaturedTrailsCarousel
            src={Object.values(FeaturedTrailsInfo)[currentImgIndex]}
          />
          <FeaturedTrailName>
            {Object.keys(FeaturedTrailsInfo)[currentImgIndex]}
          </FeaturedTrailName>
        </FeaturedTrailsCarouselWrapper>
        <DropDownContainer>
          <DropDownCheckBoxList
            title='區域'
            options={['北區', '中區', '南區', '東區']}
          />
          <DropDownCheckBoxList
            title='高度 (m)'
            options={['1k 以下', '1k-2k', '2k-3k', '3k 以上']}
          />
          <DropDownCheckBoxList
            title='長度 (km)'
            options={['2 以下', '2-5', '5-12', '12 以上']}
          />
          <DropDownCheckBoxList
            title='難度'
            options={['新手', '一般', '困難', '進階', '挑戰']}
          />
          <SearchBarWrapper $combined>
            <SearchBar
              placeholder='關鍵字...'
              noBorderRadius={true}
              width='100%'
            />
          </SearchBarWrapper>
        </DropDownContainer>
        <FilteredTrailsWrapper>
          <TrailCard trailInfo={trailInfo} />
          <TrailCard trailInfo={trailInfo} />
          <TrailCard trailInfo={trailInfo} />
          <TrailCard trailInfo={trailInfo} />
          <TrailCard trailInfo={trailInfo} />
          <TrailCard trailInfo={trailInfo} />
          <TrailCard trailInfo={trailInfo} />
          <TrailCard trailInfo={trailInfo} />
          <TrailCard trailInfo={trailInfo} />
          <TrailCard trailInfo={trailInfo} />
          <TrailCard trailInfo={trailInfo} />
          <TrailCard trailInfo={trailInfo} />
        </FilteredTrailsWrapper>
        <LoadMoreBtn>看更多</LoadMoreBtn>
      </AllTrailsPageWrapper>
    </>
  )
}

export default AllTrailPage
