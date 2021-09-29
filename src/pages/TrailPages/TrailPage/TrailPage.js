import React from 'react'
import styled from 'styled-components'
import { COLOR, FONT, EFFECT, RADIUS, MEDIA_QUERY } from '../../../constants/style'
import { ReactComponent as CollectIcon } from '../../../icons/trails/collect.svg'
import TrailInfo from '../../../components/trailSystem/TrailInfo'
import Weather from '../../../components/trailSystem/Weather'
import TrailMap from '../../../components/trailSystem/TrailMap'
import TrailRoute from '../../../components/trailSystem/TrailRoute'
import TrailArticles from '../../../components/trailSystem/TrailArticles'
import TrailReviews from '../../../components/trailSystem/TrailReviews'

const line = `outline: 1px red solid`

const TrailPageContainer = styled.div`
  width: 90%;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`

const Cover = styled.img`
  width: 100%;
  height: 60%;
  min-width: 320px;
  min-height: 160px;
  border-radius: ${RADIUS.lg} ${RADIUS.lg} 0 0;
  margin-bottom: 10px;
  ${MEDIA_QUERY.lg} {
    width: 60%;
    height: 400px;
    border-radius: ${RADIUS.lg} 0 ${RADIUS.lg} 0;
  }
`

const Title = styled.div`
  width: fit-content;
  max-width: 80%;
  padding: 10px 20px;
  background: ${COLOR.white};
  font-size: ${FONT.md};
  font-weight: bold;
  margin-bottom: 15px;
  border-radius: ${RADIUS.lg};
  box-shadow: ${EFFECT.shadow_light};
  ${MEDIA_QUERY.md} {
    font-size: ${FONT.lg};
  }
  ${MEDIA_QUERY.lg} {
    max-width: 100%;
    font-size: ${FONT.xl};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px 20px;
    margin-bottom: 30px;
    min-height: 15%;
  }
`

const CollectBlock = styled.div`
  margin: 5px;
  font-size: ${FONT.s};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  svg {
    margin: 0 2px;
    width: 15px;
    height: 15px;
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
    margin: 10px;
    font-size: ${FONT.lg};
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
    font-size: ${FONT.lg};
    line-height: ${FONT.xl};
    height: 70%;
    letter-spacing: 2px;
  }
`

const HeadFlex = styled.div`
  position: relative;
  ${MEDIA_QUERY.lg} {
    margin-bottom: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const TitleAndDesc = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${MEDIA_QUERY.lg} {
    align-items: start;
    width: 40%;
    margin-left: 20px;
    height: 400px;
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

function TrailPage() {
  return (
    <TrailPageContainer>
      <HeadFlex>
        <Cover src='https://recreation.forest.gov.tw/Files/RT/Photo/001/05/001.jpg' />
        <TitleAndDesc>
          <Title>蘇花古道：大南澳越嶺段</Title>
          <Desc>
            蘇花古道建造於清朝同治13
            年(1874年)，是聯絡蘇澳與花蓮之間最早的一條官道；日人19世紀於蘇花海岸之間先後開鑿了北段的大南澳路、南段的沿岸理番道路及東海徒步道，即今日蘇花公路的前身，但早已荒廢舊跡難尋。經過調查後整建「蘇花古道--大南澳越嶺段」。
          </Desc>
        </TitleAndDesc>
        <CollectBlock>
          <CollectIcon />77
        </CollectBlock>
      </HeadFlex>

      <InfoAndWeather>
        <TrailInfo />
        <Weather />
      </InfoAndWeather>

      <TrailMap />
      <TrailRoute />
      <TrailArticles />
      <TrailReviews />
    </TrailPageContainer>
  )
}

export default TrailPage
