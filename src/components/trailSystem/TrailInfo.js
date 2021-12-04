import React from 'react'
import styled from 'styled-components'
import { COLOR, FONT, MEDIA_QUERY, RADIUS } from '../../constants/style.js'
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

const ConditionWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 10px;
  padding-bottom: 10px;
  margin: 0 auto;
  ${MEDIA_QUERY.md} {
    width: 320px;
    margin-bottom: 15px;
  }
  ${MEDIA_QUERY.lg} {
    width: 100%;
    margin-bottom: 20px;
    flex-direction: row;
  }
`

const Condition = styled.div`
  font-size: ${FONT.xs};
  width: 80px;
  padding: 5px;
  margin-bottom: 5px;
  text-align: center;
  border-radius: ${RADIUS.s};
  color: ${COLOR.white};
  background-color: ${COLOR.green};
  ${(props) => props.$trailConditionTag === '部分封閉' && `background-color: ${COLOR.blue};`}
  ${(props) => props.$trailConditionTag === '暫停開放' && `background-color: ${COLOR.pink};`}
  ${(props) => props.$trailConditionTag === '注意' && `background-color: ${COLOR.yellow};`}
  ${MEDIA_QUERY.lg} {
    font-size: ${FONT.s};
    min-width: 100px;
    margin-right: 5px;
  }
`

const ConditionDesc = styled.div`
  font-size: ${FONT.xs};
  line-height: 1.2;
  text-align: justify;
  ${MEDIA_QUERY.lg} {
    font-size: ${FONT.s};
  }
`

function TrailInfo({ trailInfo, condition }) {
  return (
    <InfoWrapper>
      <Title>
        <TitleIcon />
        步道資訊
      </Title>
      {condition && (
        <ConditionWrapper>
          <Condition $trailConditionTag={condition[0]}>{condition[0]}</Condition>
          <ConditionDesc>{condition[1]}</ConditionDesc>
        </ConditionWrapper>
      )}
      <InfoContainer>
        <InfoRow>
          <div>地點</div>
          <div>{trailInfo && trailInfo.location}</div>
        </InfoRow>
        <InfoRow>
          <div>難度</div>
          <div>{trailInfo && trailInfo.difficulty}</div>
        </InfoRow>
        <InfoRow>
          <div>海拔</div>
          <div>{trailInfo && trailInfo.altitude} 公尺</div>
        </InfoRow>
        <InfoRow>
          <div>步道長度</div>
          <div>{trailInfo && trailInfo.length} 公里</div>
        </InfoRow>
        <InfoRow>
          <div>最佳造訪季</div>
          <div>{trailInfo && trailInfo.season}</div>
        </InfoRow>
        <InfoRow>
          <div>步道概況</div>
          <div>{trailInfo && trailInfo.situation}</div>
        </InfoRow>
      </InfoContainer>
    </InfoWrapper>
  )
}

export default TrailInfo
