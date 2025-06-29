import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
   <header className="w-[1920px] h-[88px] bg-white flex ">
            {/* Left section - logo */}
            
                <img
                    src="/image/logo.png" 
                    alt="Logo"
                    className="w-[162.92px] h-[64px] ml-[192px] mt-[12px]"
                />
            

            {/* Center section - navigation links */}
            <nav className=" w-[650px] h-[27px]  mt-[30.5px] mr-[223.54px] ml-[223.5px] gap-[32px] flex item-center">
                <Link
                    to="#"
                    className="font-tt font-medium  text-[18px] leading-[150%] tracking-normal align-middle  flex uppercase"

                >
                    ABOUT
                </Link>
                <Link
                    to="#"
                    className="w-[53px] h-[27px] font-tt font-medium  text-[18px] leading-[150%] tracking-normal align-middle  flex uppercase"
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
                    className="w-[87px] h-[27px] font-tt font-medium  text-[18px] leading-[150%] tracking-normal align-middle  flex uppercase"
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
            <div className="flex items-center w-[276px] h-[51px] gap-[12px] mt-[18.5px] mb[18.5px] mr-[192px] ">
                <Link
                    to="#"
                    className="w-[104px] h-[51px] gap-[10px] pt-[12px] pr-[32px] pb-[12px] pl-[32px] rounded-[8px] border"

                >
                   <span className='font-tt font-normal text-[18px] w-[40px] h[27px] '>Login</span> 
                </Link>
                <Link
                    to="#"
                    className="w-[160px] h-[51px] gap-[10px] pt-[12px] pr-[32px] pb-[12px] pl-[32px] rounded-[8px] bg-[#474747] text-center"

                >
                  <span className='font-tt font-normal w-[96px] h-[27px] text-[#FFFFFF] mx-auto '>Register</span>  
                </Link>
            </div>

        </header>
    );
};

export default Header;
