import React from 'react'
import styled from 'styled-components'
import { FONT, RADIUS, MEDIA_QUERY } from '../../constants/style.js'
import { ReactComponent as TitleIcon } from '../../icons/trails/trailMap.svg'
import GoogleMapReact from 'google-map-react'



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
    font-size: ${FONT.logo};
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

function TrailMap(props) {
  return (
    <MapWrapper>
      <Title>
        <TitleIcon />
        步道位置
      </Title>
      <MapContainer>
        <div
          style={{
            height: '100%',
            width: '100%',
            position: 'relative'
          }}
        >
          <GoogleMapReact
            bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_KEY }}
            defaultCenter={props.center}
            defaultZoom={props.zoom}
            yesIWantToUseGoogleMapApiInternals
            // onGoogleApiLoaded={({ map, maps }) => apiHasLoaded(map, maps)}
            // onBoundsChange={handleCenterChange}
          ></GoogleMapReact>
        </div>
      </MapContainer>
    </MapWrapper>
  )
}

Map.defaultProps = {
  center: {
    lat: 24.8218635,
    lng: 121.7352169
  },
  zoom: 17
}

export default TrailMap
