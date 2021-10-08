import React from 'react'
import styled from 'styled-components'
import { COLOR, FONT, RADIUS, MEDIA_QUERY } from '../../constants/style.js'
import { ReactComponent as TitleIcon } from '../../icons/trails/trailWeather.svg'
import { ReactComponent as TemperatureIcon } from '../../icons/weather/weather-Temperature.svg'
import { ReactComponent as PopIcon } from '../../icons/weather/weather-RainProbability.svg'
import { ReactComponent as CloudyIcon } from '../../icons/weather/weather-Cloudy.svg'

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

const WeatherIcon = styled.div`
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

function Weather() {
  return (
    <WeatherWrapper>
      <Title>
        <TitleIcon />
        近期天氣
      </Title>
      <CardContainer>
        <Card>
          <Date>9/7 星期一</Date>
          <WeatherIcon>
            <CloudyIcon />
          </WeatherIcon>
          <WeatherInfo>
            <Temperature>
              <TemperatureIcon />
              30℃
            </Temperature>
            <RainProbability>
              <PopIcon />
              10%
            </RainProbability>
          </WeatherInfo>
        </Card>

        <Card>
          <Date>9/7 星期二</Date>
          <WeatherIcon>
            <CloudyIcon />
          </WeatherIcon>
          <WeatherInfo>
            <Temperature>
              <TemperatureIcon />
              30℃
            </Temperature>
            <RainProbability>
              <PopIcon />
              10%
            </RainProbability>
          </WeatherInfo>
        </Card>

        <Card>
          <Date>9/7 星期三</Date>
          <WeatherIcon>
            <CloudyIcon />
          </WeatherIcon>
          <WeatherInfo>
            <Temperature>
              <TemperatureIcon />
              30℃
            </Temperature>
            <RainProbability>
              <PopIcon />
              10%
            </RainProbability>
          </WeatherInfo>
        </Card>

        <Card>
          <Date>9/7 星期四</Date>
          <WeatherIcon>
            <CloudyIcon />
          </WeatherIcon>
          <WeatherInfo>
            <Temperature>
              <TemperatureIcon />
              30℃
            </Temperature>
            <RainProbability>
              <PopIcon />
              10%
            </RainProbability>
          </WeatherInfo>
        </Card>

        <Card>
          <Date>9/7 星期五</Date>
          <WeatherIcon>
            <CloudyIcon />
          </WeatherIcon>
          <WeatherInfo>
            <Temperature>
              <TemperatureIcon />
              30℃
            </Temperature>
            <RainProbability>
              <PopIcon />
              10%
            </RainProbability>
          </WeatherInfo>
        </Card>
      </CardContainer>
    </WeatherWrapper>
  )
}

export default Weather
