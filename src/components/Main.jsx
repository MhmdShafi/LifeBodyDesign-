import React from 'react'
import Carousel from './Carousel'
import { Link } from 'react-router-dom'
import DropdownBtns from './DropdownBtns'
import CardSection from './CardSection'
import Footer from './Footer'
import Contact from './Contact'
import HeroSection from './HeroSection'
const Mian = ({ items, dropDownItems }) => {
  return (
    <>
      {/* HERO Section */}
      <HeroSection/>

      {/* BELOW HERO — put content here outside the fixed-height div */}
      <Contact />
      <Carousel items={items} />
      <DropdownBtns items={dropDownItems} />
      <CardSection />
      <Footer />
    </>
  );
};

export default Mian