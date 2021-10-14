import styled from 'styled-components'
import GoogleMapReact from 'google-map-react'
import React, { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import LocationMarker from './LocationMarker'
import { getTrailsCondition } from '../../WebAPI'
import useSearch from '../../hooks/useSearch'

const MapSearchBarWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 2;
`

const Map = (props) => {
  const {
    keyWord,
    matchTrailInfos,
    handleSearchTrails,
    handleKeyWordChange,
    handleKeyWordDelete,
  } = useSearch()

  const apiHasLoaded = (map, maps) => {
    console.log('載入完成!')
  }

  const [trailConditions, setTrailConditions] = useState([{}])
  useEffect(() => {
    getTrailsCondition()
      .then((res) => {
        setTrailConditions(
          res.data.map((data) => {
            return {
              [parseInt(data.TRAILID)]: data.TR_TYP,
            }
          })
        )
      })
      .catch((err) => {
        console.log(err.response)
      })
  }, [])

  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        position: 'relative',
      }}
    >
      <MapSearchBarWrapper>
        <SearchBar
          placeholder='請輸入步道關鍵字...'
          handleKeyWordChange={(e) => handleKeyWordChange(e)}
          handleSearchTrails={handleSearchTrails}
          handleKeyWordDelete={handleKeyWordDelete}
          inputValue={keyWord}
        />
      </MapSearchBarWrapper>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_KEY }}
        defaultCenter={props.center}
        defaultZoom={props.zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => apiHasLoaded(map, maps)}
      >
        {matchTrailInfos.length > 0 ? (
          matchTrailInfos.map((trailInfo) => {
            // obj arr to single obj
            let trailConditionsObj = Object.assign({}, ...trailConditions)
            // Obj.keys() force id to be string, need to convert again
            let trailConditionId = Object.keys(trailConditionsObj).map((id) =>
              parseInt(id)
            )
            let currentId = trailInfo.trail_id
            let trailConditionTag =
              trailConditionId.indexOf(currentId) < 0
                ? '全線開放'
                : trailConditionsObj[currentId]
            return (
              <LocationMarker
                key={trailInfo.trail_id}
                lat={trailInfo.coordinate.y}
                lng={trailInfo.coordinate.x}
                trailInfo={trailInfo}
                trailConditionTag={trailConditionTag}
              />
            )
          })
        ) : (
          <LocationMarker
            key={1}
            lat={props.center.lat}
            lng={props.center.lng}
            trailInfo={props.info}
            trailConditionTag={
              Object.keys(trailConditions).indexOf(1) > 0
                ? trailConditions[0][1]
                : '全線開放'
            }
          />
        )}
      </GoogleMapReact>
    </div>
  )
}

// 演示用的步道，有較多心得、比較豐富的資訊可以呈現
Map.defaultProps = {
  center: {
    lat: 24.482340609862774,
    lng: 121.83785521632522,
  },
  info: {
    title: '蘇花古道：大南澳越嶺段',
    cover_picture_url:
      'https://recreation.forest.gov.tw/Files/RT/Photo/001/05/001.jpg',
  },
  zoom: 17,
}

export default Map
