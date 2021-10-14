import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { COLOR, FONT, MEDIA_QUERY, RADIUS } from '../../../constants/style'
import { ReactComponent as StarSvg } from '../../../icons/star.svg'
import SearchBar from '../../../components/common/SearchBar'
import DropDownCheckBoxList from '../../../components/common/DropDownCheckBoxList'
import { NavBarButton } from '../../../components/common/Button'
import TrailCard from '../../../components/trailSystem/TrailCard'
import { getTrails, getHotTrails } from '../../../WebAPI'
import useSearch from '../../../hooks/useSearch'
import useLoadMore from '../../../hooks/useLoadMore'
import { parameterMap } from '../../../constants/paramsMap'

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
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const LoadMoreBtn = styled.div`
  ${NavBarButton}
  margin: 50px auto 100px auto;
`
const NoMatchMsg = styled.div`
  font-size: ${FONT.md};
  font-weight: bold;
  margin: 0 auto;
  color: ${COLOR.gray};
`

function AllTrailPage() {
  // featured trails
  const [hotTrialInfos, setHotTrailInfos] = useState([{}])
  // checked options of trail filters
  const [checkedOptions, setCheckedOptions] = useState([])
  // filtered trails infos
  const [filteredTrailInfos, setFilteredTrailInfos] = useState([])
  // Carousel: current image index
  const [currentImgIndex, setCurrentImgIndex] = useState(0)

  const {
    keyWord,
    matchTrailInfos,
    handleSearchTrails,
    handleKeyWordChange,
    handleKeyWordDelete,
    onSearch,
  } = useSearch()

  const { numberOfDisplay, handleLoadMore } = useLoadMore()

  const handelCarousel = () => {
    if (currentImgIndex < hotTrialInfos.length - 1) {
      return setCurrentImgIndex(currentImgIndex + 1)
    }
    setCurrentImgIndex(0)
  }

  // get featured trails infos
  useEffect(() => {
    getHotTrails()
      .then((res) => {
        if (res.data.success) {
          setHotTrailInfos(
            res.data.data.map((trailData) => {
              return {
                [trailData.title]: trailData.cover_picture_url,
              }
            })
          )
        }
      })
      .catch((err) => console.log(err))
  }, [])

  // Carousel
  useEffect(() => {
    if (hotTrialInfos.length !== 0) setTimeout(handelCarousel, 3000)
  })

  // handle trails filtration of four filters
  const handleFilterTrails = (e) => {
    if (!e.target.getAttribute('filter')) return
    let targetOptionType = e.target.getAttribute('filter')
    if (Object.keys(parameterMap[targetOptionType]).indexOf(e.target.name) < 0)
      return
    let targetOption = parameterMap[targetOptionType][e.target.name]
    if (checkedOptions.indexOf(targetOption) >= 0) {
      return setCheckedOptions(
        checkedOptions.filter((option) => option !== targetOption)
      )
    }

    setCheckedOptions([...checkedOptions, targetOption])
  }

  useEffect(() => {
    let params = ''
    if (checkedOptions.length !== 0) params = `&${checkedOptions.join('&')}`
    getTrails(`?limit=126${params}`)
      .then((res) => {
        if (res.data.success) setFilteredTrailInfos(res.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [checkedOptions])

  return (
    <>
      <button
        onClick={() => {
          console.log(onSearch.current)
        }}
      ></button>
      <AllTrailsPageWrapper>
        <AllTrailsPageTitleWrapper>
          <StarSvg />
          精選步道
        </AllTrailsPageTitleWrapper>
        <SearchBarWrapper>
          <SearchBar
            horizontalAlign={true}
            placeholder='關鍵字...'
            handleKeyWordChange={(e) => handleKeyWordChange(e)}
            handleSearchTrails={handleSearchTrails}
            handleKeyWordDelete={handleKeyWordDelete}
            inputValue={keyWord}
          />
        </SearchBarWrapper>
        <FeaturedTrailsCarouselWrapper>
          <FeaturedTrailsCarousel
            src={Object.values(hotTrialInfos[currentImgIndex])}
          />
          <FeaturedTrailName>
            {Object.keys(hotTrialInfos[currentImgIndex])}
          </FeaturedTrailName>
        </FeaturedTrailsCarouselWrapper>
        <DropDownContainer>
          <DropDownCheckBoxList
            title='區域'
            filter='location'
            options={['北區', '中區', '南區', '東區']}
            onClick={handleFilterTrails}
          />
          <DropDownCheckBoxList
            title='高度 (m)'
            filter='altitude'
            options={['1k 以下', '1k-2k', '2k-3k', '3k 以上']}
            onClick={handleFilterTrails}
          />
          <DropDownCheckBoxList
            title='長度 (km)'
            filter='length'
            options={['2 以下', '2-5', '5-12', '12 以上']}
            onClick={handleFilterTrails}
          />
          <DropDownCheckBoxList
            title='難度'
            filter='difficult'
            options={['新手', '一般', '困難', '進階', '挑戰']}
            onClick={handleFilterTrails}
          />
          <SearchBarWrapper $combined>
            <SearchBar
              placeholder='關鍵字...'
              noBorderRadius={true}
              width='100%'
              handleKeyWordChange={(e) => handleKeyWordChange(e)}
              handleSearchTrails={handleSearchTrails}
              handleKeyWordDelete={handleKeyWordDelete}
              inputValue={keyWord}
            />
          </SearchBarWrapper>
        </DropDownContainer>
        <FilteredTrailsWrapper>
          {!onSearch.current &&
            filteredTrailInfos
              .slice(0, numberOfDisplay)
              .map((trailInfo) => (
                <TrailCard key={trailInfo.trail_id} trailInfo={trailInfo} />
              ))}
          {onSearch.current &&
            matchTrailInfos.length > 0 &&
            matchTrailInfos
              .slice(0, numberOfDisplay)
              .map((trailInfo) => (
                <TrailCard key={trailInfo.trail_id} trailInfo={trailInfo} />
              ))}
          {onSearch.current && matchTrailInfos.length === 0 && (
            <NoMatchMsg>查無步道。</NoMatchMsg>
          )}
        </FilteredTrailsWrapper>

        <LoadMoreBtn onClick={handleLoadMore}>看更多</LoadMoreBtn>
      </AllTrailsPageWrapper>
    </>
  )
}

export default AllTrailPage
