import React from 'react';
import { ico, icon, nft, token, wallet } from '../../Images/Images';

const servicesData = [
  {
    id: 1,
    image: ico,
    title: 'ICO Development',
  },
  {
    id: 2,
    image: wallet,
    title: 'Wallet Development',
  },
  {
    id: 3,
    image: nft,
    title: 'NFT Development',
  },
  {
    id: 4,
    image: token,
    title: 'Token Development',
  },
  {
    id: 5,
    image: icon,
    title: 'ICO Marketing',
  },
];

const Services = () => {
  return (
    <div className='bg-primary py-[50px]'>
      <div className='lg:max-w-[1440px] m-auto px-[20px]'>
        <div className='text-center'>
          <h1 className='text-center font-lato lg:text-[65px] inline-block border-b-[2px] border-b-secondary text-white'>Services</h1>
        </div>

        <div className='flex flex-wrap lg:gap-[30px] mt-[80px]'>
          {servicesData.map((service) => (
            <div key={service.id} className='md:w-[18%] flex flex-col bg-white items-center py-[45px] gap-[15px] rounded-[5px] border-[2px] border-black'>
              <div>
                <img src={service.image} alt={service.title} className='w-[100%]' />
              </div>
              <div>
                <p className='font-lato font-bold text-[22px]'>{service.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
