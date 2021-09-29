import React from 'react'
import styled from 'styled-components'
import { COLOR, FONT, RADIUS, MEDIA_QUERY } from '../../constants/style.js'
import { ReactComponent as TitleIcon } from '../../icons/trails/trailMap.svg'


const line = `outline: 1px red solid`

const MapWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  ${MEDIA_QUERY.lg} {
    margin-bottom: 65px;
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
    font-size: 34px;
    margin-bottom: 35px;
    svg {
      margin: 0 10px;
      width: 35px;
      height: 35px;
    }
  }
`

const MapContainer = styled.div`
  width: 100%;
  height: 130px;
  background: #f4f5f4;
  border-radius: ${RADIUS.lg};
  ${MEDIA_QUERY.lg} {
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
