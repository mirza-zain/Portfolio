import React from 'react';
import pro1 from '../images/pro1.png';

const Project = () => {
  return (
    <div className='w-full h-full bg-stone-600'>
        <h2 className='text-center text-3xl p-3 font-bold font-["Playwrite_AR"]'>My Project's</h2>
        <div className='w-full h-full flex gap-2 flex-wrap p-5'>
            <div className='w-1/2 h-1/2 bg-zinc-500'>
                <img className='w-1/2 h-1/2 object-cover' src={pro1} alt='project' />
            </div>
            {/* <div className='bg-zinc-500 w-1/2 h-1/2'>
                <img className='w-[80%] h-[80%] object-cover' src={pro1} alt='project' />
            </div>
            <div className='bg-zinc-500 w-1/2 h-1/2'>
                <img className='w-[80%] h-[80%] object-cover' src={pro1} alt='project' />
            </div>
            <div className='bg-zinc-500 w-1/2 h-1/2'>
                <img className='w-[80%] h-[80%] object-cover' src={pro1} alt='project' />
            </div> */}
        </div>
    </div>
  )
}

export default Project
