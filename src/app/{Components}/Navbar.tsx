'use client'

import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import React, { useState } from 'react'
import ThemeSwitch from './ThemeSwitch'

const Navbar = () => {
    const [mobVisible, setMobVisible] = useState(false)

    const toggleButton = () => { setMobVisible(!mobVisible) }
    const handleClick = () => { setMobVisible(false) }

    return (
        <>
            <header className='w-full sticky top-0 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-b border-slate-200/55 dark:border-zinc-800/55 transition-colors duration-300 z-50 py-3 px-4 md:px-8'>
                <div id='Desktop' className='max-w-6xl mx-auto flex justify-between items-center'>
                    <div className="z-50 flex items-center gap-1">
                        <span className='text-xl md:text-2xl font-mono text-slate-400 dark:text-zinc-600'>&lt;</span>
                        <span className='font-[QuickStyler] text-2xl md:text-3xl font-bold tracking-tight text-cyan-500 dark:text-cyan-400 hover:opacity-90 transition-opacity duration-300'>
                            <Link href="/">Mirza Zain</Link>
                        </span>
                        <span className='text-xl md:text-2xl font-mono text-slate-400 dark:text-zinc-600'>/&gt;</span>
                    </div>
                    
                    <div className="flex items-center gap-4">
                        <div className='hidden md:block'>
                            <ul className='flex items-center gap-6 text-base font-medium'>
                                <li><Link href="/" className='text-slate-700 dark:text-slate-200 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-200'>Home</Link></li>
                                <li><Link href="#skills" className='text-slate-700 dark:text-slate-200 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-200'>Skills</Link></li>
                                <li><Link href="#education" className='text-slate-700 dark:text-slate-200 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-200'>Education</Link></li>
                                <li><Link href="#projects" className='text-slate-700 dark:text-slate-200 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-200'>Projects</Link></li>
                                <li><Link href="#contact" className='text-slate-700 dark:text-slate-200 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-200'>Contact Me</Link></li>
                            </ul>
                        </div>
                        
                        <ThemeSwitch className="hidden md:block cursor-pointer hover:scale-110 duration-200" />
                        
                        <div className="flex items-center gap-3 md:hidden z-50">
                            <ThemeSwitch className="cursor-pointer hover:scale-110 duration-200" />
                            {mobVisible ?
                                (<X className='cursor-pointer text-slate-800 dark:text-slate-200' size={24} onClick={toggleButton} />)
                                :
                                (<Menu className='cursor-pointer text-slate-800 dark:text-slate-200' size={24} onClick={toggleButton} />)
                            }
                        </div>
                    </div>
                </div>
            </header>
            {mobVisible && (
                <div id="Mobile" className='w-full h-screen fixed inset-0 flex flex-col justify-center items-center bg-white/95 dark:bg-zinc-950/95 backdrop-blur-lg z-40 transition-all duration-300'>
                    <ul className='flex flex-col gap-8 items-center text-xl font-semibold'>
                        <li><Link href="/" className='text-slate-800 dark:text-slate-200 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-200' onClick={handleClick}>Home</Link></li>
                        <li><Link href="#skills" className='text-slate-800 dark:text-slate-200 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-200' onClick={handleClick}>Skills</Link></li>
                        <li><Link href="#education" className='text-slate-800 dark:text-slate-200 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-200' onClick={handleClick}>Education</Link></li>
                        <li><Link href="#projects" className='text-slate-800 dark:text-slate-200 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-200' onClick={handleClick}>Projects</Link></li>
                        <li><Link href="#contact" className='text-slate-800 dark:text-slate-200 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-200' onClick={handleClick}>Contact Me</Link></li>
                    </ul>
                </div>
            )}
        </>
    )
}

export default Navbar