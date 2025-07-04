import React from 'react'

const HeroSection = () => {
  return (
      <div className='w-full'>
    <div className="w-[25%] sm:w-full max-w-[1920px] min-h-[350px] sm:h-[500px] md:h-[700px] lg:h-[900px] mx-auto">
        <img
          src="/image/bg-image.jpg"
          alt="image"
          className="w-full h-full object-cover opacity-20"
        />
      

        {/* Large Text */}
        <div className="absolute top-[120px] sm:top-[200px] lg:top-[286px] w-full max-w-[1797px] px-4 sm:px-8 lg:px-[62px] mx-auto">
  <h1 className="font-ivy font-normal text-[clamp(48px,15vw,360px)] leading-[100%] tracking-[0] text-center uppercase text-[#474747] pt-[10px] opacity-[0.05]">
    Lifebody
  </h1>

          {/* Heading, paragraph, buttons */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-[1016px] px-4 sm:px-6 md:px-8 mt-[50px] mb-[83px] gap-[40px]">
            <h1 className="text-[64px] font-ivy font-normal text-center leading-[135%] text-[#474747]">
              Discover, Transform, Thrive: Your Odyssey Starts at <span className="text-[#E05F40]">Lifebody Studio</span>
            </h1>

            <p className="w-full max-w-[1016px] text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-tt font-light text-center text-[#171717] leading-[150%]">
              Sessions for Every Soul: Explore our wide range of invigorating sessions tailored to your needs.
            </p>

            <div className="flex justify-between w-full max-w-[495px] gap-[16px] sm:gap-[20px] md:gap-[24px] mx-auto mt-[24px] sm:mt-[32px] lg:mt-[40px] text-[16px] sm:text-[18px] md:text-[20px]">
              <button
  className="
    w-full max-w-[235.5px] h-[53px] 
    px-[32px] py-[8px] 
    rounded-[8px] 
    border border-[#474747] 
    hover:bg-white 
    text-black 
    text-lg 
    hover:text-[#E05F40] 
    hover:border-[#E05F40] 
    transition-all duration-300
  "
>
  Explore Class
</button>

              <button className="relative overflow-hidden w-full max-w-[235.5px] h-[53px] bg-[#474747] text-white rounded-lg text-lg group">
  {/* Hover fill layer */}
  <span className="absolute top-0 left-0 w-0 h-full bg-[#E05F40] group-hover:w-full transition-all duration-1000 ease-in-out z-0"></span>

  {/* Button text */}
  <span className="relative z-10 font-normal whitespace-nowrap">
    Book a Tour
  </span>
</button>

            </div>
          </div>
        </div>

        {/* Location Badge */}
        <div className="mx-auto w-full max-w-[329px] flex flex-col items-center gap-[16px] sm:gap-[20px] text-center transform -translate-y-[40px] sm:-translate-y-[60px]">
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
      </div>
  )
}

export default HeroSection