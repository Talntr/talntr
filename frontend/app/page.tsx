'use client'
import { Button } from '@nextui-org/button'

export default function Home() {
  return (
    <div className="h-full w-full flex">
      <div className="flex h-full bg-blue-700 flex-grow justify-center place-items-center">
        <h1>
          <Button>CONNECTEER NU</Button>
        </h1>
      </div>
      <div className="flex h-full bg-amber-700 flex-grow justify-center place-items-center">
        <h1>Lorem ipsum dolor sit amet.</h1>
      </div>
    </div>
  )
}
