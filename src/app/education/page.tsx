import React from 'react'

const EducationPage = () => {
  const coursework = [
    "Object-Oriented Programming (OOP)",
    "Data Structures & Algorithms",
    "Database Systems",
    "Game Development",
    "Software Development Life Cycle (SDLC)"
  ]

  return (
    <div id='education' className="max-w-6xl mx-auto px-4 md:px-8 py-16">
      <h2 className='font-[PlaySir] text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white flex items-center gap-3'>
        <span className="w-1.5 h-8 bg-cyan-500 rounded-full"></span>
        Education
      </h2>
      
      <div className="relative pl-6 sm:pl-10 border-l-2 border-slate-200 dark:border-zinc-800 ml-3 sm:ml-5 mt-10">
        {/* Timeline Dot */}
        <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-cyan-500 border-4 border-slate-50 dark:border-zinc-950 shadow-[0_0_10px_rgba(6,182,212,0.6)]"></div>
        
        <div className="p-6 md:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800/80 shadow-sm hover:shadow-md transition-all duration-300">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">Sindh Madressatul Islam University</h3>
              <p className="text-base md:text-lg font-medium text-cyan-600 dark:text-cyan-400 mt-1">Bachelors of Software Engineering</p>
            </div>
            <div className="flex flex-col sm:items-end gap-1.5">
              <span className="text-xs md:text-sm font-semibold px-3 py-1 bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-slate-300 rounded-full border border-slate-200/60 dark:border-zinc-700/60 w-fit">
                Sep 2022 - July 2026
              </span>
              <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400 sm:mt-1 self-start sm:self-auto">
                CGPA: 3.5 / 4.0
              </span>
            </div>
          </div>
          
          <div className="mt-8 border-t border-slate-100 dark:border-zinc-800/80 pt-6">
            <h4 className="text-base font-bold text-slate-800 dark:text-slate-200 mb-4">Relevant Coursework</h4>
            <div className="flex flex-wrap gap-2.5">
              {coursework.map((course, idx) => (
                <span 
                  key={idx} 
                  className="px-3.5 py-1.5 bg-cyan-500/5 dark:bg-cyan-500/10 border border-cyan-500/10 dark:border-cyan-500/20 text-cyan-600 dark:text-cyan-400 rounded-xl text-xs md:text-sm font-semibold hover:bg-cyan-500/10 dark:hover:bg-cyan-500/20 transition-colors duration-200 cursor-default"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EducationPage