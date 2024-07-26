import React, { useState } from 'react';
import { useTypewriter } from 'react-simple-typewriter';
// import logo from '../images/logo.png';

const Navbar = () => {
    // State to manage mobile menu visibility
    const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

    // Toggle mobile menu visibility
    const toggleMobileMenu = () => {
        setIsMobileMenuVisible(!isMobileMenuVisible);
    };

    const [logo] = useTypewriter({
        words: ["Mirza Zain"],
        loop: true,
        deleteSpeed: 80,
    });

    return (
        <div className='container-fluid bg-transparent text-gray-950 flex flex-wrap lg:flex-nowrap justify-between pb-2'>
            <div className='flex justify-between items-center w-full md:w-auto'>
                <a className='navbar-brand w-full' href='/'><h2 className='font-["Playwrite_AR"] font-bold text-2xl text-emerald-600 px-3'>{logo}</h2></a>
                <div className='hamburger md:hidden text-2xl' onClick={toggleMobileMenu}>
                    <i className="ri-menu-line"></i>
                </div>
            </div>
            {/* Desktop Menu */}
            <div id='desktop' className='navbar hidden md:flex flex-nowrap'>
                <ul className='navbar-nav flex-row gap-5 px-4'>
                    <li className='nav-item'>
                        <a className='nav-link text-gray-800 text-xl tracking-wider font-medium hover:text-emerald-500 ease-in-out duration-500 font-["Oswald"]' href='/home'>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link text-gray-800 text-xl tracking-wider font-medium hover:text-emerald-500 ease-in-out duration-500 font-["Oswald"]' href='/about'>About Me</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link text-gray-800 text-xl tracking-wider font-medium hover:text-emerald-500 ease-in-out duration-500 font-["Oswald"]' href='/project'>Projects</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link text-gray-800 text-xl tracking-wider font-medium hover:text-emerald-500 ease-in-out duration-500 font-["Oswald"]' href='/contact'>Contact Me</a>
                    </li>
                </ul>
            </div>
            {/* Mobile Menu */}
            {isMobileMenuVisible && (
                <div id='mobile' className='navbar md:hidden'>
                    <ul className='navbar-nav flex-col gap-5'>
                        <li className='nav-item'>
                            <a className='nav-link text-gray-800 text-xl tracking-wider font-medium hover:text-emerald-500 ease-in-out duration-500 font-["Oswald"]' href='/home'>Home</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link text-gray-800 text-xl tracking-wider font-medium hover:text-emerald-500 ease-in-out duration-500 font-["Oswald"]' href='/about'>About Me</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link text-gray-800 text-xl tracking-wider font-medium hover:text-emerald-500 ease-in-out duration-500 font-["Oswald"]' href='/project' >Projects</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link text-gray-800 text-xl tracking-wider font-medium hover:text-emerald-500 ease-in-out duration-500 font-["Oswald"]' href='/contact' >Contact Me</a>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;