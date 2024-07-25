import React from 'react';
import Lottie from 'lottie-react';
import face from '../animations/face.json';
import arrow from '../animations/arrow.json';
import resume from '../files/MirzaZain.pdf'; 

const About = () => {
    return (
        <div className='w-full h-screen flex flex-col md:flex-row'>
            <div className='w-full md:w-1/2 flex h-full bg-black'>
                <div className='bg-yellow-400 w-5 h-5 rounded-full'></div>
                <div className='bg-yellow-400 w-20 h-20 rounded-full'></div>
            </div>
            <div className='w-full md:w-1/2 bg-gray-500 h-full flex flex-col '>
                <Lottie animationData={face} className='w-full h-1/2 pt-4' />
                <a href={resume} className='px-8 py-3 font-bold text-lg rounded-md bg-yellow-400 mt-4 text-center' download>Resume</a>
                <Lottie animationData={arrow} className='w-full h-[40%]' />
            </div>
        </div>
    );
}

export default About;