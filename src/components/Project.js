import React from 'react';
import pro1 from '../images/pro1.png';
import pro2 from '../images/pro2.png';
import pro3 from '../images/pro3.png';
import pro4 from '../images/pro4.png';

const Project = () => {
  return (
    <div className='w-full h-full p-2 md:p-5'>
      <h2 className='text-[#E64833] text-3xl md:text-4xl font-bold font-["Playwrite_AR"] text-center md:text-start bg-[#FBE9D0] py-6 rounded-md'>My Project's</h2>
      <div className='flex flex-col md:flex-row flex-wrap'>
        <div className='w-full h-full md:w-1/2 p-2 bg-[#90AEAD]'>
          <img className='w-full' src={pro1} alt='project' />
          <div className='w-full h-full md:w-1/2'>
            <h4 className='text-[#FBE9D0] text-2xl font-semibold'>My Hero Academia</h4>
            <p className='text-black text-sm font-sans font-medium'>Created using React and Animation Library Lottie</p>
          </div>
        </div>
        <div className='w-full h-full md:w-1/2 p-2 bg-[#90AEAD]'>
          <img className='w-full' src={pro2} alt='project' />
          <div className='w-full h-full md:w-1/2'>
            <h4 className='text-[#FBE9D0] text-2xl font-semibold'>Minions Web Page</h4>
            <p className='text-black text-sm font-sans font-medium'>Created using HTML5, CSS and JavaScript</p>
          </div>
        </div>
        <div className='w-full h-full md:w-1/2 p-2 bg-[#90AEAD]'>
          <img className='w-full' src={pro3} alt='project' />
          <div className='w-full h-full md:w-1/2'>
            <h4 className='text-[#FBE9D0] text-2xl font-semibold'>My Hero Academia</h4>
            <p className='text-black text-sm font-sans font-medium'>Created using React and Animation Library Lottie</p>
          </div>
        </div>
        <div className='w-full h-full md:w-1/2 p-2 bg-[#90AEAD]'>
          <img className='w-full' src={pro4} alt='project' />
          <div className='w-full h-full md:w-1/2'>
            <h4 className='text-[#FBE9D0] text-2xl font-semibold'>My Hero Academia</h4>
            <p className='text-black text-sm font-sans font-medium'>Created using React and Animation Library Lottie</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;