import { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { COLOR, FONT, MEDIA_QUERY, RADIUS } from '../../../constants/style'
import { ReactComponent as StarSvg } from '../../../icons/star.svg'
import SearchBar from '../../../components/common/SearchBar'
import DropDownCheckBoxList from '../../../components/common/DropDownCheckBoxList'
import { NavBarButton } from '../../../components/common/Button'
import TrailCard from '../../../components/trailSystem/TrailCard'
import { getTrails, getHotTrails } from '../../../WebAPI'

const AllTrailsPageWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  position: relative;
`
const AllTrailsPageTitleWrapper = styled.div`
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
  &:hover {
    cursor: pointer;
  }
`

function AllTrailPage() {
  const [featuredTrialInfos, setFeaturedTrailInfos] = useState([{}])
  const [trailInfos, setTrailInfos] = useState([])
  const [currentImgIndex, setCurrentImgIndex] = useState(0)

  const handelCarousel = () => {
    if (currentImgIndex < featuredTrialInfos.length - 1) {
      return setCurrentImgIndex(currentImgIndex + 1)
    }
    setCurrentImgIndex(0)
  }

  useEffect(() => {
    // get featured trails infos
    getHotTrails()
      .then((res) => {
        if (res.data.success) {
          setFeaturedTrailInfos(
            res.data.data.map((trailData) => {
              return {
                [trailData.title]: trailData.cover_picture_url,
              }
            })
          )
        }
      })
      .catch((err) => console.log(err))
    // get all trails
    getTrails('?limit=126')
      .then((res) => {
        if (res.data.success) setTrailInfos(res.data.data)
      })
      .catch((err) => console.log(err))
  }, [])

  useEffect(() => {
    if (featuredTrialInfos.length !== 0) setTimeout(handelCarousel, 3000)
  })

  return (
    <>
      {/* <button
        onClick={() => {
          console.log(trailInfos)
        }}
      >
        檢查
      </button> */}
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
            src={Object.values(featuredTrialInfos[currentImgIndex])}
          />
          <FeaturedTrailName>
            {Object.keys(featuredTrialInfos[currentImgIndex])}
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
              widthFilter
            />
          </SearchBarWrapper>
        </DropDownContainer>
        <FilteredTrailsWrapper>
          {trailInfos.slice(0, 20).map((trailInfo) => (
            <TrailCard key={trailInfo.trail_id} trailInfo={trailInfo} />
          ))}
        </FilteredTrailsWrapper>
        <LoadMoreBtn>看更多</LoadMoreBtn>
      </AllTrailsPageWrapper>
    </>
  )
}

export default AllTrailPage
