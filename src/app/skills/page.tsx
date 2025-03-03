'use client'

import dynamic from 'next/dynamic'
import Cat from "../animations/cat.json"
import React from 'react'

const SkillsPage = () => {
  const Lottie = dynamic(() => import('lottie-react'), {ssr: false} )
  const skills = [
    {
      id: 1,
      'name': 'HTML 5',
      'attribute': 'html5'
    },
    {
      id: 2,
      'name': 'CSS',
      'attribute': 'css3'
    },
    {
      id: 3,
      'name': 'Tailwind CSS',
      'attribute': 'tailwind-css'
    },
    {
      id: 4,
      'name': 'JavaScript',
      'attribute': 'javascript'
    },
    {
      id: 5,
      'name': 'TypeScript',
      'attribute': 'javascript'
    },
    {
      id: 6,
      'name': 'React JS',
      'attribute': 'reactjs'
    },
    {
      id: 7,
      'name': 'Next JS',
      'attribute': 'nextjs'
    },
    {
      id: 8,
      'name': 'Node JS',
      'attribute': 'nodejs'
    },
    {
      id: 9,
      'name': 'Npm JS',
      'attribute': 'npmjs'
    },
    {
      id: 10,
      'name': 'SQL Database',
      'attribute': 'database-2'
    },
    {
      id: 11,
      'name': 'PHP',
      'attribute': 'php'
    },
  ]

  return (
    <div className="w-full h-full flex-1 flex flex-col md:flex-row justify-center items-center p-5">
       <div className='w-full md:w-1/2'>
          <Lottie animationData={Cat} className="w-full md:w-4/5 place-self-center" />
       </div>
       <div className='w-full md:w-1/2'>
          <h2 className='font-[PlaySir] font-bold text-2xl underline decoration-electric'>What I do</h2>
          <p className="text-xl font-bold mt-7 uppercase text-justify">crazy developer who loves exploring tech 😁</p>
          <div className='flex justify-start items-center flex-wrap gap-5 pt-5'>
            {
              skills.map(skill => {
                return (
                  <div key={skill.id} className='flex flex-col justify-center items-center m-2'>
                    <i className={"text-2xl hover:text-electric ease-in-out duration-700 cursor-pointer " + `ri-${skill.attribute}-fill`}></i> 
                    <pre className='text-lg'>{skill.name}</pre>
                  </div>
                )
              })
            }
          </div>
       </div> 
    </div>
  )
}

export default SkillsPage