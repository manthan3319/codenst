import React from 'react';
import { gif } from '../../Images/Images';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Web_Solution = () => {
    return (
        <div className='md:py-[100px] pt-[150px] sm:pt-[100px] py-[30px]'>
            <div className='xl:max-w-[1440px] m-auto px-[20px]'>
                <div className='flex lg:flex-row sm:flex-col items-center flex-col-reverse'>
                    
                    <motion.div 
                        className='lg:w-[50%] mt-[50px] md:mt-0 sm:mb-[49px]'
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <div>
                            <h1 className='lg:text-[70px] text-[42px] text-primary font-extrabold font-lato sm:text-[69px]'>
                                <span className='text-secondary font-extrabold'>CODENST</span> Marketing & Web Solution Partner
                            </h1>

                            <div className='flex gap-[15px] mt-[25px]'>
                                <Link 
                                    className='inline-block bg-primary text-white py-[12px] px-[25px] hover:bg-secondary border-[2px] border-secondary font-roboto rounded-[25px]'
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3, duration: 0.5 }}
                                >
                                    Learn More
                                </Link>
                                <Link 
                                    className='inline-block bg-primary text-white py-[12px] px-[25px] hover:bg-secondary border-[2px] border-secondary font-roboto rounded-[25px]'
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.5, duration: 0.5 }}
                                >
                                    Contact us
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div 
                        className='lg:w-[50%] relative'
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                    >
                        <img 
                            src={gif} 
                            alt='gif' 
                            className='gifimg z-[-1] lg:w-[507px] lg:h-[507px] m-auto w-[90%] sm:w-[80%] sm:h-[333px] h-[327px]' 
                        />
                    </motion.div>

                    <div className='shdow1'></div>
                </div>
            </div>
        </div>
    );
}

export default Web_Solution;
