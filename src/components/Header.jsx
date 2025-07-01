import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="w-full max-w-[1920px] h-auto bg-white flex flex-nowrap items-center justify-between gap-x-4 px-[16px] sm:px-[32px] lg:px-[192px] mx-auto">
            {/* Left section - logo */}

            <div className="flex-shrink-0 w-[163px] h-[64px] justify-between my-[12px]">
                <img
                    src="/image/logo.png"
                    alt="Logo"
                    className="w-full h-full object-contain"
                />
            </div>


            {/* Center section - navigation links */}
            <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 max-w-full overflow-hidden flex-1 whitespace-nowrap">
                <Link
                    to="#"
                    className="font-tt font-medium text-[18px] leading-[150%] tracking-normal align-middle uppercase"

                >
                    ABOUT
                </Link>
                <Link
                    to="#"
                    className="w-[53px] h-[27px] font-tt font-medium text-[18px] leading-[150%] tracking-normal align-middle uppercase"
                >
                    STUDIO
                </Link>
                <Link
                    to="#"
                    className="w-[56px] h-[27px] font-tt font-medium w-[143px] h-[27px]  text-[18px] leading-[150%] tracking-normal align-middle whitespace-nowrap uppercase"
                >
                    TIMETABLE/ BOOK
                </Link>
                <Link
                    to="#"
                    className="w-[94px] h-[27px] font-tt font-medium text-[18px] leading-[150%] tracking-normal align-middle uppercase whitespace-nowrap"
                >
                    on demand
                </Link>

                <Link
                    to="#"
                    className="w-[87px] h-[27px] font-tt font-medium text-[18px] leading-[150%] tracking-normal align-middle uppercase"
                >
                    PROGRAMS
                </Link>
                <Link
                    to="#"
                    className="w-[57px] h-[27px] font-tt font-medium  text-[18px] leading-[150%] tracking-normal align-middle uppercase"
                >
                    VIDEOS
                </Link>


            </nav>

            {/* Right section - login/register buttons */}
            <div className="flex items-center gap-3 flex-shrink-0">
                <Link
                    to="#"
                    className="w-[104px] h-[51px] gap-[10px] pt-[12px] pr-[32px] pb-[12px] pl-[32px] rounded-[8px] border"

                >
                    <span className='font-tt font-normal text-[18px] w-[40px] h[27px] '>Login</span>
                </Link>
                <Link
                    to="#"
                    className=" w-[140px] h-[48px] 
  sm:w-[160px] sm:h-[51px] 
  md:w-[180px] md:h-[54px] 
  gap-[10px] 
  pt-[10px] pr-[24px] pb-[10px] pl-[24px] 
  sm:pt-[12px] sm:pr-[32px] sm:pb-[12px] sm:pl-[32px] 
  rounded-[8px] 
  bg-[#474747] 
  text-center 
  text-white
  text-sm sm:text-base md:text-lg"

                >
                    <span className='font-tt font-normal w-[96px] h-[27px] text-[#FFFFFF] mx-auto whitespace-nowrap'>Register Now</span>
                </Link>
            </div>

        </header>
    );
};

export default Header;




