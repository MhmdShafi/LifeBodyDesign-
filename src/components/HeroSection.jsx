

import React from 'react';

const HeroSection = () => (
  <div
    className="
      relative w-full max-w-[1920px] mx-auto overflow-hidden
      h-[650px]         
      sm:h-[700px]      
      md:h-[650px]       
      lg:h-[800px]      
      xl:h-[1010px]    
      
    "
  >
    {/* background – one layer, never repeats */}
    <div
      className="
       
      
        sm:h-[1010px]
        absolute inset-0
        bg-[url('/image/bg-image.jpg')]
        bg-center
        bg-no-repeat
        bg-[length:100%_650px]  /* base 650 px tall            */
        sm:bg-[length:100%_700px]
        md:bg-[length:100%_900px]
        lg:bg-cover              /* ≥ lg: just cover           */
        opacity-20
        pointer-events-none
        sm:translate-y-0
        md:translate-y-[-90px]
        lg:h-[1080px]
        lg:py-[200px]
      "
    />

    {/* content (unchanged) */}
    <div className="relative z-10 sm:top-[120px] flex flex-col items-center">
     <h1 className="font-ivy font-normal w-full lg:max-w-[1797px] lg:mx-auto uppercase text-[#474747] opacity-[0.05] leading-[100%] md:pl-[45px] whitespace-nowrap mt-[120px] lg:mt-[150px] md:mt-[180px] text-[clamp(120px,20vw,400px)]">
  Lifebody
</h1>


      <div className="w-full max-w-[1016px] px-4 sm:px-6 md:px-8 translate-y-[clamp(-350px,-20vw,10px)] text-center">
        <h2 className="font-ivy font-normal text-[#474747] leading-[135%] w-[clamp(110px,80vw,1016px)] lg:text-[clamp(48px,5vw,64px)]">
          Discover, Transform, Thrive: Your Odyssey Starts at <span className="text-[#E05F40]">Lifebody Studio</span>
        </h2>
        <p className="mt-4 font-tt font-light text-[#171717] leading-[150%] text-[16px] sm:text-[20px] md:text-[22px] lg:text-[24px]">
          Sessions for Every Soul: Explore our wide range of invigorating sessions tailored to your needs.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-[16px] sm:gap-[20px] md:gap-[24px] mt-[24px] sm:mt-[32px] lg:mt-[40px] w-full max-w-[495px] mx-auto">
          <button className="cursor-pointer w-full max-w-[235.5px] h-[53px] px-[32px] py-[8px] rounded-[8px] border border-[#474747] font-tt font-normal text-lg text-black hover:bg-white hover:text-[#E05F40] hover:border-[#E05F40] transition-all duration-300">
            Explore Class
          </button>
          <button className="cursor-pointer relative overflow-hidden w-full max-w-[235.5px] h-[53px] bg-[#474747] text-white rounded-lg text-lg group">
            <span className="absolute top-0 left-0 w-0 h-full bg-[#E05F40] group-hover:w-full transition-all duration-1000 ease-in-out z-0" />
            <span className="relative z-10 font-tt font-normal whitespace-nowrap">Book a Tour</span>
          </button>
        </div>
      </div>

      <div className="absolute bottom-[40px] left-1/2 -translate-x-1/2 sm:translate-y-[200px] md:translate-y-[-5px] flex flex-col items-center gap-[20px] text-center w-full max-w-[329px] h-[100px]">
        <div className="w-[44px] h-4[40px] flex items-center justify-center">
          <img src="/image/Frame.png" alt="icon" />
        </div>
        <span className="font-tt font-light text-[15px] leading-[60%] max-w-[329px] text-[#474747]">
          LONDON PILATES STUDIO BARNES
        </span>
      </div>
    </div>
  </div>
);

export default HeroSection;


