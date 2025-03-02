'use client'
import Link from "next/link";
import Face from "./animations/facee.json"
import dynamic from "next/dynamic";
import { Instagram, Linkedin, Github } from "lucide-react"

export default function Home() {
  const Lottie = dynamic(() => import('lottie-react'), {ssr: false})

  return (
    <main className="w-full h-full flex flex-1 flex-col-reverse md:flex-row justify-center items-center mt-10">
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start m-5 p-5">
      {/* Main Heading */}
        <h1 className="text-3xl md:text-3xl lg:text-5xl font-[PlaySir] mt-5">Hi all, <span className="text-teal-700">I'm Zain</span> 👋🏻</h1>
      {/* Introduction  */}
        <p className="text-lg lg:text-xl text-justify mt-5">Front-end developer skilled in HTML5, CSS3, JavaScript (ES6+), React.js, and Next.js, pursuing a BS in
        Software Engineering at SMIU. Builds responsive, performant web apps with a focus on accessibility and
        modern design. Expanding expertise in Next.js (SSR/SSG) and backend fundamentals (Node.js, MongoDB).
        Collaborative problem-solver passionate about creating intuitive user experiences.
        </p>
       {/* Social Media Links */}
        <ul className="flex justify-center items-center gap-10 text-2xl mt-6">
          <li><Link href={"https://www.linkedin.com/in/mirza-zain269/"} target="__blank" ><Linkedin className="ease-in-out hover:text-teal-500" size={25} /></Link></li>
          <li><Link href={"https://github.com/mirza-zain"} target="__blank" ><Github className="ease-in-out hover:text-teal-500" size={25} /></Link></li>
          <li><Link href={"https://www.instagram.com/mirza_zain43/"} target="__blank" ><Instagram className="ease-in-out hover:text-teal-500" size={25} /></Link></li>
        </ul>
        {/* Download Resume Button */}
          <Link className="px-4 py-2 bg-teal-500 rounded-md mt-5 text-xl text-white" href={"/MirzaZain.pdf"} download>Download My Resume</Link>
      </div>
      <div className="w-full md:w-1/2">
      <Lottie animationData={Face} className="w-3/4 lg:w-3/5 place-self-center rounded-full border-2 border-teal-500" /></div>
    </main>
  );
}