import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'
import {
  COLOR,
  FONT,
  EFFECT,
  RADIUS,
  MEDIA_QUERY,
} from '../../../constants/style'
import { useParams } from 'react-router-dom'
import { ReactComponent as CollectIcon } from '../../../icons/trails/collect.svg'
import TrailInfo from '../../../components/trailSystem/TrailInfo'
import Weather from '../../../components/trailSystem/Weather'
import TrailMap from '../../../components/trailSystem/TrailMap'
import TrailRoute from '../../../components/trailSystem/TrailRoute'
import TrailArticles from '../../../components/trailSystem/TrailArticles'
import TrailReviews from '../../../components/trailSystem/TrailReviews'
import {
  getTrails,
  getTrailArticles,
  collectTrail,
  cancelCollected,
  getUserCollectedTrails
} from '../../../WebAPI'
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../../../context'
import { getAuthToken } from '../../../utils'
import { object } from 'prop-types'

const TrailPageContainer = styled.div`
  width: 80%;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`

const HeadFlex = styled.div`
  position: relative;
  ${MEDIA_QUERY.lg} {
    margin-bottom: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

const Cover = styled.img`
  width: 100%;
  height: 60%;
  min-width: 320px;
  min-height: 160px;
  border-radius: ${RADIUS.lg} ${RADIUS.lg} 0 0;
  margin-bottom: 10px;
  object-fit: cover;
  ${MEDIA_QUERY.lg} {
    width: 45%;
    height: 400px;
    border-radius: ${RADIUS.lg} 0 ${RADIUS.lg} 0;
  }
`

const TitleAndDesc = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  ${MEDIA_QUERY.lg} {
    width: 50%;
    margin-left: 10px;
    height: 400px;
  }
`

const Title = styled.div`
  width: fit-content;
  max-width: 80%;
  padding: 10px 20px;
  background: ${COLOR.white};
  font-size: ${FONT.md};
  margin-bottom: 15px;
  border-radius: ${RADIUS.md};
  box-shadow: ${EFFECT.shadow_light};
  ${MEDIA_QUERY.md} {
    font-size: ${FONT.lg};
  }
  ${MEDIA_QUERY.lg} {
    font-size: ${FONT.logo};
    max-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 20px;
    margin-bottom: 20px;
    min-height: 15%;
  }
`

const CollectBlock = styled.div`
  font-size: ${FONT.lg};
  display: flex;
  align-items: center;
  position: absolute;
  top: 10px;
  left: 10px;
  background: rgba(0, 0, 0, 0.4);
  border-radius: ${RADIUS.md};
  padding: 10px;
  color: ${COLOR.white};
  svg {
    margin: 0 2px;
    width: 15px;
    height: 15px;
    fill: ${(props) => (props.$match ? `${COLOR.green}` : ``)};
  }
  path {
    stroke: ${(props) => (props.$match ? `${COLOR.green}` : `${COLOR.white}`)};
  }
  &:hover {
    cursor: pointer;
    svg {
      fill: ${COLOR.green};
    }
    path {
      stroke: ${COLOR.green};
    }
  }
  ${MEDIA_QUERY.lg} {
    font-size: ${FONT.logo};
    svg {
      margin: 0 5px;
      width: 25px;
      height: 25px;
    }
  }
`

const Desc = styled.div`
  font-size: ${FONT.s};
  line-height: ${FONT.lg};
  text-align: justify;
  margin-bottom: 30px;
  height: 100px;
  overflow: auto;
  ${MEDIA_QUERY.lg} {
    font-size: 16px;
    line-height: ${FONT.xl};
    height: 70%;
    letter-spacing: 2px;
  }
`

const InfoAndWeather = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${MEDIA_QUERY.lg} {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 60px;
  }
`

const trailDefault = {
    trail_id: 2,
    title: '南澳古道',
    description:
      '南澳古道位在南澳鄉金洋村，是通往泰雅族舊部落的路徑之一，為「舊武塔古道」的一部分，也是泰雅族的傳統獵場。自旋檀駐在所遺址起，循南澳南溪上溯至古道終點，至合流溪與南澳南溪匯流口，共 3.8 公里。沿途平緩好走，野生動植物生態豐富，沿途有吊橋遺址、警備道路基等遺跡。',
    location: '宜蘭縣南澳鄉',
    coordinate: {
      x: 121.70835976400171,
      y: 24.42360428661788
    },
    altitude: 350,
    length: 3.8,
    season: '四季皆宜',
    difficulty: '入門',
    cover_picture_url:
      'https://tluxe-aws.hmgcdn.com/public/article/2017/atl_20180628130517_581.jpg',
    map_picture_url: 'https://recreation.forest.gov.tw/Files/RT/Photo/002/01/002_MAP.jpg',
    situation: '木棧道、碎石山徑'
}

function TrailPage() {
  const { trailID } = useParams()
  const [trailInfo, setTrailInfo] = useState(trailDefault)
  const [articles, setArticles] = useState(null)
  const [collectedMatch, setCollectedMatch] = useState(false)
  const [toggleChange, setToggleChange] = useState(true)
  const { userInfo } = useContext(AuthContext)
  const history = useHistory()
  
  console.log('userInfo', userInfo)

  useEffect(() => {
    getTrails(trailID)
      .then((res) => {
        res.data.data[0] ? setTrailInfo(res.data.data[0]) : history.push(`/trails`)})
      .catch((error) => console.error(error))
    getTrailArticles(trailID, '?limit=3')
      .then((res) => setArticles(res.data.data))
      .catch((error) => console.error(error))
  }, [trailID, history])

  useEffect(() => {
    //假如useContext拿不到userInfo資料就會出錯（理論上不會拿不到?），這邊先隔出來試
    getUserCollectedTrails(userInfo.user_id)
      .then((res) => {
        const userCollected = (res.data.data.trails)
        const match = userCollected.some((collection) => collection.trail_id === Number(trailID))
        setCollectedMatch(match)
        console.log('getttt')
      })
      .catch((error) => console.error(error))
  }, [userInfo, trailID, toggleChange ])


  console.log('collectedMatch', collectedMatch)


  const handleToggleCollect = (userID, trailID, collectedMatch) => {
    collectedMatch ? cancelCollected(userID, trailID) : collectTrail(userID, trailID)
    setToggleChange(!toggleChange)
  }

  return (
    <TrailPageContainer>
      <HeadFlex>
        <Cover src={trailInfo && trailInfo.cover_picture_url} />
        <TitleAndDesc>
          <Title>{trailInfo && trailInfo.title}</Title>
          <Desc>{trailInfo && trailInfo.description}</Desc>
        </TitleAndDesc>
        {userInfo && (
          <CollectBlock
            onClick={() => {
              handleToggleCollect(userInfo.user_id, trailID, collectedMatch)
            }}
            $match={collectedMatch}
          >
            <CollectIcon />
          </CollectBlock>
        )}
      </HeadFlex>
      <InfoAndWeather>
        <TrailInfo trailInfo={trailInfo} />
        <Weather location={trailInfo && trailInfo.location} />
      </InfoAndWeather>
      <TrailMap coordinate={trailInfo && trailInfo.coordinate} />
      {trailInfo && trailInfo.map_picture_url && (
        <TrailRoute routePic={trailInfo && trailInfo.map_picture_url} />
      )}
      {articles && articles.length !== 0 && <TrailArticles articles={articles} />}
      <TrailReviews />
    </TrailPageContainer>
  )
}

export default TrailPage
