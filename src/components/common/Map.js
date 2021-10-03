import styled from 'styled-components'
import GoogleMapReact from 'google-map-react'
import KEY from '../../key'
import React, { useState } from 'react'
import SearchBar from './SearchBar'
import LocationMarker from './LocationMarker'

const MapSearchBarWrapper = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 2;
`

const Map = (props) => {
  // const [myPosition, setMyPosition] = useState({
  //   lat: 24.8218635,
  //   lng: 121.7352169,
  // })
  const [mapApiLoaded, setMapApiLoaded] = useState(false)
  const [mapInstance, setMapInstance] = useState(null)
  const [mapApi, setMapApi] = useState(null)

  // GET 回來的步道資訊
  const trailInfos = [
    {
      trailId: 1,
      center: {
        lat: 24.8218635,
        lng: 121.7352169,
      },
      trailTitle: '測試步道 A',
      trailImageUrl: 'https://i.imgur.com/w2Y6y4z.jpg',
    },
    {
      trailId: 2,
      center: {
        lat: 24.3224766,
        lng: 120.9628113,
      },
      trailTitle: '測試步道 B',
      trailImageUrl: 'https://i.imgur.com/w2Y6y4z.jpg',
    },
    {
      trailId: 3,
      center: {
        lat: 23.5096881,
        lng: 120.7957005,
      },
      trailTitle: '測試步道 C',
      trailImageUrl: 'https://i.imgur.com/w2Y6y4z.jpg',
    },
  ]

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
      <MapSearchBarWrapper>
        <SearchBar placeholder='請輸入步道關鍵字...' />
      </MapSearchBarWrapper>
      <GoogleMapReact
        bootstrapURLKeys={{ key: KEY }}
        defaultCenter={props.center}
        defaultZoom={props.zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => apiHasLoaded(map, maps)}
        // onBoundsChange={handleCenterChange}
      >
        {trailInfos.map((trailInfo) => {
          return (
            <LocationMarker
              lat={trailInfo.center.lat}
              lng={trailInfo.center.lng}
              trailInfo={trailInfo}
            />
          )
        })}
      </GoogleMapReact>
    </div>
  )
}

// 演示用的步道，有較多心得、比較豐富的資訊可以呈現
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
