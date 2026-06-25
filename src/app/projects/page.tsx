import Link from 'next/link'
import React from 'react'
import { ExternalLink, Github } from 'lucide-react'

const ProjectPage = () => {
  const Project = [
    {
      'id': 1,
      'title': 'Asaan Taqreeb (Event App)',
      'description': 'A comprehensive cross-platform mobile application designed to help users browse and filter local event vendors in Karachi. Spearheaded the frontend mobile architecture, and engineered a scalable backend.',
      'skills': 'React Native, Expo, Node.js, MongoDB, Oracle Database',
      'liveLink': 'https://asaantaqreeb.vercel.app/',
      'gitLink': 'https://github.com/Asaan-Taqreeb/Asaan-Taqreeb-App',
    },
    {
      'id': 2,
      'title': 'Missing Link (AI Resume Analyzer)',
      'description': 'An AI-powered tool that evaluates a user\'s resume against a specific job description to provide an ATS compatibility score and identify missing keywords using Groq and Gemini APIs.',
      'skills': 'Next.js, Groq API, Gemini API, AI/ML APIs, Tailwind CSS',
      'liveLink': 'https://missinlink.vercel.app/',
      'gitLink': 'https://github.com/mirza-zain',
    },
    {
      'id': 3,
      'title': 'AI-Based Journal App',
      'description': 'Developed a full-stack journal application where users can write entries. The app utilizes AI/ML APIs to analyze the text content, determine the user\'s mood, and provide insightful feedback.',
      'skills': 'Next.js, Tailwind CSS, AI/ML APIs, Prisma, NeonDB, Clerk Auth',
      'liveLink': 'https://moodbetav2.vercel.app/',
      'gitLink': 'https://github.com/mirza-zain/AI-Based-Mood-Tracking',
    },
    {
      'id': 4,
      'title': 'Zentrixa Marketing Website',
      'description': 'Zentrixa Marketing delivers Wikipedia writing, fan art, comic books, animation, and creative branding services to help businesses grow globally.',
      'skills': 'React, Tailwind CSS',
      'liveLink': 'https://zentrixamarketing.vercel.app/',
      'gitLink': 'https://github.com/mirza-zain/zentrixamarketing-website/',
    },
  ]

  return (
    <div id='projects' className='max-w-6xl mx-auto px-4 md:px-8 py-16'>
      <h2 className="text-3xl md:text-4xl font-[PlaySir] font-extrabold tracking-tight text-slate-900 dark:text-white flex items-center gap-3 mb-10">
        <span className="w-1.5 h-8 bg-cyan-500 rounded-full"></span>
        Projects
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {
          Project.map(proj => {
            const skillList = proj.skills.split(',').map(s => s.trim())
            return (
              <div 
                key={proj.id} 
                className="flex flex-col justify-between h-full bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800/80 rounded-2xl hover:border-cyan-500/50 dark:hover:border-cyan-400/50 hover:shadow-md hover:scale-[1.01] duration-300 transition-all p-6 md:p-8 group"
              >
                <div>
                  <h3 className='text-xl md:text-2xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors duration-200'>
                    {proj.title}
                  </h3>
                  <p className='text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed mt-3 mb-6 text-left'>
                    {proj.description}
                  </p>
                </div>
                
                <div className="mt-auto">
                  <div className='flex flex-wrap gap-2 mb-6'>
                    {skillList.map((skill, sIdx) => (
                      <span 
                        key={sIdx} 
                        className="px-2.5 py-1 bg-slate-100 dark:bg-zinc-800/80 border border-slate-200/60 dark:border-zinc-700/60 text-slate-600 dark:text-slate-300 text-xs font-semibold rounded-lg"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  <div className='flex items-center gap-3 border-t border-slate-100 dark:border-zinc-800/80 pt-5 w-full'>
                    {proj.liveLink && (
                      <Link 
                        href={proj.liveLink} 
                        className='flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-cyan-500 hover:bg-cyan-600 dark:bg-cyan-400 dark:hover:bg-cyan-500 text-white dark:text-zinc-950 font-bold rounded-xl text-sm shadow-sm transition-all duration-200 active:scale-95' 
                        target='_blank'
                      >
                        <span>Live Link</span>
                        <ExternalLink size={14} />
                      </Link>
                    )}
                    <Link 
                      href={proj.gitLink} 
                      className={`inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-transparent hover:bg-slate-100 dark:hover:bg-zinc-800/50 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-zinc-800 font-bold rounded-xl text-sm transition-all duration-200 active:scale-95 ${proj.liveLink ? '' : 'flex-1'}`} 
                      target='_blank'
                    >
                      <Github size={14} />
                      <span>Code</span>
                    </Link>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default ProjectPage