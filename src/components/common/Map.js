import styled from 'styled-components'
import GoogleMapReact from 'google-map-react'
import KEY from '../../key'
import React, { useState } from 'react'
import { COLOR, EFFECT, RADIUS } from '../../constants/style'
import { ReactComponent as SearchSvg } from '../../icons/search.svg'
import { ReactComponent as CloseSvg } from '../../icons/close.svg'
import { ReactComponent as PinSvg } from '../../icons/pin.svg'
import useToggle from '../../hooks/useToggle'

const Marker = styled(PinSvg)`
  width: 30px;
  height: 30px;
  transform: translate(-50%, -50%);
`
const InfoWindow = styled.div`
  width: 200px;
  height: 150px;
  position: relative;
  box-shadow: ${EFFECT.shadow_light};
  top: -175px;
  left: -105px;
  background-color: ${COLOR.white};
  border-radius: ${RADIUS.md};
  overflow: hidden;
  display: none;
  ${(props) =>
    props.$isOpen &&
    `
    display:block;
  `}
`
const TrailImg = styled.img`
  width: 200px;
  height: 100px;
`
const TrailName = styled.div`
  font-size: 18px;
  padding: 10px;
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
  const [isInfoWindowOpen, setInfoWindowToggleClick] = useToggle(false)

  const apiHasLoaded = (map, maps) => {
    console.log('載入完成!')
    setMapInstance(map)
    setMapApi(maps)
    setMapApiLoaded(true)
  }
  // 進階： 移動位置自動搜尋附近的步道
  // const handleCenterChange = () => {
  //   if (mapApiLoaded) {
  //     setMyPosition({
  //       lat: mapInstance.center.lat(),
  //       lng: mapInstance.center.lng(),
  //     })
  //   }
  // }

  return (
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
        // onBoundsChange={handleCenterChange}
      >
        <Marker
          lat={props.center.lat}
          lng={props.center.lng}
          onClick={setInfoWindowToggleClick}
        ></Marker>
        <InfoWindow
          lat={props.center.lat}
          lng={props.center.lng}
          $isOpen={isInfoWindowOpen}
        >
          <TrailImg src='https://i.imgur.com/w2Y6y4z.jpg' />
          <TrailName>林美石磐步道</TrailName>
        </InfoWindow>
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
/*
1. default: 顯示 demo 用「有較多文章」的步道，以他當作初始點，旁邊的文章列表也顯示
2. 當使用者搜尋：
  2.1 依據使用者輸入的關鍵字去後端拿資料
  2.2 將顯示地點改成拿到的資料當中的所有經緯度，並顯示出步道資料

states:
  - filteredTrails: [{
    'trail 1': {
      trail_id: 1,
      coordinate: {
        x: 24, y: 121.7
      }
      ...
    }
  }]
map trails marker and info window:
  - after getting response...
    - filteredTrails.map(trail => return <Map key={trail.trail_id} ><InfoWindow /></Map>)
*/
