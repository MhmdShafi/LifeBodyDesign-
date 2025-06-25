
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
    <div className='w-full h-[993px] pb-[150px] gap-[20px] bg-[#FAFAF5] -translate-y-[800px]'>
      
      {/* Top Nav Buttons */}
      <div className='w-[80%] h-[102px] rounded-[12px] pt-[70px] pl-[150px] flex  gap-[1px]'>
        {items.map((item, index) => (
          <Link
            key={item.id}
            onClick={() => handleChange(index)}
            className={`font-ivy font-formal w-[155px] h-[102px] flex items-center justify-center text-center  ${
              index === currentIndex ? ' text-[40px] text-[#E05F40] rounded-[8px]' : ''
            }`}
          >
            {item.title}
          </Link>
        ))}
      </div>

      {/* Content Section */}
      <div className='w-[1300px] h-[535px] flex gap-[24px]'>
        <div className='w-[756px] h-[535px] pt-[64px] pl-[130px] gap-[12px]'>
          <div className='w-[628px] h-[101px] gap-[8px]'>
            <p className="font-tt font-normal text-[18px] leading-[150%] tracking-[0%] w-[628px] h-[33px]">
              {currentItem.subtitle}
            </p>
            <h1 className="font-ivy font-normal text-[40px] leading-[150%] tracking-[0%] w-[628px] h-[60px]">
              {currentItem.heading}
            </h1>
            <p className="font-tt font-normal text-[12px] leading-[150%] tracking-[-1%] w-[408px] h-[128px]">
              {currentItem.description}
              <br /><br />{currentItem.extra}
            </p>
            <div className="flex justify-center w-[350px] h-[62px] gap-[11px] ml-[2px] mt-[20px] p-0 text-[10px]">
              <button className="w-[164px] h-[40px] px-[10px] py-[8px] rounded-[8px] border border-solid border-gray-800 bg-white text-black">
                <span>More Detail</span>
              </button>
              <button className="w-[234px] h-[40px] bg-[#474747] text-white rounded-lg">
                <span>Book Discovery Class</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Side Image */}
        <div className='w-[480px] h-[435px] pt-[100px]  flex justify-end items-center'>
          <img src={currentItem.image} alt={currentItem.title} className="w-full h-full object-cover rounded-[12px]" />
        </div>
      </div>

      {/* Prev/Next Buttons */}
      <div className='w-[80px] h-[5px] gap-[8px] -translate-y-[60px] flex mx-auto'>
        <button onClick={handlePrev} className='w-[68px] h-[30px] rounded-[16px] bg-[#EAE8E2]'>
          <img src="/public/image/Previous.png" alt="Previous" />
        </button>
        <button onClick={handleNext} className='w-[68px] h-[30px] rounded-[30px] bg-[#EAE8E2]'>
          <img src="/public/image/Next.png" alt="Next" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
