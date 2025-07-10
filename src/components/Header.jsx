import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [fontClass] = useState("font-tt font-medium");
  return (
    <header className="w-[25%] sm:w-full max-w-[1920px] h-auto bg-white flex flex-wrap lg:flex-nowrap items-center justify-between gap-x-4 px-4 sm:px-6 lg:px-[96px] mx-auto
">
      {/* Left section - logo */}

      <div className="flex-shrink-0 w-[163px] h-[64px] justify-between my-[12px]">
        <img
          src="/image/logo.png"
          alt="Logo"
          className="w-full h-full object-contain"
        />
      </div>


      {/* Center section - navigation links */}
      <nav
        className="
    flex flex-nowrap
    justify-center
    gap-[16px] sm:gap-[24px] md:gap-[32px]
    w-full max-w-[1000px]
    mx-auto
    no-scrollbar
    whitespace-nowrap
  "
      >
        <Link to="#" className="item-center font-tt font-medium text-[18px] text-[#525252] uppercase">ABOUT</Link>
        <Link to="#" className="font-tt font-medium text-[18px] text-[#525252] uppercase">STUDIO</Link>
        <Link to="#" className="text-[18px] text-[#525252] uppercase">
          <span className={fontClass}>TIMETABLE</span>{" "}
          <span className="font-normal">/</span>{" "}
          <span className={fontClass}>BOOK</span>
        </Link>
        <Link to="#" className="font-tt font-medium text-[18px] text-[#525252] uppercase">ON DEMAND</Link>
        <Link to="#" className="font-tt font-medium text-[18px] text-[#525252] uppercase">PROGRAMS</Link>
        <Link to="#" className="font-tt font-medium text-[18px] text-[#525252] uppercase">VIDEOS</Link>
      </nav>




      {/* Right section - login/register buttons */}
      <div className="flex items-center gap-3 flex-shrink-0">

        <Link
          to="#"
          className="
    group
    w-[104px] h-[51px]
    gap-[10px]
    pt-[10px] pr-[32px] pb-[12px] pl-[28px]
    rounded-[8px]
    border border-[#474747]
    bg-white
    hover:bg-[#FFFFFF]
    hover:border-[#E05F40]
    transition-all duration-300
    flex items-center justify-center
  "
        >
          <span className="
    font-tt font-medium w-[40px] h-[27px]
    text-[#474747]
    transition-colors duration-300
    group-hover:text-[#E05F40]
  ">
            Login
          </span>
        </Link>

        <Link
          to="#"
          className="
    relative 
    overflow-hidden 
    w-[140px] h-[51px] 
    sm:w-[160px] sm:h-[51px] 
    md:w-[180px] md:h-[51px] 
    sm:pt-[12px] sm:pr-[32px] sm:pb-[12px] sm:pl-[32px] 
    rounded-[8px] 
    bg-[#474747] 
    text-white 
    text-center 
    text-sm sm:text-base md:text-lg 
    transition-all duration-300
    group
  "
        >
          {/* background slide-in layer */}
          <span
            className="
      absolute top-0 left-0 w-0 h-full 
      bg-[#E05F40] 
      group-hover:w-full 
      transition-all duration-1000 ease-in-out 
      z-0
    "
          ></span>

          {/* button text */}
          <span className="relative z-10 font-tt font-medium whitespace-nowrap">
            Register Now
          </span>
        </Link>


      </div>

    </header>
  );
};

export default Header;




