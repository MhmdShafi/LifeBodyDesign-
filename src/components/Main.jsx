import React from 'react'
import Carousel from './Carousel'
import { Link } from 'react-router-dom'
import DropdownBtns from './DropdownBtns'
import CardSection from './CardSection'
import Footer from './Footer'
const Mian = ({ items, dropDownItems }) => {
  return (
    <div className=''>
      <img className='opacity-20 w-full h-full object-cover  -translate-y-[120px]' src="/public/image/bg-image.jpg" alt="image" />
      <div className="w-full overflow-hidden px-4 -translate-y-[650px]">
        <h1 className="font-ivy font-normal text-[20vw] leading-[1] text-center uppercase opacity-5 whitespace-nowrap">
          Lifebody
        </h1>
        <div className='text-center -translate-y-[240px] '>
          <h1 className="font-ivy text-[60px] leading-[86.4px] tracking-[0] text-center align-middle px-[110px] mx-[100px]">
            Discover, Transform, Thrive: Your Odyssey Starts at <span className="text-pink-600">Lifebody Studio</span>

          </h1>

          <span className='py-[20px] my-[120px] text-sm'>Sessions for Every Soul: Explore our wide range of invigorating sessions tailored to your needs.</span>

          <div className="flex justify-center w-[495px] h-[68px] gap-[24px] ml-[400px] mt-[20px] p-0 text-[20px]">
            <button className="w-[235.5px] h-[53px]  px-[32px] py-[8px] rounded-[8px] border border-solid border-gray-800 bg-white text-black text-lg">
              <span className="w-[171.5px] h-[36px]">Explore Class</span>
            </button>
            <button className="w-[235.5px] h-[53px] bg-[#474747] text-white rounded-lg text-lg ">
              <span className="w-[171.5px] h-[36px]">Book a Tour</span>
            </button>
          </div>

        </div>

        <div className=" w-[329px] h-[100px] flex flex-col items-center gap-[20px] pl-[630px] -translate-y-[190px] text-center">
          {/* Icon Frame */}
          <div className="w-[30px] h-[30px] flex items-center justify-center">
            <img src="/public/image/Frame.png" alt="img" />
          </div>

          {/* Text */}
          <div className="w-[300px] h-[30px]">
            <span className="font-tt font-light text-[15px] leading-[60%] text-[#474747]">
              LONDON PILATES STUDIO BARNES
            </span>
          </div>
        </div>


      </div>

      <div
        className="w-full h-[350px] pt-[70px] pr-[192px] pb-[60px] pl-[192px] flex gap-[24px] bg-[#FFFFFF] -translate-y-[800px] border-t border-b border-pink-300"
        style={{ borderTopStyle: 'dotted', borderBottomStyle: 'dashed' }}
      >

        <div className="w-[756px] h-[200px] pt-[24px] pr-[48px] pb-[10px] rounded-[16px] border border-solid border-gray-300 flex flex-col items-center justify-center gap-[8px]">

          <div className="w-[44px] h-[44px]">
            <img src="/public/image/Vector_1.png" alt="Find Us Icon" />
            <img src="/public/image/Vector.png" alt="icon" className="pl-[9px] pt-[-5px] -translate-y-[200%]" />
          </div>



          <div className='w-[127px] h-[54px] pl-[10px]'>
            <h2 className="text-[28px] font-ivy font-normal pl-[20px] text-[#474747] leading-[120%]">
              Find Us
            </h2>
          </div>

          <div className='w-[303px] h-[64px]'>
            <p className="font-tt text-[15px] text-center text-gray-600 leading-[120%] max-w-[900px]">
              78 Church Road Barnes, London SW13 9DN   </p>
            <div className='w-[227px] h-[27px] flex gap-[20px] p-[20px]'>
              <p className='w-[97px] h-[27px] pl-[20px] whitespace-nowrap'>0777 281 5515</p>
              <p className='w-[106px] h-[27px] whitespace-nowrap ml-[20px]'>0208 879 3682</p>
            </div>



          </div>


        </div>



        <div className="w-[756px] h-[200px] pt-[24px]  pb-[10px]  rounded-[16px] border border-solid border-gray-300">
          <div className="w-[44px] h-[44px] mx-auto">
            <img src="/public/image/Frame_1.png" alt="Find Us Icon" />
            <img src="/public/image/Vector_3.png" alt="icon" className="h-[2px] pl-[20px] pt-[-5px] -translate-y-[220%]" />
            <img src="/public/image/Vector_4.png" alt="icon" className=" pl-[12px] pt-[-5px] -translate-y-[667%]" />
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
            <div className='w-[94px] h-[58px] pl-[200px] -translate-y-[60px]'>
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