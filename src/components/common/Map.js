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
import SmallRegionLoading from './SmallRegionLoading'
import swal from 'sweetalert'

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
  const [isLoadingMap, setIsLoadingMap] = useState(false)
  const [zoom, setZoom] = useState(12)

  useEffect(() => {
    if (debouncedKeyWord) {
      setIsLoadingMap(true)
      getTrails(`?limit=126&search=${debouncedKeyWord}`)
        .then((res) => {
          if (res.data.success) {
            if (res.data.data.length === 0) {
              setIsLoadingMap(false)
              swal('查無步道！', '換個關鍵字試試看吧～')
              return
            }
            setMatchTrailInfos(res.data.data)
            setIsLoadingMap(false)
            setZoom(7)
          }
        })
        .catch(() => {
          swal('Oh 不！', '請求失敗！請稍候再試一次，或者聯繫我們。', 'error')
          setIsLoadingMap(false)
        })
    }
  }, [debouncedKeyWord, setIsLoadingMap])

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
          withoutSearchIcon
        />
      </MapSearchBarWrapper>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_KEY }}
        defaultCenter={props.info.coordinate}
        defaultZoom={zoom}
        yesIWantToUseGoogleMapApiInternals
        center={activeTrailArticles.activeTrailInfo.center}
        zoom={zoom}
      >
        {isLoadingMap && <SmallRegionLoading isLocal />}
        {matchTrailInfos.length > 0 ? (
          matchTrailInfos.map((trailInfo) => {
            let trailConditionName = Object.keys(trailConditions)
            let currentTrailName = trailInfo.title
            let trailConditionTag =
              trailConditionName.indexOf(currentTrailName) < 0
                ? '全線開放'
                : trailConditions[currentTrailName][0]
            return (
              <LocationMarker
                key={trailInfo.trail_id}
                lat={trailInfo.coordinate.y}
                lng={trailInfo.coordinate.x}
                trailInfo={trailInfo}
                trailConditionTag={trailConditionTag}
                setIsLoadingMap={setIsLoadingMap}
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
              Object.keys(trailConditions).indexOf('蘇花古道：大南澳越嶺段') > 0
                ? trailConditions['蘇花古道：大南澳越嶺段']
                : '全線開放'
            }
          />
        )}
      </GoogleMapReact>
    </div>
  )
}

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
}

export default Map
