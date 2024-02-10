'use client'
import { Image } from '@nextui-org/image'
import useScreenRef from '@/src/features/home/hooks/useScreenRef'

export default function BannerImage() {
  const [bannerImage] = useScreenRef()

  return (
    <div
      ref={bannerImage}
      className="grid grid-col-2 justify-center place-items-center delay-1000 duration-1000 ease-in-out opacity-0"
    >
      <Image src="https://placehold.co/600x400" alt="banner image" />
    </div>
  )
}
