import { useState } from 'react'
import styled from 'styled-components'
import { FONT, MEDIA_QUERY } from '../../constants/style'
import countriesData from './LocationData'

const SelectGroup = styled.div`
  width: 320px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${MEDIA_QUERY.lg} {
    width: 500px;
  }
`

const Select = styled.select`
  height: 25px;
  width: 150px;
  text-align: center;
  ${MEDIA_QUERY.lg} {
    height: 30px;
    width: 230px;
    font-size: ${FONT.md};
  }
`

export default function SelectLocation({ name, newDatas, setNewDatas }) {
  const [location, setLocation] = useState({
    country: '',
    state: '',
  })

  const countries = countriesData.map((country) => (
    <option key={country.name} value={country.name}>
      {country.name}
    </option>
  ))

  const states = countriesData
    .find((item) => item.name === location.country)
    ?.states.map((state) => (
      <option key={state} value={state}>
        {state}
      </option>
    ))

  const handleCountryChange = (e) => {
    setLocation({
      state: '',
      country: e.target.value,
    })
  }

  const handleStateChange = (e) => {
    setLocation({
      ...location,
      state: e.target.value,
    })

    setNewDatas({
      ...newDatas,
      [name]: location.country + e.target.value,
    })
  }

  return (
    <SelectGroup>
      <Select value={location.country} onChange={handleCountryChange}>
        {countries}
      </Select>
      <Select value={location.state} onChange={handleStateChange}>
        {states}
      </Select>
    </SelectGroup>
  )
}
