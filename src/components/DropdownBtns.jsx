
import { useState } from 'react';
import { Link } from 'react-router-dom';

const DropdownBtns = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [showMoreMap, setShowMoreMap] = useState({});
  const [hasHoveredMap, setHasHoveredMap] = useState({});
  const [cursorPointer, setCursorPointer] = useState(false);

  const splitTextIntoThreeLines = (text) => {
  const words = text.split(' ');
  const line1 = words.slice(0, 15).join(' ');
  const line2 = words.slice(15, 29).join(' ');
  const line3 = words.slice(29).join(' ');
  return `${line1}\n${line2}\n${line3}`;
};


  const toggleDropdown = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const toggleShowMore = (index) => {
    setShowMoreMap((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="w-full  max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-[96px] pt-24 pb-24 space-y-10 bg-white">
      {items.map((section, index) => (
        <div
          key={index}
          onClick={() => toggleDropdown(index)}
          onMouseEnter={() => setCursorPointer(true)}
          onMouseLeave={() => setCursorPointer(false)}
          className={`group ${cursorPointer ? 'cursor-pointer' : 'cursor-default'}
            w-full  max-w-[1536px] min-h-[213px] rounded-[16px] mx-auto px-4 sm:px-6 lg:px-[96px] pt-24 pb-24 border border-[#E5E5E5] space-y-10 transition-colors duration-500 ease-in-out ${activeIndex === index ? 'bg-white' : 'hover:bg-[#FAFAF5] bg-white'
            }`}
        >
          <div className="group contents">
            <h2
              className={`text-center w-full  mx-auto whitespace-nowrap leading-[135%] font-ivy font-regular text-[32px] sm:text-[40px] lg:text-[48px]
                transition-all duration-700 delay-300 ease-in-out transform ${section.title === 'Levels'
                  ? 'max-w-[125px] h-[65px]'
                  : 'max-w-[345px] h-[65px]'
                }
                group-hover:font-tt font-regular group-hover:text-[24px]
                group-hover:max-w-[153px] group-hover:h-[36px]
                group-hover:-translate-y-6 group-hover:translate-x-6`}
            >
              {section.title}
            </h2>

            <Link
              to="#"
              className={`block text-center ${section.title === 'Levels'
                ? 'max-w-[213px] h-[36px]'
                : 'max-w-[306px] h-[36px]'
                } whitespace-nowrap w-full  text-[#474747] font-tt font-regular text-[24px] leading-[150%] px-4 py-2 rounded cursor-pointer mx-auto
                transition-all duration-700 delay-500 ease-in-out transform ${section.title === 'Levels'
                  ? 'max-w-[458px] h-[65px]'
                  : 'max-w-[679px] h-[65px]'
                }
                group-hover:font-ivy font-regular group-hover:text-[48px] group-hover:leading-[135%] group-hover:max-w-[679px] group-hover:h-[65px]
                group-hover:-translate-y-4 group-hover:translate-x-4`}
            >
              <span className="capitalize">
                Click to explore {section.title.toLowerCase()}
              </span>
            </Link>
          </div>

          {activeIndex === index && (
            <>
              {(showMoreMap[index] ? section.items : section.items.slice(0, 5)).map(
                (item) => (
                  <div key={item.id}>
                    <div
                      className={`cursor-default w-full  max-w-[1536px] h-auto py-[20px] flex flex-col md:flex-row items-center md:items-start justify-between md:gap-12 rounded-[16px] z-20 shadomax-w-md ${hasHoveredMap[item.id] ? 'bg-[#FAFAF5]' : 'bg-white'
                        } transition-colors duration-500 ease-in-out`}
                      onMouseEnter={() => {
                        setCursorPointer(false);
                        setHasHoveredMap((prev) => ({
                          ...prev,
                          [item.id]: true,
                        }));
                      }}
                      onMouseLeave={() => {
                        setCursorPointer(true);
                        setHasHoveredMap((prev) => ({
                          ...prev,
                          [item.id]: false,
                        }));
                      }}
                    >

                      <div className="font-ivy font-regular md:mx-0 text-[24px] sm:text-[28px] md:text-[32px] pl-[20px] pt-[25px] pb-[8px] md:max-w-[260px] h-[43px] leading-[135%] uppercase">
                        {item.title}
                      </div>

       <div
  className={`font-tt font-regular text-[18px] sm:text-[20px] md:text-[24px] text-[#404040] leading-[150%] w-full  overflomax-w-hidden break-words whitespace-pre-wrap transition-all duration-500 ease-in-out ${
    hasHoveredMap[item.id]
      ? 'max-w-[835px] translate-x-[-50px]'
      : 'max-w-[935px] translate-x-[20px]'
  }`}
>
  {splitTextIntoThreeLines(item.description)}
</div>




                      <div className="relative md:max-w-[200px] h-auto pt-[10px] flex items-center justify-end">
                        <div
                          className={`mr-2 justify-between items-center justify-center transition-opacity duration-700 ease-in-out ${hasHoveredMap[item.id]
                            ? 'opacity-100'
                            : 'opacity-0'
                            }`}
                        >
                          <img
                            src="/image/icon3.png"
                            alt="Icon"
                            className="max-w-[64px] h-[64px] object-contain"
                          />
                        </div>



                        <div
                          className={`absolute right-0 flex gap-2 font-tt font-semibold text-center items-center transition-all duration-700 ease-in-out ${hasHoveredMap[item.id]
                            ? 'opacity-100 translate-x-[-110px]'
                            : 'opacity-100 translate-x-0'
                            }`}
                        >
                          <span className="text-[32px] sm:text-[36px] md:text-[40px] font-semibold">
                            {item.price.split('/')[0]}
                          </span>
                          <span className="text-[18px] sm:text-[20px] md:text-[24px] font-normal">
                            /{item.price.split('/')[1]}
                          </span>
                        </div>

                      </div>
                    </div>
                  </div>
                )
              )}

              {section.items.length > 5 && (
                <div className="w-full  max-w-[1536px] mx-auto text-center mt-6">
                  {showMoreMap[index] ? (
                    <Link
                      onClick={() => {
                        setShowMoreMap((prev) => ({
                          ...prev,
                          [index]: false,
                        }));
                        setActiveIndex(null);
                      }}
                      className="text-[#E05F40] max-w-[100px] h-[60px] text-sm font-tt font-regular underline cursor-pointer"
                    >
                      View Less
                    </Link>
                  ) : (
                    <Link
                      onClick={() => toggleShowMore(index)}
                      className="text-[#E05F40] max-w-[100px] h-[60px] text-sm font-tt font-regular underline cursor-pointer"
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
