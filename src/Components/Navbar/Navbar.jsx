import React from 'react';
import { logo } from '../../Images/Images';
import Drawer from 'react-modern-drawer'

//import styles 👇
import 'react-modern-drawer/dist/index.css'
import { Link } from 'react-router-dom';
const Navbar = () => {
    const menuItems = [
        { name: 'Home', link: '#home' },
        { name: 'Services', link: '#services' },
        { name: 'Company', link: '#company' },
        { name: 'Contact Us', link: '#contact' },
    ];

    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

    return (
        <div>
            <div className="bg-primary py-4 md:block hidden">
                <div className='lg:max-w-[1440px] m-auto px-[20px] flex justify-between items-center '>
                    <div>
                    <Link to="/"> <h1 className='xl:text-[35px] lg:text-[40px] font-lato text-white font-bold'>Codenst</h1> </Link>
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
            <div className='block md:hidden'>
                <div className='flex justify-between fixed w-[100%] z-[99] bg-primary py-[25px] px-[30px] items-center'>
                    <div>
                       <Link to="/"> <h1 className='text-[35px] font-lato text-white font-bold'>Codenst</h1></Link>
                    </div>
                    <div>
                        <button onClick={toggleDrawer} className='text-[35px] text-white'><i class="fa fa-bars" aria-hidden="true"></i></button>
                    </div>
                </div>

                <div>
                    <Drawer
                        open={isOpen}
                        onClose={toggleDrawer}
                        direction='right'
                        className='bla bla bla'
                    >
                        <div>
                        <nav>
                            <ul className='flex flex-col gap-[18px] text-black py-[20px] px-[20px]'>
                                {menuItems.map((item, index) => (
                                    <li key={index}>
                                        <a
                                            href={item.link}
                                            className={`${item.name === 'Contact Us'
                                                ? 'bg-primary px-4 py-[12px] rounded text-white mt-[15px] inline-block'
                                                : 'hover:text-gray-400 transition duration-300'
                                                } text-[19px] font-lato font-bold`}
                                        >
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        </div>
                    </Drawer>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
