import styled from 'styled-components'
import GoogleMapReact from 'google-map-react'
import React, { useState, useEffect, useContext } from 'react'
import SearchBar from './SearchBar'
import LocationMarker from './LocationMarker'
import useSearch from '../../hooks/useSearch'
import { ActiveTrailContext } from '../../context'
import { getTrails } from '../../WebAPI'
import useDebounce from '../../hooks/useDebounce'
import useTrailConditions from '../../hooks/useTrailConditions'

const MapSearchBarWrapper = styled.div`
  width: 80%;
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 1;
`

const Map = (props) => {
  const { keyWord, handleKeyWordChange, handleKeyWordDelete } = useSearch()
  const debouncedKeyWord = useDebounce(keyWord, 1000)
  const [matchTrailInfos, setMatchTrailInfos] = useState([])
  const { activeTrailArticles } = useContext(ActiveTrailContext)
  const { trailConditions } = useTrailConditions()

  const handleSearchTrails = (debouncedKeyWord) => {
    if (debouncedKeyWord) {
      getTrails(`?limit=126&search=${debouncedKeyWord}`)
        .then((res) => {
          if (res.data.success) setMatchTrailInfos(res.data.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  useEffect(() => {
    handleSearchTrails(debouncedKeyWord)
  }, [debouncedKeyWord])

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
          handleKeyWordDelete={handleKeyWordDelete}
          inputValue={keyWord}
          width='100%'
        />
      </MapSearchBarWrapper>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_KEY }}
        defaultCenter={props.info.coordinate}
        defaultZoom={props.zoom}
        yesIWantToUseGoogleMapApiInternals
        center={activeTrailArticles.activeTrailInfo.center}
      >
        {matchTrailInfos.length > 0 ? (
          matchTrailInfos.map((trailInfo) => {
            let trailConditionsObj = Object.assign({}, ...trailConditions)
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
            lat={props.info.coordinate.y}
            lng={props.info.coordinate.x}
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
  info: {
    trail_id: 1,
    title: '蘇花古道：大南澳越嶺段',
    location: '宜蘭縣南澳鄉',
    cover_picture_url:
      'https://recreation.forest.gov.tw/Files/RT/Photo/001/05/001.jpg',
    coordinate: {
      y: 24.482340609862774,
      x: 121.83785521632522,
    },
  },
  zoom: 12,
}

export default Map
