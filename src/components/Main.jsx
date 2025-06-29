import React from 'react'
import Carousel from './Carousel'
import { Link } from 'react-router-dom'
import DropdownBtns from './DropdownBtns'
import CardSection from './CardSection'
import Footer from './Footer'
const Mian = ({ items, dropDownItems }) => {
  return (
    <div className='relative'>
      <img className='opacity-20 w-[1920px] h-[900px] object-cover ' src="/image/bg-image.jpg" alt="image" />
      <div className="absolute w-[1797px] h-[507px]  top-[286px] left-[62px] right-[61px] ">
        <h1 className="relative font-ivy font-normal  text-[18vw] leading-[100%] tracking-[0] text-center uppercase text-[#474747] pt-[10px] opacity-[0.05]">
          Lifebody
        </h1>
        <div className='absolute top-0 left-0 w-[1016px] h-[340px] ml-[390px] mb-[83px] mt-[50px] gap-[40px] '>
          <h1 className=" w-[1016px] h-[172px] font-ivy font-normal text-[64px] leading-[135%] tracking-[0] text-center align-middle">
            Discover, Transform, Thrive: Your Odyssey Starts at <span className="text-pink-600">Lifebody Studio</span>

          </h1>

          <p className='w-[1016px] h-[36px] font-tt font-light text-[24px] leading-[150%] tracking-[0] text-center'>Sessions for Every Soul: Explore our wide range of invigorating sessions tailored to your needs.</p>

          <div className="flex justify-between w-[495px] h-[68px] gap-[24px]  mt-[40px] mr-[260.5px] ml-[260.5px] text-[20px]">
            <button className="w-[235.5px] h-[53px]  px-[32px] py-[8px] rounded-[8px] border border-solid border-gray-800 bg-white text-black text-lg">
              <span className="w-[171.5px] h-[36px]">Explore Class</span>
            </button>
            <button className="w-[235.5px] h-[53px] bg-[#474747] text-white rounded-lg text-lg ">
              <span className="w-[171.5px] h-[36px]">Book a Tour</span>
            </button>
          </div>

        </div>

        

      </div>

      <div className="absolute w-[329px] h-[100px] flex flex-col items-center gap-[20px] top-[800px] left-[795px] text-center">
          {/* Icon Frame */}
          <div className="w-[30px] h-[30px] flex items-center justify-center">
            <img src="/image/Frame.png" alt="img" />
          </div>

          {/* Text */}
          <div className="w-[300px] h-[30px]">
            <span className="font-tt font-light text-[15px] leading-[60%] text-[#474747]">
              LONDON PILATES STUDIO BARNES
            </span>
          </div>
        </div>


      <div
        className="w-[1920px] h-[452px] pt-[96px] top-[96px] right-[192px] bottom-[96px] left-[192px] gap-[24px] bg-[#FFFFFF] flex justify-center item-center"
        style={{ borderTopStyle: 'dotted', borderBottomStyle: 'dashed' }}>

        <div className="w-[756px] h-[258px] gap-[24px] pt-[24px] pr-[48px] pb-[24px] pl-[48px] rounded-[16px] border ">

          <div className="relative w-[44px] h-[44px] mx-auto">
            <img src="/image/Vector_1.png" alt="Find Us Icon" className='absolute w-[29.33px] h-[33.89px] top-[5.5px] left-[7.33px] '/>
            <img src="/image/Vector.png" alt="icon" className="absolute w-[11px] h-[11px] top-[14.67px] left-[16.5px]" />
          </div>

          <div className='w-[127px] h-[54px] pl-[10px] mx-auto'>
            <h2 className="text-[28px] font-ivy font-normal pl-[20px] text-[#474747] leading-[120%]">
              Find Us
            </h2>
          </div>

          <div className='w-[303px] h-[64px] mx-auto'>
            <p className="font-tt text-[15px] text-center text-gray-600 leading-[120%] max-w-[900px]">
              78 Church Road Barnes, London SW13 9DN   </p>
            <div className='w-[227px] h-[27px] flex gap-[20px] p-[20px]'>
              <p className='w-[97px] h-[27px] pl-[20px] whitespace-nowrap'>0777 281 5515</p>
              <p className='w-[106px] h-[27px] whitespace-nowrap ml-[20px]'>0208 879 3682</p>
            </div>



          </div>


        </div>



        <div className="w-[756px] h-[260px] gap-[24px] pt-[24px] pr-[48px] pb-[24px] pl-[48px] rounded-[16px] border ">
          <div className="w-[44px] h-[44px] mx-auto">
            <img src="/image/Frame_1.png" alt="Find Us Icon" />
            <img src="/image/Vector_3.png" alt="icon" className="h-[2px] pl-[20px] pt-[-5px] " />
            <img src="/image/Vector_4.png" alt="icon" className=" pl-[12px] -mt-[26px] " />
          </div>



          <div className='w-fit h-[54px] pl-[10px] mx-auto'>
            <h2 className="text-[28px] font-ivy font-normal pl-[20px] text-[#474747] leading-[120%]">
              Opening Hours
            </h2>
          </div>

          <div className='w-[304px] h-[58px] pl-[20px] mx-auto'>
            <div className='w-[86px] h-[58px]'>
              <h2 className='font-tt font-normal w-[86px] h-[27px]'>Mon - Thurs </h2>
              <h2 className='font-tt font-normal w-[59px] h-[27px]'>Fri - Sun</h2>
            </div>
            <div className='w-[94px] h-[58px] pl-[200px] mx-auto'>
              <h2 className='font-tt font-normal w-[94px] h-[27px]'>08:00 - 18:00 </h2>
              <h2 className='font-tt font-normal w-[94px] h-[27px]'>08:00 - 19:00 </h2>
            </div>
          </div>

        </div>

      </div>
      {/* here i need separate */}
      <Carousel items={items} />
      <DropdownBtns items={dropDownItems} />
      <CardSection />

      {/* footer */}
      <Footer/>

     




    </div>
  )
}

export default Mian