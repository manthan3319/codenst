import React from 'react';
import { logo } from '../../Images/Images';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const menuItems = [
        { name: 'Home', link: '/' },
        { name: 'Services', link: '/services' },
        { name: 'Company', link: '/company' },
        { name: 'Contact Us', link: '/contact' },
    ];

    return (
        <div className="bg-primary py-4">
            <div className='lg:max-w-[1440px] m-auto px-[20px] flex justify-between items-center'>
                <div>
                    {/* <img src={logo} alt='logo' className='w-[150px]' /> */}
                    <h1 className='xl:text-[35px] font-lato text-white font-bold'>Codenst</h1>
                </div>

                <div>
                    <nav>
                        <ul className='flex gap-[70px] text-white'>
                            {menuItems.map((item, index) => (
                                <li key={index}>
                                    <Link
                                        to={item.link}
                                        className={`${item.name === 'Contact Us'
                                                ? 'bg-white px-4 py-[12px] rounded text-primary '
                                                : 'hover:text-gray-400 transition duration-300'
                                            } xl:text-[19px] font-lato font-bold`}
                                    >
                                        {item.name}
                                    </Link>
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
