// "use client"; 
// import React from 'react'

// function Header() {
//   return (
//     <div>
//       This is the header
      
//     </div>
//   )
// }

// export default Header

'use client'

// import {PopoverGroup,} from '@headlessui/react'
import Image from 'next/image'



export default function Example() {
  

  return (
    <header className="">
  
        <nav className="md:flex justify-between w-full bg-blue-800 text-white p-4 ">
          <div>
          <div className="flex items-center space-x-4 p-4">
      {/* Left side: Image */}
      <div className="w-1/3">
        <Image 
          src="/assets/pictures/newlogo.png" // replace with your image path
          alt="Description of image"
          width={100}
          height={100}
          className="object-cover" 
          priority// To control how the image is resized
        />
      </div>

      {/* Right side: Text */}
      <div className="w-2/3">
        <h1 className="text-2xl font-bold whitespace-nowrap">Bongo Hotels</h1>
      </div>
    </div>
          </div>
          <div className="md:items-center md:w-auto flex">
            <div className="md:flex hidden">
              <a
            href=""
            className="text-white px-4 py-2 hover:underline hover:animate-in cursor-pointer scroll-smooth"
          >
            Browse Hotels
          </a>
              <a
            href=""
            className="text-white px-4 py-2 hover:underline hover:animate-in cursor-pointer scroll-smooth"
          >
            Best Deals
          </a>
          <a
            href="#target-section"
            className="text-white px-4 py-2 hover:underline hover:animate-in cursor-pointer scroll-smooth block md:text-white mr-4"
          >
            About|Contacts
          </a>
        
            </div>
            <div className="flex text-sm">
              <a className="p-2 ml-2 bg-white text-teal-500 font-semibold leading-none border border-gray-100 rounded hover:border-transparent hover:bg-gray-100" href="#">Login</a>
              <a className="p-2 ml-2 bg-teal-500 text-gray-100 font-semibold leading-none border border-teal-600 rounded hover:border-transparent hover:bg-teal-600" href="#">Sign up</a>
            </div>
          </div>
        </nav>
    </header>
  )
}


