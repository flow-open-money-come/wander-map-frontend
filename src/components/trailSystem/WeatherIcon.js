import React, { useState, useEffect, useMemo } from 'react'
import styled from 'styled-components'
import { MEDIA_QUERY } from '../../constants/style'
import { ReactComponent as Thunderstorm } from '../../icons/weather/thunderstorm.svg'
import { ReactComponent as Clear } from '../../icons/weather/clear.svg'
import { ReactComponent as CloudyFog } from '../../icons/weather/cloudy-fog.svg'
import { ReactComponent as Cloudy } from '../../icons/weather/cloudy.svg'
import { ReactComponent as Fog } from '../../icons/weather/fog.svg'
import { ReactComponent as PartiallyClearWithRain } from '../../icons/weather/partially-clear-with-rain.svg'
import { ReactComponent as Snowing } from '../../icons/weather/snowing.svg'



const IconContainer = styled.div`
  margin-top: 1px;
  svg {
    width: 80px;
    height: 70px;
  }
  ${MEDIA_QUERY.md} {
    svg {
      width: 100px;
      height: 100px;
    }
  }
  ${MEDIA_QUERY.lg} {
    svg {
      width: 140px;
      height: 140px;
    }
  }
`

const weatherTypes = {
  isThunderstorm: [15, 16, 17, 18, 21, 22, 33, 34, 35, 36, 41],
  isClear: [1],
  isCloudyFog: [25, 26, 27, 28],
  isCloudy: [2, 3, 4, 5, 6, 7],
  isFog: [24],
  isPartiallyClearWithRain: [8, 9, 10, 11, 12, 13, 14, 19, 20, 29, 30, 31, 32, 38, 39],
  isSnowing: [23, 37, 42]
}

const weatherIcons = {
  isThunderstorm: <Thunderstorm />,
  isClear: <Clear />,
  isCloudyFog: <CloudyFog />,
  isCloudy: <Cloudy />,
  isFog: <Fog />,
  isPartiallyClearWithRain: <PartiallyClearWithRain />,
  isSnowing: <Snowing />
}


const weatherCode2Type = (weatherCode) => {
  const [weatherType] =
    Object.entries(weatherTypes).find(([weatherType, weatherCodes]) =>
      weatherCodes.includes(Number(weatherCode))
    ) || []
  return weatherType
}



const WeatherIcon = ({ currentWeatherCode }) => {
  const [currentWeatherIcon, setCurrentWeatherIcon] = useState('isClear')

  const theWeatherIcon = useMemo(() => {
    return weatherCode2Type(currentWeatherCode)
  }, [currentWeatherCode])

  useEffect(() => {
    setCurrentWeatherIcon(theWeatherIcon)
  }, [theWeatherIcon])

  return (
    <IconContainer>
      {weatherIcons[currentWeatherIcon]}
    </IconContainer>
  )
}

export default WeatherIcon