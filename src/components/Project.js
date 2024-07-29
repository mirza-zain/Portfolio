import React from 'react';
import pro1 from '../images/pro1.png';

const Project = () => {
    return (
        <div className='w-full h-full bg-stone-200 pt-5'>
            <h2 className='text-3xl font-bold font-["Playwrite_AR"] text-center mb-5'>My Project Timeline</h2>
            <div className='flex flex-wrap flex-col md:flex-row p-4'>
                <div className='w-full h-full md:w-1/2 md:h-1/2 bg-stone-200 p-2'>
                    <img src={pro1} className='w-full h-full md:w-[80%] md:h-full object-cover' alt=''/>
                    <h3 className='text-xl text-gray-800 font-sans font-bold'>My Hero Academia Fan Web</h3>
                    <p className='text-xl font-sans font-medium '>Created with: React and Tailwind CSS</p>
                </div>
                <div className='w-full h-full md:w-1/2 md:h-1/2 bg-stone-200 p-2'>
                    <img src={pro1} className='w-full h-full md:w-[80%] md:h-full object-cover' alt=''/>
                    <h3 className='text-xl text-gray-800 font-sans font-bold'>Project 1</h3>
                    <p className='text-xl font-sans font-medium '>Created with: React and Tailwind CSS</p>
                </div>
                <div className='w-full h-full md:w-1/2 md:h-1/2 bg-stone-200 p-2'>
                    <img src={pro1} className='w-full h-full md:w-[80%] md:h-full object-cover' alt=''/>
                    <h3 className='text-xl text-gray-800 font-sans font-bold'>Project 1</h3>
                    <p className='text-xl font-sans font-medium '>Created with: React and Tailwind CSS</p>
                </div>
            </div>
        </div>
    );
};

export default Project;
