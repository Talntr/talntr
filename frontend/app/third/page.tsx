'use client'
import { Button } from '@nextui-org/button'
import { RefObject } from 'react'
import useScreenRef from '@/hooks/useScreenRef'
import { Divider } from '@nextui-org/divider'
import { Image } from '@nextui-org/image'
import Carousel from '@/components/carousel'

const updateClassList = (
  ref: RefObject<HTMLDivElement>,
  isVisible: Boolean,
) => {
  const element = ref.current
  if (!element) return

  if (isVisible) {
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
}

const fadeInOut = (ref: RefObject<HTMLDivElement>, isVisible: Boolean) => {
  const element = ref.current
  if (!element) return

  if (isVisible) {
    element.classList.remove('opacity-0')
  } else {
    element.classList.add('opacity-0')
    element.classList.remove('opacity-1')
  }
}

export default function Home() {
  const [bannerText, isOnScreenBannerText] = useScreenRef()
  const [joinWaitingListButton, isOnScreenJoinWaitingListButton] =
    useScreenRef()
  const [bannerImage, isOnScreenBannerImage] = useScreenRef()
  const [placeHolder1, isOnScreenPlaceHolder1] = useScreenRef()
  const [placeHolder2, isOnScreenPlaceHolder2] = useScreenRef()

  updateClassList(bannerText, isOnScreenBannerText)
  updateClassList(joinWaitingListButton, isOnScreenJoinWaitingListButton)
  fadeInOut(bannerImage, isOnScreenBannerImage)
  updateClassList(placeHolder1, isOnScreenPlaceHolder1)
  updateClassList(placeHolder2, isOnScreenPlaceHolder2)

  return (
    <div className="w-full h-full container sm:mx-auto pr-16 pl-16">
      <header className="w-full">
        <div className="flex">
          <div className="flex justify-start text-3xl font-extrabold">
            TALNTR.
          </div>
          <div className="flex justify-end w-full">
            <Button color="primary" className="font-extrabold">
              Blog
            </Button>
          </div>
          <div className="group">
            <Button color="primary" className="font-extrabold">
              Join the waiting list
            </Button>
            <Divider className="w-44 bg-teal-500 transition-all ease-in-out scale-50 group-hover:scale-100" />
          </div>
        </div>
      </header>
      <div className="w-full h-1/2 grid md:grid-cols-2">
        <div className="grid grid-col-2 justify-center place-items-center mr-16">
          <div>
            <div
              ref={bannerText}
              className=" duration-1000 ease-in-out opacity-0 mb-16"
            >
              <h1 className="md:text-6xl sm:text-1xl">
                Talntr - Where Skills Meet Opportunity
              </h1>
            </div>
            <div
              ref={joinWaitingListButton}
              className="delay-500 duration-1000 ease-in-out opacity-0 scale-80 flex justify-center"
            >
              <Button
                color="primary"
                className="shadow-lg font-extrabold hover:-translate-y-2 hover:scale-125"
              >
                Join the waiting list
              </Button>
            </div>
            {/*<div*/}
            {/*  ref={bannerImage}*/}
            {/*  className="mt-32 p-8 grid justify-center opacity-0 delay-500 duration-1000 ease-in-out "*/}
            {/*>*/}
            {/*  <Image alt="BannerImage" src="banner_image.png" />*/}
            {/*</div>*/}
          </div>
        </div>
        <div
          ref={bannerImage}
          className="grid grid-col-2 justify-center place-items-center delay-1000 duration-1000 ease-in-out opacity-0"
        >
          <Image src="banner_image.png" alt="banner image" />
        </div>
      </div>

      <div className="w-full h-1/4 grid grid-cols-1 mt-16 md:mt-36">
        <div className="grid col-span-1 h-1/2 flex-grow place-items-center">
          <Carousel />
        </div>
      </div>
      <div
        ref={placeHolder2}
        className="w-full h-full grid grid-cols-2 duration-1000 ease-in-out opacity-0 mt-16 md:mt-36"
      >
        <div className="flex h-full flex-grow justify-center place-items-start">
          <div>
            <Image alt="placeholder" src="https://placehold.co/600x400" />
          </div>
        </div>
        <div className="flex h-full flex-grow justify-center place-items-center">
          <Image alt="placeholder" src="https://placehold.co/600x400" />
        </div>
      </div>
    </div>
  )
}
