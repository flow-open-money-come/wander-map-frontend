import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { COLOR, RADIUS } from '../../constants/style'
import { ReactComponent as ArrowRightSvg } from '../../icons/arrow_right.svg'
import Map from '../../components/common/Map'

const HomepageContainer = styled.div`
  width: 90%;
  margin: 0 auto;
`

const HomePageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 120px;
`
const MapWrapper = styled.div`
  width: 60%;
  height: 600px;
  border: 1px solid ${COLOR.beige};
  border-radius: 0px ${RADIUS.md} ${RADIUS.md} 0px;
  overflow: hidden;
`
const ArticleListWrapper = styled.div`
  width: 39%;
  height: 600px;
  border: 1px solid ${COLOR.beige};
  border-radius: ${RADIUS.md} 0px 0px ${RADIUS.md};
  padding: 20px;
`
const TrialTitleWrapper = styled.div`
  width: 100%;
  border-left: 20px solid ${COLOR.brown};
  padding-left: 10px;
`

const TrialTitleName = styled(Link)`
  color: black;
  font-size: 36px;
`
const TrialTitleLocation = styled.div`
  font-size: 24px;
`
const TrialAriticalNumber = styled.div`
  font-size: 18px;
  color: ${COLOR.gray};
`
const SubTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`
const LinkWrapper = styled(Link)`
  display: flex;
  align-items: center;
`
const TrialArticleWrapper = styled.div`
  width: 100%;
`

function HomePage() {
  return (
    <>
      <HomepageContainer>
        <HomePageWrapper>
          <ArticleListWrapper>
            <TrialTitleWrapper>
              <TrialTitleName>林美石磐步道</TrialTitleName>
              <SubTitleWrapper>
                <TrialTitleLocation>宜蘭縣礁溪鄉</TrialTitleLocation>
                <LinkWrapper>
                  <TrialAriticalNumber>222 篇心得</TrialAriticalNumber>
                  <ArrowRightSvg />
                </LinkWrapper>
              </SubTitleWrapper>
            </TrialTitleWrapper>
            <TrialArticleWrapper>
              這裡面要放切好的共用心得 component
            </TrialArticleWrapper>
          </ArticleListWrapper>
          <MapWrapper>
            <Map />
          </MapWrapper>
        </HomePageWrapper>
      </HomepageContainer>
    </>
  )
}

export default HomePage
