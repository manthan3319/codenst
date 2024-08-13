import React from 'react';
import { gif } from '../../Images/Images';
import { Link } from 'react-router-dom';

const Web_Solution = () => {
    return (
        <div className=' py-[100px]'>
            <div className='xl:max-w-[1440px] m-auto px-[20px]'>
                <div className='flex lg:flex-row flex-col'>
                    <div className='lg:w-[50%]'>
                        <div>
                            <h1 className='lg:text-[70px] text-primary font-extrabold font-lato'> <span className='text-secondary font-extrabold'>CODENST</span> Marketing & Web Solution Partner</h1>

                            <div>
                                <Link>Learn More</Link>
                                <Link>Contact us</Link>
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
