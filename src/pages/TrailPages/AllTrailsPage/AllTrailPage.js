import { useState, useEffect } from 'react'
import styled from 'styled-components'
import {
  COLOR,
  FONT,
  EFFECT,
  MEDIA_QUERY,
  RADIUS,
} from '../../../constants/style'
import { ReactComponent as StarSvg } from '../../../icons/star.svg'
import { ReactComponent as LocationSvg } from '../../../icons/location_s.svg'
import SearchBar from '../../../components/common/SearchBar'
import DropDownCheckBoxList from '../../../components/common/DropDownCheckBox'
import { NavBarButton } from '../../../components/common/Button'

const AllTrialPageWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`
const AllTrailPageTitleWrapper = styled.div`
  font-size: ${FONT.lg};
  font-weight: bold;
  margin: 20px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${MEDIA_QUERY.lg} {
    font-size: ${FONT.logo};
  }
`
const SearchBarWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  ${MEDIA_QUERY.lg} {
    width: 50%;
  }
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
    height: 250px;
  }
`
const FeaturedTrailName = styled.div`
  font-size: ${FONT.md};
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
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
  border-radius: ${RADIUS.md};
  overflow: hidden;
`
const FilteredTrailsWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  ${MEDIA_QUERY.lg} {
    width: 90%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`
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
const FilteredTrailImg = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
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
const Location = styled(LocationSvg)`
  width: 15px;
  height: 15px;
  margin-right: 8px;
  ${MEDIA_QUERY.md} {
    width: 20px;
    height: 20px;
  }
`
const LoadMoreBtn = styled.div`
  ${NavBarButton}
  margin: 50px auto 100px auto;
`
function AllTrailPage() {
  const FeaturedTrailInfo = {
    林美石磐步道:
      'https://images.unsplash.com/photo-1581339538525-978298a19203?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80',
    枕頭山步道:
      'https://images.unsplash.com/photo-1501554728187-ce583db33af7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80',
    加里山登山步道:
      'https://images.unsplash.com/photo-1558734918-dfc4fe470147?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80',
  }
  const FeaturedTrailLength = Object.keys(FeaturedTrailInfo).length
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

  return (
    <>
      <AllTrialPageWrapper>
        <AllTrailPageTitleWrapper>
          <StarSvg />
          精選步道
        </AllTrailPageTitleWrapper>
        <SearchBarWrapper>
          <SearchBar horizontalAlign={true} placeholder='關鍵字...' />
        </SearchBarWrapper>
        <FeaturedTrailsCarouselWrapper>
          <FeaturedTrailsCarousel
            src={Object.values(FeaturedTrailInfo)[currentImgIndex]}
          />
          <FeaturedTrailName>
            {Object.keys(FeaturedTrailInfo)[currentImgIndex]}
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
        </DropDownContainer>
        <FilteredTrailsWrapper>
          <FilteredTrailCard>
            <FilteredTrailImg src='https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1806&q=80' />
            <FilteredTrailTitle>林美石磐步道</FilteredTrailTitle>
            <FilteredTrailLocation>
              <Location />
              宜蘭縣礁溪鄉
            </FilteredTrailLocation>
            <FilteredTrailTages> 一般 | 四季皆宜 </FilteredTrailTages>
          </FilteredTrailCard>
          <FilteredTrailCard>
            <FilteredTrailImg src='https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1806&q=80' />
            <FilteredTrailTitle>林美石磐步道</FilteredTrailTitle>
            <FilteredTrailLocation>
              <Location />
              宜蘭縣礁溪鄉
            </FilteredTrailLocation>
            <FilteredTrailTages> 一般 | 四季皆宜 </FilteredTrailTages>
          </FilteredTrailCard>
          <FilteredTrailCard>
            <FilteredTrailImg src='https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1806&q=80' />
            <FilteredTrailTitle>林美石磐步道</FilteredTrailTitle>
            <FilteredTrailLocation>
              <Location />
              宜蘭縣礁溪鄉
            </FilteredTrailLocation>
            <FilteredTrailTages> 一般 | 四季皆宜 </FilteredTrailTages>
          </FilteredTrailCard>
        </FilteredTrailsWrapper>
        <LoadMoreBtn>看更多</LoadMoreBtn>
      </AllTrialPageWrapper>
    </>
  )
}

export default AllTrailPage
