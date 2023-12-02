'use client'
import { Button } from '@nextui-org/button'

export default function Home() {
  return (
    <div className="h-full w-full flex">
      <div className="flex place-items-center h-full bg-blue-700 flex-grow item-center justify-center text-center">
        <h1>
          <Button>CONNECTEER NU</Button>
        </h1>
      </div>
      <div className="flex place-items-center h-full bg-amber-700 flex-grow item-center justify-center text-center">
        <h1>Lorem ipsum dolor sit amet.</h1>
      </div>
    </div>
  )
}
