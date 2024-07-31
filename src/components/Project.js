import React from 'react';
import pro1 from '../images/pro1.png';
import pro2 from '../images/pro2.png';
import pro3 from '../images/pro3.png';
import pro4 from '../images/pro4.png';

const Project = () => {
  return (
    <div className='w-full h-full md:h-screen p-2 md:p-5'>
      <h2 className='text-[#E64833] text-3xl md:text-4xl font-bold font-["Playwrite_AR"] text-center md:text-start bg-[#FBE9D0] py-6 rounded-md'>My Project's</h2>
      <div className='flex flex-wrap justify-center p-0 md:p-4'>
        <div className='w-full md:w-[500px] relative p-2 bg-[#90AEAD]'>
          <img className='block w-full' src={pro1} alt='project' />
          <div className='absolute top-[60%] left-0 w-full h-full flex flex-col items-center justify-center text-black transition-opacity duration-300 opacity-0 hover:opacity-100'>
            <h4 className='text-2xl font-semibold'>My Hero Academia</h4>
            <p className='text-sm font-sans font-medium'>Created using React and Animation Library Lottie</p>
          </div>
        </div>
        <div className='w-full sm:w-[500px] relative p-2 bg-[#90AEAD]'>
          <img className='block w-full' src={pro2} alt='project' />
          <div className='absolute top-[60%] left-0 w-full h-full flex flex-col items-center justify-center text-black transition-opacity duration-300 opacity-0 hover:opacity-100'>
            <div className='text-2xl font-semibold'>Minions Page</div>
            <p className='text-sm font-sans font-medium'>Created using HTML5, CSS, JavaScript</p>
          </div>
        </div>
        <div className='w-full sm:w-[500px] relative p-2 bg-[#90AEAD]'>
          <img className='block w-full' src={pro3} alt='project' />
          <div className='absolute top-[60%] left-0 w-full h-full flex flex-col items-center justify-center text-black transition-opacity duration-300 opacity-0 hover:opacity-100'>
            <div className='text-2xl font-semibold'>Fibonacci Web</div>
            <p className='text-sm font-sans font-medium'>Created using HTML5 and CSS</p>
          </div>
        </div>
        <div className='w-full sm:w-[500px] relative p-2 bg-[#90AEAD]'>
          <img className='block w-full' src={pro4} alt='project' />
          <div className='absolute top-[60%] left-0 w-full h-full flex flex-col items-center justify-center text-black transition-opacity duration-300 opacity-0 hover:opacity-100'>
            <div className='text-2xl font-semibold'>Mondrina Art</div>
            <p className='text-sm font-sans font-medium'>Created using HTML5 and CSS</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;