import styled from 'styled-components'
import GoogleMapReact from 'google-map-react'
import React, { useState, useEffect } from 'react'
import SearchBar from './SearchBar'
import LocationMarker from './LocationMarker'
import { getTrails, getTrailsCondition } from '../../WebAPI'

const MapSearchBarWrapper = styled.div`
  width: 100%;
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 2;
`

const Map = (props) => {
  const [trailInfos, setTrailInfos] = useState([])

  const apiHasLoaded = (map, maps) => {
    console.log('載入完成!')
  }

  useEffect(() => {
    getTrails('?limit=126')
      .then((res) => {
        if (res.data.success) setTrailInfos(res.data.data)
      })
      .catch((err) => console.log(err))
  }, [])

  const [trailConditions, setTrailConditions] = useState({})
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
        <SearchBar placeholder='請輸入步道關鍵字...' />
      </MapSearchBarWrapper>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_KEY }}
        defaultCenter={props.center}
        defaultZoom={props.zoom}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map, maps }) => apiHasLoaded(map, maps)}
      >
        {trailInfos.map((trailInfo) => {
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
