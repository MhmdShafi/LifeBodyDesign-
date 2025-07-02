
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
    <div className='w-full max-w-[1920px] h-auto gap-12 
  pt-12 px-4 
  sm:px-8 sm:pt-20 
  md:px-20 
  lg:px-32 lg:pt-24 
  bg-[#FAFAF5] mx-auto'>

  {/* Top Nav Buttons */}
  <div className='w-full max-w-[1536px] h-auto flex justify-between rounded-[12px] p-1 sm:p-2 md:p-4w-[1536px] h-[102px] flex justify-between rounded-[12px] p-[4px]'>
    {items.map((item, index) => (
     <Link
  key={item.id}
  onClick={() => handleChange(index)}
  className={`font-ivy font-formal flex items-center justify-center text-center text-[#474747] 
    ${index === currentIndex 
      ? 'w-[214px] h-[73px] text-[#E05F40] rounded-[8px]' 
      : 'w-auto h-[73px]'}`
  }
>
  <span
    className={`flex items-center justify-center text-center whitespace-nowrap transition-all duration-300
      ${
        index === currentIndex
          ? 'w-[214px] h-[54px] text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px]'
          : 'min-w-[75px] min-h-[33px] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px]'
      }`}
  >
    {item.title}
  </span>
</Link>


    ))}
  </div>

  {/* Two Columns Side by Side */}
  <div className="flex flex-wrap justify-between items-start mt-12 gap-6 max-w-[1536px] w-full">
  {/* Left Side Content */}
  <div className="w-full max-w-[756px] md:w-[48%] h-auto md:h-[535px]  flex flex-col gap-8">
    <div className="max-w-[628px]">
      <p className="font-tt text-[16px] md:text-[18px] leading-[150%]">
        {currentItem.subtitle}
      </p>
      <h1 className="font-ivy text-[28px] md:text-[40px] text-[#474747] leading-[150%] mt-2">
        {currentItem.heading}
      </h1>
    </div>

    <div className="max-w-[628px]">
      <p className="font-tt text-[16px] md:text-[20px] leading-[150%] text-[#474747]">
        {currentItem.description}
        <br /><br />{currentItem.extra}
      </p>
    </div>

    <div className="flex flex-wrap gap-4 mt-6">
      <button className="px-8 py-4 rounded-[8px] border w-full sm:w-auto">
        <span className="font-tt text-[16px] md:text-[20px] text-center">More Detail</span>
      </button>
      <button className="px-8 py-4 rounded-[8px] bg-[#474747] text-white w-full sm:w-auto">
        <span className="font-tt text-[16px] md:text-[20px] text-center">Book Discovery Class</span>
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
    <button onClick={handlePrev} className="w-[68px] h-[68px] rounded-[30px] bg-[#EAE8E2] flex items-center justify-center">
      <img src="/image/Previous.png" alt="Previous" />
    </button>
    <button onClick={handleNext} className="w-[68px] h-[68px] rounded-[30px] bg-[#EAE8E2] flex items-center justify-center">
      <img src="/image/Next.png" alt="Next" />
    </button>
  </div>
</div>

</div>

  );
};

export default Carousel;
