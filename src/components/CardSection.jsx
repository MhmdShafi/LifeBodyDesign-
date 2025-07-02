import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

const CardSection = ({ teachers }) => {
  return (
    <div className='w-full max-w-[1920px] min-h-[1101px] md:px-[96px] lg:px-[192px] py-[96px] gap-[64px] bg-[#FAFAF5] mx-auto'>
      {/* Title Section */}
      <div className="w-full max-w-[603px] min-h-[128px] mb-[64px] text-[#474747] gap-4 mx-auto text-center whitespace-nowrap">
        <h1 className="w-full font-ivy font-normal text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-[135%]">
          Your LIFEBODY Teachers
        </h1>
        <p className="w-full font-tt font-normal text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] leading-[150%]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
      </div>

      {/* Swiper Section */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={24}
        slidesPerView={1}
        navigation={{
          prevEl: '.custom-prev',
          nextEl: '.custom-next',
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        className="w-full max-w-[1278px] mx-auto mb-[64px]"
      >
        {teachers.map((teacher, index) => (
          <SwiperSlide key={index}>
            <div className='w-full max-w-[394px] min-h-[585px] flex flex-col gap-6 mx-auto'>
              <img
                src={teacher.image}
                alt={teacher.name}
                className='w-full aspect-square rounded-[16px] bg-[#D9D9D9] object-cover'
              />
              <div className='min-h-[167px] flex flex-col gap-4 mt-6 px-4 text-[#474747]'>
                <h2 className='text-[24px] sm:text-[28px] md:text-[32px] leading-[135%] font-ivy font-normal'>{teacher.name}</h2>
                <p className='font-tt font-normal text-[24px] leading-[150%]'>{teacher.desc}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className='w-full max-w-[178px] min-h-[66px] gap-[40px] flex justify-center mx-auto text-[#474747]'>
        <button className='custom-prev w-[68px] h-[68px] rounded-[16px] bg-[#EAE8E2]'>
          <img src="/image/Previous.png" alt="Previous" />
        </button>
        <button className='custom-next w-[68px] h-[68px] rounded-[16px] bg-[#EAE8E2]'>
          <img src="/image/Next.png" alt="Next" />
        </button>
      </div>
    </div>
  )
}

export default CardSection
