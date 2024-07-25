import React, { useState } from 'react';
import logo from '../images/logo.png'

const Navbar = () => {
    // State to manage mobile menu visibility
    const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

    // Toggle mobile menu visibility
    const toggleMobileMenu = () => {
        setIsMobileMenuVisible(!isMobileMenuVisible);
    };

    return (
        <div className='container-fluid bg-transparent text-gray-950 flex flex-wrap lg:flex-nowrap '>
            <div className='flex justify-between items-center w-full md:w-auto'>
                <a className='navbar-brand w-full' href='/'><img className='w-[22%] ' src={logo} alt="Logo" /></a>
                <div className='hamburger md:hidden text-2xl' onClick={toggleMobileMenu}>
                    <i className="ri-menu-line"></i>
                </div>
            </div>
            {/* Desktop Menu */}
            <div id='desktop' className='navbar hidden md:flex flex-nowrap'>
                <ul className='navbar-nav flex-row gap-5'>
                    <li className='nav-item'>
                        <a className='nav-link text-gray-500 text-xl tracking-wider font-semibold hover:text-orange-500 hover:ease-in ease-out duration-500 font-["Oswald"]' href='/home'>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link text-gray-500 text-xl tracking-wider font-semibold hover:text-orange-500 hover:ease-in ease-out duration-500 font-["Oswald"]' href='/character'>Characters</a>
                    </li>
                    <li className='nav-item'>
                        <a className='nav-link text-gray-500 text-xl tracking-wider font-semibold hover:text-orange-500 hover:ease-in ease-out duration-500 font-["Oswald"]' href='/blog'>Blog</a>
                    </li>
                </ul>
            </div>
            {/* Mobile Menu */}
            {isMobileMenuVisible && (
                <div id='mobile' className='navbar md:hidden'>
                    <ul className='navbar-nav flex-col gap-5'>
                        <li className='nav-item'>
                            <a className='nav-link text-gray-500 text-xl tracking-wider font-semibold hover:text-orange-500 ease-in-out duration-500 font-["Oswald"]' href='/home'>Home</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link text-gray-500 text-xl tracking-wider font-semibold hover:text-orange-500 ease-in-out duration-500 font-["Oswald"]' href='/character'>Characters</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link text-gray-500 text-xl tracking-wider font-semibold hover:text-orange-500 ease-in-out duration-500 font-["Oswald"]' href='/blog' >Blog</a>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;