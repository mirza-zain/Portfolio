import React from 'react'

const EducationPage = () => {
  return (
    <div className="w-full h-full flex-1 mt-5 p-5">
        <div>
            <h2 className="font-[PlaySir] text-3xl underline decoration-electric ">Education</h2>
            <h3 className="text-xl mt-5 font-bold">Sindh MadressaTul Islam University</h3>
            <div className='flex justify-between items-center mt-2'>
              <div>
                <span className='text-lg'>Bachelors of Software Engineering</span>
              </div>
              <div>
                <span className='text-lg'>Sep 2022 - July 2026</span>
              </div>
            </div>
          <h3 className='text-lg font-bold underline decoration-electric mt-5'>Relevant Coursework</h3>
          <ul className="list-disc p-5">
            <li>Object-Oriented Programming (OOP)</li>
            <li>Data Structure & Algorithm</li>
            <li>Databsae Systems</li>
            <li>Game Development</li>
            <li>Software Development Life Cycle (SDLC)</li>
          </ul>
        </div>

    </div>
  )
}

export default EducationPage