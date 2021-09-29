import React from 'react'
import styled from 'styled-components'
import { COLOR, FONT, EFFECT, RADIUS } from '../../constants/style.js'
import { ReactComponent as TitleIcon } from '../../icons/trails/trailInfo.svg'


const MEDIA_QUERY_MD = '@media screen and (min-width: 768px)'
const MEDIA_QUERY_LG = '@media screen and (min-width: 1280px)'

const line = `outline: 1px red solid`

const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  ${MEDIA_QUERY_LG} {
    width: 40%;
  }
`

const Title = styled.div`
  font-size: ${FONT.s};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  svg {
    margin: 0 5px;
    width: 15px;
    height: 15px;
  }
  ${MEDIA_QUERY_LG} {
    font-size: 36px;
    margin-bottom: 35px;
    svg {
      margin: 0 10px;
      width: 40px;
      height: 40px;
    }
  }
`

const InfoContainer = styled.div``

const InfoLocation = styled.div`
  width: 320px;
  display: flex;
  font-size: ${FONT.xs};
  margin-bottom: 5px;

  div:nth-child(1) {
    width: 40%;
  }
  ${MEDIA_QUERY_LG} {
    width: 100%;
    margin-bottom: 12px;
    font-size: ${FONT.lg};
  }
`
const InfoDifficulty = styled(InfoLocation)``
const InfoAltitude = styled(InfoLocation)``
const InfoLength = styled(InfoLocation)``
const InfoSeason = styled(InfoLocation)``
const InfoFeature = styled(InfoLocation)``

function TrailInfo() {
  return (
    <InfoWrapper>
      <Title>
        <TitleIcon />
        步道資訊
      </Title>
      <InfoContainer>
        <InfoLocation>
          <div>地點</div>
          <div>宜蘭縣南澳鄉</div>
        </InfoLocation>
        <InfoDifficulty>
          <div>難度</div>
          <div>入門</div>
        </InfoDifficulty>
        <InfoAltitude>
          <div>海拔</div>
          <div>650 公尺</div>
        </InfoAltitude>
        <InfoLength>
          <div>步道長度</div>
          <div>4.1 公里</div>
        </InfoLength>
        <InfoSeason>
          <div>最佳造訪季</div>
          <div>四季皆宜</div>
        </InfoSeason>
        <InfoFeature>
          <div>步道概況</div>
          <div>土徑步道、土木階梯</div>
        </InfoFeature>
      </InfoContainer>
    </InfoWrapper>
  )
}

export default TrailInfo