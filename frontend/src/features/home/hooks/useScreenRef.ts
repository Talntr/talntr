'use client'
import { RefObject, useRef } from 'react'
import useOnScreen from './useOnScreen' // assuming this is your custom hook

const useScreenRef = (): [RefObject<HTMLDivElement>] => {
  const ref = useRef<HTMLDivElement>(null)
  const isOnScreen = useOnScreen(ref)

  const element = ref.current
  if (!element) return [ref]

  if (isOnScreen) {
    element.classList.remove('opacity-0')
    element.classList.remove('translate-y-[17rem]')
    element.classList.remove('scale-80')
    element.classList.add('opacity-1')
  } else {
    element.classList.add('opacity-0')
    element.classList.add('translate-y-[17rem]')
    element.classList.remove('opacity-1')
    element.classList.add('scale-80')
  }

  return [ref]
}

export default useScreenRef
