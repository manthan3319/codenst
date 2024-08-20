import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const menuItems = [
        { name: 'Home', link: '/' },
        { name: 'Services', link: '/services' },
        { name: 'Company', link: '/company' },
        { name: 'Contact Us', link: '/contact' },
    ];

    const service = [
        {
            name:"ICO Development"
        },
        {
            name:"NFT Marketplace Development"
        },
        {
            name:"Token Development"
        },
        {
            name:"White Paper Development"
        },
        {
            name:"Global SEO Services"
        },
        {
            name:"Onpage SEO Services"
        },
    ]

    const TECHNOLOGIES = [
        {
            name:"Blockchain"
        },
        {
            name:"Node JS"
        },
        {
            name:"Python"
        },
        {
            name:"AngularJs"
        },
        {
            name:"Android"
        },
        {
            name:"IOS"
        },
    ]
    return (
        <div className='bg-primary '>
            <div className='lg:max-w-[1440px] m-auto px-[20px] py-[80px]'>
                <div className='flex flex-wrap gap-[25px] md:gap-0'>
                    <div className='md:w-[30%] w-[100%]'>
                        <h1 className='text-[35px] font-lato text-white font-bold'>Codenst</h1>

                        <div className='flex gap-[22px] md:gap-[15px] mt-[25px]'>
                            <span className='text-[35px] md:text-[28px] text-white hover:text-gray-300'> <i class="fa fa-facebook-official" aria-hidden="true"></i></span>
                            <span className='text-[35px] md:text-[28px] text-white hover:text-gray-300'> <i class="fa fa-instagram" aria-hidden="true"></i></span>
                            <span className='text-[35px] md:text-[28px] text-white hover:text-gray-300'> <i class="fa fa-google" aria-hidden="true"></i></span>
                            <span className='text-[35px] md:text-[28px] text-white hover:text-gray-300'> <i class="fa fa-linkedin-square" aria-hidden="true"></i></span>
                            <span className='text-[35px] md:text-[28px] text-white hover:text-gray-300'> <i class="fa fa-whatsapp" aria-hidden="true"></i></span>
                        </div>
                    </div>

                    <div className='md:w-[20%] w-[100%]'>
                        <h1 className='text-white font-lato font-extrabold text-[25px] mb-[25px] border-b inline-block pb-[5px]'>Company</h1>
                        <ul className='flex flex-col gap-[15px] text-white'>
                            {menuItems.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        className={`xl:text-[19px] font-lato flex gap-[5px] items-center`}
                                    >
                                        <span className='text-[10px] '><i class="fa fa-circle" aria-hidden="true"></i></span>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='md:w-[30%] w-[100%]'>
                        <h1 className='text-white font-lato font-extrabold text-[25px] mb-[25px] border-b inline-block pb-[5px]'>Services</h1>
                        <ul className='flex flex-col gap-[15px] text-white'>
                            {service.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        className={`xl:text-[19px] font-lato flex gap-[5px] items-center`}
                                    >
                                        <span className='text-[10px] '><i class="fa fa-circle" aria-hidden="true"></i></span>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className='md:w-[20%] w-[100%]'>
                        <h1 className='text-white font-lato font-extrabold text-[25px] mb-[25px] border-b inline-block pb-[5px]'>Services</h1>
                        <ul className='flex flex-col gap-[15px] text-white'>
                            {TECHNOLOGIES.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        className={`xl:text-[19px] font-lato flex gap-[5px] items-center`}
                                    >
                                        <span className='text-[10px] '><i class="fa fa-circle" aria-hidden="true"></i></span>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className='text-center py-[10px] border-t border-white'>
            <p class="font-poppins text-white font-medium text-[15px] lg:text-[18px]">© Copyright 2024 by <a class="text-gold font-ubuntu font-bold hover:text-customBlue" href="https://brightensolutions.com/"> Brighten Solutions </a></p>
            </div>
        </div>
    );
}

export default Footer;








