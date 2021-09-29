import React from 'react'
import styled from 'styled-components'
import { COLOR, FONT, EFFECT, RADIUS } from '../../../constants/style'
import { ReactComponent as CollectIcon } from '../../../icons/trails/collect.svg'
import TrailInfo from '../../../components/trailSystem/TrailInfo'
import Weather from '../../../components/trailSystem/Weather'
import TrailMap from '../../../components/trailSystem/TrailMap'
import TrailRoute from '../../../components/trailSystem/TrailRoute'
import TrailArticles from '../../../components/trailSystem/TrailArticles'
import TrailReviews from '../../../components/trailSystem/TrailReviews'

const MEDIA_QUERY_MD = '@media screen and (min-width: 500px)'
const MEDIA_QUERY_LG = '@media screen and (min-width: 768px)'

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
  width: 320px;
  height: 160px;
  border-radius: ${RADIUS.lg} ${RADIUS.lg} 0 0;
  margin-bottom: 10px;
  ${MEDIA_QUERY_LG} {
    width: 60%;
    height: 400px;
    border-radius: ${RADIUS.lg} 0 0 ${RADIUS.lg};
  }
`

const Title = styled.div`
  width: 240px;
  min-height: 38px;
  padding: 10px;
  background: ${COLOR.white};
  font-size: ${FONT.md};
  font-weight: 550;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  border-radius: ${RADIUS.lg};
  box-shadow: ${EFFECT.shadow_light};
  ${MEDIA_QUERY_LG} {
    white-space: nowrap;
    width: fit-content;
    max-width: 100%;
    font-size: 36px;
    padding: 5px 30px;
    margin-bottom: 30px;
    height: 15%;
  }
`

const CollectBlock = styled.div`
  margin: 10px 0;
  font-size: ${FONT.s};
  color: ${COLOR.green};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0;
  top: 0;
  svg {
    margin: 0 2px;
    width: 15px;
    height: 15px;
  }
`

const Desc = styled.div`
  font-size: ${FONT.xs};
  line-height: ${FONT.md};
  text-align: justify;
  margin-bottom: 30px;
  ${MEDIA_QUERY_LG} {
    max-height: 100%;
    font-size: 24px;
    line-height: 34px;
    height: 85%;
    display: flex;
    justify-content: center;
    align-items: center;
    letter-spacing: 3px;
  }
`

const HeadFlex = styled.div`
  ${MEDIA_QUERY_LG} {
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
  ${MEDIA_QUERY_LG} {
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
  

  ${MEDIA_QUERY_LG} {
    flex-direction: row;
    margin-bottom: 60px;
  }
`

function TrailPage() {
  return (
    <TrailPageContainer>
      <HeadFlex>
        <Cover src='https://recreation.forest.gov.tw/Files/RT/Photo/001/05/001.jpg'></Cover>

        <TitleAndDesc>
          <Title>蘇花古道：大南澳越嶺段</Title>
          {/* <CollectBlock>
        <CollectIcon />
        77
      </CollectBlock> */}

          <Desc>
            蘇花古道建造於清朝同治13
            年(1874年)，是聯絡蘇澳與花蓮之間最早的一條官道；日人19世紀於蘇花海岸之間先後開鑿了北段的大南澳路、南段的沿岸理番道路及東海徒步道，即今日蘇花公路的前身，但早已荒廢舊跡難尋。經過調查後整建「蘇花古道--大南澳越嶺段」。
            {/* <br />
            <br />
            古道呈南北縱向，北側為軍方管制道路無法通行，建議由南側登山口往北走再折返，海拔落差近七百公尺，來回行走約5小時，路程頗具挑戰性。
            從南口入古道，一路陡上，約十餘分鐘後抵達一處較平緩的空曠處，路旁有處碉堡遺跡以及水泥護欄，此為崩坍廢棄的舊蘇花公路。
            <br />
            <br />
            沿路隔著樹林間隙，可以遙望汪洋大海。在1.2K里程處抵達休息平臺，即是南澳嶺的主峰所在，再攀至0.6公里附近的觀景臺，古道在此豁然開朗。繼續陡下至鞍部，再爬坡至烏石鼻戰備道路上的北端起點。 */}
          </Desc>
        </TitleAndDesc>
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
