import React from 'react'
import Carousel from './Carousel'
import { Link } from 'react-router-dom'
import DropdownBtns from './DropdownBtns'
import CardSection from './CardSection'
import Footer from './Footer'
import Contact from './Contact'
import HeroSection from './HeroSection'
const Mian = ({ items, dropDownItems }) => {
  const teachers = [
  {
    name: 'Hanna Rosser',
    image: '/image/Rectangle1.png',
    desc: 'Expert in frontend development, specializing in React and UI animations.',
  },
  {
    name: 'Carla Calzoni',
    image: '/image/Rectangle2.png',
    desc: 'Expert in frontend development, specializing in React and UI animations.',
  },
  {
    name: 'Adison Herwitz',
    image: '/image/Rectangle3.png',
    desc: 'Expert in frontend development, specializing in React and UI animations.',
  },
  {
    name: 'Carla Calzoni',
    image: '/image/Rectangle2.png',
    desc: 'Expert in frontend development, specializing in React and UI animations.',
  },
  {
    name: 'Adison Herwitz',
    image: '/image/Rectangle3.png',
    desc: 'Expert in frontend development, specializing in React and UI animations.',
  },
  {
    name: 'Hanna Rosser',
    image: '/image/Rectangle1.png',
    desc: 'Expert in frontend development, specializing in React and UI animations.',
  },
  {
    name: 'Carla Calzoni',
    image: '/image/Rectangle2.png',
    desc: 'Expert in frontend development, specializing in React and UI animations.',
  },
  {
    name: 'Hanna Rosser',
    image: '/image/Rectangle1.png',
    desc: 'Expert in frontend development, specializing in React and UI animations.',
  },
  {
    name: 'Adison Herwitz',
    image: '/image/Rectangle3.png',
    desc: 'Expert in frontend development, specializing in React and UI animations.',
  },
  // Add more teacher objects if needed
];

  return (
    <>
      {/* HERO Section */}
      <HeroSection/>

      {/* BELOW HERO — put content here outside the fixed-height div */}
      <Contact />
      <Carousel items={items} />
      <DropdownBtns items={dropDownItems} />
      <CardSection teachers={teachers} />
      <Footer />
    </>
  );
};

export default Mian