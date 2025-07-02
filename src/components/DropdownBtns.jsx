import { useState } from 'react';
import { Link } from 'react-router-dom';

const DropdownBtns = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showMoreMap, setShowMoreMap] = useState({});

  const toggleDropdown = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const toggleShowMore = (index) => {
    setShowMoreMap((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-[96px] pt-24 pb-24 space-y-10 bg-white">
      {items.map((section, index) => (
        <div
          key={index}
          className="w-full max-w-[1536px] min-h-[213px] rounded-[16px] mx-auto px-4 sm:px-6 lg:px-[96px] pt-24 pb-24 border border-[#E5E5E5] space-y-10 bg-white hover:bg-[#FAFAF5] transition-colors duration-500 ease-in-out"
        >
          {/* Main box */}
          <div className="w-full flex flex-col items-center gap-4 group transition-all duration-500 ease-in-out">
            <h2 className="text-center whitespace-nowrap leading-[135%] transition-all duration-500 ease-in-out font-ivy text-[32px] sm:text-[40px] lg:text-[48px] group-hover:font-tt group-hover:text-[24px] group-hover:w-[153px] group-hover:h-[36px]">
              {section.title}
            </h2>

            <Link
              to="#"
              onClick={() => toggleDropdown(index)}
              className="block text-center text-[#474747] font-tt text-[24px] leading-[150%] px-4 py-2 rounded cursor-pointer mx-auto transition-all duration-500 ease-in-out group-hover:font-ivy group-hover:text-[48px] group-hover:leading-[135%] group-hover:w-[679px] group-hover:h-[65px]"
            >
              Click to explore {section.title.toLowerCase()}
            </Link>
          </div>

          {/* Dropdown Items */}
          {activeIndex === index && (
            <>
              {(showMoreMap[index] ? section.items : section.items.slice(0, 5)).map((item) => (
                <div key={item.id}>
                  <div className="w-full max-w-[1536px] mx-auto flex flex-col md:flex-row gap-6 md:gap-12 p-6 bg-white rounded-[16px]">
                    <div className="font-ivy text-[24px] md:w-[260px] h-[43px] sm:text-[28px] md:text-[32px] leading-[135%] pt-[10px] uppercase">
                      {item.title}
                    </div>
                    <div className="flex-1 font-tt text-[18px] md:w-[935px] h-[87px] sm:text-[20px] md:text-[24px] leading-[120%]">
                      {item.description}
                    </div>
                    <div className="w-full md:w-[181px] h-[54px] text-[32px] sm:text-[36px] md:text-[40px] font-tt font-semibold text-center">
                      {item.price}
                    </div>
                  </div>
                  <div className="w-full max-w-[1536px] mx-auto h-[1px] bg-[#C0C0C0] my-2" />
                </div>
              ))}

              {/* View More / View Less */}
              {section.items.length >5 && (
                <div className="w-full max-w-[1536px] mx-auto text-center mt-6">
                  {showMoreMap[index] ? (
                    <Link
                      onClick={() => {
                        setShowMoreMap((prev) => ({
                          ...prev,
                          [index]: false
                        }));
                        setActiveIndex(null);
                      }}
                      className="text-[#E05F40] text-sm font-tt underline cursor-pointer"
                    >
                      View Less
                    </Link>
                  ) : (
                    <Link
                      onClick={() => toggleShowMore(index)}
                      className="text-[#E05F40] text-sm font-tt underline cursor-pointer"
                    >
                      View More
                    </Link>
                  )}
                </div>
              )}
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default DropdownBtns;
