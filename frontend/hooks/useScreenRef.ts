import { RefObject, useRef } from 'react'
import useOnScreen from './useOnScreen' // assuming this is your custom hook

const useScreenRef = (): [RefObject<HTMLDivElement>, Boolean] => {
  const ref = useRef<HTMLDivElement>(null)
  const isOnScreen = useOnScreen(ref)

  return [ref, isOnScreen]
}

export default useScreenRef
