'use client'
import Link from "next/link";
import Face from "./animations/facee.json"
import dynamic from "next/dynamic";
import { Instagram, Linkedin, Github } from "lucide-react"
import SkillsPage from "./skills/page";
import EducationPage from "./education/page";
import ProjectPage from "./projects/page";
import ContactPage from "./contact/page";

export default function Home() {
  const Lottie = dynamic(() => import('lottie-react'), {ssr: false})

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-12 md:py-20 flex flex-col-reverse md:flex-row justify-between items-center gap-10 md:gap-16">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start">
        {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-[PlaySir] tracking-tight text-slate-900 dark:text-white leading-tight">
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-500 bg-clip-text text-transparent font-extrabold">
              Zain
            </span>{" "}
            👋🏻
          </h1>
        {/* Introduction  */}
          <p className="text-base md:text-lg lg:text-xl text-slate-600 dark:text-slate-300 leading-relaxed mt-6 text-left">
            Collaborative Software Engineer delivering production-ready web and mobile solutions with a proven ability to lead project
            lifecycles from concept to deployment. Adept at bridging the gap between technical execution and client vision, fostering
            collaborative environments, and driving team-oriented problem solving. Focused on building responsive applications using
            the MERN stack, Next.js, and TypeScript, backed by an active portfolio of 60+ GitHub repositories and a strict commitment
            to clean code architecture.
          </p>
        {/* Social Media Links */}
          <ul className="flex items-center gap-4 mt-8">
            <li>
              <Link 
                href={"https://www.linkedin.com/in/mirza-zain269/"} 
                target="__blank" 
                className="flex items-center justify-center w-11 h-11 rounded-full bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-slate-300 hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-400 dark:hover:text-black hover:border-cyan-500 dark:hover:border-cyan-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-cyan-500/20"
              >
                <Linkedin size={20} />
              </Link>
            </li>
            <li>
              <Link 
                href={"https://github.com/mirza-zain"} 
                target="__blank"
                className="flex items-center justify-center w-11 h-11 rounded-full bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-slate-300 hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-400 dark:hover:text-black hover:border-cyan-500 dark:hover:border-cyan-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-cyan-500/20"
              >
                <Github size={20} />
              </Link>
            </li>
            <li>
              <Link 
                href={"https://www.instagram.com/mirza_zain43/"} 
                target="__blank"
                className="flex items-center justify-center w-11 h-11 rounded-full bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-slate-300 hover:bg-cyan-500 hover:text-white dark:hover:bg-cyan-400 dark:hover:text-black hover:border-cyan-500 dark:hover:border-cyan-400 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:shadow-cyan-500/20"
              >
                <Instagram size={20} />
              </Link>
            </li>
          </ul>
          {/* Download Resume Button */}
          <Link 
            className="inline-flex items-center justify-center px-6 py-3 mt-8 bg-gradient-to-r from-cyan-500 to-blue-500 dark:from-cyan-400 dark:to-blue-600 text-white font-semibold rounded-xl shadow-md shadow-cyan-500/10 hover:shadow-lg hover:shadow-cyan-500/20 hover:scale-105 active:scale-95 duration-200 transition-all text-base" 
            href={"/MirzaZain.pdf"} 
            download
          >
            Download My Resume
          </Link>
        </div>
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <Lottie 
            animationData={Face} 
            className="w-3/4 lg:w-3/5 rounded-full border-2 border-cyan-500 dark:border-cyan-400 shadow-[0_0_30px_rgba(6,182,212,0.2)] dark:shadow-[0_0_30px_rgba(6,182,212,0.45)] bg-slate-100 dark:bg-zinc-900/50 backdrop-blur-sm p-4 animate-float" 
          />
        </div>
      </div>
      <SkillsPage />
      <EducationPage />
      <ProjectPage />
      <ContactPage />
    </>
  );
}