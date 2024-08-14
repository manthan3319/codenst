import React from 'react';
import { media } from '../../Images/Images';
import { Link } from 'react-router-dom';

const Home_Aboutus = () => {
    return (
        <div className='py-[50px]'>
            <div className='lg:max-w-[1440px] m-auto px-[20px] '>
                <div className='flex lg:flex-row flex-col items-center'>
                    <div className='lg:w-[50%]'>
                        <img src={media} alt='media' className='w-[100%]' />
                    </div>

                    <div className='lg:w-[50%]'>
                        <h1 className='text-primary font-lato font-bold text-[45px] '><span className='font-extrabold text-secondary'>Future-Focused:</span>Top Web 3.0 Marketing & Development Company</h1>

                        <p className='mt-[15px] font-roboto text-[18px] '>Your search for the top-rated web 3.0 marketing & development company ends here with SAG IPL, a renowned name in the digital marketing industry headquartered in Jaipur, India. Our expertise comes from years of experience earned in the IT sector and marketing. Through our best-in-class services, we have established ourselves as a reputable Web 3.0 marketing and development service provider, and now we are a globally recognized agency. Our commitment to delivering your desired product or results stems from our approach to implementing advanced strategies the development. This philosophy of our work encourages us to exceed our clients' expectations. We have a large in-house team of professionals consisting of marketers and developers. Our previous work is proof of our unwavering dedication to transforming our client's ideas into realities. Partner with us today to give your dreams wings.</p>
                        <div className='mt-[15px]'>
                            <Link className='inline-block bg-primary text-white py-[12px] px-[25px] hover:bg-secondary border-[2px] border-secondary font-roboto rounded-[8px]'>Learn More</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home_Aboutus;
