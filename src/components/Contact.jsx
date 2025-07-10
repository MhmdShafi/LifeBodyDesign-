import React from 'react'

const Contact = () => {
  return (
 
    <div
  className="w-full max-w-[1920px] h-[452px] mx-auto px-4 md:px-[96px] py-[96px] bg-white flex flex-col lg:flex-row gap-[24px] justify-center items-center   border-[#E5E5E5]"
>
  
<div className="group relative w-full max-w-[756px] min-h-[250px] p-[24px] rounded-[16px] border border-[#E5E5E5] flex items-center justify-center overflow-hidden transition-all duration-500 ease-in-out hover:bg-[#FAFAF5] hover:cursor-pointer">

  <div className="absolute inset-0 flex flex-col items-center text-center gap-[24px] top-[24px] transition-all duration-500 ease-in-out 
    group-hover:opacity-0 group-hover:pointer-events-none">
    
    <div className="relative w-[44px] h-[44px] ml-[-6px]">
      <img src="/image/icon.JPG" alt="Find Us Icon" className="absolute w-[29.33px] h-[33.89px] top-[5.5px] left-[7.33px]" />
    </div>

    <h2 className="text-[28px] font-ivy font-regular text-[#474747] leading-[120%] w-[127px]">
      Find Us
    </h2>

   <p className="font-tt font-regular text-[18px] text-[#474747] leading-[150%] max-w-[303px]">
  78&nbsp;Church&nbsp;Road&nbsp;Barnes,&nbsp;London&nbsp;SW13&nbsp;9DN
</p>


    <div className="flex gap-[24px] justify-center">
      <p className="font-tt font-regular text-[18px] text-gray-600">0777 281 5515</p>
      <p className="font-tt font-regular text-[18px] text-gray-600">0208 879 3682</p>
    </div>
  </div>

  <div className="absolute inset-0 flex items-center justify-center gap-[24px] opacity-0 pointer-events-none transition-all duration-500 ease-in-out 
    group-hover:opacity-100 group-hover:pointer-events-auto">
    
    <h1 className="font-ivy font-regular text-[40px] leading-[135%] text-[#474747] max-w-[363px] text-center">
      View on Google Map
    </h1>

    <div className="w-[64px] h-[64px]">
      <img src="/image/icon2.png" alt="icon2" className="w-full h-full object-contain" />
    </div>
  </div>
</div>

<div className="group relative w-full max-w-[756px] min-h-[250px] p-[24px]  gap-[24px] rounded-[16px] border border-[#E5E5E5] flex items-center justify-center overflow-hidden transition-all duration-500 ease-in-out hover:bg-[#FAFAF5] hover:cursor-pointer">

  <div className="absolute inset-0 flex flex-col items-center text-center gap-[24px] top-[24px] transition-all duration-500 ease-in-out 
    group-hover:opacity-0 group-hover:pointer-events-none">
    
    <div className="relative w-[48px] h-[48px]">
      <img src="/image/Frame_1.png" alt="Clock Outer" className="absolute w-full h-full object-contain" />
    </div>

    <h2 className="text-[24px] max-w-[269px] sm:text-[26px] md:text-[40px] font-ivy font-normal text-[#474747] leading-[135%] text-center">
      Opening Hours
    </h2>

    <div className="w-full max-w-[304px] flex justify-between gap-[4px] text-[18px] text-[#474747]">
      <div className="text-left max-w-[86px] h-[58px]">
        <h2 className="font-tt font-regular whitespace-nowrap">Mon<span className='font-ivy font-regular'>&nbsp;-&nbsp;</span>Thurs</h2>
        <h2 className="font-tt font-regular">Fri <span className='font-ivy font-regular'>&nbsp;-&nbsp;</span> Sun</h2>
      </div>
      <div className="text-right space-y-1 max-w-[94px] h-[58px]">
        <h2 className="font-tt font-regular whitespace-nowrap">08:00 <span className='font-ivy font-regular'>- </span> 18:00</h2>
        <h2 className="font-tt font-regular whitespace-nowrap">08:00 <span className='font-ivy font-regular'>- </span>19:00</h2>
      </div>
    </div>
  </div>

  <div className="absolute inset-0 flex flex-col sm:flex-row items-center justify-center gap-[24px] opacity-0 pointer-events-none transition-all duration-500 ease-in-out 
    group-hover:opacity-100 group-hover:pointer-events-auto">
    
    <h1 className="font-ivy font-regular text-[40px] leading-[135%] text-[#474747] text-center max-w-[363px]">
      Contact Us
    </h1>

    <div className="w-[64px] h-[64px]">
      <img src="/image/icon2.png" alt="icon2" className="w-full h-full object-contain" />
    </div>
  </div>
</div>



</div>

  )
}

export default Contact


