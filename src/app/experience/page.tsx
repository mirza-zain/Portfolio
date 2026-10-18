import React from 'react'
import { Briefcase, Calendar, MapPin, CheckCircle2, ArrowUpRight, Sparkles } from 'lucide-react'
import Link from 'next/link'

const ExperiencePage = () => {
  const experiences = [
    {
      role: 'Freelance Full Stack Developer',
      company: 'Self-Employed / Client Work',
      location: 'Karachi, Pakistan (Remote)',
      period: 'Feb 2026 – Present',
      current: true,
      description:
        'Partnering with startups, small businesses, and agencies to engineer responsive, high-performance web applications and digital platforms from concept to production deployment.',
      highlights: [
        'Engineered and deployed custom client websites including Zentrixa Marketing, translating non-technical creative visions into high-converting web apps.',
        'Architected end-to-end full-stack applications utilizing Next.js, React, Node.js, TypeScript, and MongoDB/Oracle DB.',
        'Established CI/CD deployment pipelines on Vercel and Oracle Cloud Infrastructure (OCI) with zero-downtime workflows.',
        'Maintained active development across 60+ GitHub repositories adhering to clean architecture, type safety, and responsive UI/UX principles.'
      ],
      skills: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Drizzle ORM', 'Neon PostgreSQL', 'Better-Auth', 'Tailwind CSS', 'Vercel'],
      deliverables: [
        { name: 'Zentrixa Marketing Platform', link: 'https://zentrixamarketing.vercel.app/' },
        { name: 'Zarb Perfume Brand Store', link: 'https://zarb.store' },
        { name: 'Me2One E-Commerce Store', link: 'https://me2one.vercel.app' }
      ]
    }
  ]

  return (
    <section id="experience" className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 scroll-mt-20">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4 mb-8 sm:mb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-bold tracking-wider uppercase mb-2.5 sm:mb-3">
            <Sparkles size={13} />
            Career History
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-[PlaySir] font-extrabold tracking-tight text-slate-900 dark:text-white flex items-center gap-2.5 sm:gap-3">
            <span className="w-1.5 h-7 sm:h-8 bg-cyan-500 rounded-full"></span>
            Work Experience
          </h2>
        </div>
        <p className="text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400 max-w-md">
          Proven track record of turning business requirements into scalable, production-grade applications.
        </p>
      </div>

      <div className="relative pl-5 sm:pl-8 md:pl-10 border-l-2 border-slate-200 dark:border-zinc-800 ml-2.5 sm:ml-4 space-y-8 sm:space-y-10">
        {experiences.map((exp, idx) => (
          <div key={idx} className="relative group">
            {/* Timeline Dot (Precisely centered on line) */}
            <div className="absolute -left-[27px] sm:-left-[39px] md:-left-[47px] top-1.5 w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full bg-cyan-500 border-3 sm:border-4 border-slate-50 dark:border-zinc-950 shadow-[0_0_12px_rgba(6,182,212,0.8)] group-hover:scale-125 transition-transform duration-300"></div>

            {/* Experience Card */}
            <div className="p-4 sm:p-6 md:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800/80 shadow-sm hover:shadow-lg hover:border-cyan-500/40 dark:hover:border-cyan-400/40 transition-all duration-300">
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 pb-5 sm:pb-6 border-b border-slate-100 dark:border-zinc-800/80">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors">
                      {exp.role}
                    </h3>
                    {exp.current && (
                      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[11px] sm:text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-sm sm:text-base md:text-lg font-semibold text-cyan-600 dark:text-cyan-400 mt-1 flex items-center gap-1.5">
                    <Briefcase size={15} />
                    {exp.company}
                  </p>
                </div>

                <div className="flex flex-wrap items-center sm:flex-col sm:items-end gap-2 text-xs md:text-sm text-slate-500 dark:text-slate-400">
                  <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-slate-100 dark:bg-zinc-800 border border-slate-200/60 dark:border-zinc-700/60 font-semibold text-slate-700 dark:text-slate-300">
                    <Calendar size={12} className="text-cyan-500" />
                    {exp.period}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin size={12} className="text-slate-400" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed mt-4 sm:mt-5">
                {exp.description}
              </p>

              {/* Key Highlights */}
              <div className="mt-4 sm:mt-5 space-y-2 sm:space-y-2.5">
                {exp.highlights.map((item, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    <CheckCircle2 size={15} className="text-cyan-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Deliverables / Client work links */}
              {exp.deliverables && (
                <div className="mt-5 sm:mt-6 pt-4 sm:pt-5 border-t border-slate-100 dark:border-zinc-800/80">
                  <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-400 block mb-2 sm:mb-2.5">
                    Featured Client Deliverables:
                  </span>
                  <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2">
                    {exp.deliverables.map((item, dIdx) => (
                      <Link
                        key={dIdx}
                        href={item.link}
                        target="_blank"
                        className="inline-flex items-center justify-between sm:justify-start gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-cyan-500/10 dark:bg-zinc-800/80 dark:hover:bg-cyan-500/15 border border-slate-200/80 dark:border-zinc-700/70 hover:border-cyan-500/30 text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-200 group/link"
                      >
                        <span>{item.name}</span>
                        <ArrowUpRight size={13} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech Stack Pills */}
              <div className="mt-5 sm:mt-6 flex flex-wrap gap-1.5 sm:gap-2">
                {exp.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2 sm:px-2.5 py-0.5 sm:py-1 bg-slate-100 dark:bg-zinc-800/60 border border-slate-200/60 dark:border-zinc-700/50 text-slate-600 dark:text-slate-300 text-[11px] sm:text-xs font-semibold rounded-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ExperiencePage
