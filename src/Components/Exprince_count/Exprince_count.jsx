import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { appdev, business, happy, technical } from '../../Images/Images';

const Counter = ({ end, inView }) => {
    const [count, setCount] = useState(0);

    React.useEffect(() => {
        if (inView) {
            let start = 0;
            const duration = 2000;
            const increment = end / (duration / 10);

            const counter = setInterval(() => {
                start += increment;
                setCount(Math.floor(start));

                if (start >= end) {
                    clearInterval(counter);
                    setCount(end);
                }
            }, 10);
        }
    }, [inView, end]);

    return <h1 className='text-[65px] font-bold font-lato text-white'>{count}+</h1>;
};

const Exprince_count = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <div ref={ref} className='bg-secondary py-[50px]'>
            <div className='lg:max-w-[1440px] m-auto px-[20px]'>
                <div className='flex gap-[60px] justify-between'>
                    <div className='flex md:flex-row gap-[15px] items-center'>
                        <div className='mt-[10px]'>
                            <span><img src={business} alt='img' className='w-[70px]' /></span>
                        </div>
                        <div className='flex flex-col'>
                            <Counter end={16} inView={inView} />
                            <p className='text-white mt-[-15px] font-roboto'>Years in Business</p>
                        </div>
                    </div>

                    <div className='flex md:flex-row gap-[15px] items-center'>
                        <div className='mt-[10px]'>
                            <span><img src={appdev} alt='img' className='w-[80px]' /></span>
                        </div>
                        <div className='flex flex-col'>
                            <Counter end={1660} inView={inView} />
                            <p className='text-white mt-[-15px] font-roboto'>Apps Delivered</p>
                        </div>
                    </div>

                    <div className='flex md:flex-row gap-[15px] items-center'>
                        <div className='mt-[10px]'>
                            <span><img src={happy} alt='img' className='w-[80px]' /></span>
                        </div>
                        <div className='flex flex-col'>
                            <Counter end={770} inView={inView} />
                            <p className='text-white mt-[-15px] font-roboto'>Happy Clients</p>
                        </div>
                    </div>

                    <div className='flex md:flex-row gap-[15px] items-center'>
                        <div className='mt-[10px]'>
                            <span><img src={technical} alt='img' className='w-[80px]' /></span>
                        </div>
                        <div className='flex flex-col'>
                            <Counter end={259} inView={inView} />
                            <p className='text-white mt-[-15px] font-roboto'>Technical Experts</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Exprince_count;
