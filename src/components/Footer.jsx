import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <footer className="relative w-full max-w-[1920px] min-h-[644px] gap-[96px] pt-[96px] pr-[192px] pb-[24px] pl-[192px]  flex flex-col items-center justify-center mx-auto">
      {/* Background image */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <img
          src="/image/Footer.jpg"
          alt="Footer Background"
          className="w-full h-full object-cover opacity-[20%]"
        />
      </div>
      {/* Overlay content */}
      <div className="w-full max-w-[935px] min-h-[264px] flex flex-col items-center  mx-auto">
        <div className="w-full max-w-[935px]  flex flex-col  mx-auto">
          {/* Heading */}
          <h2 className="w-full max-w-[378px] font-ivy font-regular text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-[135%] text-center text-[#474747] mx-auto">
            Ready to Build?
          </h2>

          {/* Subheading */}
          <p className="w-full max-w-[935px] min-h-[72px] font-tt font-regular text-[24px] leading-[150%] tracking-[0] text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

       <div
  className="
    relative 
    w-full max-w-[159px] h-[68px] 
    mt-[32px] 
    px-8 py-4 
    gap-[10px] 
    rounded-[8px] 
    bg-[#474747] 
    flex items-center justify-center 
    mx-auto 
    overflow-hidden 
    group 
    cursor-pointer 
    transition-all duration-700 ease-in-out
  "
>
  {/* Hover fill layer */}
  <span
    className="
      absolute top-0 left-0 w-0 h-full 
      bg-[#E05F40] 
      group-hover:w-full 
      transition-all duration-700 ease-in-out 
      z-0
    "
  ></span>

  {/* Button text */}
  <button className="relative z-10 font-tt font-regular text-[#FFFFFF] text-[16px] md:text-[20px] pt-[5px] whitespace-nowrap">
    <Link to="#">Book Now</Link>
  </button>
</div>




      </div>

      {/* Nav links */}
      <div className='w-full max-w-[1536px] min-h-[164px] flex flex-col gap-8 px-4 sm:px-6 lg:px-8 mx-auto'>

        <div className="w-full max-w-[1536px] h-[76px] flex items-center px-4 sm:px-8 lg:px-[96px] mx-auto">
          {/* Left nav */}
          <div className="flex items-center justify-start gap-[32px] text-[#525252] flex-1 min-w-0">
            <Link className="font-tt font-medium text-[16px] md:text-[18px] uppercase whitespace-nowrap w-[83px] h-[30px] flex items-center justify-center">PRODUCT</Link>
            <Link className="font-tt font-medium text-[16px] md:text-[18px] uppercase whitespace-nowrap w-[86px] h-[30px] flex items-center justify-center">FEATURES</Link>
            <Link className="font-tt font-medium text-[16px] md:text-[18px] uppercase whitespace-nowrap w-[103px] h-[30px] flex items-center justify-center">RESOURCES</Link>
          </div>

          {/* Logo */}
          <div className="flex justify-center w-[120px] sm:w-[150px] md:w-[193px] h-[40px] sm:h-[50px] md:h-[76px] shrink-0">
            <img src="/image/logo.png" alt="Logo" className="w-full h-full object-contain" />
          </div>

          {/* Right nav */}
          <div className="flex items-center justify-end gap-[32px] text-[#525252] flex-1 min-w-0">
            <Link className="font-tt font-medium text-[16px] md:text-[18px] uppercase whitespace-nowrap">ABOUT</Link>
            <Link className="font-tt font-medium text-[16px] md:text-[18px] uppercase whitespace-nowrap">BLOG</Link>
            <Link className="font-tt font-medium text-[16px] md:text-[18px] uppercase whitespace-nowrap">SUPPORT</Link>
          </div>
        </div>









        {/* Separator line */}
        <div className="w-full max-w-[1536px] border-t border-[#737373] mx-auto"></div>





        {/* Footer bottom links */}
        <div className=" font-tt font-regular mx-auto mb-[24px] w-[223px] h-[24px] gap-[24px] whitespace-nowrap item-center">
          © 2010 — 2020 &nbsp;&nbsp; Privacy — Terms
        </div>

      </div>

    </footer>
  )
}

export default Footer