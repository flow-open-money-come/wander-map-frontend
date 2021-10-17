import { useRef, useState } from 'react'

// handle load more trials
export default function useLoadMore() {
  const [numberOfDisplay, setNumberOfDisplay] = useState(20)
  let numberOfClick = useRef(0)

  const handleLoadMore = () => {
    numberOfClick.current++
    setNumberOfDisplay(numberOfDisplay + numberOfClick.current * 10)
  }

  return {
    numberOfDisplay,
    handleLoadMore,
  }
}
