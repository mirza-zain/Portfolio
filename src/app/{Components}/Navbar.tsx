'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import React, { useState } from 'react'
import ThemeSwitch from './ThemeSwitch'

const Navbar = () => {
    const path = usePathname()
    const [mobVisible, setMobVisible] = useState(false)

    const toggleButton = () => { setMobVisible(!mobVisible) }
    const handleClick = () => { setMobVisible(false) }

    return (
        <>
            <header className='w-full h-1/6 flex-1 p-5 sticky top-0 bg-white dark:bg-black border-double border-electric border-b-2 border-t-0 border-l-0 border-r-0 z-50'>
                <div id='Desktop' className='flex justify-between items-center m-2 p-2'>
                    <div className="z-50">
                        <span className='text-3xl'>&lt;/</span>
                        <span className='font-[QuickStyler] text-4xl text-electric'><Link href={"/"}>Mirza Zain</Link></span>
                        <span className='text-3xl'>&gt;</span>
                    </div>
                    <ThemeSwitch className="block md:hidden" />
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
                    <ThemeSwitch className="md:block hidden" />
                </div>
            </header>
            {mobVisible && (
                <div id="Mobile" className='w-full h-screen flex flex-col justify-center items-center bg-white dark:bg-black fixed z-40'>
                    <div>
                    </div>
                    <ul className='h-1/2 flex flex-col justify-around items-center text-2xl p-0'>
                        <li><Link href={"/"} className={path === "/" ? 'text-black dark:text-white underline decoration-electric' : 'text-black dark:text-white ease-in-out duration-200 hover:text-electric'} onClick={handleClick}>Home</Link></li>
                        <li><Link href={"#skills"} className={path === "/#skills" ? 'text-black dark:text-white underline decoration-electric' : 'text-black dark:text-white ease-in-out duration-200 hover:text-electric'} onClick={handleClick}>Skills</Link></li>
                        <li><Link href={"#education"} className={path === "/#education" ? 'text-black dark:text-white underline decoration-electric' : 'text-black dark:text-white ease-in-out duration-200 hover:text-electric'} onClick={handleClick}>Education</Link></li>
                        <li><Link href={"#projects"} className={path === "/#projects" ? 'text-black dark:text-white underline decoration-electric' : 'text-black dark:text-white ease-in-out duration-200 hover:text-electric'} onClick={handleClick}>Projects</Link></li>
                        <li><Link href={"#contact"} className={path === "/#contact" ? 'text-black dark:text-white underline decoration-electric' : 'text-black dark:text-white ease-in-out duration-200 hover:text-electric'} onClick={handleClick}>Contact Me</Link></li>
                    </ul>
                </div>
            )}
        </>
    )
}

export default Navbar