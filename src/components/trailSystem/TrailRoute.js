import React from 'react'
import styled from 'styled-components'
import { FONT, MEDIA_QUERY } from '../../constants/style.js'
import { ReactComponent as TitleIcon } from '../../icons/trails/trailRoute.svg'

const RouteWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  margin-bottom: 5px;
  svg {
    margin: 0 5px;
    width: 20px;
    height: 20px;
  }
  ${MEDIA_QUERY.lg} {
    font-size: ${FONT.logo};
    margin-bottom: 20px;
    svg {
      margin: 0 10px;
      width: 35px;
      height: 35px;
    }
  }
`

const RouteImg = styled.img`
  margin: 0 auto;
  width: 80%;
  max-width: 800px;
`

function TrailRoute({ routePic }) {
  return (
    <RouteWrapper>
      {routePic && (
        <Title>
          <TitleIcon />
          路線資訊
        </Title>
      )}

      <RouteImg src={routePic} />
    </RouteWrapper>
  )
}

export default TrailRoute
