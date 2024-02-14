'use client'

import useScreenRef from '@/src/features/home/hooks/useScreenRef'

export default function Banner() {
  const [bannerText] = useScreenRef()
  ///test
  return (
    <div ref={bannerText} className=" duration-1000 ease-in-out opacity-0 mb-5">
      <span className="text-3xl">Talntr - Where Skills Meet Opportunity</span>
    </div>
  )
}
