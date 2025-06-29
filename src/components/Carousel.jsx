
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentItem = items[currentIndex];
   console.log(currentIndex);
  const handleChange = (index) => setCurrentIndex(index);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % items.length);

  return (
    <div className='w-[1920px] h-[993px] gap-[48px] pt-[96px] pr-[192px] pb-[96px] pl-[192px] bg-[#FAFAF5] '>

  {/* Top Nav Buttons */}
  <div className='w-[1536px] h-[102px] flex justify-between rounded-[12px] p-[4px]'>
    {items.map((item, index) => (
      <Link
        key={item.id}
        onClick={() => handleChange(index)}
        className={`font-ivy font-formal w-[155px] h-[73px] flex items-center justify-center text-center  ${
          index === currentIndex ? ' text-[40px] text-[#E05F40] rounded-[8px] whitespace-nowrap ' : ''
        }`}
      >
        {item.title}
      </Link>
    ))}
  </div>

  {/* Two Columns Side by Side */}
  <div className="flex justify-between mt-[48px]">
    {/* Left Side Content */}
    <div className='w-[756px] h-[535px] gap-[32px] p-[64px] '>
      <div className='w-[628px] h-[101px] gap-[8px]'>
        <p className="font-tt font-normal text-[18px] leading-[150%] tracking-[0%] w-[628px] h-[33px]">
          {currentItem.subtitle}
        </p>
        <h1 className="font-ivy font-normal text-[40px] leading-[150%] tracking-[0%] w-[628px] h-[60px]">
          {currentItem.heading}
        </h1>
      </div>
      <div className='w-[628px] h-[180px]'>
        <p className="font-tt font-normal text-[20px] leading-[150%] tracking-[-0.01em]">
          {currentItem.description}
          <br /><br />{currentItem.extra}
        </p>
      </div>
      <div className="flex items-center justify-center w-[414px] h-[62px] gap-[16px] mt-[32px]">
        <button className="w-[164px] h-[62px] 
         pt-[16px] pr-[32px] pb-[16px] pl-[32px] rounded-[8px] border">
          <span className='flex w-[100px] h-[30px] font-tt font-medium text-[20px] leading-[150%] tracking-[0] text-center align-middle'>More Detail</span>
        </button>
        <button className="w-[234px] h-[62px] 
         pt-[16px] pr-[32px] pb-[16px] pl-[32px] ml-[6px] mt-[1px] rounded-[8px] bg-[#474747]">
          <span className='flex text-white whitespace-nowrap w-[170px] h-[30px] font-tt font-medium text-[20px] leading-[150%] tracking-[0] text-center align-middle'>Book Discovery Class</span>
        </button>
      </div>
    </div>

    {/* Right Side Image */}
    <div className='mx-right w-[756px] h-[535px] gap-[24px]  rounded-[24px] '>
      <img src={currentItem.image} alt={currentItem.title} className="w-[756px] h-[535px] object-cover" />
    </div>
  </div>

  {/* Prev/Next Buttons */}
  <div className='flex justify-between justify-center ml-[630px] mt-[50px] w-[176px] h-[68px] gap-[40px]'>
    <button onClick={handlePrev} className='w-[68px] h-[68px] rounded-[30px] bg-[#EAE8E2] bg-[#EAE8E2]'>
<img src="/image/Previous.png" alt="Pre" />
    </button>
    <button onClick={handleNext} className='w-[68px] h-[68px] rounded-[30px] bg-[#EAE8E2]'>
      <img src="/image/Next.png" alt="Next" />
    </button>
  </div>
</div>

  );
};

export default Carousel;
