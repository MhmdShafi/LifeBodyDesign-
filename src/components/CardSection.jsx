import React from 'react'

const CardSection = () => {
  return (
     <div className='w-full max-w-[1920px] min-h-[1101px]   md:px-[96px] lg:px-[192px] py-[96px] gap-[64px] bg-[#FAFAF5] mx-auto'>
       <div className="w-full max-w-[603px] min-h-[128px] mb-[64px]  text-[#474747] gap-4 mx-auto text-center whitespace-nowrap">
  <h1 className="w-full font-ivy font-normal text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-[135%] tracking-[0]">
    Your LIFEBODY Teachers
  </h1>
  <p className="w-full font-tt font-normal text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] leading-[150%] tracking-[0]">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
  </p>
</div>


        

        <div className='w-full max-w-[1278px] min-h-[585px] flex gap-12 mb-[64px]  mx-auto'>
          {/* Card 1 */}
          <div className='w-full max-w-[394px] min-h-[585px] flex flex-col gap-6 mx-auto'>
            <img
              src='/image/Rectangle1.png'
              alt='James Carter'
              className='w-full max-w-[394px] aspect-square rounded-[16px] bg-[#D9D9D9] object-cover mx-auto'
            />
            <div className='w-full max-w-[394px] min-h-[167px] flex flex-col gap-4 mt-6 mx-auto px-4 text-[#474747]'>
               <h2 className='w-full max-w-[394px] text-[24px] sm:text-[28px] md:text-[32px] leading-[135%] font-ivy font-normal text-[#474747] '>Hanna Rosser</h2>
            <p className='w-[394px] h-[108px] font-tt font-normal text-[24px] leading-[150%] tracking-[0]'>
              Expert in frontend development, specializing in React and UI animations.
            </p>
            </div>
           
          </div>

          {/* Card 2 */}
          <div className='w-full max-w-[394px] min-h-[585px] flex flex-col gap-6 mx-auto'>
            <img
              src='/image/Rectangle2.png'
              alt='James Carter'
              className='w-full max-w-[394px] aspect-square rounded-[16px] bg-[#D9D9D9] object-cover mx-auto
'
            />
            <div className='w-full max-w-[394px] min-h-[167px] flex flex-col gap-4 mt-6 mx-auto px-4 text-[#474747]'>
              <h2 className='w-full max-w-[394px] text-[24px] sm:text-[28px] md:text-[32px] leading-[135%] font-ivy font-normal text-[#474747] '>Carla Calzoni</h2>
            <p className='w-[394px] h-[108px] font-tt font-normal text-[24px] leading-[150%] tracking-[0]
'>
              Expert in frontend development, specializing in React and UI animations.
            </p>
            </div>
            
          </div>

          {/* Card 3 */}
          <div className='w-full max-w-[394px] min-h-[585px] flex flex-col gap-6 mx-auto'>
            <img
              src='/image/Rectangle3.png'
              alt='James Carter'
              className='w-full max-w-[394px] aspect-square rounded-[16px] bg-[#D9D9D9] object-cover mx-auto
'
            />
            <div className='w-full max-w-[394px] min-h-[167px] flex flex-col gap-4 mt-6 mx-auto px-4 text-[#474747]'>
              <h2 className='w-full max-w-[394px] text-[24px] sm:text-[28px] md:text-[32px] leading-[135%] font-ivy font-normal text-[#474747] '>Adison Herwitz</h2>
            <p className='w-[394px] h-[108px] font-tt font-normal text-[24px] leading-[150%] tracking-[0]
'>
              Expert in frontend development, specializing in React and UI animations.
            </p>
            </div>
            
          </div>

        </div>


         <div className='w-full max-w-[178px] min-h-[66px] gap-[40px] ml-[700px]  flex mx-auto text-[#474747]'>
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