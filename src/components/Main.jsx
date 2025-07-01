import React from 'react'
import Carousel from './Carousel'
import { Link } from 'react-router-dom'
import DropdownBtns from './DropdownBtns'
import CardSection from './CardSection'
import Footer from './Footer'
import Contact from './Contact'
const Mian = ({ items, dropDownItems }) => {
  return (
    <>
      {/* HERO Section */}
      <div className="w-full max-w-[1920px] min-h-[300px] sm:h-[500px] md:h-[700px] lg:h-[900px] mx-auto">
        <img
          src="/image/bg-image.jpg"
          alt="image"
          className="w-full h-full object-cover opacity-20"
        />

        {/* Large Text */}
        <div className="absolute top-[120px] sm:top-[200px] lg:top-[286px] w-full max-w-[1797px] px-4 sm:px-8 lg:px-[62px] mx-auto">
  <h1 className="font-ivy font-normal text-[360px] leading-[100%] tracking-[0] text-center uppercase uppercase text-[#474747] pt-[10px]  opacity-[0.05]">
    Lifebody
  </h1>

          {/* Heading, paragraph, buttons */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-[1016px] px-4 sm:px-6 md:px-8 mt-[50px] mb-[83px] gap-[40px] ml-[90px] mx-auto">
            <h1 className="text-[64px] font-ivy font-normal text-center leading-[135%] text-[#474747]">
              Discover, Transform, Thrive: Your Odyssey Starts at <span className="text-[#E05F40]">Lifebody Studio</span>
            </h1>

            <p className="w-full max-w-[1016px] text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-tt font-light text-center text-[#171717] leading-[150%]">
              Sessions for Every Soul: Explore our wide range of invigorating sessions tailored to your needs.
            </p>

            <div className="flex justify-between w-full max-w-[495px] gap-[16px] sm:gap-[20px] md:gap-[24px] mx-auto mt-[24px] sm:mt-[32px] lg:mt-[40px] text-[16px] sm:text-[18px] md:text-[20px]">
              <button className="w-full max-w-[235.5px] h-[53px] px-[32px] py-[8px] rounded-[8px] border border-[#474747] bg-white text-black text-lg">
                Explore Class
              </button>
              <button className="w-full max-w-[235.5px] h-[53px] bg-[#474747] text-white rounded-lg text-lg">
                Book a Tour
              </button>
            </div>
          </div>
        </div>

        {/* Location Badge */}
        <div className="absolute w-full max-w-[329px] h-auto flex flex-col items-center gap-[16px] sm:gap-[20px] 
          top-[400px] sm:top-[600px] lg:top-[800px] 
          left-[50%] -translate-x-1/2 text-center">
          <div className="w-[30px] h-[30px] flex items-center justify-center">
            <img src="/image/Frame.png" alt="icon" />
          </div>
          <div className="w-[300px] h-[30px]">
            <span className="font-tt font-light text-[15px] leading-[60%] text-[#474747]">
              LONDON PILATES STUDIO BARNES
            </span>
          </div>
        </div>
      </div>

      {/* BELOW HERO — put content here outside the fixed-height div */}
      <Contact />
      <Carousel items={items} />
      <DropdownBtns items={dropDownItems} />
      <CardSection />
      <Footer />
    </>
  );
};

export default Mian