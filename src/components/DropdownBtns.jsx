import { useState } from 'react';
import { Link } from 'react-router-dom';

const DropdownBtns = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showMoreMap, setShowMoreMap] = useState({});
  const [hasHoveredMap, setHasHoveredMap] = useState({});
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
          className={`w-full max-w-[1536px] min-h-[213px] rounded-[16px] mx-auto px-4 sm:px-6 lg:px-[96px] pt-24 pb-24 border border-[#E5E5E5] space-y-10 transition-colors duration-500 ease-in-out ${activeIndex === index ? 'bg-white' : 'hover:bg-[#FAFAF5] bg-white'
            }`}
        >

          {/* Main box */}

          <div className="group contents">
            <h2
              className={`text-center w-full mx-auto whitespace-nowrap leading-[135%] font-ivy text-[32px] sm:text-[40px] lg:text-[48px]
      transition-all duration-700 delay-300 ease-in-out transform
      ${section.title === 'Levels'
                  ? 'max-w-[125px] h-[65px]'
                  : 'max-w-[345px] h-[65px]'} 
      group-hover:font-tt group-hover:text-[24px] 
      group-hover:w-[153px] group-hover:h-[36px]
      group-hover:-translate-y-6 group-hover:translate-x-6`}
            >
              {section.title}
            </h2>

            <Link
              to="#"
              onClick={() => toggleDropdown(index)}
              className={`block text-center  ${section.title === 'Levels'
                ? 'max-w-[213px] h-[36px]'
                : 'max-w-[306px] h-[36px]'} whitespace-nowrap w-full text-[#474747] font-tt text-[24px] leading-[150%] px-4 py-2 rounded cursor-pointer mx-auto
      transition-all duration-700 delay-500 ease-in-out transform
      ${section.title === 'Levels'
                  ? 'max-w-[458px] h-[65px]'
                  : 'max-w-[679px] h-[65px]'} 
      group-hover:font-ivy group-hover:text-[48px] group-hover:leading-[135%] group-hover:w-[679px] group-hover:h-[65px]
      group-hover:-translate-y-4 group-hover:translate-x-4`}
            >
              <span className='capitalize'>Click to explore {section.title.toLowerCase()}</span>
            </Link>
          </div>

          {/* Dropdown Items */}
          {activeIndex === index && (
            <>
              {(showMoreMap[index] ? section.items : section.items.slice(0, 5)).map((item) => (
                <div key={item.id}>
                  <div className="w-full max-w-[1584px]  mx-auto relative group">

                    <div className="w-full max-w-[1536px] h-[135px] pb-[30px] pt-[10px] items-center flex flex-col md:flex-row gap-6 md:gap-12  bg-white rounded-[16px] group-hover:hidden transition-all duration-1000 ease-in-out">
                      {/* Title */}
                      <div className="font-ivy text-[24px] w-full max-w-[260px] h-[43px] sm:text-[28px] md:text-[32px] item-center leading-[135%] pt-[10px] uppercase">
                        {item.title}
                      </div>

                      <div className="flex-1 font-tt text-[18px] w-full max-w-[935px]  sm:text-[20px] md:text-[24px] leading-[120%] line-clamp-2">
                        {item.description}
                      </div>


                      <div className="w-full md:w-[181px] h-[54px] flex items-center justify-center gap-2 font-tt text-center">
                        <span className="text-[32px] sm:text-[36px] md:text-[40px] font-semibold">
                          {item.price.split('/')[0]}
                        </span>
                        <span className="text-[18px] sm:text-[20px] md:text-[24px] font-normal">
                          /{item.price.split('/')[1]}
                        </span>
                      </div>



                    </div>



                    <div
                      className="w-full max-w-[1536px] h-[135px] pb-[30px] pt-[10px] hidden group-hover:flex flex-col md:flex-row items-center justify-center md:gap-12 bg-[#FAFAF5] rounded-[16px] z-20 shadow-md transition-all duration-700 ease-in-out"
                      onMouseEnter={() =>
                        setHasHoveredMap((prev) => ({ ...prev, [item.id]: true }))
                      }
                    >
                      {/* Title - stays static */}
                      <div className="font-ivy mx-auto text-[24px] sm:text-[28px] md:text-[32px] pl-[32px] md:w-[260px] h-[43px] leading-[135%] uppercase">
                        {item.title}
                      </div>

                      {/* Description - animated in only on first hover */}
                      <div
                        className={`transition-all duration-1000 ease-in-out transform ${hasHoveredMap[item.id] ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                          } flex-1 font-tt text-[18px] sm:text-[20px] md:text-[24px] text-[#404040] leading-[120%] w-full max-w-[823px] line-clamp-2`}
                      >
                        {item.description}
                      </div>

                      {/* Price - same animation as description */}
                      <div
                        className={`transition-all duration-1000 delay-200 ease-in-out transform ${hasHoveredMap[item.id] ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                          } w-full mx-auto md:w-[181px] h-[54px] flex items-center justify-center gap-2 font-tt text-center`}
                      >
                        <span className="text-[32px] sm:text-[36px] md:text-[40px] font-semibold">
                          {item.price.split('/')[0]}
                        </span>
                        <span className="text-[18px] sm:text-[20px] md:text-[24px] font-normal">
                          {item.price.split('/')[1]}
                        </span>
                      </div>

                      {/* Icon - delayed fade in */}
                      <div
                        className={`transition-opacity duration-1000 delay-500 ease-in-out ${hasHoveredMap[item.id] ? 'opacity-100' : 'opacity-0'
                          }`}
                      >
                        <img
                          src="/image/icon3.png"
                          alt="Icon"
                          className="w-[64px] h-[64px] object-contain"
                        />
                      </div>
                    </div>



                  </div>


                </div>
              ))}

              {/* View More / View Less */}
              {section.items.length > 5 && (
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
                      className="text-[#E05F40] max-w-[100px] h-[36px] text-sm font-tt underline cursor-pointer"
                    >
                      View Less
                    </Link>
                  ) : (
                    <Link
                      onClick={() => toggleShowMore(index)}
                      className="text-[#E05F40] max-w-[100px] h-[36px] text-sm font-tt underline cursor-pointer"
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
