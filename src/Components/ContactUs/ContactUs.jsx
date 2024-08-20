import React from 'react';

const ContactUs = () => {
    return (
        <div className='bg-secondary py-[50px]'>
            <div className='lg:max-w-[1440px] m-auto px-[20px]'>
                <div className='text-center'>
                    <h1 className='text-[55px] font-bold font-lato text-white border-b border-white inline-block'>Contact Us</h1>
                </div>
                <div>
                    <div className='flex  lg:flex-row flex-wrap justify-between mt-[50px] gap-[25px] md:gap-[15px]'>
                        <div className='lg:w-[30%] md:w-[48%] w-[100%] bg-[#ffffff29] flex flex-col gap-[15px] items-center py-[50px] rounded-[5px] border-[1px] border-white'>
                            <span className='text-[45px] text-white'><i class="fa fa-phone-square" aria-hidden="true"></i></span>
                            <p className='text-white font-lato text-[22px]'>+91 7023472073</p>
                        </div>

                        <div className='lg:w-[30%] md:w-[48%] w-[100%] bg-[#ffffff29] flex flex-col gap-[15px] items-center py-[50px] rounded-[5px] border-[1px] border-white'>
                            <span className='text-[45px] text-white'><i class="fa fa-skype" aria-hidden="true"></i></span>
                            <p className='text-white font-lato text-[22px]'>CODENST@123</p>
                        </div>

                        <div className='lg:w-[30%] md:w-[100%] w-[100%] bg-[#ffffff29] flex flex-col gap-[15px] items-center py-[50px] rounded-[5px] border-[1px] border-white'>
                            <span className='text-[45px] text-white'><i class="fa fa-envelope-o" aria-hidden="true"></i></span>
                            <p className='text-white font-lato text-[22px]'>info@codenst.com</p>
                        </div>
                    </div>

                    <div className='mt-[80px] bg-[#ffffff29] lg:p-[50px] p-[30px] border-[1px] border-black rounded-[10px]'>
                        <from>
                            <div className='flex md:gap-[15px] md:flex-row flex-col'>
                                <input type='text' placeholder='Enter Name' className='outline-none from_input w-[100%]'/>
                                <input type='text' placeholder='Enter Enail' className='outline-none from_input w-[100%]'/>
                            </div>
                            <div className='flex md:gap-[15px] md:flex-row flex-col'>
                                <input type='Number' placeholder='Enter Number' className='outline-none from_input w-[100%]'/>
                                <input type='text' placeholder='Enter Subject' className='outline-none from_input w-[100%]'/>
                            </div>

                            <div>
                                <textarea className='w-[100%] from_input outline-none' placeholder='Enter Message' cols={8} rows={9}/>
                            </div>

                            <div className='text-center'>
                                <button className='text-[23px] font-lato bg-primary text-white px-[35px] py-[12px] rounded-[25px]'>Submit</button>
                            </div>
                        </from>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
