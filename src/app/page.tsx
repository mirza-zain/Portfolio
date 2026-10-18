'use client'

import Link from 'next/link'
import Face from './animations/facee.json'
import dynamic from 'next/dynamic'
import { Instagram, Linkedin, Github, Download, ArrowRight, Code2, FolderGit2, GraduationCap, Laptop } from 'lucide-react'
import ExperiencePage from './experience/page'
import SkillsPage from './skills/page'
import EducationPage from './education/page'
import ProjectPage from './projects/page'
import ContactPage from './contact/page'

export default function Home() {
  const Lottie = dynamic(() => import('lottie-react'), { ssr: false })

  const stats = [
    { label: 'GitHub Repositories', value: '60+', icon: FolderGit2 },
    { label: 'CGPA (BS Software Eng)', value: '3.5 / 4.0', icon: GraduationCap },
    { label: 'Core Stack', value: 'Next.js & MERN', icon: Code2 },
    { label: 'Solutions Deployed', value: 'Web & Mobile', icon: Laptop },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Subtle Ambient Background Gradients */}
        <div className="absolute top-1/4 -left-20 w-64 h-64 sm:w-72 sm:h-72 bg-cyan-500/10 dark:bg-cyan-500/15 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute top-1/3 -right-20 w-64 h-64 sm:w-80 sm:h-80 bg-blue-500/10 dark:bg-blue-500/15 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 pt-6 sm:pt-10 pb-12 sm:pb-16 md:py-20 flex flex-col-reverse md:flex-row justify-between items-center gap-8 sm:gap-12 md:gap-16 relative z-10">
          <div className="w-full md:w-3/5 flex flex-col justify-center items-start text-left">
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 dark:bg-emerald-500/15 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold tracking-wide mb-5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Hire &amp; Client Projects</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-[PlaySir] tracking-tight text-slate-900 dark:text-white leading-tight">
              Hi, I&apos;m{' '}
              <span className="inline-block whitespace-nowrap">
                <span className="bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 bg-clip-text text-transparent font-extrabold">
                  Mirza Zain
                </span>
                <span className="inline-block ml-2 sm:ml-3">👋🏻</span>
              </span>
            </h1>

            {/* Subheading */}
            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-700 dark:text-slate-200 mt-2.5 sm:mt-3 flex flex-wrap items-center gap-1.5 sm:gap-2">
              <span>Full Stack Software Engineer</span>
              <span className="text-cyan-500 hidden sm:inline">•</span>
              <span className="text-slate-500 dark:text-slate-400 font-medium text-base sm:text-xl">Web &amp; Mobile</span>
            </h2>

            {/* Introduction */}
            <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-slate-300 leading-relaxed mt-4 sm:mt-5 text-left max-w-2xl">
              Collaborative Software Engineer delivering production-ready web and mobile solutions with clean architecture.
              Specializing in <span className="font-semibold text-cyan-600 dark:text-cyan-400">Next.js, TypeScript, MERN stack, and React Native</span>,
              backed by an active portfolio of 60+ GitHub repositories and verified client project deployments.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-6 sm:mt-8 w-full sm:w-auto">
              <Link
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-bold rounded-xl shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 active:scale-95 duration-200 transition-all text-sm group"
              >
                <span>View Projects</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/MirzaZain.pdf"
                download
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-white dark:bg-zinc-900 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-zinc-800 hover:border-cyan-500/60 dark:hover:border-cyan-400/60 font-bold rounded-xl hover:shadow-md active:scale-95 duration-200 transition-all text-sm group"
              >
                <Download size={16} className="text-cyan-500 group-hover:translate-y-0.5 transition-transform" />
                <span>Resume / CV</span>
              </Link>

              <Link
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 bg-slate-100 dark:bg-zinc-800/80 hover:bg-slate-200 dark:hover:bg-zinc-800 text-slate-700 dark:text-slate-300 font-bold rounded-xl active:scale-95 duration-200 transition-all text-sm text-center"
              >
                <span>Contact Me</span>
              </Link>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center gap-3 mt-6 sm:mt-8">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 mr-1">Connect:</span>
              <Link
                href="https://www.linkedin.com/in/mirza-zain269/"
                target="_blank"
                aria-label="LinkedIn Profile"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-slate-300 hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-400 dark:hover:text-black hover:border-cyan-500 dark:hover:border-cyan-400 transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:shadow-cyan-500/20"
              >
                <Linkedin size={18} />
              </Link>
              <Link
                href="https://github.com/mirza-zain"
                target="_blank"
                aria-label="GitHub Profile"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-slate-300 hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-400 dark:hover:text-black hover:border-cyan-500 dark:hover:border-cyan-400 transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:shadow-cyan-500/20"
              >
                <Github size={18} />
              </Link>
              <Link
                href="https://www.instagram.com/mirza_zain43/"
                target="_blank"
                aria-label="Instagram Profile"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-slate-300 hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-400 dark:hover:text-black hover:border-cyan-500 dark:hover:border-cyan-400 transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:shadow-cyan-500/20"
              >
                <Instagram size={18} />
              </Link>
            </div>
          </div>

          {/* Hero Illustration / Lottie Animation */}
          <div className="w-full md:w-2/5 flex justify-center items-center">
            <div className="relative">
              {/* Outer decorative ring */}
              <div className="absolute -inset-2.5 sm:-inset-3 rounded-full bg-gradient-to-r from-cyan-500 via-sky-400 to-blue-500 opacity-20 blur-xl"></div>
              <Lottie
                animationData={Face}
                className="w-44 sm:w-56 md:w-64 lg:w-80 rounded-full border-2 border-cyan-500/60 dark:border-cyan-400/60 shadow-[0_0_25px_rgba(6,182,212,0.25)] dark:shadow-[0_0_35px_rgba(6,182,212,0.4)] bg-slate-100 dark:bg-zinc-900/60 backdrop-blur-sm p-3 sm:p-4 animate-float"
              />
            </div>
          </div>
        </div>

        {/* Quick Highlights / Stats Strip */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 pb-10 sm:pb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 sm:gap-4 p-3.5 sm:p-5 rounded-2xl bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md border border-slate-200/80 dark:border-zinc-800/80 shadow-sm">
            {stats.map((stat, idx) => {
              const Icon = stat.icon
              return (
                <div key={idx} className="flex items-center gap-2 sm:gap-3.5 p-1 sm:p-2 min-w-0">
                  <div className="p-2 sm:p-2.5 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 shrink-0">
                    <Icon size={18} />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm sm:text-base md:text-xl font-extrabold text-slate-900 dark:text-white tracking-tight truncate">
                      {stat.value}
                    </div>
                    <div className="text-[11px] sm:text-xs font-semibold text-slate-500 dark:text-slate-400 truncate">
                      {stat.label}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Main Sections */}
      <ExperiencePage />
      <ProjectPage />
      <SkillsPage />
      <EducationPage />
      <ContactPage />
    </>
  )
}