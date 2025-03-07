import { Github, Instagram, Linkedin, MapPin } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const ContactPage = () => {
  return (
    <div id='contact' className="w-full h-full flex-1 flex flex-col justify-between items-start p-5 mt-5">
      <h2 className='text-2xl font-[PlaySir] underline decoration-electric p-2 mb-2 mt-3'>Reach Out To Me!</h2>
      <div className='w-full flex flex-col-reverse md:flex-row justify-between items-center'>
        <div className="w-full md:w-3/4 p-2">
          <p className='text-lg md:text-xl uppercase font-bold text-justify mx-2 mt-3'>Discuss a project or just want to say hi? My Inbox is open for all</p>
          <h3 className="text-xl m-2">Software Engineer | mirzazain269@gmail.com</h3>
          <p className="text-lg m-2">Open for opportunities: Yes</p>
          <p className='inline-flex text-lg m-2 gap-2'><MapPin /> Avaliable for Remote work</p>
           <ul className="flex justify-start items-center gap-10 text-2xl mt-4 mx-4">
              <li><Link href={"https://www.linkedin.com/in/mirza-zain269/"} target="__blank" ><Linkedin className="ease-in-out hover:text-electric" size={25} /></Link></li>
              <li><Link href={"https://github.com/mirza-zain"} target="__blank" ><Github className="ease-in-out hover:text-electric" size={25} /></Link></li>
              <li><Link href={"https://www.instagram.com/mirza_zain43/"} target="__blank" ><Instagram className="ease-in-out hover:text-electric" size={25} /></Link></li>
            </ul>
        </div>
        <div className='w-full md:w-1/4'>
          <Image src={'/profileImage.png'} className='rounded-full object-cover place-self-center border-2 border-electric shadow-glow-electric mt-2 mb-2' width={250} height={250} alt='profile image' />
        </div>
      </div>
    </div>
  )
}

export default ContactPage