import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className="relative w-[1920px] h-[644px] gap-[96px] pt-[96px] pr-[192px] pb-[24px] pl-[192px] border-t flex flex-col items-center justify-center
 ">
      {/* Background image */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
    <img
      src="/image/Footer.jpg"
      alt="Footer Background"
      className="w-full h-full object-cover opacity-[20%]"
    />
  </div>
      {/* Overlay content */}
      <div className="w-[935px] h-[264px] gap-[32px] flex flex-col items-center">

        {/* Heading */}
        <h2 className="w-[378px] h-[76px] font-ivy font-normal text-[56px] leading-[135%] tracking-[0] text-center text-[#474747]">
          Ready to Build?
        </h2>

        {/* Subheading */}
        <p className="w-[935px] h-[72px] font-tt font-normal text-[24px] leading-[150%] tracking-[0] text-center mt-[16px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        {/* Button */}
        <button className="w-[159px] h-[68px] gap-[10px] pt-[16px] pr-[32px] pb-[16px] pl-[32px] justify-center rounded-[8px] text-white bg-[#474747]">
          <Link>Book Now</Link>
        </button>
      </div>

      {/* Nav links */}
      <div className='w-[1536px] h-[164px] gap-[32px]'>
       <div className="w-[1536px] h-[164px] gap-[32px]">
  <div className="flex justify-between items-center mb-4">
    {/* Left nav */}
    <div className="w-[336px] h-[30px] gap-[32px] ml-[215px] flex">
      <Link className="w-[83px] h-[30px] font-tt font-medium text-[20px] uppercase">PRODUCT</Link>
      <Link className="w-[83px] h-[30px] font-tt font-medium text-[20px] uppercase mr-[32px] ml-[32px]">FEATURES</Link>
      <Link className="w-[83px] h-[30px] font-tt font-medium text-[20px] uppercase">RESOURCES</Link>
    </div>

    {/* Logo */}
    <div className="w-[193px] h-[76px]">
      <img
        src="/image/logo.png" // Make sure this path is correct and file exists!
        alt="Logo"
        className="w-[193px] h-[76px] object-contain"
      />
    </div>

    {/* Right nav */}
    <div className="w-[249px] h-[30px] gap-[32px] mr-[259px] flex ">
      <Link className="w-[58px] h-[30px] font-tt font-medium text-[20px] uppercase">ABOUT</Link>
      <Link className="w-[48px] h-[30px] font-tt font-medium text-[20px] uppercase ml-[32px] mr-[32px]">BLOG</Link>
      <Link className="w-[79px] h-[30px] font-tt font-medium text-[20px] uppercase">SUPPORT</Link>
    </div>
  </div>



        {/* Separator line */}
        <div className="mt-[32px] w-[1536px] border bg-[#737373]"></div>

        {/* Footer bottom links */}
        <div className="ml-[600px] mt-[32px] mb-[24px] w-[223px] h-[24px] gap-[24px] whitespace-nowrap item-center">
          © 2010 — 2020 &nbsp;&nbsp; Privacy — Terms
        </div>

      </div>
      </div>
    </footer>
  )
}

export default Footer