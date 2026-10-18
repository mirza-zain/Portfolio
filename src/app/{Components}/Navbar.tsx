'use client'

import Link from 'next/link'
import { Menu, X, ArrowRight, Github, Linkedin, Instagram } from 'lucide-react'
import React, { useState, useEffect } from 'react'
import ThemeSwitch from './ThemeSwitch'

const Navbar = () => {
    const [mobVisible, setMobVisible] = useState(false)

    const toggleButton = () => { setMobVisible(!mobVisible) }
    const handleClick = () => { setMobVisible(false) }

    // Lock background scroll when mobile menu is open
    useEffect(() => {
        if (mobVisible) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
        return () => {
            document.body.style.overflow = ''
        }
    }, [mobVisible])

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#skills' },
        { name: 'Education', href: '#education' },
        { name: 'Contact', href: '#contact' },
    ]

    return (
        <>
            <header className='w-full sticky top-0 bg-white/85 dark:bg-zinc-950/85 backdrop-blur-md border-b border-slate-200/60 dark:border-zinc-800/60 transition-colors duration-300 z-50 py-3.5 px-4 sm:px-6 md:px-8'>
                <div id='Desktop' className='max-w-6xl mx-auto flex justify-between items-center'>
                    <div className="z-50 flex items-center gap-1">
                        <span className='text-lg sm:text-xl font-mono text-slate-400 dark:text-zinc-600'>&lt;</span>
                        <span className='font-[QuickStyler] text-2xl sm:text-3xl font-bold tracking-tight text-cyan-500 dark:text-cyan-400 hover:opacity-90 transition-opacity duration-300'>
                            <Link href="/">Mirza Zain</Link>
                        </span>
                        <span className='text-lg sm:text-xl font-mono text-slate-400 dark:text-zinc-600'>/&gt;</span>
                    </div>
                    
                    <div className="flex items-center gap-3 sm:gap-4">
                        {/* Desktop Navigation */}
                        <div className='hidden md:block'>
                            <ul className='flex items-center gap-6 text-sm font-semibold'>
                                {navLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link 
                                            href={link.href} 
                                            className='text-slate-700 dark:text-slate-200 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-200'
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <Link 
                            href="#contact" 
                            className="hidden lg:inline-flex items-center justify-center px-4 py-1.5 rounded-full text-xs font-bold bg-cyan-500/10 dark:bg-cyan-500/15 border border-cyan-500/30 text-cyan-600 dark:text-cyan-400 hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-400 dark:hover:text-zinc-950 transition-all duration-200 active:scale-95"
                        >
                            Let&apos;s Talk
                        </Link>
                        
                        <ThemeSwitch className="hidden md:block cursor-pointer hover:scale-110 duration-200" />
                        
                        {/* Mobile controls */}
                        <div className="flex items-center gap-2 sm:gap-3 md:hidden z-50">
                            <ThemeSwitch className="cursor-pointer hover:scale-110 duration-200" />
                            <button
                                type="button"
                                onClick={toggleButton}
                                aria-label={mobVisible ? 'Close menu' : 'Open menu'}
                                className="p-1.5 rounded-xl bg-slate-100 dark:bg-zinc-800 text-slate-800 dark:text-slate-200 hover:text-cyan-500 transition-colors"
                            >
                                {mobVisible ? <X size={22} /> : <Menu size={22} />}
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Fullscreen Navigation Overlay */}
            {mobVisible && (
                <div 
                    id="Mobile" 
                    className='fixed inset-0 w-full h-[100dvh] flex flex-col justify-between bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl z-40 px-6 pt-24 pb-8 overflow-y-auto transition-all duration-300 md:hidden'
                >
                    <div className="flex flex-col items-center justify-center gap-5 my-auto w-full">
                        <ul className='flex flex-col gap-5 items-center w-full max-w-xs'>
                            {navLinks.map((link) => (
                                <li key={link.name} className="w-full text-center">
                                    <Link 
                                        href={link.href} 
                                        className='block py-2 text-xl font-bold text-slate-800 dark:text-slate-100 hover:text-cyan-500 dark:hover:text-cyan-400 transition-colors duration-200 active:scale-95' 
                                        onClick={handleClick}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* Mobile CTA */}
                        <div className="w-full max-w-xs pt-4 flex flex-col gap-3">
                            <Link
                                href="#contact"
                                onClick={handleClick}
                                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-sm shadow-md shadow-cyan-500/20 active:scale-95"
                            >
                                <span>Let&apos;s Build Together</span>
                                <ArrowRight size={16} />
                            </Link>

                            <Link
                                href="/MirzaZain.pdf"
                                download
                                onClick={handleClick}
                                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-slate-800 dark:text-slate-200 font-semibold text-sm active:scale-95"
                            >
                                <span>Download Resume (PDF)</span>
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Menu Footer with Socials */}
                    <div className="flex items-center justify-center gap-5 pt-6 border-t border-slate-200/60 dark:border-zinc-800/60">
                        <Link 
                            href="https://www.linkedin.com/in/mirza-zain269/" 
                            target="_blank"
                            aria-label="LinkedIn"
                            className="p-2.5 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-slate-300"
                        >
                            <Linkedin size={18} />
                        </Link>
                        <Link 
                            href="https://github.com/mirza-zain" 
                            target="_blank"
                            aria-label="GitHub"
                            className="p-2.5 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-slate-300"
                        >
                            <Github size={18} />
                        </Link>
                        <Link 
                            href="https://www.instagram.com/mirza_zain43/" 
                            target="_blank"
                            aria-label="Instagram"
                            className="p-2.5 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-700 dark:text-slate-300"
                        >
                            <Instagram size={18} />
                        </Link>
                    </div>
                </div>
            )}
        </>
    )
}

export default Navbar