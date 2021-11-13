import { useInput } from './useInput'
import { useCallback } from 'react'

export default function useSearch() {
  const {
    inputValue: keyWord,
    setInputValue: setKeyWord,
    handleInputChange: handleKeyWordChange,
  } = useInput()
  const handleKeyWordDelete = useCallback(() => {
    setKeyWord('')
  }, [setKeyWord])

  return {
    keyWord,
    handleKeyWordChange,
    handleKeyWordDelete,
  }
}
