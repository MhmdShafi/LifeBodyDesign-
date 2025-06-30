import React from 'react'

const CardSection = () => {
  return (
     <div className='w-[1920px] h-[1101px] gap-[64px] pt-[96px] pr-[192px] pb-[96px] pl-[192px]bg-[#FAFAF5] '>
        <div className='w-[603px] h-[128px] gap-[16px] mx-auto whitespace-nowrap'>
          <h1 className='w-[603px] h-[76px] font-ivy font-normal text-[56px] leading-[135%] tracking-[0] text-center align-middle'>Your LIFEBODY Teachers </h1>
          <p className='w-[518px] h-[36px] font-tt font-normal text-[24px] leading-[150%] tracking-[0]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, </p>
        </div>

        

        <div className='w-[1278px] h-[585px] gap-[48px]  ml-[321px] mb-[28px] mr-[321] flex'>
          {/* Card 1 */}
          <div className='w-[394px] h-[585px] gap-[24px]'>
            <img
              src='/image/Rectangle1.png'
              alt='James Carter'
              className='w-[394px] h-[394px] rounded-[16px]
'
            />
            <div className='w-[394px] h-[167px] gap-[16px] mt-[24px]'>
               <h2 className='w-[394px] h-[43px] font-ivy font-normal text-[32px] leading-[135%] tracking-[0] align-middle'>Hanna Rosser</h2>
            <p className='w-[394px] h-[108px] font-tt font-normal text-[24px] leading-[150%] tracking-[0]
'>
              Expert in frontend development, specializing in React and UI animations.
            </p>
            </div>
           
          </div>

          {/* Card 2 */}
          <div className='w-[394px] h-[585px] gap-[24px]'>
            <img
              src='/image/Rectangle2.png'
              alt='James Carter'
              className='w-[394px] h-[394px] rounded-[16px]
'
            />
            <div className='w-[394px] h-[167px] gap-[16px] mt-[24px]'>
              <h2 className='w-[394px] h-[43px] font-ivy font-normal text-[32px] leading-[135%] tracking-[0] align-middle'>Carla Calzoni</h2>
            <p className='w-[394px] h-[108px] font-tt font-normal text-[24px] leading-[150%] tracking-[0]
'>
              Expert in frontend development, specializing in React and UI animations.
            </p>
            </div>
            
          </div>

          {/* Card 3 */}
          <div className='w-[394px] h-[585px] gap-[24px]'>
            <img
              src='/image/Rectangle3.png'
              alt='James Carter'
              className='w-[394px] h-[394px] rounded-[16px]
'
            />
            <div className='w-[394px] h-[167px] gap-[16px] mt-[24px]'>
              <h2 className='w-[394px] h-[43px] font-ivy font-normal text-[32px] leading-[135%] tracking-[0] align-middle'>Adison Herwitz</h2>
            <p className='w-[394px] h-[108px] font-tt font-normal text-[24px] leading-[150%] tracking-[0]
'>
              Expert in frontend development, specializing in React and UI animations.
            </p>
            </div>
            
          </div>

        </div>


         <div className='w-[178px] h-[66px] gap-[40px] ml-[872px] mb-[96px] flex mx-auto'>
        <button className='w-[68px] h-[68px] rounded-[16px] bg-[#EAE8E2]'>
          <img src="/image/Previous.png" alt="Previous" />
        </button>
        <button className='w-[68px] h-[68px] rounded-[16px] bg-[#EAE8E2]'>
          <img src="/image/Next.png" alt="Next" />
        </button>
      </div>
      </div>
  )
}

export default CardSection