import React from 'react';
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

  return (
    <div className='py-[50px] potfolio'>
        <div className='lg:max-w-[1440px] m-auto  px-[20px]'>
            <div className='text-center'>
                <h1 className='text-primary font-bold font-lato text-[60px] border-b border-secondary inline-block'>
                    Our Portfolio
                </h1>
                <p className='mt-[25px] font-roboto text-[20px] text-[#4e2a10]'>
                    Over the last 13+ years, we have made a name for ourselves in this field, and understand maintaining the same name and reputation is a complex task. We are the top blockchain and complete web solution company and we are leaving no stone unturned. All these years, we have been providing quality services and helping businesses create their unique online identity. Thousands of global clients trusted us and we are proud that we never disappointed any of them. Some of the challenging projects we have completed are clustered here.
                </p>
            </div>
            <div className='flex flex-wrap gap-[25px] mt-[40px] justify-center'>
                {portfolioItems.map(item => (
                    <div key={item.id} className='w-[18.5%] potfolio_img'>
                        <img src={item.image} className='w-[100%]' alt={item.alt} />
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
}

export default Our_Portfolio;
