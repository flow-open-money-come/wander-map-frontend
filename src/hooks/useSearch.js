import { useInput } from './useInput'

export default function useSearch() {
  const {
    inputValue: keyWord,
    setInputValue: setKeyWord,
    handleInputChange: handleKeyWordChange,
  } = useInput()
  const handleKeyWordDelete = () => {
    setKeyWord('')
  }
  return {
    keyWord,
    handleKeyWordChange,
    handleKeyWordDelete,
  }
}
