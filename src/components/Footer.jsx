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
          <h2 className="w-full max-w-[378px] font-ivy font-normal text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-[135%] text-center text-[#474747] mx-auto">
            Ready to Build?
          </h2>

          {/* Subheading */}
          <p className="w-full max-w-[935px] min-h-[72px] font-tt font-normal text-[24px] leading-[150%] tracking-[0] text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="w-full max-w-[159px] h-[68px] mt-[32px] px-8 py-4 gap-[10px] rounded-[8px] bg-[#474747] flex items-center justify-center mx-auto">
          {/* Button */}
          <button className="font-tt font-normal text-[#FFFFFF]">
            <Link>Book Now</Link>
          </button>
        </div>



      </div>

      {/* Nav links */}
      <div className='w-full max-w-[1536px] min-h-[164px] flex flex-col gap-8 px-4 sm:px-6 lg:px-8 mx-auto'>

        <div className="w-full max-w-[1536px] h-[76px] flex items-center justify-between px-4 sm:px-8 lg:px-[96px] mx-auto -ml-[40px]">
          {/* Left nav */}
          <div className="flex gap-4 sm:gap-6 text-[#525252]">
            <Link className="font-tt font-medium text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] uppercase whitespace-nowrap">
              PRODUCT
            </Link>
            <Link className="font-tt font-medium text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] uppercase whitespace-nowrap">
              FEATURES
            </Link>
            <Link className="font-tt font-medium text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] uppercase whitespace-nowrap">
              RESOURCES
            </Link>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 w-[120px] sm:w-[150px] md:w-[193px] h-[40px] sm:h-[50px] md:h-[76px]">
            <img
              src="/image/logo.png"
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Right nav */}
          <div className="flex gap-4 sm:gap-6 text-[#525252]">
            <Link className="font-tt font-medium text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] uppercase whitespace-nowrap">
              ABOUT
            </Link>
            <Link className="font-tt font-medium text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] uppercase whitespace-nowrap">
              BLOG
            </Link>
            <Link className="font-tt font-medium text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] uppercase whitespace-nowrap">
              SUPPORT
            </Link>
          </div>
        </div>




        {/* Separator line */}
        <div className="w-full max-w-[1536px] border border-[#737373] mx-auto"></div>



        {/* Footer bottom links */}
        <div className="ml-[600px]  mb-[24px] w-[223px] h-[24px] gap-[24px] whitespace-nowrap item-center">
          © 2010 — 2020 &nbsp;&nbsp; Privacy — Terms
        </div>

      </div>

    </footer>
  )
}

export default Footer