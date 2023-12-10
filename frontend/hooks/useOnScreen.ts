import { useEffect, useState, useRef, RefObject } from 'react'

export default function useOnScreen(ref: RefObject<HTMLElement>) {
  const observerRef = useRef<IntersectionObserver | null>(null)
  const [isOnScreen, setIsOnScreen] = useState(false)

  useEffect(() => {
    let options = {
      root: null,
      rootMargin: '-10px',
    }
    observerRef.current = new IntersectionObserver(
      ([entry]) => setIsOnScreen(entry.isIntersecting),
      options,
    )
  }, [])

  useEffect(() => {
    if (ref.current) observerRef?.current?.observe(ref.current)

    return () => {
      observerRef?.current?.disconnect()
    }
  }, [ref])
  return isOnScreen
}
