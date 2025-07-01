import React from 'react'
import Header from './Header'
import Mian from './Main'



const Home = () => {
  const classData = [
  {
    id: 1,
    title: 'Discovery',
    subtitle: 'Class #01',
    heading: 'Discovery Class',
    description: `This session is different to a usual 1:1. It is an opportunity to become familiar with the studio, the apparatus and discuss your goals with a teacher. Perfect if you are new to Pilates, the studio or if you have an injury.`,
    extra: `The goal of the session is to provide you with an understanding of the Pilates method, the studio and what the best option is for you to reach your goals.`,
    image: '/image/Frame01.png'
  },
  {
    id: 2,
    title: 'Tower',
    subtitle: 'Class #02',
    heading: 'Tower',
       description: `This session is different to a usual 1:1. It is an opportunity to become familiar with the studio, the apparatus and discuss your goals with a teacher. Perfect if you are new to Pilates, the studio or if you have an injury.`,
    extra: `The goal of the session is to provide you with an understanding of the Pilates method, the studio and what the best option is for you to reach your goals.`,
    image: '/image/Frame02.png'
  },
  {
    id: 3,
    title: 'Reformer',
    subtitle: 'Class #3',
    heading: 'Reformer',
       description: `This session is different to a usual 1:1. It is an opportunity to become familiar with the studio, the apparatus and discuss your goals with a teacher. Perfect if you are new to Pilates, the studio or if you have an injury.`,
    extra: `The goal of the session is to provide you with an understanding of the Pilates method, the studio and what the best option is for you to reach your goals.`,
    image: '/image/Frame03.png'
  },
  {
    id: 4,
    title: 'Studio',
    subtitle: 'Class #04',
    heading: 'Studio',
        description: `This session is different to a usual 1:1. It is an opportunity to become familiar with the studio, the apparatus and discuss your goals with a teacher. Perfect if you are new to Pilates, the studio or if you have an injury.`,
    extra: `The goal of the session is to provide you with an understanding of the Pilates method, the studio and what the best option is for you to reach your goals.`,
    image: '/image/frame04.png'
  },
  {
    id: 5,
    title: 'Mens',
    subtitle: 'Class #05',
    heading: 'Mens Power',
       description: `This session is different to a usual 1:1. It is an opportunity to become familiar with the studio, the apparatus and discuss your goals with a teacher. Perfect if you are new to Pilates, the studio or if you have an injury.`,
    extra: `The goal of the session is to provide you with an understanding of the Pilates method, the studio and what the best option is for you to reach your goals.`,
    image: '/image/Frame05.png'
  },
  {
    id: 6,
    title: 'Private',
    subtitle: 'Class #06',
    heading: 'Private',
     description: `This session is different to a usual 1:1. It is an opportunity to become familiar with the studio, the apparatus and discuss your goals with a teacher. Perfect if you are new to Pilates, the studio or if you have an injury.`,
    extra: `The goal of the session is to provide you with an understanding of the Pilates method, the studio and what the best option is for you to reach your goals.`,
    image: '/image/Frame06.png'
  },
  {
    id: 7,
    title: 'Duet',
    subtitle: 'Class #07',
    heading: 'Duet',
       description: `This session is different to a usual 1:1. It is an opportunity to become familiar with the studio, the apparatus and discuss your goals with a teacher. Perfect if you are new to Pilates, the studio or if you have an injury.`,
    extra: `The goal of the session is to provide you with an understanding of the Pilates method, the studio and what the best option is for you to reach your goals.`,
    image: '/image/Frame07.png'
  },
  {
    id: 8,
    title: 'Pre & Post Natal',
    subtitle: 'Class #08',
    heading: 'Pre & Post Natal',
       description: `This session is different to a usual 1:1. It is an opportunity to become familiar with the studio, the apparatus and discuss your goals with a teacher. Perfect if you are new to Pilates, the studio or if you have an injury.`,
    extra: `The goal of the session is to provide you with an understanding of the Pilates method, the studio and what the best option is for you to reach your goals.`,
    image: '/image/Frame08.png'
  },
  // Add more items as needed...
];


 const dropdownItems = [
    {
      title: 'Rates & Benefits',
      items: [
        { id: 1, title: 'Discovery', description: 'For This session is different to a usual 1:1. It is an opportunity to become familiar with the studio, the apparatus and discuss your goals with a teacher. Perfect if you are new to Pilates, the studio or if you have an injury. with limited needs.', price: '$200/month' },
        { id: 2, title: 'Tower', description: 'Best for This session is different to a usual 1:1. It is an opportunity to become familiar with the studio, the apparatus and discuss your goals with a teacher. Perfect if you are new to Pilates, the studio or if you have an injury. and remote workers.', price: '$200/month' },
        { id: 3, title: 'Reformer', description: 'Ideal for This session is different to a usual 1:1. It is an opportunity to become familiar with the studio, the apparatus and discuss your goals with a teacher. Perfect if you are new to Pilates, the studio or if you have an injury. teams.', price: '$200/month' },
        { id: 4, title: 'Studio', description: 'Full supThis session is different to a usual 1:1. It is an opportunity to become familiar with the studio, the apparatus and discuss your goals with a teacher. Perfect if you are new to Pilates, the studio or if you have an injury.port and custom features.', price: '$200/month' },
        { id: 5, title: 'Mens', description: 'For students with vThis session is different to a usual 1:1. It is an opportunity to become familiar with the studio, the apparatus and discuss your goals with a teacher. Perfect if you are new to Pilates, the studio or if you have an injury.alid ID.', price: '$200/month' },
        { id: 6, title: 'Private', description: 'Limited-time bThis session is different to a usual 1:1. It is an opportunity to become familiar with the studio, the apparatus and discuss your goals with a teacher. Perfect if you are new to Pilates, the studio or if you have an injury.enefits for new users.', price: '$200/month' },
        { id: 7, title: 'Duet', description: 'Limited-time bThis session is different to a usual 1:1. It is an opportunity to become familiar with the studio, the apparatus and discuss your goals with a teacher. Perfect if you are new to Pilates, the studio or if you have an injury.enefits for new users.', price: '$200/month' }
      ]
    },
    {
      title: 'Levels',
      items: [
        { id: 1, title: 'foundation', description: 'Limited-time bThis session is different to a usual 1:1. It is an opportunity to become familiar with the studio, the apparatus and discuss your goals with a teacher. Perfect if you are new to Pilates, the studio or if you have an injury.enefits for new users.', price: '01' },
        { id: 2, title: 'INTERMEDIATE', description: 'Intermediate features uLimited-time bThis session is different to a usual 1:1. It is an opportunity to become familiar with the studio, the apparatus and discuss your goals with a teacher. Perfect if you are new to Pilates, the studio or if you have an injury.enefits for new users.nlocked.', price: '02' },
        { id: 3, title: 'SPECIALIST', description: 'Advanced analytics and Limited-time bThis session is different to a usual 1:1. It is an opportunity to become familiar with the studio, the apparatus and discuss your goals with a teacher. Perfect if you are new to Pilates, the studio or if you have an injury.enefits for new users..', price: '03' },
        { id: 4, title: 'INTERMEDIATE', description: 'Professional Limited-time bThis session is different to a usual 1:1. It is an opportunity to become familiar with the studio, the apparatus and discuss your goals with a teacher. Perfect if you are new to Pilates, the studio or if you have an injury.enefits for new users. and access.', price: '04' },
      ]
    }
  ];
  return (
    <>
     
        <Header />
        <Mian items={classData} dropDownItems={dropdownItems }/>
      
    </>
    

  )
}

export default Home