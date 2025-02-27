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
                <div id='Desktop' className='flex justify-between items-center'>
                    <div>
                        <span className='text-3xl'>&lt;/</span>
                        <span className='font-[QuickStyler] text-4xl'><Link href={"/"}>Mirza Zain</Link></span>
                        <span className='text-3xl'>&gt;</span>
                    </div>
                    { mobVisible ? 
                        (<CircleX className='md:hidden z-50' size={25} onClick={toggleButton} />) 
                        :
                        (<Menu className='md:hidden' size={25} onClick={toggleButton} />)
                    }
                    <div className='font-[Designer] text-2xl hidden md:block'>
                        <ul className='flex justify-around items-center gap-5'>
                            <li><Link href={"/about"} className={path === "/" ? 'text-black': 'text-blue-700'}>About Me</Link></li>
                            <li><Link href={"/skills"} className={path === "/" ? 'text-black': 'text-blue-700'}>Skills</Link></li>
                            <li><Link href={"/projects"} className={path === "/" ? 'text-black': 'text-blue-700'}>Projects</Link></li>
                            <li><Link href={"/contact"} className={path === "/" ? 'text-black': 'text-blue-700'}>Contact Me</Link></li>
                        </ul>
                    </div>
                </div>
            </header>
            { mobVisible && (
                <div id="Mobile" className='w-full h-screen flex flex-col justify-center items-center z-50 font-[Designer] p-0'>
                    <ul className='h-1/2 flex flex-col justify-around items-center text-2xl p-0'>
                        <li><Link href={"/about"} className={path === "/" ? 'text-black': 'text-blue-700'} onClick={handleClick}>About Me</Link></li>
                        <li><Link href={"/skills"} className={path === "/" ? 'text-black': 'text-blue-700'} onClick={handleClick}>Skills</Link></li>
                        <li><Link href={"/projects"} className={path === "/" ? 'text-black': 'text-blue-700'} onClick={handleClick}>Projects</Link></li>
                        <li><Link href={"/contact"} className={path === "/" ? 'text-black': 'text-blue-700'} onClick={handleClick}>Contact Me</Link></li>
                    </ul>
                </div> 
            )}
        </>
    )
}

export default Navbar