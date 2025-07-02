import React from 'react'

const Contact = () => {
  return (
 
    <div
  className="w-full max-w-[1920px] mx-auto px-4 md:px-[96px] py-[96px] bg-white flex flex-col lg:flex-row gap-[24px] justify-center items-center border-t border-b border-dashed border-[#E5E5E5]"
>
  
<div className="group w-full max-w-[756px] min-h-[250px] p-[24px] rounded-[16px] border border-[#E5E5E5] flex flex-col items-center justify-center overflow-hidden transition-all duration-500 ease-in-out">

  {/*  Default content — visible initially */}
  <div className="flex flex-col items-center text-center gap-[10px] transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:h-0 group-hover:overflow-hidden">
    <div className="relative w-[44px] h-[44px] ml-[-6px]">
      <img src="/image/icon.JPG" alt="Find Us Icon" className="absolute w-[29.33px] h-[33.89px] top-[5.5px] left-[7.33px]" />
    </div>

    <h2 className="text-[28px] font-ivy font-normal text-[#474747] leading-[120%] w-[127px]">
      Find Us
    </h2>

    <p className="font-tt text-[15px] text-gray-600 leading-[120%] max-w-[303px]">
      78 Church Road Barnes, London SW13 9DN
    </p>

    <div className="flex gap-[24px] justify-center">
      <p className="font-tt text-[15px] text-gray-600">0777 281 5515</p>
      <p className="font-tt text-[15px] text-gray-600">0208 879 3682</p>
    </div>
  </div>

  {/* 🔹 Hover content — hidden by default, shown on hover */}
  <div className="flex items-center justify-center gap-[24px] opacity-0 h-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:h-auto group-hover:mt-[24px] text-center">
    <h1 className="font-ivy font-normal text-[40px] leading-[135%] text-[#474747] max-w-[363px] text-center">
      View on Google Map
    </h1>
    <div className="w-[64px] h-[64px]">
      <img src="/image/icon2.png" alt="icon2" className="w-full h-full object-contain" />
    </div>
  </div>
</div>




  {/* OPENING HOURS CARD */}
 <div className="group w-full max-w-[756px] min-h-[250px] p-[24px] gap-[24px] rounded-[16px] border border-[#E5E5E5] flex flex-col items-center justify-center overflow-hidden transition-all duration-500 ease-in-out">

  {/*  Default content — visible initially */}
  <div className="flex flex-col items-center text-center gap-[16px] transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:h-0 group-hover:overflow-hidden">
    
    {/* Icon */}
    <div className="relative w-[44px] h-[44px]">
      <img src="/image/Frame_1.png" alt="Clock Outer" className="absolute w-full h-full object-contain" />
    </div>

    {/* Title */}
    <h2 className="text-[24px] sm:text-[26px] md:text-[28px] font-ivy font-normal text-[#474747] leading-[120%] text-center">
      Opening Hours
    </h2>

    {/* Timings */}
    <div className="w-full max-w-[304px] flex justify-between gap-2 text-[15px] text-[#474747]">
      <div className="text-left space-y-1">
        <h2 className="font-tt font-normal">Mon - Thurs</h2>
        <h2 className="font-tt font-normal">Fri - Sun</h2>
      </div>
      <div className="text-right space-y-1">
        <h2 className="font-tt font-normal">08:00 - 18:00</h2>
        <h2 className="font-tt font-normal">08:00 - 19:00</h2>
      </div>
    </div>
  </div>

  {/* 🔹 Hover content — hidden by default, shown on hover */}
  <div className="flex flex-col sm:flex-row items-center justify-center gap-[24px] opacity-0 h-0 overflow-hidden transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:h-auto group-hover:mt-[24px]">
    <h1 className="font-ivy font-normal text-[40px] leading-[135%] text-[#474747] text-center max-w-[363px]">
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