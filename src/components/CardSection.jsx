import React, { useState } from 'react'

const CardSection = ({ teachers }) => {
  const [startIndex, setStartIndex] = useState(0)
  const itemsPerPage = 3
  const paginatedTeachers = teachers.slice(startIndex, startIndex + itemsPerPage)

  const handleNext = () => {
    if (startIndex + itemsPerPage < teachers.length) {
      setStartIndex(startIndex + itemsPerPage)
    }
  }

  const handlePrev = () => {
    if (startIndex - itemsPerPage >= 0) {
      setStartIndex(startIndex - itemsPerPage)
    }
  }

  return (
    <div className='w-full max-w-[1920px] min-h-[1101px] md:px-[96px] lg:px-[192px] py-[96px] gap-[64px] bg-[#FAFAF5] mx-auto'>
      {/* Title Section */}
      <div className="w-full max-w-[603px] min-h-[128px] mb-[64px] text-[#474747] gap-4 mx-auto text-center whitespace-nowrap">
        <h1 className="w-full font-ivy font-normal text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] leading-[135%] tracking-[0]">
          Your LIFEBODY Teachers
        </h1>
        <p className="w-full font-tt font-normal text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] leading-[150%] tracking-[0]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
      </div>

      {/* Cards */}
      <div className='w-full max-w-[1278px] min-h-[585px] flex gap-12 mb-[64px] mx-auto flex-wrap justify-center'>
        {paginatedTeachers.map((teacher, index) => (
          <div key={index} className='w-full max-w-[394px] min-h-[585px] flex flex-col gap-6'>
            <img
              src={teacher.image}
              alt={teacher.name}
              className='w-full max-w-[394px] aspect-square rounded-[16px] bg-[#D9D9D9] object-cover mx-auto'
            />
            <div className='w-full max-w-[394px] min-h-[167px] flex flex-col gap-4 mt-6 px-4 text-[#474747] mx-auto'>
              <h2 className='text-[24px] sm:text-[28px] md:text-[32px] leading-[135%] font-ivy font-normal'>{teacher.name}</h2>
              <p className='font-tt font-normal text-[24px] leading-[150%]'>{teacher.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className='w-full max-w-[178px] min-h-[66px] gap-[40px] flex justify-center mx-auto text-[#474747]'>
        <button
          onClick={handlePrev}
          className='w-[68px] h-[68px] rounded-[16px] bg-[#EAE8E2] disabled:opacity-50'
          disabled={startIndex === 0}
        >
          <img src="/image/Previous.png" alt="Previous" />
        </button>
        <button
          onClick={handleNext}
          className='w-[68px] h-[68px] rounded-[16px] bg-[#EAE8E2] disabled:opacity-50'
          disabled={startIndex + itemsPerPage >= teachers.length}
        >
          <img src="/image/Next.png" alt="Next" />
        </button>
      </div>
    </div>
  )
}

export default CardSection
