import React from 'react'

const CardSection = () => {
  return (
     <div className='w-full h-[800px]  pt-[50px] -translate-y-[1130px] bg-[#FAFAF5]'>
        <div className='w-[400px] h-[100px] pl-[40px] pt-[10px]  gap-[2px] mx-auto'>
          <h1 className='font-ivy font-normal text-[24px] w-[603px] h-[40px] pl-[30px]'>Your LIFEBODY Teachers </h1>
          <p className='w-[400px] h-[16px] text-[10px] font-tt font-normal  pl-[50px] pb-[200px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
        </div>

        

        <div className='w-[950px] h-[435px]  mx-auto mt-[30px]  flex justify-between p-6 gap-4'>
          {/* Card 1 */}
          <div className='w-1/3  p-0 '>
            <img
              src='/image/rectangle1.png'
              alt='James Carter'
              className='w-full h-auto rounded-none'
            />
            <h2 className='text-lg font-ivy font-normal mx-left mb-1 mt-[10px] pl-[3px]'>Hanna Rosser</h2>
            <p className='text-[13px] text-gray-600 font-tt font-normal pl-[3px]'>
              Expert in frontend development, specializing in React and UI animations.
            </p>
          </div>

          {/* Card 2 */}
          <div className='w-1/3  p-0 '>
            <img
              src='/image/rectangle2.png'
              alt='James Carter'
              className='w-full h-auto rounded-none'
            />
            <h2 className='text-lg font-ivy font-normal mx-left mb-1 mt-[10px] pl-[3px]'>Carla Calzoni</h2>
            <p className='text-[13px] text-gray-600 font-tt font-normal pl-[3px]'>
              Expert in frontend development, specializing in React and UI animations.
            </p>
          </div>

          {/* Card 3 */}
          <div className='w-1/3  p-0 '>
            <img
              src='/image/rectangle3.png'
              alt='James Carter'
              className='w-full h-auto rounded-none'
            />
            <h2 className='text-lg font-ivy font-normal mx-left mb-1 mt-[10px] pl-[3px]'>Adison Herwitz</h2>
            <p className='text-[13px] text-gray-600 font-tt font-normal pl-[3px]'>
              Expert in frontend development, specializing in React and UI animations.
            </p>
          </div>

        </div>


         <div className='w-[80px] h-[5px] gap-[8px]  flex mx-auto'>
        <button className='w-[68px] h-[30px] rounded-[16px] bg-[#EAE8E2]'>
          <img src="/image/previous.png" alt="Previous" />
        </button>
        <button className='w-[68px] h-[30px] rounded-[30px] bg-[#EAE8E2]'>
          <img src="/image/next.png" alt="Next" />
        </button>
      </div>
      </div>
  )
}

export default CardSection