import React from 'react';
import { gif } from '../../Images/Images';
import { Link } from 'react-router-dom';

const Web_Solution = () => {
    return (
        <div className=' py-[100px]'>
            <div className='xl:max-w-[1440px] m-auto px-[20px]'>
                <div className='flex lg:flex-row flex-col items-center'>
                    <div className='lg:w-[50%]'>
                        <div>
                            <h1 className='lg:text-[70px] text-primary font-extrabold font-lato'> <span className='text-secondary font-extrabold'>CODENST</span> Marketing & Web Solution Partner</h1>

                            <div className='flex gap-[15px] mt-[25px]'>
                                <Link className='inline-block bg-primary text-white py-[12px] px-[25px] hover:bg-secondary border-[2px] border-secondary font-roboto rounded-[25px]'>Learn More</Link>
                                <Link className='inline-block bg-primary text-white py-[12px] px-[25px] hover:bg-secondary border-[2px] border-secondary font-roboto rounded-[25px]'>Contact us</Link>
                            </div>
                        </div>
                    </div>

                    <div className='lg:w-[50%] relative'>
                         <img src={gif} alt='gif' className=' gifimg z-[-1] w-[507px] h-[507px] m-auto' />
                    </div>

                    <div className='shdow1'></div>
                </div>
            </div>
        </div>
    );
}

export default Web_Solution;
