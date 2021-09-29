import React from 'react'
import styled from 'styled-components'
import { COLOR, FONT, EFFECT, RADIUS } from '../../constants/style.js'
import { ReactComponent as TitleIcon } from '../../icons/trails/trailMap.svg'


const MEDIA_QUERY_MD = '@media screen and (min-width: 768px)'
const MEDIA_QUERY_LG = '@media screen and (min-width: 1280px)'

const line = `outline: 1px red solid`

const MapWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
  ${MEDIA_QUERY_LG} {
    margin-bottom: 65px;
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

const MapContainer = styled.div`
  width: 100%;
  height: 130px;
  background: #f4f5f4;
  border-radius: ${RADIUS.lg};
  ${MEDIA_QUERY_LG} {
    height: 410px;
  }
`


function TrailMap() {
  return (
    <MapWrapper>
      <Title>
        <TitleIcon />
        步道位置
      </Title>
      <MapContainer></MapContainer>
    </MapWrapper>
  )
}

export default TrailMap
