import React from 'react'
import styled from 'styled-components'
import { COLOR, FONT, MEDIA_QUERY } from '../../constants/style.js'
import { ReactComponent as TitleIcon } from '../../icons/trails/trailInfo.svg'

const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  ${MEDIA_QUERY.lg} {
    width: 40%;
  }
`

const Title = styled.div`
  font-size: ${FONT.md};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
  svg {
    margin: 0 5px;
    width: 20px;
    height: 20px;
  }
  ${MEDIA_QUERY.lg} {
    font-size: ${FONT.logo};
    margin-bottom: 35px;
    svg {
      margin: 0 10px;
      width: 35px;
      height: 35px;
    }
  }
`

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const InfoRow = styled.div`
  width: 320px;
  display: flex;
  font-size: ${FONT.s};
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid ${COLOR.beige};
  div:nth-child(1) {
    width: 40%;
  }
  div:nth-child(2) {
    width: 60%;
  }
  ${MEDIA_QUERY.lg} {
    width: 100%;
    margin-bottom: 20px;
    font-size: ${FONT.md};
  }
`
// const InfoDifficulty = styled(InfoLocation)``
// const InfoAltitude = styled(InfoLocation)``
// const InfoLength = styled(InfoLocation)``
// const InfoSeason = styled(InfoLocation)``
// const InfoFeature = styled(InfoLocation)``

function TrailInfo() {
  return (
    <InfoWrapper>
      <Title>
        <TitleIcon />
        步道資訊
      </Title>
      <InfoContainer>
        <InfoRow>
          <div>地點</div>
          <div>宜蘭縣南澳鄉</div>
        </InfoRow>
        <InfoRow>
          <div>難度</div>
          <div>入門</div>
        </InfoRow>
        <InfoRow>
          <div>海拔</div>
          <div>650 公尺</div>
        </InfoRow>
        <InfoRow>
          <div>步道長度</div>
          <div>4.1 公里</div>
        </InfoRow>
        <InfoRow>
          <div>最佳造訪季</div>
          <div>四季皆宜</div>
        </InfoRow>
        <InfoRow>
          <div>步道概況</div>
          <div>土徑步道、土木階梯</div>
        </InfoRow>
      </InfoContainer>
    </InfoWrapper>
  )
}

export default TrailInfo
