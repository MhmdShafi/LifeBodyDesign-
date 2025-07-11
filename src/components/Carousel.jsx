
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentItem = items[currentIndex];
  console.log(currentItem.image);
  const handleChange = (index) => setCurrentIndex(index);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % items.length);

  return (
    <div className='w-full bg-[#FAFAF5]'>
      <div className="w-[25%] sm:w-full max-w-[1920px] h-[993px] gap-[48px]
  pt-12 px-4 
  sm:px-8 sm:pt-20 
  md:px-20 
  lg:px-32 lg:pt-24 
   mx-auto">



        {/* Top Nav Buttons */}
        <div className='w-full max-w-[1536px]  flex justify-between rounded-[12px] p-1 sm:p-2 md:p-4w-[1536px] h-[102px] flex items-center justify-between rounded-[12px] p-[4px]'>
          {items.map((item, index) => (
            <Link
              key={item.id}
              onClick={() => handleChange(index)}
              className={`font-tt font-regular flex items-center justify-center text-center uppercase text-[#474747] 
    transition-all ease-out duration-300
    hover:bg-[#f8f8f4] hover:rounded-[16px]
    ${index === currentIndex
                  ? 'w-[214px] h-[73px]  text-[#E05F40] rounded-[8px]'
                  : 'w-[120px] h-[60px] opacity-80 scale-95' // shrink others
                }`}
            >
             <span
  className={`flex items-center justify-center text-center whitespace-nowrap transition-all duration-700 
    ${index === currentIndex
      ? 'font-ivy font-regular max-w-[408px] h-[54px] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px]'
      : 'font-tt font-regular text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px]'
    }`}
>
  {
    item.title.includes('&')
      ? item.title.split('&').map((part, i, arr) => (
          <React.Fragment key={i}>
            {part}
            {i < arr.length - 1 && (
              <span className="font-ivy">&nbsp;&&nbsp;</span>
            )}
          </React.Fragment>
        ))
      : item.title
  }
</span>

            </Link>



          ))}
        </div>

        {/* Two Columns Side by Side */}
        <div className="flex flex-wrap justify-between items-start  gap-[24px] max-w-[1536px] w-full">
          {/* Left Side Content */}
          <div className="w-full max-w-[756px] md:w-[48%] h-auto md:h-[535px]  flex flex-col gap-[32px]">
            <div className="max-w-[628px] h-[101px] pl-[64px] gap-[8px]">
              <p className="font-tt font-regular  max-w-[628px] h-[33px] text-[16px] md:text-[18px] leading-[150%]">
                 {
   currentItem.subtitle.includes('#')
      ? currentItem.subtitle.split('#').map((part, i, arr) => (
          <React.Fragment key={i}>
            {part}
            {i < arr.length - 1 && (
              <span className="font-ivy font-regular text-black">#</span>
            )}
          </React.Fragment>
        ))
      : currentItem.subtitle
  }
                
              </p>
              <h1 className="font-ivy font-regular text-[28px] max-w-[628px] h-[60px] md:text-[40px] text-[#474747] leading-[150%] ">
                {currentItem.heading}
              </h1>
            </div>

            
              <p className="max-w-[628px] h-[180px] pl-[64px] font-tt font-regular text-[20px] md:text-[20px] leading-[150%] text-[#474747] tracking-[-1px]">
                {currentItem.description}
                <br /><br />{currentItem.extra}
              </p>
            

            <div className="flex flex-wrap gap-[16px] pl-[64px] mt-[32px]">
              <button
                className="cursor-pointer
    relative overflow-hidden 
    px-8 py-4 
    w-full sm:w-auto 
    rounded-[8px] 
    border border-[#474747] 
    bg-transparent 
    transition-all duration-700 ease-in-out 
    group hover:border-[#E05F40]
  "
              >
                {/* Fill animation */}
                <span
                  className="
      absolute top-0 left-0 w-0 h-full 
      bg-white 
      group-hover:w-full 
      transition-all duration-700 ease-in-out 
      z-0
    "
                ></span>

                {/* Text */}
                <span
                  className="
      relative z-10 
      font-tt font-medium 
      text-[16px] md:text-[20px] 
      text-[#474747] 
      group-hover:text-[#E05F40] 
      transition-colors duration-300
    "
                >
                  More Detail
                </span>
              </button>


              <button
                className=" cursor-pointer
    relative overflow-hidden 
    px-8 py-4 
    rounded-[8px] 
    bg-[#474747] 
    text-white 
    w-full sm:w-auto 
    transition-all duration-700 ease-in-out 
    group
  "
              >
                {/* Hover fill effect layer */}
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
                <span
                  className="
      relative z-10 
      font-tt font-medium text-[16px] md:text-[20px] 
      text-center
      whitespace-nowrap
    "
                >
                  Book Discovery Class
                </span>
              </button>

            </div>
          </div>

          {/* Right Side Image */}
          <div className="w-full md:w-[48%] h-auto md:h-[535px]">
            <img
              src={currentItem.image}
              alt={currentItem.title}
              className="w-full h-full object-cover rounded-[24px]"
            />
          </div>
        </div>


        {/* Prev/Next Buttons */}
        <div className="w-full flex justify-center mt-[50px] pb-[96px]">
          <div className="flex w-[176px] h-[68px] gap-[20px] md:gap-[40px]">
            <button onClick={handlePrev} className="cursor-pointer w-[68px] h-[68px] rounded-[16px] bg-[#EAE8E2] flex items-center justify-center group hover:bg-[#474747] transition-colors duration-300">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_437_251)">
                  <path
                    d="M25 30L15 20L25 10"
                    stroke="#474747"
                    strokeWidth="2.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:stroke-white transition-colors duration-300"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_437_251">
                    <rect width="40" height="40" fill="white" transform="matrix(-1 0 0 -1 40 40)" />
                  </clipPath>
                </defs>
              </svg>
            </button>

            <button onClick={handleNext} className="cursor-pointer w-[68px] h-[68px] rounded-[16px] bg-[#EAE8E2] flex items-center justify-center group hover:bg-[#474747] transition-colors duration-300">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_437_255)">
                  <path
                    d="M15 10L25 20L15 30"
                    stroke="#474747"
                    strokeWidth="2.75"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="group-hover:stroke-white transition-colors duration-300"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_437_255">
                    <rect width="40" height="40" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Carousel;
