

import { useState } from 'react';
import { Link } from 'react-router-dom';

const DropdownBtns = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleDropdown = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className='w-full h-auto pt-[70px] pr-[192px] rounded shadow border border-gray-300 bg-white pb-[20px] -translate-y-[1130px] pl-[250px]'>
      {items.map((section, index) => (
        <div key={index} className='mb-6'>
          {/* Main box */}
          <div className='w-[900px] rounded shadow border border-gray-300 p-6 text-center'>
            <h2 className='font-ivy text-[20px] uppercase mb-2'>{section.title}</h2>
            <Link
              onClick={() => toggleDropdown(index)}
              className='font-tt text-[16px] cursor-pointer text-blue-600 block mb-2'
            >
              {activeIndex === index
                ? `Exploring ${section.title.toLowerCase()}`
                : `Click to explore ${section.title.toLowerCase()}`}
            </Link>
          </div>

          {/* Dropdown items */}
          {activeIndex === index && (
            <>
              {section.items.map((item) => (
                <div
                  key={item.id}
                  className='w-[900px] mt-4 mb-4 rounded shadow border border-gray-300 bg-gray-100 p-4 flex justify-between'
                >
                  <div className='w-1/5 font-ivy font-normal text-[24px] text-left uppercase'>
                    {item.title}
                  </div>
                  <div className='w-3/5 p-0 m-0 pl-[60px] text-sm text-gray-700 text-left'>
                    {item.description}
                  </div>
                  <div className='w-1/5 text-right text-blue-800 font-ivy font-normal text-[24px]'>
                    {item.price}
                  </div>
                </div>
              ))}

              {/* Show Less Link */}
              <div className='w-[900px] text-center'>
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
