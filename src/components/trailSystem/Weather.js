import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { COLOR, FONT, RADIUS, MEDIA_QUERY } from '../../constants/style.js'
import { ReactComponent as TitleIcon } from '../../icons/trails/trailWeather.svg'
import { ReactComponent as TemperatureIcon } from '../../icons/weather/weather-Temperature.svg'
import { ReactComponent as PopIcon } from '../../icons/weather/weather-RainProbability.svg'
import WeatherIcon from './WeatherIcon.js'
import { locationNameToCode } from './weatherUtils.js'
import { getWeatherInfo } from '../../WebAPI.js'

const WeatherWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
  ${MEDIA_QUERY.lg} {
    width: 55%;
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

const CardContainer = styled.div`
  display: flex;
  overflow: auto;
  ${MEDIA_QUERY.lg} {
    margin-top: 40px;
  }
`

const Card = styled.div`
  min-width: 30%;
  height: 30%;
  background: ${COLOR.white};
  border-radius: ${RADIUS.lg};
  padding: 5px 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 0 4px;
  ${MEDIA_QUERY.md} {
    min-width: 30%;
    height: 30%;
  }
  ${MEDIA_QUERY.lg} {
    padding: 15px 15px;
    margin: 0 10px;
    min-width: 210px;
    min-height: 210px;
  }
`

const Date = styled.div`
  font-size: ${FONT.s};
  display: flex;
  justify-content: center;
  align-items: center;
  ${MEDIA_QUERY.md} {
    margin-bottom: 3px;
  }
  ${MEDIA_QUERY.lg} {
    font-size: ${FONT.md};
  }
`

const WeatherInfo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const Temperature = styled.div`
  font-size: ${FONT.xs};
  display: flex;
  align-items: center;
  svg {
    width: 12px;
    height: 12px;
  }
  ${MEDIA_QUERY.md} {
    font-size: ${FONT.s};
    margin: 0 5px;
    svg {
      width: 15px;
      height: 15px;
    }
  }
  ${MEDIA_QUERY.lg} {
    font-size: ${FONT.md};
    -webkit-transform: scale(1);
    margin: 0 5px;
    svg {
      width: 25px;
      height: 25px;
    }
  }
`

const RainProbability = styled(Temperature)``

const Weather = ({ location }) => {
  const position = location || '宜蘭縣礁溪鄉'
  const country = position.slice(0, 3)
  const town = position.slice(3, position.length)
  const countryCode = locationNameToCode(country)

  const [weatherElement, setWeatherElement] = useState({
    temperature: 0,
    weatherCode: 0,
    rainPossibility: 0
  })

  const weatherDate = (i) => {
    let dateTime = new window.Date()
    dateTime = dateTime.setDate(dateTime.getDate() + i)
    return new Intl.DateTimeFormat('zh-TW', {
      month: 'numeric',
      day: 'numeric',
      weekday: 'long'
    }).format(new window.Date(dateTime))
  }
  
  useEffect(() => {
    getWeatherInfo(countryCode, town)
    .then((res) => {
      const locationData = res.data.records.locations[0].location[0]
      const weatherInfo = []
      for (let i = 0; i < 14; i += 2) {
        const weatherElements = locationData.weatherElement.reduce((neededElements, item) => {
          neededElements[item.elementName] = item.time[i].elementValue[0].value
          neededElements['weatherCode'] =
            locationData.weatherElement[2].time[i].elementValue[1].value
          return neededElements
        }, {})
        weatherInfo.push(weatherElements)
      }

      let [weekTemperature, weekWeatherCode, weekRainPossibility] = [[], [], []]

      for (let day = 0; day < 7; day++) {
        weekTemperature.push(weatherInfo[day].T)
        weekWeatherCode.push(weatherInfo[day].weatherCode)
        weekRainPossibility.push(weatherInfo[day].PoP12h)
      }
      setWeatherElement({
        temperature: weekTemperature,
        weatherCode: weekWeatherCode,
        rainPossibility: weekRainPossibility
      })
    })
  }, [country, town])

  const dayLoop = [0, 1, 2, 3, 4, 5, 6]

  return (
    <WeatherWrapper>
      <Title>
        <TitleIcon />
        近期天氣
      </Title>
      <CardContainer>
        {dayLoop.map((day) => (
          <Card key={day}>
            <Date>{weatherDate(day)}</Date>
            <WeatherIcon currentWeatherCode={weatherElement.weatherCode[day]} />
            <WeatherInfo>
              <Temperature>
                <TemperatureIcon />
                {Math.round(weatherElement.temperature[day])}℃
              </Temperature>
              <RainProbability>
                <PopIcon />
                {Math.round(weatherElement.rainPossibility[day])}%
              </RainProbability>
            </WeatherInfo>
          </Card>
        ))}
      </CardContainer>
    </WeatherWrapper>
  )
}

export default Weather
