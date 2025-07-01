import React from 'react'

const Contact = () => {
  return (
 
    <div
  className="w-full max-w-[1920px] mx-auto px-4 md:px-[96px] py-[96px] bg-white flex flex-col lg:flex-row gap-[24px] justify-center items-center border-t border-b border-dashed border-[#E5E5E5]"
>
  
 <div className="w-full max-w-[756px] p-[24px] gap-[14px] rounded-[16px] border border-[#E5E5E5] flex flex-col items-center">
  <div className="relative w-[44px] h-[44px] ml-[-24px]">
    <img src="/image/Vector_1.png" alt="Find Us Icon" className="absolute w-[29.33px] h-[33.89px] top-[5.5px] left-[7.33px]" />
    <img src="/image/Vector.png" alt="Inner Icon" className="absolute w-[11px] h-[11px] top-[14.67px] left-[16.5px]" />
  </div>

  <h2 className="text-[28px] font-ivy font-normal text-[#474747] leading-[120%] w-[127px] text-center">
    Find Us
  </h2>

  <div className="text-center pt-[10px]">
    <p className="font-tt text-[15px] text-gray-600 leading-[120%] max-w-[303px] mx-auto">
      78 Church Road Barnes, London SW13 9DN
    </p>

    <div className="flex gap-[24px] justify-center mt-[10px]">
      <p className="font-tt text-[15px] text-gray-600">0777 281 5515</p>
      <p className="font-tt text-[15px] text-gray-600">0208 879 3682</p>
    </div>
  </div>
</div>


  {/* OPENING HOURS CARD */}
  <div className="w-full max-w-[756px]  p-[24px] gap-[24px] rounded-[16px] border border-[#E5E5E5] flex flex-col items-center">
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

</div>

  )
}

export default Contact