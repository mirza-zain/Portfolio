'use client'

import React from 'react'
import dynamic from 'next/dynamic'
import Cat from '../animations/cat.json'
import { Sparkles, Code2, Server, Smartphone, Wrench } from 'lucide-react'

const SkillsPage = () => {
  const Lottie = dynamic(() => import('lottie-react'), { ssr: false })

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code2,
      badge: 'Core Expertise',
      items: [
        { name: 'React.js', attribute: 'reactjs' },
        { name: 'Next.js 15', attribute: 'nextjs' },
        { name: 'TypeScript', attribute: 'code-s-fill' },
        { name: 'JavaScript (ES6+)', attribute: 'javascript' },
        { name: 'Tailwind CSS', attribute: 'tailwind-css' },
        { name: 'HTML5 & CSS3', attribute: 'html5' },
        { name: 'Redux Toolkit', attribute: 'code-s-fill' },
      ],
    },
    {
      title: 'Backend & Cloud DB',
      icon: Server,
      badge: 'Architecture',
      items: [
        { name: 'Node.js', attribute: 'nodejs' },
        { name: 'Express.js', attribute: 'nodejs' },
        { name: 'Neon PostgreSQL', attribute: 'database-2' },
        { name: 'Drizzle ORM', attribute: 'database-2' },
        { name: 'MongoDB', attribute: 'database-2' },
        { name: 'Oracle DB', attribute: 'database-2' },
        { name: 'Prisma ORM', attribute: 'database-2' },
        { name: 'Better-Auth & JWT', attribute: 'shield-keyhole' },
      ],
    },
    {
      title: 'Mobile App Development',
      icon: Smartphone,
      badge: 'Cross-Platform',
      items: [
        { name: 'React Native', attribute: 'reactjs' },
        { name: 'Expo', attribute: 'terminal-box' },
        { name: 'Mobile Navigation', attribute: 'smartphone' },
        { name: 'Native Device APIs', attribute: 'device' },
      ],
    },
    {
      title: 'DevOps & Tooling',
      icon: Wrench,
      badge: 'Production',
      items: [
        { name: 'Git & GitHub', attribute: 'github' },
        { name: 'Vercel Deployment', attribute: 'cloud' },
        { name: 'Oracle Cloud (OCI)', attribute: 'cloud' },
        { name: 'REST APIs & Webhooks', attribute: 'code-s-fill' },
        { name: 'CI/CD Pipelines', attribute: 'git-merge' },
        { name: 'Agile & Jira', attribute: 'task' },
        { name: 'Linux CLI', attribute: 'terminal' },
      ],
    },
  ]

  return (
    <section id="skills" className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 scroll-mt-20">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4 mb-8 sm:mb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-bold tracking-wider uppercase mb-2.5 sm:mb-3">
            <Sparkles size={13} />
            Technical Toolkit
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-[PlaySir] font-extrabold tracking-tight text-slate-900 dark:text-white flex items-center gap-2.5 sm:gap-3">
            <span className="w-1.5 h-7 sm:h-8 bg-cyan-500 rounded-full"></span>
            Skills &amp; Technologies
          </h2>
        </div>
        <p className="text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400 max-w-md">
          A full-spectrum development stack geared for scalable web apps, mobile solutions, and clean architecture.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
        {/* Lottie Animation Side Card (shown after skill cards on mobile, left side on desktop) */}
        <div className="order-last lg:order-first lg:col-span-4 flex flex-col items-center justify-center p-5 sm:p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800/80 shadow-sm text-center">
          <Lottie animationData={Cat} className="w-36 sm:w-48 lg:w-56 animate-float" />
          <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-3 sm:mt-4">
            Passionate Problem Solver
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1.5 sm:mt-2 leading-relaxed">
            Continuously experimenting with modern technologies, cloud architecture, and AI-assisted workflows.
          </p>
          <div className="mt-3.5 sm:mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-bold">
            60+ Projects on GitHub
          </div>
        </div>

        {/* Skill Categories Grid */}
        <div className="order-first lg:order-last lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon
            return (
              <div
                key={idx}
                className="p-4 sm:p-5 md:p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800/80 shadow-sm hover:border-cyan-500/40 dark:hover:border-cyan-400/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 group-hover:scale-110 transition-transform">
                      <Icon size={18} />
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-zinc-800 text-slate-500 dark:text-slate-400">
                      {category.badge}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-2.5 sm:mb-3">
                    {category.title}
                  </h3>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {category.items.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-xl bg-slate-100 dark:bg-zinc-800/80 border border-slate-200/70 dark:border-zinc-700/60 hover:border-cyan-500/50 hover:bg-cyan-500/5 text-slate-700 dark:text-slate-300 text-xs font-semibold transition-all duration-200 group/tag cursor-default"
                      >
                        <i className={`ri-${skill.attribute}-fill text-cyan-500 text-sm`}></i>
                        <span>{skill.name}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default SkillsPage