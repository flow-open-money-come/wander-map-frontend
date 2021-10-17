import { useState } from 'react'

export function useInput() {
  const [inputValue, setInputValue] = useState('')
  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }
  return {
    inputValue,
    setInputValue,
    handleInputChange,
  }
}
