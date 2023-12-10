import { Button } from '@nextui-org/button'
import { Divider } from '@nextui-org/divider'

export default function Home() {
  return (
    <div className="flex w-full h-full justify-evenly place-items-center">
      <div className="flex justify-evenly gap-4">
        <Button color="primary" className="shadow-lg font-extrabold">
          Join the waiting list
        </Button>
        <Button color="primary" className="">
          Join the waiting list
        </Button>
      </div>
      <div className="flex justify-evenly gap-4">
        <div className="group">
          <Button className="font-extrabold bg-[transparent] text-[#374151]">
            Join the waiting list
          </Button>
          <Divider className="w-44 bg-teal-500 transition-all ease-in-out scale-50 group-hover:scale-100" />
        </div>
        <div className="group">
          <Button className="font-extrabold bg-[transparent] text-white">
            Join the waiting list
          </Button>
          <Divider className="w-44 bg-teal-500 transition-all ease-in-out scale-50 group-hover:scale-100" />
        </div>
        <div className="group">
          <Button className="font-extrabold bg-[transparent] text-teal-500">
            Join the waiting list
          </Button>
          <Divider className="w-44 bg-teal-500 transition-all ease-in-out scale-50 group-hover:scale-100" />
        </div>
      </div>
      <div className="flex justify-evenly gap-4 group">
        <div>
          <Button
            color="primary"
            variant="bordered"
            className=" text-[#374151]"
          >
            Join the waiting list
          </Button>
        </div>
        <div>
          <Button
            variant="bordered"
            className="bg-[transparent] border-teal-500 text-teal-500"
          >
            Join the waiting list
          </Button>
        </div>
        <div>
          <Button
            variant="bordered"
            className="bg-[transparent] border-teal-400 text-teal-400"
          >
            Join the waiting list
          </Button>
        </div>
        <div>
          <Button
            variant="bordered"
            className="bg-[transparent] border-teal-400"
          >
            Join the waiting list
          </Button>
        </div>
        <div>
          <Button color="primary" variant="bordered" className="text-white">
            Join the waiting list
          </Button>
        </div>
        <div>
          <Button
            variant="bordered"
            className="bg-[transparent] border-teal-400 text-black"
          >
            Join the waiting list
          </Button>
        </div>
      </div>
    </div>
  )
}
