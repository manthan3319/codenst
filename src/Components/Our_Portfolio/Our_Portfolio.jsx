import React from 'react';
import { motion } from 'framer-motion';
import { brics, rexx } from '../../Images/Images';

const Our_Portfolio = () => {
  // Dynamic data for portfolio images
  const portfolioItems = [
    { id: 1, image: brics, alt: 'BRICS' },
    { id: 2, image: rexx, alt: 'Rexx' },
    { id: 3, image: brics, alt: 'BRICS' },
    { id: 4, image: rexx, alt: 'Rexx' },
    { id: 5, image: brics, alt: 'BRICS' }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className='py-[50px] potfolio'>
      <div className='lg:max-w-[1440px] m-auto px-[20px]'>
        <div className='text-center'>
          <h1 className='text-primary font-bold font-lato md:text-[60px] text-[50px] border-b border-secondary inline-block'>
            Our Portfolio
          </h1>
          <p className='mt-[25px] font-roboto text-[20px] text-[#4e2a10]'>
            Over the last 13+ years, we have made a name for ourselves in this field, and understand maintaining the same name and reputation is a complex task. We are the top blockchain and complete web solution company and we are leaving no stone unturned. All these years, we have been providing quality services and helping businesses create their unique online identity. Thousands of global clients trusted us and we are proud that we never disappointed any of them. Some of the challenging projects we have completed are clustered here.
          </p>
        </div>
        <motion.div 
          className='flex flex-wrap lg:gap-[25px] gap-[15px] mt-[40px] justify-center'
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {portfolioItems.map(item => (
            <motion.div 
              key={item.id} 
              className='lg:w-[18.5%] w-[47%] potfolio_img'
              variants={itemVariants}
            >
              <img src={item.image} className='w-[100%]' alt={item.alt} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Our_Portfolio;
