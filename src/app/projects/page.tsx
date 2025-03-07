import Link from 'next/link'
import React from 'react'


const ProjectPage = () => {
  const Project = [
    {
      'id': 1,
      'title': 'Resume Builder',
      'descripion': 'Create a free, user-friendly resume builder application using TypeScript to help users generate professional resumes effortlessly...',
      'skills': 'HTML5, CSS3 & TypeScript',
      'liveLink': 'https://freeeresumebuilder.vercel.app/',
      'gitLink': 'https://github.com/mirza-zain/Dynamic-Resume-Builder',
    },
    {
      "id": 2,
      'title': 'GearUpRental Car Service',
      'descripion': 'Built a responsive car rental frontend using Next.js for fast page loads and Tailwind CSS for modern, mobile-first design...',
      'skills': 'Next.js & Tailwind CSS',
      'liveLink': 'https://gearuprental.vercel.app/',
      'gitLink': 'https://github.com/mirza-zain/Car-Rental-Web',
    },
    {
      'id': 3,
      'title': 'Full Stack ToDo',
      'descripion': 'A dockerized full stack Todo App, that uses NODE Js Backend, a PostgreSQL Database, Prisma ORM and JWT Authentication...',
      'skills': 'Next Js, Prsima, Postegre, JWT Token & Express Js',
      'liveLink': 'https://github.com/mirza-zain/Full-Stack-TODO',
      'gitLink': 'https://github.com/mirza-zain/Full-Stack-TODO',
    },
    {
      'id': 4,
      'title': 'My Hero Academia Fan Page',
      'descripion': 'Built responsive fan page frontend using React Js for fast loads and Taiwind CSS for styling the web with modern styles, mobile friendly...',
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
              <Link key={projects.id} href={projects.gitLink} className="w-full md:w-[48%] flex flex-col justify-start items-start border-2 border-electric shadow-bottom-dark hover:shadow-glow-electric ease-in-out duration-300 p-4" target='_blank' >
                <h3 className='text-xl font-extrabold uppercase tracking-wider mb-2 underline decoration-electric'>{projects.title}</h3>
                <p className='text-lg text-justify mb-2'>{projects.descripion}</p>
                <div className='inline-flex gap-4'>
                  <h3 className='text-lg font-extrabold'>Skills Used: </h3>
                  <p className="text-lg gap-4">{projects.skills}</p>
                </div>
                <Link href={projects.liveLink} className='mt-5 px-6 py-2 bg-electric hover:bg-white text-white hover:text-black border-2 border-electric rounded-md hover:font-bold text-lg' target='_blank'>Live Link</Link>
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}

export default ProjectPage