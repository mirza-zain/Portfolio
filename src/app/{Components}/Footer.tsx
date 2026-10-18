'use client'

import { Github, Instagram, Linkedin } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full bg-zinc-950 text-slate-400 border-t border-zinc-900 py-10 sm:py-12 mt-12 sm:mt-16'>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className='flex flex-col justify-start items-start'>
                <div className="flex items-center gap-1 text-slate-100">    
                    <span className='text-lg sm:text-xl font-mono text-zinc-700'>&lt;</span>
                    <span className='font-[QuickStyler] text-2xl sm:text-3xl font-bold tracking-tight text-cyan-400'>
                        <Link href={"/"}>Mirza Zain</Link>
                    </span>
                    <span className='text-lg sm:text-xl font-mono text-zinc-700'>/&gt;</span>
                </div>
                <div>
                    <ul className="flex items-center gap-3 mt-4">
                        <li>
                          <Link 
                            href={"https://www.linkedin.com/in/mirza-zain269/"} 
                            target="__blank"
                            aria-label="LinkedIn Profile"
                            className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-zinc-900 border border-zinc-800/60 hover:bg-cyan-500 hover:text-white hover:border-cyan-500 transition-all duration-300 hover:-translate-y-0.5"
                          >
                            <Linkedin size={17} />
                          </Link>
                        </li>
                        <li>
                          <Link 
                            href={"https://github.com/mirza-zain"} 
                            target="__blank"
                            aria-label="GitHub Profile"
                            className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-zinc-900 border border-zinc-800/60 hover:bg-cyan-500 hover:text-white hover:border-cyan-500 transition-all duration-300 hover:-translate-y-0.5"
                          >
                            <Github size={17} />
                          </Link>
                        </li>
                        <li>
                          <Link 
                            href={"https://www.instagram.com/mirza_zain43/"} 
                            target="__blank"
                            aria-label="Instagram Profile"
                            className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-zinc-900 border border-zinc-800/60 hover:bg-cyan-500 hover:text-white hover:border-cyan-500 transition-all duration-300 hover:-translate-y-0.5"
                          >
                            <Instagram size={17} />
                          </Link>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div className='flex flex-col justify-start items-start gap-2.5 sm:gap-3'>
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500">Quick Links</h3>
                <div>
                    <ul className='flex flex-wrap gap-x-5 gap-y-2 text-xs sm:text-sm font-medium'>
                        <li><Link href={"/"} className='hover:text-cyan-400 transition-colors duration-200'>Home</Link></li>
                        <li><Link href={"#experience"} className='hover:text-cyan-400 transition-colors duration-200'>Experience</Link></li>
                        <li><Link href={"#projects"} className='hover:text-cyan-400 transition-colors duration-200'>Projects</Link></li>
                        <li><Link href={"#skills"} className='hover:text-cyan-400 transition-colors duration-200'>Skills</Link></li>
                        <li><Link href={"#education"} className='hover:text-cyan-400 transition-colors duration-200'>Education</Link></li>
                        <li><Link href={"#contact"} className='hover:text-cyan-400 transition-colors duration-200'>Contact</Link></li>
                    </ul>
                </div>
            </div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 border-t border-zinc-900 mt-8 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-xs text-zinc-500 text-center sm:text-left">
          <p>&copy; {new Date().getFullYear()} Mirza Zain. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <span>Built with Next.js &amp; Tailwind CSS</span>
            <span>•</span>
            <Link href="/" className="hover:text-cyan-400 transition-colors duration-200 flex items-center gap-1 font-semibold">
              Back to top &uarr;
            </Link>
          </div>
        </div>
    </footer>
  )
}

export default Footer