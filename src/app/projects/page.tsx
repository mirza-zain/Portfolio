import Link from 'next/link'
import React from 'react'


const ProjectPage = () => {
  const Project = [
    {
      'id': 1,
      'title': 'Random Fashion E-Commerce Website',
      'description': 'Developed a responsive fashion e-commerce website with modern UI/UX. Implemented complete frontend in Next.js and Tailwind CSS. Integrated backend using PHP with MySQL...',
      'skills': 'Next.js, Tailwind CSS, PHP, MySQL',
      'liveLink': 'https://randomfashion.vercel.app/',
      'gitLink': 'https://github.com/mirza-zain/Shoes-E-Commerce-Web',
    },
    {
      'id': 2,
      'title': 'Resume Builder',
      'description': 'Create a free, user-friendly resume builder application using TypeScript to help users generate professional resumes effortlessly...',
      'skills': 'HTML5, CSS3 & TypeScript',
      'liveLink': 'https://freeeresumebuilder.vercel.app/',
      'gitLink': 'https://github.com/mirza-zain/Dynamic-Resume-Builder',
    },
    {
      "id": 3,
      'title': 'GearUpRental Car Service',
      'description': 'Built a responsive car rental frontend using Next.js for fast page loads and Tailwind CSS for modern, mobile-first design...',
      'skills': 'Next.js & Tailwind CSS',
      'liveLink': 'https://gearuprental.vercel.app/',
      'gitLink': 'https://github.com/mirza-zain/Car-Rental-Web',
    },
    {
      'id': 4,
      'title': 'My Hero Academia Fan Page',
      'description': 'Built responsive fan page frontend using React Js for fast loads and Tailwind CSS for styling the web with modern styles, mobile friendly...',
      'skills': 'React, Typescript & Tailwind CSS',
      'liveLink': 'https://myheroacademiaa.vercel.app/',
      'gitLink': 'https://github.com/mirza-zain/bnha-anime-web',
    },
  ]

  return (
    <div id='projects' className='w-full h-full flex-1 p-5'>
      <h2 className="text-3xl font-[PlaySir] mb-6 underline decoration-electric">Projects</h2>
      <div className="w-full flex flex-col md:flex-row justify-center items-center flex-wrap gap-5 mt-5">
        {
          Project.map(projects => {
            return (
              <div key={projects.id} className="w-full md:w-[48%] flex flex-col justify-start items-start border-2 border-electric shadow-bottom-dark hover:shadow-glow-electric ease-in-out duration-300 p-4">
                <h3 className='text-xl font-extrabold uppercase tracking-wider mb-2 underline decoration-electric'>{projects.title}</h3>
                <p className='text-lg text-justify mb-2'>{projects.description}</p>
                <div className='inline-flex gap-4'>
                  <h3 className='text-lg font-extrabold'>Skills Used: </h3>
                  <p className="text-lg gap-4">{projects.skills}</p>
                </div>
                <div className='flex gap-3 mt-5'>
                  <Link href={projects.liveLink} className='px-6 py-2 bg-electric hover:bg-white text-white hover:text-black border-2 border-electric rounded-md hover:font-bold text-lg' target='_blank'>Live Link</Link>
                  <Link href={projects.gitLink} className='px-6 py-2 bg-transparent hover:bg-electric text-electric hover:text-white border-2 border-electric rounded-md hover:font-bold text-lg' target='_blank'>GitHub</Link>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default ProjectPage