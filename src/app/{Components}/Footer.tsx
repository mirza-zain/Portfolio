'use client'

import { Github, Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const Footer = () => {
    const path = usePathname()

  return (
    <footer className='w-full h-1/4 bg-black text-white mt-5'>
        <div className="flex flex-1 justify-between items-center">
            <div className='w-1/2 flex flex-col justify-between items-center mt-4'>
                <div>    
                    <span className='text-2xl'>&lt;/</span>
                    <span className='font-[QuickStyler] text-3xl text-electric'><Link href={"/"}>Mirza Zain</Link></span>
                    <span className='text-2xl'>&gt;</span>
                </div>
                <div>
                    <ul className="flex justify-center items-center gap-10 text-lg md:text-2xl mt-6">
                        <li><Link href={"https://www.linkedin.com/in/mirza-zain269/"} target="__blank" ><Linkedin className="ease-in-out hover:text-electric" size={25} /></Link></li>
                        <li><Link href={"https://github.com/mirza-zain"} target="__blank" ><Github className="ease-in-out hover:text-electric" size={25} /></Link></li>
                        <li><Link href={"https://www.instagram.com/mirza_zain43/"} target="__blank" ><Instagram className="ease-in-out hover:text-electric" size={25} /></Link></li>
                    </ul>
                </div>
            </div>
            <div className='w-1/2 flex flex-col justify-start items-center gap-2 mt-2'>
                <h3 className="text-xl mt-2">Page Links</h3>
                <div>
                    <ul className='flex flex-col md:flex-row justify-center items-center gap-5 text-lg flex-wrap'>
                        <li><Link href={"/"} className={path === "/" ? 'text-white underline decoration-electric' : 'text-white ease-in-out duration-200 hover:text-electric'}>Home</Link></li>
                        <li><Link href={"/skills"} className={path === "/skills" ? 'text-white underline decoration-electric' : 'text-white ease-in-out duration-200 hover:text-electric'}>Skills</Link></li>
                        <li><Link href={"/education"} className={path === "/education" ? 'text-white underline decoration-electric' : 'text-white ease-in-out duration-200 hover:text-electric'}>Education</Link></li>
                        <li><Link href={"/projects"} className={path === "/projects" ? 'text-white underline decoration-electric' : 'text-white ease-in-out duration-200 hover:text-electric'}>Projects</Link></li>
                        <li><Link href={"/contact"} className={path === "/contact" ? 'text-white underline decoration-electric' : 'text-white ease-in-out duration-200 hover:text-electric'}>Contact Me</Link></li>
                    </ul>
                </div>
            </div>
        </div>
        <p className="text-center mt-5">&copy; {new Date().getFullYear()} Mirza Zain. All rights reserved.</p>
    </footer>
  )
}

export default Footer