import React from 'react';
import { media } from '../../Images/Images';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home_Aboutus = () => {
    return (
        <div className='py-[50px] potfolio'>
            <div className='lg:max-w-[1440px] m-auto px-[20px]'>
                <div className='flex lg:flex-row flex-col items-center'>
                    
                    {/* Image Section with Animation */}
                    <motion.div 
                        className='lg:w-[50%]'
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <img src={media} alt='media' className='w-[100%]' />
                    </motion.div>

                    {/* Text Section with Animation */}
                    <motion.div 
                        className='lg:w-[50%]'
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <h1 className='text-primary font-lato font-bold lg:text-[45px] text-[33px]'>
                            <span className='font-extrabold text-secondary'>Future-Focused:</span> Top Web 3.0 Marketing & Development Company
                        </h1>

                        <p className='mt-[15px] font-roboto text-[18px] text-[#4e2a10]'>
                            Your search for the top-rated web 3.0 marketing & development company ends here with SAG IPL, a renowned name in the digital marketing industry headquartered in Jaipur, India. Our expertise comes from years of experience earned in the IT sector and marketing. Through our best-in-class services, we have established ourselves as a reputable Web 3.0 marketing and development service provider, and now we are a globally recognized agency. Our commitment to delivering your desired product or results stems from our approach to implementing advanced strategies the development. This philosophy of our work encourages us to exceed our clients' expectations. We have a large in-house team of professionals consisting of marketers and developers. Our previous work is proof of our unwavering dedication to transforming our client's ideas into realities. Partner with us today to give your dreams wings.
                        </p>
                        <div className='mt-[15px]'>
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5, duration: 0.5 }}
                            >
                                <Link className='inline-block bg-primary text-white py-[12px] px-[25px] hover:bg-secondary border-[2px] border-secondary font-roboto rounded-[8px]'>
                                    Learn More
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Home_Aboutus;
