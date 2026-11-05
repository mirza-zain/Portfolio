'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { ExternalLink, Github, Sparkles, FolderGit2, CheckCircle2, Layers } from 'lucide-react'

interface ProjectItem {
  id: number
  title: string
  category: 'Client & Commercial' | 'Full Stack & AI' | 'Mobile Apps'
  badge: string
  description: string
  highlights: string[]
  skills: string
  liveLink?: string
  gitLink: string
}

const ProjectPage = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All')

  const projects: ProjectItem[] = [
    {
      id: 1,
      title: 'Bellaro.pk Brand Store',
      category: 'Client & Commercial',
      badge: 'Client Brand Store',
      description: 'A direct-to-consumer e-commerce brand storefront engineered for Bellaro PK. Showcases handcrafted leather loafers, moccasins, slides, and signature perfumes with real-time cart drawer, Cloudinary media optimization, and automated push notifications.',
      highlights: [
        'Full-stack architecture built with Next.js 16 (React 19) App Router and Tailwind CSS v4',
        'Relational schema engineered with Drizzle ORM and Neon Serverless PostgreSQL with Better-Auth integration',
        'High-performance product media pipelines via Cloudinary with responsive mobile optimization and web push'
      ],
      skills: 'Next.js 16, TypeScript, Drizzle ORM, Neon PostgreSQL, Better-Auth, Cloudinary, Tailwind CSS, Vercel',
      liveLink: 'https://bellaro.pk',
      gitLink: 'https://github.com/mirza-zain/Bellaro-Store-Client-Project-',
    },
    {
      id: 2,
      title: 'Zentrixa Marketing',
      category: 'Client & Commercial',
      badge: 'Client Work',
      description: 'Engineered and deployed a premium corporate portfolio and digital services platform for an international creative agency specializing in Wikipedia publishing, branding, fan art, and animation.',
      highlights: [
        'Designed and delivered bespoke responsive UI/UX reflecting client creative branding identity',
        'Optimized for high-speed performance, SEO indexing, and seamless mobile responsiveness',
        'Built reusable component architecture in React with clean Tailwind CSS styling'
      ],
      skills: 'React.js, Tailwind CSS, JavaScript (ES6+), Responsive UI, Vercel',
      liveLink: 'https://zentrixamarketing.vercel.app/',
      gitLink: 'https://github.com/mirza-zain/zentrixamarketing-website/',
    },
    {
      id: 3,
      title: 'Zarb Perfume Brand Store',
      category: 'Client & Commercial',
      badge: 'Commercial Brand',
      description: 'A luxury e-commerce fragrance storefront engineered for Zarb Official. Showcases artisanal Extrait de Parfum editions with real-time shopping cart drawer, customer order tracking, and high-conversion editorial design.',
      highlights: [
        'Full-stack e-commerce architecture powered by Next.js App Router and serverless PostgreSQL',
        'Integrated Drizzle ORM and Better-Auth for resilient database transactions and user management',
        'Dynamic product catalog, interactive cart management, order tracking (/track), and customer reviews'
      ],
      skills: 'Next.js, TypeScript, Drizzle ORM, Neon PostgreSQL, Better-Auth, Tailwind CSS, Vercel Analytics',
      liveLink: 'https://zarb.store',
      gitLink: 'https://github.com/mirza-zain/E-commerce',
    },
    {
      id: 4,
      title: 'E-commerce Store (MartInn)',
      category: 'Client & Commercial',
      badge: 'Full Stack Store',
      description: 'A comprehensive full-stack e-commerce marketplace featuring multi-category product catalog, dynamic product variant matrices, stock control, checkout pipeline, and order tracking.',
      highlights: [
        'Engineered schema with Drizzle ORM and Neon Serverless PostgreSQL for products, variants, and orders',
        'Order lifecycle tracking with unique order codes, payment method validation (COD / Bank Transfer), and receipts',
        'Modern responsive store interface built with Next.js, Better-Auth, and Tailwind CSS'
      ],
      skills: 'Next.js, TypeScript, Drizzle ORM, Neon PostgreSQL, Better-Auth, Tailwind CSS',
      liveLink: 'https://martinnn.vercel.app',
      gitLink: 'https://github.com/mirza-zain/Bazaar-Mart-Ecommerce-Store',
    },
    {
      id: 5,
      title: 'SpriteForge (AI Game Copilot)',
      category: 'Full Stack & AI',
      badge: 'Meta Hackathon',
      description: 'An AI-powered 2D game copilot and sprite articulation engine built for the Meta Global AI Developer Hackathon. Synthesizes 100% transparent 16-bit pixel art, 4-state multi-frame animation cycles, playable in-browser HTML5 combat sandbox, and production-ready Godot 4 & Phaser 3 scripts via Meta Llama 3.1.',
      highlights: [
        'Meta Llama 3.1-8B engine generating Godot 4 GDScript, Phaser 3 scenes, and branching NPC dialogue trees',
        'Procedural articulation engine synthesizing 16 animation frames (Walk, Idle, Strike, Bounce) with zero white-box artifacts',
        'In-browser playable combat arena with WASD controls, real-time hitbox colliders, and retro 8-bit Web Audio SFX'
      ],
      skills: 'Next.js 16, TypeScript, Meta Llama 3.1, Groq SDK, Canvas 2D, Web Audio API, Tailwind CSS, Vercel',
      liveLink: 'https://spriteforge.vercel.app',
      gitLink: 'https://github.com/mirza-zain/spriteForge',
    },
    {
      id: 6,
      title: 'AgriShield AI (Crop Pathology Platform)',
      category: 'Full Stack & AI',
      badge: 'AI Builder Cup',
      description: 'A multimodal plant pathology diagnosis, climate resilience, and treatment recommendation platform built for the AI Builder Cup. Combines Google Gemini multimodal vision, neural vernacular audio (Urdu & English), and live microclimate telemetry for smallholder farmers.',
      highlights: [
        'Multimodal crop disease scanner with computer vision lesion bounding boxes and severity rating',
        'Conversational spoken guidance powered by Google Gemini Neural TTS (Aoede voice) with native RIFF WAV reconstruction',
        'Live farm weather telemetry via Open-Meteo correlating humidity spikes with fungal spore incubation risk'
      ],
      skills: 'Next.js 15, TypeScript, Google Gemini Vision, Gemini TTS, Firebase, AWS S3, Tailwind CSS, PWA',
      liveLink: 'https://agri-shieldai.vercel.app/',
      gitLink: 'https://github.com/mirza-zain/AgriShield-AI',
    },
    {
      id: 7,
      title: 'Asaan Taqreeb (Event Booking App)',
      category: 'Mobile Apps',
      badge: 'Featured Mobile App',
      description: 'A comprehensive cross-platform mobile application designed to help users browse, discover, and filter event vendors in Karachi. Spearheaded mobile architecture and engineered a scalable backend.',
      highlights: [
        'Cross-platform mobile architecture with React Native and Expo',
        'Scalable backend infrastructure utilizing Node.js, MongoDB, and Oracle DB',
        'Fast vendor search and complex multi-parameter filtering engine'
      ],
      skills: 'React Native, Expo, Node.js, Express, MongoDB, Oracle DB, REST APIs',
      liveLink: 'https://asaantaqreeb.vercel.app/',
      gitLink: 'https://github.com/Asaan-Taqreeb/Asaan-Taqreeb-App',
    },
    {
      id: 8,
      title: 'Missing Link (AI Resume ATS Analyzer)',
      category: 'Full Stack & AI',
      badge: 'AI Powered',
      description: 'An AI-powered optimization tool that evaluates applicant resumes against specific job descriptions to calculate ATS compatibility scores and pinpoint missing technical keywords.',
      highlights: [
        'Dual-model AI analysis pipeline combining Groq and Gemini APIs',
        'Real-time ATS scoring algorithm with keyword extraction and comparison',
        'Intuitive dashboard providing actionable suggestions to boost interview rates'
      ],
      skills: 'Next.js 15, TypeScript, Gemini API, Groq AI, Tailwind CSS, API Routes',
      liveLink: 'https://missinlink.vercel.app/',
      gitLink: 'https://github.com/mirza-zain',
    },
    {
      id: 9,
      title: 'AI Journal & Mood Analytics',
      category: 'Full Stack & AI',
      badge: 'AI Full Stack',
      description: 'A full-stack journaling and mental wellness tracking web app. Utilizes natural language AI models to analyze entry text, evaluate emotional state trends, and provide reflective sentiment feedback.',
      highlights: [
        'Automated sentiment analysis and emotion classification algorithms',
        'Full-stack relational persistence with Prisma ORM and NeonDB serverless PostgreSQL',
        'Secure multi-tenant authentication and encrypted user journaling routes with Clerk'
      ],
      skills: 'Next.js, Prisma ORM, Neon PostgreSQL, Clerk Auth, Tailwind CSS, AI APIs',
      liveLink: 'https://moodbetav2.vercel.app/',
      gitLink: 'https://github.com/mirza-zain/AI-Based-Mood-Tracking',
    },
  ]

  const categories = ['All', 'Client & Commercial', 'Full Stack & AI', 'Mobile Apps']

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  const getBadgeStyles = (category: string) => {
    switch (category) {
      case 'Client & Commercial':
        return 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/25'
      case 'Full Stack & AI':
        return 'bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/25'
      case 'Mobile Apps':
        return 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/25'
      default:
        return 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/25'
    }
  }

  return (
    <section id="projects" className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 scroll-mt-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-3 sm:gap-4 mb-6 sm:mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-bold tracking-wider uppercase mb-2.5 sm:mb-3">
            <Sparkles size={13} />
            Featured Portfolio
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-[PlaySir] font-extrabold tracking-tight text-slate-900 dark:text-white flex items-center gap-2.5 sm:gap-3">
            <span className="w-1.5 h-7 sm:h-8 bg-cyan-500 rounded-full"></span>
            Work &amp; Featured Projects
          </h2>
        </div>
        <p className="text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400 max-w-md">
          A showcase of live commercial brand stores, client deliverables, mobile solutions, and AI-driven applications.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 mb-8 sm:mb-10 pb-2 border-b border-slate-200/60 dark:border-zinc-800/60">
        {categories.map((cat) => {
          const count = cat === 'All' ? projects.length : projects.filter(p => p.category === cat).length
          const isActive = activeCategory === cat
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 flex items-center gap-1.5 sm:gap-2 whitespace-nowrap ${
                isActive
                  ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/25 scale-[1.02]'
                  : 'bg-white dark:bg-zinc-900 text-slate-600 dark:text-slate-400 border border-slate-200/80 dark:border-zinc-800/80 hover:border-cyan-500/40 hover:text-cyan-500 dark:hover:text-cyan-400'
              }`}
            >
              <span>{cat}</span>
              <span className={`px-1.5 py-0.2 rounded-full text-[10px] font-extrabold ${
                isActive ? 'bg-white/20 text-white' : 'bg-slate-100 dark:bg-zinc-800 text-slate-500 dark:text-slate-400'
              }`}>
                {count}
              </span>
            </button>
          )
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 md:gap-8">
        {filteredProjects.map((proj) => {
          const skillList = proj.skills.split(',').map((s) => s.trim())
          const badgeStyle = getBadgeStyles(proj.category)
          return (
            <div
              key={proj.id}
              className="group flex flex-col justify-between h-full bg-white dark:bg-zinc-900/90 border border-slate-200/80 dark:border-zinc-800/80 rounded-2xl hover:border-cyan-500/50 dark:hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-500/5 duration-300 transition-all p-5 sm:p-6 md:p-8 relative overflow-hidden"
            >
              {/* Top Accent Gradient Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div>
                {/* Header row: badge and category */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:py-1 rounded-full text-[11px] sm:text-xs font-bold border ${badgeStyle}`}>
                    <Layers size={12} />
                    {proj.badge}
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-semibold text-slate-400 dark:text-zinc-500 uppercase tracking-wider">
                    {proj.category}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors duration-200">
                  {proj.title}
                </h3>

                <p className="text-xs sm:text-sm md:text-base text-slate-600 dark:text-slate-300 leading-relaxed mt-2.5 sm:mt-3 mb-4 sm:mb-5 text-left">
                  {proj.description}
                </p>

                {/* Key Highlights */}
                <div className="space-y-1.5 sm:space-y-2 mb-5 sm:mb-6">
                  {proj.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                      <CheckCircle2 size={14} className="text-cyan-500 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-auto">
                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5 sm:mb-6">
                  {skillList.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 sm:px-2.5 py-0.5 sm:py-1 bg-slate-100 dark:bg-zinc-800/80 border border-slate-200/60 dark:border-zinc-700/60 text-slate-600 dark:text-slate-300 text-[11px] sm:text-xs font-semibold rounded-lg"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3 border-t border-slate-100 dark:border-zinc-800/80 pt-4 sm:pt-5 w-full">
                  {proj.liveLink && (
                    <Link
                      href={proj.liveLink}
                      className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-cyan-500 hover:bg-cyan-600 dark:bg-cyan-400 dark:hover:bg-cyan-500 text-white dark:text-zinc-950 font-bold rounded-xl text-xs sm:text-sm shadow-sm transition-all duration-200 active:scale-95 group/btn"
                      target="_blank"
                    >
                      <span>Live Preview</span>
                      <ExternalLink size={14} className="group-hover/btn:translate-x-0.5 transition-transform" />
                    </Link>
                  )}
                  <Link
                    href={proj.gitLink}
                    className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-transparent hover:bg-slate-100 dark:hover:bg-zinc-800/60 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-zinc-800 font-bold rounded-xl text-xs sm:text-sm transition-all duration-200 active:scale-95 ${
                      proj.liveLink ? 'sm:flex-none' : 'w-full bg-slate-100 dark:bg-zinc-800/80'
                    }`}
                    target="_blank"
                  >
                    <Github size={15} />
                    <span>View Code</span>
                  </Link>
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* GitHub Callout Footer */}
      <div className="mt-10 sm:mt-12 p-4 sm:p-6 rounded-2xl bg-gradient-to-r from-cyan-500/10 via-sky-500/10 to-blue-500/10 border border-cyan-500/20 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
        <div className="flex items-center gap-3">
          <div className="p-2.5 sm:p-3 rounded-xl bg-cyan-500/20 text-cyan-600 dark:text-cyan-400 shrink-0">
            <FolderGit2 size={22} />
          </div>
          <div className="text-left">
            <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">Looking for more projects?</h4>
            <p className="text-[11px] sm:text-xs md:text-sm text-slate-600 dark:text-slate-400">
              Explore 60+ open-source repositories spanning web, mobile, and AI on GitHub.
            </p>
          </div>
        </div>
        <Link
          href="https://github.com/mirza-zain"
          target="_blank"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-zinc-950 font-bold text-xs sm:text-sm hover:opacity-90 transition-all shrink-0 active:scale-95"
        >
          <Github size={15} />
          <span>Explore All on GitHub</span>
        </Link>
      </div>
    </section>
  )
}

export default ProjectPage