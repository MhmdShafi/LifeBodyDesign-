import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
<header className="z-[10] relative m-0 w-full h-[58px] px-[192px] py-[40px] flex items-center justify-between bg-white text-black">
            {/* Left section - logo */}
            <div className="w-[162.92px] h-[64px] m-0 p-0 pr-[20px]  flex items-center">
                <img
                    src="/image/logo.png" // If it's in public/, don't include "public" in the path
                    alt="Logo"
                    className="w-full h-full object-contain"
                />
            </div>

            {/* Center section - navigation links */}
            <nav className="hidden md:flex items-center pr-[20px] pl-[10px] w-[650px] h-[27px] gap-[32px] ">
                <Link
                    to="#"
                    className="font-tt text-[12px] leading-[18px] font-medium uppercase text-black align-middle"
                >
                    ABOUT
                </Link>
                <Link
                    to="#"
                    className="font-tt text-[12px] leading-[18px] font-medium uppercase text-black align-middle"
                >
                    STUDIO
                </Link>
                <Link
                    to="#"
                    className="font-tt text-[12px] leading-[18px] font-medium uppercase text-black align-middle"
                >
                    TIMETABLE/BOOK
                </Link>
                <Link
                    to="#"
                    className="font-tt text-[12px] leading-[18px] font-medium uppercase text-black align-middle"
                >
                    ON DEMAND
                </Link>
                <Link
                    to="#"
                    className="font-tt text-[12px] leading-[18px] font-medium uppercase text-black align-middle"
                >
                    PROGRAMS
                </Link>
                <Link
                    to="#"
                    className="font-tt text-[12px] leading-[18px] font-medium uppercase text-black align-middle"
                >
                    VIDEOS
                </Link>


            </nav>

            {/* Right section - login/register buttons */}
            <div className="flex items-center w-[276px] h-[45px] gap-[8px] pl-[10px] pr-0 mr-0">
                <Link
                    to="/login"
                    className="w-1/2 h-full flex items-center justify-center text-sm font-medium border border-gray-400 rounded uppercase"
                >
                    Login
                </Link>
                <Link
                    to="/register"
                    className="w-1/2 h-full flex items-center justify-center text-sm font-medium bg-black text-white rounded uppercase"
                >
                    Register
                </Link>
            </div>
        </header>
    );
};

export default Header;
