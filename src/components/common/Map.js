import styled from 'styled-components'
import GoogleMapReact from 'google-map-react'
import KEY from '../../key'
import React, { useState } from 'react'
import { COLOR, EFFECT, RADIUS } from '../../constants/style'
import { ReactComponent as SearchSvg } from '../../icons/search.svg'
import { ReactComponent as CloseSvg } from '../../icons/close.svg'

const AnyReactComponent = styled.div`
  font-size: 12px;
  min-width: 100px;
`

const SearchIcon = styled(SearchSvg)`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const SearchIconWrapper = styled.div`
  width: 15%;
  height: 42px;
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 0 ${RADIUS.md} ${RADIUS.md} 0;
  box-shadow: ${EFFECT.shadow_light};
  position: relative;
  transition: ${EFFECT.transition};
`

const SearchBar = styled.div`
  width: 70%;
  z-index: 1;
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  align-items: center;
`
const CloseIcon = styled(CloseSvg)`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`
const CloseIconWrapper = styled.div`
  width: 15%;
  height: 42px;
  background-color: rgba(255, 255, 255, 0.4);
  box-shadow: ${EFFECT.shadow_light};
  position: relative;
  transition: ${EFFECT.transition};
`
const MapSearchBar = styled.input`
  width: 80%;
  height: 30px;
  background-color: rgba(255, 255, 255, 0.4);
  outline: none;
  border: 1px solid ${COLOR.white};
  border-radius: ${RADIUS.md} 0 0 ${RADIUS.md};
  padding: 20px;
  box-shadow: ${EFFECT.shadow_light};
  transition: ${EFFECT.transition};
  &:focus ~ ${SearchIconWrapper}, &:focus ~ ${CloseIconWrapper} {
    background-color: white;
  }
  &:focus {
    background-color: white;
  }
`
const Map = (props) => {
  const [myPosition, setMyPosition] = useState({
    lat: 24.8218635,
    lng: 121.7352169,
  })
  const [mapApiLoaded, setMapApiLoaded] = useState(false)
  const [mapInstance, setMapInstance] = useState(null)
  const [mapApi, setMapApi] = useState(null)

  // 當地圖載入完成，將地圖實體與地圖 API 傳入 state 供之後使用
  const apiHasLoaded = (map, maps) => {
    console.log('載入完成!')
    setMapInstance(map)
    setMapApi(maps)
    setMapApiLoaded(true)
  }

  const handleCenterChange = () => {
    if (mapApiLoaded) {
      setMyPosition({
        // center.lat() 與 center.lng() 會回傳正中心的經緯度
        lat: mapInstance.center.lat(),
        lng: mapInstance.center.lng(),
      })
    }
  }

  return (
    // Important! Always set the container height explicitly
    <div
      style={{
        height: '100%',
        width: '100%',
        position: 'relative',
      }}
    >
      <SearchBar>
        <MapSearchBar placeholder='請輸入步道關鍵字...' />
        <CloseIconWrapper>
          <CloseIcon />
        </CloseIconWrapper>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
      </SearchBar>
      <GoogleMapReact
        bootstrapURLKeys={{ key: KEY }}
        defaultCenter={props.center}
        defaultZoom={props.zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => apiHasLoaded(map, maps)}
        onBoundsChange={handleCenterChange}
      >
        <AnyReactComponent lat={myPosition.lat} lng={myPosition.lng}>
          當前位置
        </AnyReactComponent>
      </GoogleMapReact>
    </div>
  )
}

Map.defaultProps = {
  center: {
    lat: 24.8218635,
    lng: 121.7352169,
  },
  zoom: 17,
}

export default Map
