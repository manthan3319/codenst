import React from 'react';
import { logo } from '../../Images/Images';

const Navbar = () => {
    const menuItems = [
        { name: 'Home', link: '#home' },
        { name: 'Services', link: '#services' },
        { name: 'Company', link: '#company' },
        { name: 'Contact Us', link: '#contact' },
    ];

    return (
        <div className="bg-primary py-4">
            <div className='lg:max-w-[1440px] m-auto px-[20px] flex justify-between items-center'>
                <div>
                    <h1 className='xl:text-[35px] font-lato text-white font-bold'>Codenst</h1>
                </div>

                <div>
                    <nav>
                        <ul className='flex gap-[70px] text-white'>
                            {menuItems.map((item, index) => (
                                <li key={index}>
                                    <a
                                        href={item.link}
                                        className={`${item.name === 'Contact Us'
                                                ? 'bg-white px-4 py-[12px] rounded text-primary'
                                                : 'hover:text-gray-400 transition duration-300'
                                            } xl:text-[19px] font-lato font-bold`}
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
