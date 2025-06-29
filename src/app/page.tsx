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
      <div className="w-full h-full flex-1 flex flex-col-reverse md:flex-row justify-center items-center mt-10 mb-10">
        <div className="w-full md:w-1/2 flex flex-col justify-center items-start m-5 p-5">
        {/* Main Heading */}
          <h1 className="text-3xl md:text-3xl lg:text-5xl font-[PlaySir] mt-5">Hi all, <span className="text-electric">I&apos;m Zain</span> 👋🏻</h1>
        {/* Introduction  */}
          <p className="text-lg lg:text-xl text-justify mt-5">Front-end developer with strong foundational skills in HTML5, CSS3, JavaScript (ES6+), and React.js. 
            Currently pursuing a BSc in Software Engineering at Sindh Madressatul Islam University. 
            Skilled in building responsive, accessible, and user-centric web applications. 
            Gaining hands-on experience with full-stack development using Next.js, Node.js, PHP, SQL and MongoDB. 
            Passionate about intuitive design and solving real-world problems through clean, scalable code
          </p>
        {/* Social Media Links */}
          <ul className="flex justify-center items-center gap-10 text-2xl mt-6">
            <li><Link href={"https://www.linkedin.com/in/mirza-zain269/"} target="__blank" ><Linkedin className="ease-in-out hover:text-electric" size={25} /></Link></li>
            <li><Link href={"https://github.com/mirza-zain"} target="__blank" ><Github className="ease-in-out hover:text-electric" size={25} /></Link></li>
            <li><Link href={"https://www.instagram.com/mirza_zain43/"} target="__blank" ><Instagram className="ease-in-out hover:text-electric" size={25} /></Link></li>
          </ul>
          {/* Download Resume Button */}
            <Link className="px-4 py-2 bg-electric rounded-md mt-5 text-xl text-white" href={"/MirzaZain.pdf"} download>Download My Resume</Link>
        </div>
        <div className="w-full md:w-1/2">
          <Lottie animationData={Face} className="w-3/4 lg:w-3/5 place-self-center rounded-full border-2 border-electric shadow-glow-electric" />
        </div>
      </div>
      <SkillsPage />
      <EducationPage />
      <ProjectPage />
      <ContactPage />
    </>
  );
}