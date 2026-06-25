import { Github, Instagram, Linkedin, MapPin, Mail, Briefcase, CheckCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ContactPage = () => {
  return (
    <div id='contact' className="max-w-6xl mx-auto px-4 md:px-8 py-16">
      <h2 className='font-[PlaySir] text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white flex items-center gap-3 mb-10'>
        <span className="w-1.5 h-8 bg-cyan-500 rounded-full"></span>
        Reach Out To Me!
      </h2>
      
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-10 bg-white dark:bg-zinc-900/60 border border-slate-200/80 dark:border-zinc-800/80 rounded-2xl p-6 md:p-10 shadow-sm">
        <div className="w-full md:w-2/3 flex flex-col justify-start items-start">
          <p className='text-lg md:text-xl font-semibold text-slate-800 dark:text-slate-200 leading-relaxed mb-6 text-left'>
            Discuss a project or just want to say hi? My inbox is open for all.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mb-8">
            <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
              <Briefcase size={20} className="text-cyan-500" />
              <span className="text-base font-semibold">Software Engineer</span>
            </div>
            
            <a 
              href="mailto:mirzazain269@gmail.com" 
              className="flex items-center gap-3 text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-400 duration-200 group w-fit"
            >
              <Mail size={20} className="text-cyan-500 group-hover:scale-105 duration-200" />
              <span className="text-base font-semibold underline decoration-transparent group-hover:decoration-cyan-500 duration-200">
                mirzazain269@gmail.com
              </span>
            </a>
            
            <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
              <CheckCircle size={20} className="text-emerald-500" />
              <span className="text-base font-semibold">Open for Opportunities: Yes</span>
            </div>
            
            <div className="flex items-center gap-3 text-slate-600 dark:text-slate-400">
              <MapPin size={20} className="text-cyan-500" />
              <span className="text-base font-semibold">Available for Remote Work</span>
            </div>
          </div>
          
          <ul className="flex items-center gap-4 border-t border-slate-100 dark:border-zinc-800/80 pt-6 w-full">
            <li>
              <Link 
                href={"https://www.linkedin.com/in/mirza-zain269/"} 
                target="__blank" 
                className="flex items-center justify-center w-11 h-11 rounded-full bg-slate-100 dark:bg-zinc-800/50 border border-slate-200 dark:border-zinc-700/60 text-slate-700 dark:text-slate-300 hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-400 dark:hover:text-black hover:border-cyan-500 dark:hover:border-cyan-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-cyan-500/20"
              >
                <Linkedin size={20} />
              </Link>
            </li>
            <li>
              <Link 
                href={"https://github.com/mirza-zain"} 
                target="__blank"
                className="flex items-center justify-center w-11 h-11 rounded-full bg-slate-100 dark:bg-zinc-800/50 border border-slate-200 dark:border-zinc-700/60 text-slate-700 dark:text-slate-300 hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-400 dark:hover:text-black hover:border-cyan-500 dark:hover:border-cyan-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-cyan-500/20"
              >
                <Github size={20} />
              </Link>
            </li>
            <li>
              <Link 
                href={"https://www.instagram.com/mirza_zain43/"} 
                target="__blank"
                className="flex items-center justify-center w-11 h-11 rounded-full bg-slate-100 dark:bg-zinc-800/50 border border-slate-200 dark:border-zinc-700/60 text-slate-700 dark:text-slate-300 hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-400 dark:hover:text-black hover:border-cyan-500 dark:hover:border-cyan-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-cyan-500/20"
              >
                <Instagram size={20} />
              </Link>
            </li>
          </ul>
        </div>
        
        <div className='w-full md:w-1/3 flex justify-center items-center'>
          <div className="relative p-1 rounded-full bg-gradient-to-tr from-cyan-500 via-sky-500 to-blue-500 shadow-md shadow-cyan-500/10 dark:shadow-cyan-500/25 max-w-[220px] max-h-[220px]">
            <Image 
              src={'/profileImage.jpg'} 
              className='rounded-full object-cover bg-white dark:bg-zinc-950' 
              width={220} 
              height={220} 
              alt='profile image' 
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage