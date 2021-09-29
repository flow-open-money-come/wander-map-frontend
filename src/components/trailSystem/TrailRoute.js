import React from 'react'
import styled from 'styled-components'
import { COLOR, FONT, EFFECT, RADIUS } from '../../constants/style.js'
import { ReactComponent as TitleIcon } from '../../icons/trails/trailRoute.svg'


const MEDIA_QUERY_MD = '@media screen and (min-width: 768px)'
const MEDIA_QUERY_LG = '@media screen and (min-width: 1280px)'

const line = `outline: 1px red solid`

const RouteWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  margin-bottom: 5px;
  svg {
    margin: 0 5px;
    width: 15px;
    height: 15px;
  }
  ${MEDIA_QUERY_LG} {
    font-size: 36px;
    margin-bottom: 20px;
    svg {
      margin: 0 10px;
      width: 40px;
      height: 40px;
    }
  }
`

const RouteImg = styled.img`
  width: 100%;
  max-width: 800px;
`


function TrailRoute() {
  return (
    <RouteWrapper>
      <Title>
        <TitleIcon />
        路線資訊
      </Title>
      <a href='https://recreation.forest.gov.tw/Files/RT/Photo/001/01/001_MAP201902152.jpg'>
        <RouteImg src='https://recreation.forest.gov.tw/Files/RT/Photo/001/01/001_MAP201902152.jpg' />
      </a>
    </RouteWrapper>
  )
}

export default TrailRoute
