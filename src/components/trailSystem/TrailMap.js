import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { FONT, RADIUS, MEDIA_QUERY } from '../../constants/style.js'
import { ReactComponent as TitleIcon } from '../../icons/trails/trailMap.svg'
import { ReactComponent as PinSvg } from '../../icons/pin.svg'
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

const Marker = styled(PinSvg)`
  width: 30px;
  height: 30px;
  transform: translate(-50%, -50%);
`


function TrailMap({ coordinate }) {

  const [mapCenter, setMapCenter] = useState({})
  const Center = {
    lat: 24.42360428661788,
    lng: 121.70835976400171
  }

  useEffect(() => {
    setMapCenter({
      lat: coordinate.y,
      lng: coordinate.x
    })
    
  }, [coordinate])

  return (
    <MapWrapper>
      <Title>
        <TitleIcon />
        步道位置
      </Title>
      <MapContainer>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_KEY }}
          defaultCenter={Center}
          center={mapCenter}
          defaultZoom={15}
          yesIWantToUseGoogleMapApiInternals
        >
          <Marker lat={mapCenter.lat} lng={mapCenter.lng} />
        </GoogleMapReact>
      </MapContainer>
    </MapWrapper>
  )
}

export default TrailMap