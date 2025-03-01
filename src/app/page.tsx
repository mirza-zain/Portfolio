'use client'
import Link from "next/link";
import Face from "./animations/face.json"
import dynamic from "next/dynamic";
import { Instagram, Linkedin, Github } from "lucide-react"

export default function Home() {
  const Lottie = dynamic(() => import('lottie-react'), {ssr: false})

  return (
    <main className="w-full h-full flex-1 p-5 border-2 border-gray-500 flex justify-center items-center">
      <div className="w-full md:w-1/2 border border-red-400">
        <h1 className="">Hi all, I'm Zain 👋🏻</h1>
        <p></p>
        <ul>
          <li><Link href={"https://www.linkedin.com/in/mirza-zain269/"} target="__blank" ><Linkedin size={25} /></Link></li>
          <li><Link href={"https://github.com/mirza-zain"} target="__blank" ><Github size={25} /></Link></li>
          <li><Link href={"https://www.instagram.com/mirza_zain43/"} target="__blank" ><Instagram size={25} /></Link></li>
        </ul>
      </div>
      <div className="w-full md:w-1/2 border border-blue-600">
      <Lottie animationData={Face} className="w-3/5" /></div>
    </main>
  );
}
