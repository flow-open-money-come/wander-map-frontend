import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { COLOR, RADIUS, FONT, MEDIA_QUERY, EFFECT } from '../../constants/style'
import { ReactComponent as ArrowRightSvg } from '../../icons/arrow_right.svg'
import Map from '../../components/common/Map'
import ArticleList from '../../components/forumSystem/Article'

const HomepageContainer = styled.div`
  width: 90%;
  margin: 0 auto;
`

const HomePageWrapper = styled.div`
  margin: 20px 0px;
  ${MEDIA_QUERY.lg} {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
  }
`
const MapWrapper = styled.div`
  width: 100%;
  height: 600px;
  border: 1px solid ${COLOR.beige};
  border-radius: ${RADIUS.md};
  overflow: hidden;
  z-index: 0;
  ${MEDIA_QUERY.lg} {
    width: 50%;
    border-radius: 0px ${RADIUS.md} ${RADIUS.md} 0px;
  }
`
const ArticleListWrapper = styled.div`
  width: 100%;
  height: 600px;
  margin: 20px auto;
  border: none;
  padding: 20px 20px 40px 20px;
  overflow: scroll;
  transition: ${EFFECT.transition};
  ${MEDIA_QUERY.lg} {
    width: 49%;
    border: 1px solid ${COLOR.beige};
    border-radius: ${RADIUS.md} 0px 0px ${RADIUS.md};
  }
`
const TrialTitleWrapper = styled.div`
  text-align: center;
  ${MEDIA_QUERY.lg} {
    text-align: start;
    border-left: 20px solid ${COLOR.brown};
    padding-left: 10px;
  }
`

const TrialTitleName = styled(Link)`
  font-size: ${FONT.lg};
  color: black;
  border-left: 20px solid ${COLOR.brown};
  padding-left: 10px;
  ${MEDIA_QUERY.lg} {
    border-left: none;
    font-size: ${FONT.logo};
  }
`
const TrialTitleLocation = styled.div`
  font-size: ${FONT.md};
`
const TrialAriticalNumber = styled.div`
  font-size: ${FONT.s};
  color: ${COLOR.gray};
  margin-left: 20px;
`
const SubTitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  ${MEDIA_QUERY.lg} {
    justify-content: start;
    padding-left: 10px;
  }
`
const LinkWrapper = styled(Link)`
  display: flex;
  align-items: center;
`
const TrialArticleWrapper = styled.div`
  width: 100%;
`
const Divider = styled.div`
  width: 95%;
  height: 2px;
  background-color: ${COLOR.white};
  margin: 20px auto;
`

function HomePage() {
  return (
    <>
      <HomepageContainer>
        <HomePageWrapper>
          <MapWrapper>
            <Map />
          </MapWrapper>
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
            <Divider />
            <TrialArticleWrapper>
              <ArticleList
                articleImgSrc={'https://i.imgur.com/w2Y6y4z.jpg'}
                avatarImgSrc={'https://i.imgur.com/eGREu6v.png'}
                title={'礁溪林美石磐涼爽一日遊'}
                user={'水怪貓貓'}
                tags={['有水源', '賞花', '危險地形']}
                date={'2021.9.7 / 20:20:22'}
                content={`林美石磐步道有著低海拔亞熱帶溪谷的景色，步道沿舊水圳整建，
          現寬敞平緩好走、又不失幽幽古意；沿途生態豐富，樹林成蔭，
          潺潺流水，散發陣陣芬多精，走在其中清爽無比...`}
                lessRwd={true}
              />
              <ArticleList
                articleImgSrc={'https://i.imgur.com/w2Y6y4z.jpg'}
                avatarImgSrc={'https://i.imgur.com/eGREu6v.png'}
                title={'礁溪林美石磐涼爽一日遊'}
                user={'水怪貓貓'}
                tags={['有水源', '賞花', '危險地形']}
                date={'2021.9.7 / 20:20:22'}
                content={`林美石磐步道有著低海拔亞熱帶溪谷的景色，步道沿舊水圳整建，
          現寬敞平緩好走、又不失幽幽古意；沿途生態豐富，樹林成蔭，
          潺潺流水，散發陣陣芬多精，走在其中清爽無比...`}
                lessRwd={true}
              />
              <ArticleList
                articleImgSrc={'https://i.imgur.com/w2Y6y4z.jpg'}
                avatarImgSrc={'https://i.imgur.com/eGREu6v.png'}
                title={'礁溪林美石磐涼爽一日遊'}
                user={'水怪貓貓'}
                tags={['有水源', '賞花', '危險地形']}
                date={'2021.9.7 / 20:20:22'}
                content={`林美石磐步道有著低海拔亞熱帶溪谷的景色，步道沿舊水圳整建，
          現寬敞平緩好走、又不失幽幽古意；沿途生態豐富，樹林成蔭，
          潺潺流水，散發陣陣芬多精，走在其中清爽無比...`}
                lessRwd={true}
              />
            </TrialArticleWrapper>
          </ArticleListWrapper>
        </HomePageWrapper>
      </HomepageContainer>
    </>
  )
}

export default HomePage
