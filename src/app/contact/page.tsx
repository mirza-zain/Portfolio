'use client'

import React, { useState } from 'react'
import {
  Github,
  Instagram,
  Linkedin,
  MapPin,
  Mail,
  Briefcase,
  CheckCircle2,
  Copy,
  Check,
  Send,
  Phone,
  Sparkles,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const ContactPage = () => {
  const [copied, setCopied] = useState(false)
  const emailAddress = 'mirzazain269@gmail.com'

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 scroll-mt-20">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4 mb-8 sm:mb-10">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-bold tracking-wider uppercase mb-2.5 sm:mb-3">
            <Sparkles size={13} />
            Get In Touch
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-[PlaySir] font-extrabold tracking-tight text-slate-900 dark:text-white flex items-center gap-2.5 sm:gap-3">
            <span className="w-1.5 h-7 sm:h-8 bg-cyan-500 rounded-full"></span>
            Let&apos;s Build Something Together
          </h2>
        </div>
        <p className="text-xs sm:text-sm font-semibold text-slate-500 dark:text-slate-400 max-w-md">
          Available for freelance client work, full-time engineering roles, and technical collaborations.
        </p>
      </div>

      <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-8 sm:gap-10 bg-white dark:bg-zinc-900/80 border border-slate-200/80 dark:border-zinc-800/80 rounded-2xl p-4 sm:p-6 md:p-10 shadow-sm relative overflow-hidden">
        {/* Glow decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-80 sm:h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="w-full lg:w-2/3 flex flex-col justify-start items-start relative z-10">
          <p className="text-base sm:text-lg md:text-xl font-bold text-slate-800 dark:text-slate-200 leading-relaxed mb-5 sm:mb-6 text-left">
            Have a project in mind, an engineering role, or just want to chat tech? My inbox is always open.
          </p>

          {/* Quick Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full mb-6 sm:mb-8">
            <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300 p-3 rounded-xl bg-slate-50 dark:bg-zinc-800/50 border border-slate-200/60 dark:border-zinc-700/50">
              <Briefcase size={18} className="text-cyan-500 shrink-0" />
              <div className="min-w-0">
                <span className="text-[11px] sm:text-xs text-slate-400 dark:text-zinc-500 block">Role</span>
                <span className="text-xs sm:text-sm font-bold truncate block">Full Stack Software Engineer</span>
              </div>
            </div>

            <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300 p-3 rounded-xl bg-slate-50 dark:bg-zinc-800/50 border border-slate-200/60 dark:border-zinc-700/50">
              <CheckCircle2 size={18} className="text-emerald-500 shrink-0" />
              <div className="min-w-0">
                <span className="text-[11px] sm:text-xs text-slate-400 dark:text-zinc-500 block">Status</span>
                <span className="text-xs sm:text-sm font-bold text-emerald-600 dark:text-emerald-400 truncate block">Available for Opportunities</span>
              </div>
            </div>

            <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300 p-3 rounded-xl bg-slate-50 dark:bg-zinc-800/50 border border-slate-200/60 dark:border-zinc-700/50">
              <MapPin size={18} className="text-cyan-500 shrink-0" />
              <div className="min-w-0">
                <span className="text-[11px] sm:text-xs text-slate-400 dark:text-zinc-500 block">Location</span>
                <span className="text-xs sm:text-sm font-bold truncate block">Karachi (Remote Worldwide)</span>
              </div>
            </div>

            <div className="flex items-center gap-3 text-slate-700 dark:text-slate-300 p-3 rounded-xl bg-slate-50 dark:bg-zinc-800/50 border border-slate-200/60 dark:border-zinc-700/50">
              <Phone size={18} className="text-cyan-500 shrink-0" />
              <div className="min-w-0">
                <span className="text-[11px] sm:text-xs text-slate-400 dark:text-zinc-500 block">Direct / WhatsApp</span>
                <Link
                  href="https://wa.me/923150757174"
                  target="_blank"
                  className="text-xs sm:text-sm font-bold hover:text-cyan-500 transition-colors truncate block"
                >
                  +92 315 0757174
                </Link>
              </div>
            </div>
          </div>

          {/* Interactive Email Bar */}
          <div className="w-full flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 p-2 rounded-2xl bg-slate-100 dark:bg-zinc-800/70 border border-slate-200/80 dark:border-zinc-700/70 mb-6 sm:mb-8">
            <div className="flex items-center gap-2.5 px-3 py-2 flex-1 min-w-0">
              <Mail size={16} className="text-cyan-500 shrink-0" />
              <span className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 truncate">
                {emailAddress}
              </span>
            </div>

            <div className="grid grid-cols-2 sm:flex sm:items-center gap-2 w-full sm:w-auto">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 sm:py-2 rounded-xl text-xs font-bold bg-white dark:bg-zinc-900 text-slate-700 dark:text-slate-200 hover:text-cyan-500 border border-slate-200 dark:border-zinc-700 hover:border-cyan-500/50 transition-all duration-200 active:scale-95"
              >
                {copied ? (
                  <>
                    <Check size={14} className="text-emerald-500" />
                    <span className="text-emerald-600 dark:text-emerald-400 font-bold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={14} />
                    <span>Copy</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${emailAddress}`}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 sm:py-2 rounded-xl text-xs font-bold bg-cyan-500 hover:bg-cyan-600 text-white shadow-sm transition-all duration-200 active:scale-95"
              >
                <Send size={13} />
                <span>Send Email</span>
              </a>
            </div>
          </div>

          {/* Social Profiles */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 border-t border-slate-100 dark:border-zinc-800/80 pt-5 sm:pt-6 w-full">
            <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500">
              Find me on:
            </span>
            <ul className="flex items-center gap-2.5 sm:gap-3">
              <li>
                <Link
                  href="https://www.linkedin.com/in/mirza-zain269/"
                  target="_blank"
                  aria-label="LinkedIn Profile"
                  className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-100 dark:bg-zinc-800/80 border border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-slate-300 hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-400 dark:hover:text-black hover:border-cyan-500 dark:hover:border-cyan-400 transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:shadow-cyan-500/20"
                >
                  <Linkedin size={16} />
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/mirza-zain"
                  target="_blank"
                  aria-label="GitHub Profile"
                  className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-100 dark:bg-zinc-800/80 border border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-slate-300 hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-400 dark:hover:text-black hover:border-cyan-500 dark:hover:border-cyan-400 transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:shadow-cyan-500/20"
                >
                  <Github size={16} />
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.instagram.com/mirza_zain43/"
                  target="_blank"
                  aria-label="Instagram Profile"
                  className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-100 dark:bg-zinc-800/80 border border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-slate-300 hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-400 dark:hover:text-black hover:border-cyan-500 dark:hover:border-cyan-400 transition-all duration-200 hover:-translate-y-1 hover:shadow-md hover:shadow-cyan-500/20"
                >
                  <Instagram size={16} />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Profile Image with Glow Ring */}
        <div className="w-full lg:w-1/3 flex justify-center items-center relative z-10 mb-2 lg:mb-0">
          <div className="relative group">
            <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-cyan-500 via-sky-400 to-blue-600 opacity-60 blur group-hover:opacity-100 transition duration-500"></div>
            <div className="relative p-1 rounded-full bg-white dark:bg-zinc-950">
              <Image
                src="/profileImage.jpg"
                className="rounded-full object-cover w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52"
                width={220}
                height={220}
                alt="Mirza Zain profile portrait"
                priority
              />
            </div>
            {/* Online indicator badge */}
            <div className="absolute bottom-1 right-2 sm:bottom-2 sm:right-4 px-2 py-0.5 rounded-full bg-zinc-950/90 border border-emerald-500/40 text-[10px] font-bold text-emerald-400 flex items-center gap-1.5 shadow-md">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Online</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactPage