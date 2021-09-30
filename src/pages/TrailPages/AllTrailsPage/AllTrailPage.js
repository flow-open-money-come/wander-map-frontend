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
import SearchBar from '../../../components/common/SearchBar'
import { ReactComponent as ArrowUpSvg } from '../../../icons/arrow_up.svg'
import { ReactComponent as ArrowDownSvg } from '../../../icons/arrow_down.svg'
import useToggle from '../../../hooks/useToggle'

const AllTrialPageWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`
const AllTrailPageTitleWrapper = styled.div`
  font-size: ${FONT.md};
  font-weight: bold;
  margin: 20px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
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
const DropDownCheckBoxList = styled.div``
const DropDownCheckBoxTitle = styled.div`
  width: 70px;
  height: 25px;
  border: 1px solid gray;
  display: flex;
  align-items: center;
`
const DropDownCheckBoxs = styled.div`
  display: flex;
  flex-direction: column;
  width: 70px;
  border: 1px solid gray;
`
const DropDownCheckBox = styled.input``

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
  // const [arrowToggleClick, setArrowToggleClick] = useToogle(false)
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
        <SearchBar horizontalAlign={true} placeholder='關鍵字...' />
        <FeaturedTrailsCarouselWrapper>
          <FeaturedTrailsCarousel
            src={Object.values(FeaturedTrailInfo)[currentImgIndex]}
          />
          <FeaturedTrailName>
            {Object.keys(FeaturedTrailInfo)[currentImgIndex]}
          </FeaturedTrailName>
        </FeaturedTrailsCarouselWrapper>
        <DropDownCheckBoxList>
          <DropDownCheckBoxTitle>
            區域 <ArrowDownSvg />
          </DropDownCheckBoxTitle>
          <DropDownCheckBoxs>
            <label>
              <DropDownCheckBox type='checkbox' />
              北區
            </label>
            <label>
              <DropDownCheckBox type='checkbox' />
              中區
            </label>
            <label>
              <DropDownCheckBox type='checkbox' />
              南區
            </label>
            <label>
              <DropDownCheckBox type='checkbox' />
              東區
            </label>
          </DropDownCheckBoxs>
        </DropDownCheckBoxList>
      </AllTrialPageWrapper>
    </>
  )
}

export default AllTrailPage
