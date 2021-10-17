import { useEffect, useRef } from 'react'

const useDidMountEffect = (myFunc, dependencies) => {
  // when component not mounted
  const didMount = useRef(false)

  useEffect(() => {
    if (didMount.current) myFunc()
    else didMount.current = true
  }, dependencies)
}

export default useDidMountEffect
