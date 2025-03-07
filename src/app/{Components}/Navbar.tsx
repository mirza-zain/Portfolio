'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import React, { useState, useEffect } from 'react'

const Navbar = () => {
    const path = usePathname()
    const [mobVisible, setMobVisible] = useState(false)
    const [isDarkMode, setIsDarkMode] = useState(false)

    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
            setIsDarkMode(true)
        } else {
            document.documentElement.classList.remove('dark')
            setIsDarkMode(false)
        }
    }, [])

    const toggleButton = () => { setMobVisible(!mobVisible) }
    const handleClick = () => { setMobVisible(false) }
    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove('dark')
            localStorage.theme = 'light'
        } else {
            document.documentElement.classList.add('dark')
            localStorage.theme = 'dark'
        }
        setIsDarkMode(!isDarkMode)
    }

    return (
        <>
            <header className='w-full h-1/6 flex-1 p-5 sticky top-0 bg-white dark:bg-black z-50'>
                <div id='Desktop' className='flex justify-between items-center m-2 p-2'>
                    <div className="z-50">
                        <span className='text-3xl'>&lt;/</span>
                        <span className='font-[QuickStyler] text-4xl text-electric'><Link href={"/"}>Mirza Zain</Link></span>
                        <span className='text-3xl'>&gt;</span>
                    </div>
                    {mobVisible ?
                        (<X className='md:hidden z-50' size={25} onClick={toggleButton} />)
                        :
                        (<Menu className='md:hidden' size={25} onClick={toggleButton} />)
                    }
                    <div className='text-2xl hidden md:block'>
                        <ul className='flex justify-around items-center gap-5'>
                            <li><Link href={"/"} className={path === "/" ? 'text-black dark:text-white underline decoration-electric' : 'text-black dark:text-white ease-in-out duration-200 hover:text-electric'}>Home</Link></li>
                            <li><Link href={"#skills"} className={path === "/#skills" ? 'text-black dark:text-white underline decoration-electric' : 'text-black dark:text-white ease-in-out duration-200 hover:text-electric'}>Skills</Link></li>
                            <li><Link href={"#education"} className={path === "/#education" ? 'text-black dark:text-white underline decoration-electric' : 'text-black dark:text-white ease-in-out duration-200 hover:text-electric'}>Education</Link></li>
                            <li><Link href={"#projects"} className={path === "/#projects" ? 'text-black dark:text-white underline decoration-electric' : 'text-black dark:text-white ease-in-out duration-200 hover:text-electric'}>Projects</Link></li>
                            <li><Link href={"#contact"} className={path === "/#contact" ? 'text-black dark:text-white underline decoration-electric' : 'text-black dark:text-white ease-in-out duration-200 hover:text-electric'}>Contact Me</Link></li>
                        </ul>
                    </div>
                    <div onClick={toggleTheme} className="ml-4 p-2 cursor-pointer hidden md:block">
                        {isDarkMode ? (
                            <i className="ri-sun-fill text-2xl text-gray-800 dark:text-gray-200"></i>
                        ) : (
                            <i className="ri-moon-fill text-2xl text-gray-800 dark:text-gray-200"></i>
                        )}
                    </div>
                </div>
            </header>
            {mobVisible && (
                <div id="Mobile" className='w-full h-screen flex flex-col justify-center items-center bg-white dark:bg-black fixed z-40'>
                    <ul className='h-1/2 flex flex-col justify-around items-center text-2xl p-0'>
                        <li><Link href={"/"} className={path === "/" ? 'text-black dark:text-white underline decoration-electric' : 'text-black dark:text-white ease-in-out duration-200 hover:text-electric'} onClick={handleClick}>Home</Link></li>
                        <li><Link href={"#skills"} className={path === "/#skills" ? 'text-black dark:text-white underline decoration-electric' : 'text-black dark:text-white ease-in-out duration-200 hover:text-electric'} onClick={handleClick}>Skills</Link></li>
                        <li><Link href={"#education"} className={path === "/#education" ? 'text-black dark:text-white underline decoration-electric' : 'text-black dark:text-white ease-in-out duration-200 hover:text-electric'} onClick={handleClick}>Education</Link></li>
                        <li><Link href={"#projects"} className={path === "/#projects" ? 'text-black dark:text-white underline decoration-electric' : 'text-black dark:text-white ease-in-out duration-200 hover:text-electric'} onClick={handleClick}>Projects</Link></li>
                        <li><Link href={"#contact"} className={path === "/#contact" ? 'text-black dark:text-white underline decoration-electric' : 'text-black dark:text-white ease-in-out duration-200 hover:text-electric'} onClick={handleClick}>Contact Me</Link></li>
                    </ul>
                    <div onClick={toggleTheme} className="ml-4 p-2 cursor-pointer">
                        {isDarkMode ? (
                            <i className="ri-sun-fill text-2xl text-gray-800 dark:text-gray-200"></i>
                        ) : (
                            <i className="ri-moon-fill text-2xl text-gray-800 dark:text-gray-200"></i>
                        )}
                    </div>
                </div>
            )}
        </>
    )
}

export default Navbar