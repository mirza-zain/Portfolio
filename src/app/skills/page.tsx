'use client'

import dynamic from 'next/dynamic'
import Cat from "../animations/cat.json"
import React from 'react'

const SkillsPage = () => {
  const Lottie = dynamic(() => import('lottie-react'), {ssr: false} )
  
  const skillCategories = [
    {
      title: "Frontend Development",
      items: [
        { name: 'HTML 5', attribute: 'html5' },
        { name: 'CSS 3', attribute: 'css3' },
        { name: 'Tailwind CSS', attribute: 'tailwind-css' },
        { name: 'JavaScript', attribute: 'javascript' },
        { name: 'TypeScript', attribute: 'code-s-fill' },
        { name: 'React JS', attribute: 'reactjs' },
        { name: 'Next JS', attribute: 'nextjs' },
        { name: 'Redux', attribute: 'code-s-fill' }
      ]
    },
    {
      title: "Backend & Database",
      items: [
        { name: 'Node JS', attribute: 'nodejs' },
        { name: 'Express JS', attribute: 'nodejs' },
        { name: 'MongoDB', attribute: 'database-2' },
        { name: 'SQL (Postgres/MySQL)', attribute: 'database-2' },
        { name: 'Oracle DB', attribute: 'database-2' },
        { name: 'PHP', attribute: 'php' },
        { name: 'Prisma ORM', attribute: 'database-2' },
        { name: 'JWT Auth', attribute: 'shield-keyhole' }
      ]
    },
    {
      title: "Mobile Development",
      items: [
        { name: 'React Native', attribute: 'reactjs' },
        { name: 'Expo', attribute: 'terminal-box' }
      ]
    },
    {
      title: "Tools & Ecosystem",
      items: [
        { name: 'Git', attribute: 'git-branch' },
        { name: 'GitHub', attribute: 'github' },
        { name: 'Vercel', attribute: 'cloud' },
        { name: 'Oracle Cloud (OCI)', attribute: 'cloud' },
        { name: 'REST APIs', attribute: 'code-s-fill' },
        { name: 'CI/CD', attribute: 'git-merge' },
        { name: 'Agile', attribute: 'loop-left' },
        { name: 'Jira', attribute: 'task' },
        { name: 'Linux Basics', attribute: 'terminal' }
      ]
    }
  ]

  return (
    <div id='skills' className="max-w-6xl mx-auto px-4 md:px-8 py-16 flex flex-col md:flex-row justify-between items-center gap-10 md:gap-16">
       <div className='w-full md:w-1/2 flex justify-center items-center'>
          <Lottie animationData={Cat} className="w-4/5 md:w-3/4 animate-float" />
       </div>
       <div className='w-full md:w-1/2 flex flex-col justify-center items-start'>
          <h2 className='font-[PlaySir] text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white flex items-center gap-3'>
            <span className="w-1.5 h-8 bg-cyan-500 rounded-full"></span>
            What I Do
          </h2>
          <p className="text-xs md:text-sm font-bold tracking-widest mt-4 uppercase text-cyan-600 dark:text-cyan-400">
            A developer who loves building web apps and exploring new technologies 🚀
          </p>
          
          <div className='w-full flex flex-col gap-6 mt-8'>
            {
              skillCategories.map((category, idx) => (
                <div key={idx} className="w-full">
                  <h3 className="text-base font-bold text-slate-700 dark:text-slate-300 mb-3 tracking-wide">
                    {category.title}
                  </h3>
                  <div className='flex flex-wrap gap-3'>
                    {
                      category.items.map((skill, sIdx) => (
                        <div 
                          key={sIdx} 
                          className='flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800/80 hover:border-cyan-500/50 dark:hover:border-cyan-400/50 hover:shadow-sm hover:scale-105 active:scale-98 transition-all duration-300 group cursor-pointer'
                        >
                          <i className={`text-xl md:text-2xl text-slate-500 dark:text-slate-400 group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors duration-300 ri-${skill.attribute}-fill`}></i> 
                          <span className='text-sm font-semibold text-slate-800 dark:text-slate-200'>{skill.name}</span>
                        </div>
                      ))
                    }
                  </div>
                </div>
              ))
            }
          </div>
       </div> 
    </div>
  )
}

export default SkillsPage