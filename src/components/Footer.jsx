import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
     <footer className="relative w-full h-[444px] -mt-[1250px] bg-[#D4D4D4] ">
        {/* Background image */}
        <img
          src="/image/Footer.jpg"
          alt="Footer Background"
          className="opacity-[20%] absolute top-0 left-0 w-full h-full object-cover opacity-90"
        />

        {/* Overlay content */}
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center text-[#262626] px-4">

          {/* Heading */}
          <h2 className="font-ivy font-normal text-[44px] text-4xl font-light mb-4">Ready to Build?</h2>

          {/* Subheading */}
          <p className="font-tt font-normal text-[16px] max-w-xl text-base text-[#4B4B4B] mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* Button */}
          <button className="bg-[#333333] text-white px-6 py-3 rounded-md text-sm mb-10">
            <Link>Book Now</Link>
          </button>
          {/* Nav links */}
          <div className="flex justify-between items-center w-[700px] mb-4">
            {/* Left nav */}
            <div className="flex gap-8 text-[10px]  font-tt font-normal -ml-[110px]">
              <Link className="hover:underline">PRODUCT</Link>
              <Link className="hover:underline">FEATURES</Link>
              <Link className="hover:underline">RESOURCES</Link>
            </div>
            {/* Logo Section */}
            <div className="flex items-center ml-[100px] mr-[80px]">
              {/* Logo */}
              <div className="w-[162.92px] h-[64px] mb-2 pl-[20px] pr-[20px]">
                <img
                  src="/image/logo.png"
                  alt="Logo"
                  className="w-full h-full object-contain black"
                />
              </div>

            </div>
            {/* Right nav */}
            <div className="flex gap-8 text-[10px] font-tt font-normal">
              <Link className="hover:underline">ABOUT</Link>
              <Link className="hover:underline">BLOG</Link>
              <Link className="hover:underline">SUPPORT</Link>
            </div>
          </div>
           
            {/* Separator line */}
            <div className="w-[1000px] h-[1px] bg-[#737373] my-1 -mt-[12px] -ml-[150px]"></div>

            {/* Footer bottom links */}
            <div className=" text-xs text-[#737373] pt-[20px]">
              © 2010 — 2020 &nbsp;&nbsp; Privacy — Terms
            </div>
          
        </div>
      </footer>
  )
}

export default Footer