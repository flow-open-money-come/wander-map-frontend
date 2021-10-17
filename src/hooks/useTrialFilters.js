import { useState } from 'react'
import { parameterMap } from '../constants/paramsMap'

export default function useTrailFilters() {
  const [checkedOptions, setCheckedOptions] = useState([])

  const handleFilterTrails = (e) => {
    if (!e.target.getAttribute('filter')) return
    let targetOptionType = e.target.getAttribute('filter')
    if (Object.keys(parameterMap[targetOptionType]).indexOf(e.target.name) < 0)
      return
    let targetOption = parameterMap[targetOptionType][e.target.name]
    if (checkedOptions.indexOf(targetOption) >= 0) {
      return setCheckedOptions(
        checkedOptions.filter((option) => option !== targetOption)
      )
    }

    setCheckedOptions([...checkedOptions, targetOption])
  }

  return {
    checkedOptions,
    handleFilterTrails,
  }
}
