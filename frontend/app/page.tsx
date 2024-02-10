import { Button } from '@nextui-org/button'
import { Image } from '@nextui-org/image'
import Carousel from '@/src/features/home/components/carousel'
import { Navbar, NavbarBrand, NavbarContent } from '@nextui-org/navbar'
import { Link, NavbarItem } from '@nextui-org/react'
import Banner from '@/src/features/home/components/banner'
import JoinWaitingList from '@/src/features/home/components/join-waiting-list'
import BannerImage from '@/src/features/home/components/banner-image'

export default async function Home() {
  return (
    <div
      className="bg-no-repeat bg-cover bg-center w-full h-full absolute"
      style={{ backgroundImage: 'url(background_blue.png)' }}
    >
      <div className="w-full h-full container sm:mx-auto pr-16 pl-16">
        <Navbar
          style={{ maxWidth: '100% !important' }}
          className="backdrop-saturate-0 bg-transparent backdrop-filter-none justify-start"
        >
          <NavbarBrand>
            <p className="font-bold text-2xl">TALNTR.</p>
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarItem>
              <Link color="foreground" href="#">
                Features
              </Link>
            </NavbarItem>
            <NavbarItem isActive>
              <Link
                underline="active"
                color="foreground"
                href="#"
                aria-current="page"
              >
                Customers
              </Link>
            </NavbarItem>
            <NavbarItem>
              <Link color="foreground" href="#">
                Integrations
              </Link>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent justify="end">
            <NavbarItem className="hidden lg:flex">
              <Button variant="bordered" href="#">
                Login
              </Button>
            </NavbarItem>
            <NavbarItem>
              <Button as={Link} variant="bordered" href="#">
                Sign Up
              </Button>
            </NavbarItem>
          </NavbarContent>
        </Navbar>
        <div className="w-full h-full grid md:grid-cols-2">
          <div className="grid grid-col-2 justify-center place-items-center mr-16">
            <div>
              <Banner></Banner>
              <JoinWaitingList></JoinWaitingList>
            </div>
          </div>
          <BannerImage />
        </div>
        <div className="w-full flex justify-center font-extrabold">
          <span className="text-2xl text-[#202124]">
            How does this <span className="text-[#1967d2]">work</span> exactly ?
          </span>
        </div>
        <div className="w-full h-4/6 grid grid-cols-2  mt-16 md:mt-32 relative">
          <div className="absolute top-unit-96 -right-48 w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="893.115"
              height="326.327"
              viewBox="0 0 893.115 326.327"
            >
              <g
                id="Group_650"
                data-name="Group 650"
                transform="translate(0 1.339)"
              >
                <path
                  id="Path_6"
                  data-name="Path 6"
                  d="M8364.236,3562.659s-147.845,357.007-443.3,186.423C7704.015,3649.246,7506.3,3856.21,7506.3,3856.21"
                  transform="translate(-7474.355 -3562.659)"
                  fill="none"
                  stroke="#1967d2"
                  strokeWidth="7"
                ></path>
                <path
                  id="Polygon_2"
                  data-name="Polygon 2"
                  d="M20.292,1.652a2,2,0,0,1,2.973,0L40.553,20.86A2,2,0,0,1,39.066,24.2H4.491A2,2,0,0,1,3,20.86Z"
                  transform="translate(29.706 324.988) rotate(-133)"
                  fill="#1967d2"
                ></path>
              </g>
            </svg>
          </div>
          <div className="flex h-full flex-grow relative w-full">
            <span className="text-[20rem] font-bold absolute text-secondary/30 -top-48">
              1.
            </span>
            <div className="relative max-w-md px-4 lg:px-0 mt-10 lg:mt-0 lg:ml-32">
              <h3 className="text-4xl font-bold text-[#1967d2]/50">
                Create your{' '}
                <em className="not-italic overlay after:bg-opacity-50 after:bg-secondary text-primary/50">
                  profile
                </em>
              </h3>
              <p className="text-lg font-semibold text-slate-500 mt-6">
                Define your perfect job swiftly with our specially designed
                onboarding process, tailored for professionals.
              </p>
            </div>
          </div>
          <div className="flex h-full flex-grow justify-end place-items-start">
            <div>
              <Image alt="placeholder" src="https://placehold.co/600x400" />
            </div>
          </div>
        </div>
        <div className="w-full h-4/6 grid grid-cols-2 relative">
          <div className="absolute top-unit-96 -right-48 w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="893.115"
              height="326.327"
              viewBox="0 0 893.115 326.327"
            >
              <g
                id="Group_642"
                data-name="Group 642"
                transform="translate(3.234 1.339)"
              >
                <path
                  id="Path_6"
                  data-name="Path 6"
                  d="M7506.3,3562.659s147.845,357.007,443.3,186.423c216.917-99.836,414.629,107.128,414.629,107.128"
                  transform="translate(-7506.303 -3562.659)"
                  fill="none"
                  stroke="#1967d2"
                  strokeWidth="7"
                ></path>
                <path
                  id="Polygon_2"
                  data-name="Polygon 2"
                  d="M20.292,1.652a2,2,0,0,1,2.973,0L40.553,20.86A2,2,0,0,1,39.066,24.2H4.491A2,2,0,0,1,3,20.86Z"
                  transform="translate(889.882 293.133) rotate(133)"
                  fill="#1967d2"
                ></path>
              </g>
            </svg>
          </div>
          <div className="flex h-full flex-grow justify-start place-items-start">
            <Image alt="placeholder" src="https://placehold.co/600x400" />
          </div>
          <div className="flex relative mb-28 lg:mt-0 w-full">
            <span className="text-[20rem] font-bold absolute text-tertiary/30 mt-10 lg:left-auto lg:right-0 left-0 text-primary/30 -top-48 right-8">
              2.
            </span>
            <div className="relative max-w-md px-4 lg:px-0">
              <h3 className="text-4xl font-bold">
                Like who can{' '}
                <em className="not-italic overlay after:bg-opacity-50 after:bg-tertiary">
                  meet you
                </em>
              </h3>
              <p className="text-lg font-semibold text-slate-500 mt-6">
                The intelligent algorithm presents you with jobs and missions
                according to your profile.
                <br />
                <br />
                It is you who chooses to "Like" or "Unlike". You have total
                control over which companies can contact you.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-4/6 grid grid-cols-2 relative">
          <div className="flex h-full flex-grow relative w-full">
            <span className="text-[20rem] font-bold absolute text-secondary/30 -top-48 -left-16">
              3.
            </span>
            <div className="relative max-w-md px-4 lg:px-0 mt-10 lg:mt-0 lg:ml-32">
              <h3 className="text-4xl font-bold text-[#1967d2]/50">
                Start a discussion{' '}
                <em className="not-italic overlay after:bg-opacity-50 after:bg-secondary text-primary/50">
                  profile
                </em>
              </h3>
              <p className="text-lg font-semibold text-slate-500 mt-6">
                You liked a company that also liked you. bim It's a match. Now
                you can talk to each other. Learn more about the offer, arrange
                an interview, call… It's your choice.
              </p>
            </div>
          </div>
          <div className="flex h-full flex-grow justify-start place-items-start">
            <div>
              <Image alt="placeholder" src="https://placehold.co/600x400" />
            </div>
          </div>
        </div>
        <div className="w-full h-1/4 grid grid-cols-1">
          <div className="flex justify-center text-2xl font-extrabold text-[#202124]">
            Deze professionals gingen je al voor, lees hier hun Talntr
            ervaringen
          </div>
          <div className="grid col-span-1 h-1/2 flex-grow place-items-center">
            <Carousel />
          </div>
        </div>
        <footer className="w-full grid grid-cols-1">
          <div className="flex justify-evenly">
            <div className="flex">Talntr</div>
            <div className="flex">User Talent</div>
            <div className="flex">Business Talent</div>
            <div className="flex">TOS</div>
          </div>
        </footer>
      </div>
    </div>
  )
}
