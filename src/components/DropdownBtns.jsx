import { useState } from 'react';
import { Link } from 'react-router-dom';

const DropdownBtns = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDropdown = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-[96px] pt-24 pb-24 space-y-10 bg-white">
      {items.map((section, index) => (
        <div  key={index} className='w-full max-w-[1536px] min-h-[213px] rounded-[16px] mx-auto px-4 sm:px-6 lg:px-[96px] pt-24 pb-24 border border-[#E5E5E5] space-y-10 bg-white'>
          {/* Main box */}
          <div className="">
            <h2 className="font-ivy text-[32px] sm:text-[40px] lg:text-[48px] text-center leading-[135%]">
              {section.title}
            </h2>
            <Link
              onClick={() => toggleDropdown(index)}
              className="block mx-auto font-tt font-normal text-[24px] leading-[150%] text-[#474747] text-center px-4 py-2 rounded cursor-pointer"
            >
              {activeIndex === index
                ? `Exploring ${section.title.toLowerCase()}`
                : `Click to explore ${section.title.toLowerCase()}`}
            </Link>
          </div>

          {/* Dropdown Items */}
          {activeIndex === index && (
            <>
              {section.items.map((item) => (
                <div key={item.id}>
                  <div className="w-full max-w-[1536px] mx-auto flex flex-col md:flex-row gap-6 md:gap-12 p-6 bg-white rounded-[16px]">
                    <div className="font-ivy text-[24px] sm:text-[28px] md:text-[32px] leading-[135%] pt-[10px]">
                      {item.title}
                    </div>
                    <div className="flex-1 font-tt text-[18px] sm:text-[20px] md:text-[24px] leading-[120%]">
                      {item.description}
                    </div>
                    <div className="w-full md:w-[181px] text-[32px] sm:text-[36px] md:text-[40px] font-tt font-semibold text-center">
                      {item.price}
                    </div>
                  </div>
                  <div className="w-full max-w-[1536px] mx-auto h-[1px] bg-[#C0C0C0] my-2" />
                </div>
              ))}

              {/* Show Less */}
              <div className="w-full max-w-[1536px] mx-auto text-center mt-6">
                <Link
                  onClick={() => setActiveIndex(null)}
                  className="text-[#E05F40] text-sm font-tt underline cursor-pointer"
                >
                  View Less
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
