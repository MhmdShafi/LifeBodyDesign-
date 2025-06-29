

import { useState } from 'react';
import { Link } from 'react-router-dom';

const DropdownBtns = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDropdown = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='w-[1920px] h-[658px] gap-[40px] pt-[96px] pr-[192px] pb-[96px] pl-[192px] '>
      {items.map((section, index) => (
        <div key={index}>
          {/* Main box */}
          <div className='w-[1536px] h-[213px] gap-[16px] rounded-[16px] border p-[48px] flex flex-col items-center justify-center mb-[10px]'>
            <h2 className='font-ivy font-normal text-[48px] leading-[135%] tracking-[0] w-[345px] h-[65px] text-center whitespace-nowrap'>
              {section.title}
            </h2>
            <Link
              onClick={() => toggleDropdown(index)}
              className='font-tt font-normal text-[24px] leading-[150%] tracking-[0] w-[306px] h-[36px] text-center text-blue-600 cursor-pointer whitespace-nowrap'
            >
              {activeIndex === index
                ? `Exploring ${section.title.toLowerCase()}`
                : `Click to explore ${section.title.toLowerCase()}`}
            </Link>
          </div>


          {/* Dropdown items */}
          {activeIndex === index && (
            <>
              {section.items.map((item, i) => (
  <div key={item.id}>
    {/* Dropdown item row */}
    <div className="flex w-[1536px] min-h-[135px] gap-[48px] pt-[24px] pr-[32px] pb-[24px] pl-[32px] rounded-[16px] bg-white">
      <div className="font-ivy font-normal text-[32px] leading-[135%] tracking-[0] align-middle">
        {item.title}
      </div>
      <div className="w-[935px] font-tt font-normal text-[24px] leading-[120%] tracking-[0]">
        {item.description}
      </div>
      <div className="w-[181px] h-[54px] font-tt font-semibold text-[40px] leading-[135%] tracking-[0] text-center align-middle">
        {item.price}
      </div>
    </div>

    {/* Divider line */}
    <div className="w-[1536px] h-[1px] bg-[#C0C0C0] my-[8px]"></div>
  </div>
))}


              {/* Show Less Link */}
              <div className='w-[1536px] h-[213px] gap-[64px]'>
                <Link
                  onClick={() => setActiveIndex(null)}
                  className='text-blue-600 text-sm font-tt underline cursor-pointer'
                >
                  Show Less
                </Link>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default DropdownBtns;
