import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { COLOR, FONT, MEDIA_QUERY, RADIUS } from '../../../constants/style'
import { ReactComponent as StarSvg } from '../../../icons/star.svg'
import SearchBar from '../../../components/common/SearchBar'
import DropDownCheckBoxList from '../../../components/common/DropDownCheckBoxList'
import { NavBarButton } from '../../../components/common/Button'
import TrailCard from '../../../components/trailSystem/TrailCard'
import { getTrails } from '../../../WebAPI'
import useSearch from '../../../hooks/useSearch'
import useLoadMore from '../../../hooks/useLoadMore'
import useDebounce from '../../../hooks/useDebounce'
import useHotTrailsCarousel from '../../../hooks/useHotTrailsCarousel'
import useTrailFilters from '../../../hooks/useTrialFilters'
import SmallRegionLoading from '../../../components/common/SmallRegionLoading'

const AllTrailsPageWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
  position: relative;
  padding-bottom: 50px;
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
const FeaturedTrailsCarouselWrapper = styled(Link)`
  display: block;
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
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
  const { checkedOptions, handleFilterTrails } = useTrailFilters()
  const [filteredTrailInfos, setFilteredTrailInfos] = useState([])
  const { hotTrialInfos, currentImgIndex } = useHotTrailsCarousel()
  const { keyWord, handleKeyWordChange, handleKeyWordDelete } = useSearch()
  const debouncedKeyWord = useDebounce(keyWord, 1000)
  const { numberOfDisplay, handleLoadMore } = useLoadMore()
  const [isLoadingFilter, setIsLoadingFilter] = useState(false)

  useEffect(() => {
    let params = []
    if (checkedOptions.length !== 0) params.push(`&${checkedOptions.join('&')}`)
    if (debouncedKeyWord) params.push(`&search=${debouncedKeyWord}`)
    setIsLoadingFilter(true)
    getTrails(`?limit=126${params.join('')}`)
      .then((res) => {
        if (res.data.success) setFilteredTrailInfos(res.data.data)
        setIsLoadingFilter(false)
      })
      .catch((err) => {
        console.log(err)
        setIsLoadingFilter(false)
      })
  }, [checkedOptions, debouncedKeyWord])

  return (
    <>
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
            handleKeyWordDelete={handleKeyWordDelete}
            inputValue={keyWord}
            withoutSearchIcon
          />
        </SearchBarWrapper>
        <FeaturedTrailsCarouselWrapper
          to={`./trails/${hotTrialInfos[currentImgIndex][1]}`}
        >
          <FeaturedTrailsCarousel src={hotTrialInfos[currentImgIndex][2]} />
          <FeaturedTrailName>
            {hotTrialInfos[currentImgIndex][0]}
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
            options={['新手', '入門', '進階', '挑戰', '困難']}
            onClick={handleFilterTrails}
          />
          <SearchBarWrapper $combined>
            <SearchBar
              placeholder='關鍵字...'
              noBorderRadius={true}
              width='100%'
              handleKeyWordChange={(e) => handleKeyWordChange(e)}
              handleKeyWordDelete={handleKeyWordDelete}
              inputValue={keyWord}
              withoutSearchIcon
            />
          </SearchBarWrapper>
        </DropDownContainer>
        {isLoadingFilter ? (
          <SmallRegionLoading isFullScreen />
        ) : (
          <FilteredTrailsWrapper>
            {filteredTrailInfos.length > 0 ? (
              filteredTrailInfos
                .slice(0, numberOfDisplay)
                .map((trailInfo) => (
                  <TrailCard key={trailInfo.trail_id} trailInfo={trailInfo} />
                ))
            ) : (
              <NoMatchMsg>查無步道。</NoMatchMsg>
            )}
          </FilteredTrailsWrapper>
        )}

        {filteredTrailInfos.length > 21 &&
          numberOfDisplay < filteredTrailInfos.length && (
            <LoadMoreBtn onClick={handleLoadMore}>看更多</LoadMoreBtn>
          )}
      </AllTrailsPageWrapper>
    </>
  )
}

export default AllTrailPage
