import React from 'react';
import pro1 from '../images/pro1.png';

const Project = () => {
  return (
    <div className='w-full h-full md:h-screen p-3'>
      <h2 className='text-3xl md:text-4xl font-bold font-["Playwrite_AR"] text-center md:text-start bg-gray-300 py-2'>My Project's</h2>
      <div className='flex flex-wrap justify-center md:justify-start'>
        <div className='w-full sm:w-[400px] relative p-2'>
          <img className='block w-full' src={pro1} alt='project' />
          <div className='absolute top-[60%] left-0 w-full h-full flex flex-col items-center justify-center text-black transition-opacity duration-300 opacity-0 hover:opacity-100'>
            <div className='text-2xl font-semibold'>My Hero Academia</div>
            <p className='text-sm font-sans font-medium'>Created using React and Animation Library Lottie</p>
          </div>
        </div>
        <div className='w-full sm:w-[400px] relative p-2'>
          <img className='block w-full' src={pro1} alt='project' />
          <div className='absolute top-[60%] left-0 w-full h-full flex flex-col items-center justify-center text-black transition-opacity duration-300 opacity-0 hover:opacity-100'>
            <div className='text-2xl font-semibold'>My Hero Academia</div>
            <p className='text-sm font-sans font-medium'>Created using React and Animation Library Lottie</p>
          </div>
        </div>
        <div className='w-full sm:w-[400px] relative p-2'>
          <img className='block w-full' src={pro1} alt='project' />
          <div className='absolute top-[60%] left-0 w-full h-full flex flex-col items-center justify-center text-black transition-opacity duration-300 opacity-0 hover:opacity-100'>
            <div className='text-2xl font-semibold'>My Hero Academia</div>
            <p className='text-sm font-sans font-medium'>Created using React and Animation Library Lottie</p>
          </div>
        </div>
        <div className='w-full sm:w-[400px] relative p-2'>
          <img className='block w-full' src={pro1} alt='project' />
          <div className='absolute top-[60%] left-0 w-full h-full flex flex-col items-center justify-center text-black transition-opacity duration-300 opacity-0 hover:opacity-100'>
            <div className='text-2xl font-semibold'>My Hero Academia</div>
            <p className='text-sm font-sans font-medium'>Created using React and Animation Library Lottie</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;