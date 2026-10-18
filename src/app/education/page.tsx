import React from 'react'
import { GraduationCap, Award, BookOpen, Sparkles } from 'lucide-react'

const EducationPage = () => {
  const coursework = [
    'Object-Oriented Programming (OOP)',
    'Data Structures & Algorithms',
    'Database Management Systems',
    'Web Engineering',
    'Software Design & Architecture',
    'Software Development Life Cycle (SDLC)',
    'Mobile Application Development',
    'Cloud Computing Basics'
  ]

  const certifications = [
    {
      title: 'Build an AI-Powered Fullstack Next.js App',
      issuer: 'Frontend Masters / Master.Dev',
      year: '2025',
      badge: 'Full Stack & AI',
      desc: 'Architecting end-to-end AI applications using Next.js App Router, streaming responses, and AI SDK integration.'
    },
    {
      title: 'JavaScript: The Hard Parts',
      issuer: 'Frontend Masters / Master.Dev',
      year: '2025',
      badge: 'Advanced Core JS',
      desc: 'In-depth mastery of closures, asynchronous JavaScript, event loop, promises, and prototypal inheritance.'
    },
    {
      title: 'AI For Everyone',
      issuer: 'DeepLearning.AI',
      year: '2025',
      badge: 'Machine Learning',
      desc: 'Comprehensive understanding of generative AI, machine learning pipelines, and ethical AI deployment.'
    }
  ]

  return (
    <section id="education" className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 scroll-mt-20">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4 mb-8 sm:mb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-bold tracking-wider uppercase mb-2.5 sm:mb-3">
            <Sparkles size={13} />
            Academic &amp; Credentials
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-[PlaySir] font-extrabold tracking-tight text-slate-900 dark:text-white flex items-center gap-2.5 sm:gap-3">
            <span className="w-1.5 h-7 sm:h-8 bg-cyan-500 rounded-full"></span>
            Education &amp; Certifications
          </h2>
        </div>
        <p className="text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400 max-w-md">
          Strong theoretical foundations paired with continuous professional certification.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
        {/* Education Timeline */}
        <div className="lg:col-span-7">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-3.5 sm:mb-4">
            <GraduationCap size={17} className="text-cyan-500" />
            <span>Academic Background</span>
          </div>

          <div className="relative pl-5 sm:pl-8 border-l-2 border-slate-200 dark:border-zinc-800 ml-2.5 sm:ml-3">
            {/* Timeline Dot */}
            <div className="absolute -left-[27px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-cyan-500 border-3 sm:border-4 border-slate-50 dark:border-zinc-950 shadow-[0_0_12px_rgba(6,182,212,0.8)]"></div>

            <div className="p-4 sm:p-6 md:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800/80 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                    Sindh Madressatul Islam University
                  </h3>
                  <p className="text-sm sm:text-base font-semibold text-cyan-600 dark:text-cyan-400 mt-1">
                    Bachelor of Science in Software Engineering
                  </p>
                </div>
                <div className="flex flex-wrap sm:flex-col sm:items-end gap-1.5">
                  <span className="text-xs font-semibold px-2.5 sm:px-3 py-0.5 sm:py-1 bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-slate-300 rounded-full border border-slate-200/60 dark:border-zinc-700/60 w-fit">
                    2022 – 2026
                  </span>
                  <span className="text-[11px] sm:text-xs font-extrabold px-2.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 w-fit">
                    CGPA: 3.5 / 4.0
                  </span>
                </div>
              </div>

              {/* Coursework */}
              <div className="mt-5 sm:mt-6 border-t border-slate-100 dark:border-zinc-800/80 pt-4 sm:pt-5">
                <h4 className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5 sm:mb-3 flex items-center gap-1.5">
                  <BookOpen size={14} className="text-cyan-500" />
                  Key Coursework
                </h4>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {coursework.map((course, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 sm:px-3 py-1 bg-slate-100 dark:bg-zinc-800/70 border border-slate-200/60 dark:border-zinc-700/60 text-slate-700 dark:text-slate-300 rounded-lg text-[11px] sm:text-xs font-semibold hover:border-cyan-500/40 transition-colors duration-200"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="lg:col-span-5">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-3.5 sm:mb-4">
            <Award size={17} className="text-cyan-500" />
            <span>Professional Certifications</span>
          </div>

          <div className="space-y-3 sm:space-y-4">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800/80 shadow-sm hover:border-cyan-500/40 dark:hover:border-cyan-400/40 hover:shadow-md transition-all duration-300 group"
              >
                <div className="flex items-start justify-between gap-2 mb-1.5 sm:mb-2">
                  <span className="text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border border-cyan-500/20">
                    {cert.badge}
                  </span>
                  <span className="text-[11px] sm:text-xs font-semibold text-slate-400 dark:text-zinc-500">
                    {cert.year}
                  </span>
                </div>
                <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                  {cert.title}
                </h4>
                <p className="text-[11px] sm:text-xs font-semibold text-slate-500 dark:text-slate-400 mt-0.5 mb-1.5 sm:mb-2">
                  {cert.issuer}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {cert.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default EducationPage