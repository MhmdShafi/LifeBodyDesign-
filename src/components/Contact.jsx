import React from 'react'

const Contact = () => {
  return (
 
    <div
  className="w-full max-w-[1920px] mx-auto px-4 md:px-[96px] py-[96px] bg-white flex flex-col lg:flex-row gap-[24px] justify-center items-center border-t border-b border-dashed border-[#E5E5E5]"
>
  
  <div className="w-[756px] h-[258px] gap-[24px] pt-[24px] pr-[48px] pb-[24px] pl-[48px] rounded-[16px] border border-[#E5E5E5] flex flex-col items-center">
    <div className="relative w-[44px] h-[44px]">
      <img src="/image/Vector_1.png" alt="Find Us Icon" className="absolute w-[29.33px] h-[33.89px] top-[5.5px] left-[7.33px]" />
      <img src="/image/Vector.png" alt="Inner Icon" className="absolute w-[11px] h-[11px] top-[14.67px] left-[16.5px]" />
    </div>
   
    <h2 className="text-[28px] font-ivy font-normal text-[#474747] leading-[120%] w-[127px] ">
      Find Us
    </h2>

    <p className="font-tt text-[15px] text-center text-gray-600 leading-[120%] max-w-[303px]">
      78 Church Road Barnes, London SW13 9DN
    </p>

    <div className="flex gap-[20px] mt-2">
      <p className="font-tt text-[15px] text-gray-600">0777 281 5515</p>
      <p className="font-tt text-[15px] text-gray-600">0208 879 3682</p>
    </div>
  </div>

  {/* OPENING HOURS CARD */}
  <div className="w-[756px] h-[260px] gap-[24px] pt-[24px] pr-[48px] pb-[24px] pl-[48px] rounded-[16px] border border-[#E5E5E5] flex flex-col items-center">
    <div className="relative w-[44px] h-[44px]">
      <img src="/image/Frame_1.png" alt="Clock Outer" className="absolute" />
    </div>

    <h2 className="text-[28px] font-ivy font-normal text-[#474747] leading-[120%]">
      Opening Hours
    </h2>

    <div className="w-[304px] flex justify-between">
      <div className="text-left">
        <h2 className="font-tt font-normal text-[15px]">Mon - Thurs</h2>
        <h2 className="font-tt font-normal text-[15px]">Fri - Sun</h2>
      </div>
      <div className="text-right">
        <h2 className="font-tt font-normal text-[15px]">08:00 - 18:00</h2>
        <h2 className="font-tt font-normal text-[15px]">08:00 - 19:00</h2>
      </div>
    </div>
  </div>
</div>

  )
}

export default Contact