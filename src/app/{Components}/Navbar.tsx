'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, CircleX } from 'lucide-react'
import React, { useState } from 'react'

const Navbar = () => {
    const path = usePathname()
    const [mobVisible, setMobVisible] = useState(false)
    const toggleButton = () => { setMobVisible(!mobVisible)}
    const handleClick = () => { setMobVisible(false) }

    return (
        <>
            <header className='w-full h-1/6 flex-1 p-5'>
                <div id='Desktop' className='flex justify-between items-center m-2 p-2'>
                    <div>
                        <span className='text-3xl'>&lt;/</span>
                        <span className='font-[QuickStyler] text-4xl text-teal-500'><Link href={"/"}>Mirza Zain</Link></span>
                        <span className='text-3xl'>&gt;</span>
                    </div>
                    { mobVisible ? 
                        (<CircleX className='md:hidden z-50' size={25} onClick={toggleButton} />) 
                        :
                        (<Menu className='md:hidden' size={25} onClick={toggleButton} />)
                    }
                    <div className='text-2xl hidden md:block'>
                        <ul className='flex justify-around items-center gap-5'>
                            <li><Link href={"/about"} className={path === "/" ? 'text-black ease-in-out duration-200 hover:text-teal-500' : 'text-teal-500'}>About Me</Link></li>
                            <li><Link href={"/skills"} className={path === "/" ? 'text-black ease-in-out duration-200 hover:text-teal-500' : 'text-teal-500'}>Skills</Link></li>
                            <li><Link href={"/projects"} className={path === "/" ? 'text-black ease-in-out duration-200 hover:text-teal-500' : 'text-teal-500'}>Projects</Link></li>
                            <li><Link href={"/contact"} className={path === "/" ? 'text-black ease-in-out duration-200 hover:text-teal-500' : 'text-teal-500'}>Contact Me</Link></li>
                        </ul>
                    </div>
                </div>
            </header>
            { mobVisible && (
                <div id="Mobile" className='w-full h-screen flex flex-col justify-center items-center z-50 p-0'>
                    <ul className='h-1/2 flex flex-col justify-around items-center text-2xl p-0'>
                        <li><Link href={"/about"} className={path === "/" ? 'text-black ease-in-out duration-200 hover:text-teal-500' : 'text-teal-500'}>About Me</Link></li>
                        <li><Link href={"/skills"} className={path === "/" ? 'text-black ease-in-out duration-200 hover:text-teal-500' : 'text-teal-500'}>Skills</Link></li>
                        <li><Link href={"/projects"} className={path === "/" ? 'text-black ease-in-out duration-200 hover:text-teal-500' : 'text-teal-500'}>Projects</Link></li>
                        <li><Link href={"/contact"} className={path === "/" ? 'text-black ease-in-out duration-200 hover:text-teal-500' : 'text-teal-500'}>Contact Me</Link></li>
                    </ul>
                </div> 
            )}
        </>
    )
}

export default Navbar