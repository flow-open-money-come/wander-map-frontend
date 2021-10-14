import { useInput } from './useInput'
import { getTrails } from '../WebAPI'
import { useState, useRef } from 'react/cjs/react.development'

export default function useSearch() {
  const [matchTrailInfos, setMatchTrailInfos] = useState([])
  const onSearch = useRef(false)

  const {
    inputValue: keyWord,
    setInputValue: setKeyWord,
    handleInputChange: handleKeyWordChange,
  } = useInput()

  const handleSearchTrails = () => {
    onSearch.current = true
    if (keyWord) {
      getTrails(`?limit=126&search=${keyWord}`)
        .then((res) => {
          if (res.data.success) setMatchTrailInfos(res.data.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
  const handleKeyWordDelete = () => {
    setKeyWord('')
  }
  return {
    keyWord,
    matchTrailInfos,
    handleSearchTrails,
    handleKeyWordChange,
    handleKeyWordDelete,
    onSearch,
  }
}
