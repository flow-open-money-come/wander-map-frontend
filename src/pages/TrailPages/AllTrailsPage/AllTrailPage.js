import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {
  COLOR,
  FONT,
  MEDIA_QUERY,
  RADIUS,
  EFFECT,
} from '../../../constants/style'
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
import swal from 'sweetalert'
import { LoadingContext } from '../../../context'

const AllTrailsPageWrapper = styled.div`
  width: 90%;
  min-height: 86vh;
  margin: 0 auto;
  position: relative;
  padding-bottom: 50px;
  flex-grow: 1;
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
  transition: ${EFFECT.transition};
  &:hover {
    opacity: 0.8;
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
  const { isLoading, setIsLoading } = useContext(LoadingContext)

  useEffect(() => {
    let params = []
    if (checkedOptions.length !== 0) params.push(`&${checkedOptions.join('&')}`)
    if (debouncedKeyWord) params.push(`&search=${debouncedKeyWord}`)
    setIsLoading(true)
    getTrails(`?limit=126${params.join('')}`)
      .then((res) => {
        if (res.data.success) setFilteredTrailInfos(res.data.data)
        setIsLoading(false)
      })
      .catch(() => {
        swal('Oh ??????', '????????????????????????????????????????????????????????????', 'error')
        setIsLoading(false)
      })
  }, [checkedOptions, debouncedKeyWord, setIsLoading])

  return (
    <>
      <AllTrailsPageWrapper>
        <AllTrailsPageTitleWrapper>
          <StarSvg />
          ????????????
        </AllTrailsPageTitleWrapper>
        <SearchBarWrapper>
          <SearchBar
            horizontalAlign={true}
            placeholder='?????????...'
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
            title='??????'
            filter='location'
            options={['??????', '??????', '??????', '??????']}
            onClick={handleFilterTrails}
          />
          <DropDownCheckBoxList
            title='?????? (m)'
            filter='altitude'
            options={['1k ??????', '1k-2k', '2k-3k', '3k ??????']}
            onClick={handleFilterTrails}
          />
          <DropDownCheckBoxList
            title='?????? (km)'
            filter='length'
            options={['2 ??????', '2-5', '5-12', '12 ??????']}
            onClick={handleFilterTrails}
          />
          <DropDownCheckBoxList
            title='??????'
            filter='difficult'
            options={['??????', '??????', '??????', '??????', '??????']}
            onClick={handleFilterTrails}
          />
          <SearchBarWrapper $combined>
            <SearchBar
              placeholder='?????????...'
              noBorderRadius={true}
              width='100%'
              handleKeyWordChange={(e) => handleKeyWordChange(e)}
              handleKeyWordDelete={handleKeyWordDelete}
              inputValue={keyWord}
              withoutSearchIcon
            />
          </SearchBarWrapper>
        </DropDownContainer>
        {isLoading ? (
          <SmallRegionLoading />
        ) : (
          <FilteredTrailsWrapper>
            {filteredTrailInfos.length > 0 ? (
              filteredTrailInfos
                .slice(0, numberOfDisplay)
                .map((trailInfo) => (
                  <TrailCard key={trailInfo.trail_id} trailInfo={trailInfo} />
                ))
            ) : (
              <NoMatchMsg>???????????????</NoMatchMsg>
            )}
          </FilteredTrailsWrapper>
        )}

        {!isLoading &&
          filteredTrailInfos.length > 21 &&
          numberOfDisplay < filteredTrailInfos.length && (
            <LoadMoreBtn onClick={handleLoadMore}>?????????</LoadMoreBtn>
          )}
      </AllTrailsPageWrapper>
    </>
  )
}

export default AllTrailPage
